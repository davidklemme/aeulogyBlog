import { copy } from '../../../content/copy/00002';
import { Client } from '@notionhq/client';

export type Params = {
	headline: string;
	content: { content: string; subtitle: string }[];
	category: string;
	date: string;
	id: string;
	slug: string;
};
const splitter = '#####';
const subSplitter = '$$$$$';

/** @type {import('./$types').PageLoad} */
export async function load({ params }: { params: Params }) {
	if (params.slug === 'latest') {
		const article = copy.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0];
		return {
			id: article?.id,
			date: article?.date,
			headline: article?.headline,
			category: article?.category,
			content: article?.content
		};
	}
	const notion = new Client({
		auth: process.env.NOTION_API_KEY
	});
	const notionArticles = await notion.databases.query({
		database_id: process.env.NOTION_BLOG_DB_ID || '',
		filter: {
			property: 'Topic',
			select: {
				equals: 'Blog'
			}
		},
		sorts: [
			{
				timestamp: 'created_time',
				direction: 'descending'
			}
		]
	});
	if (!notionArticles) return;
	const articles = await Promise.all(
		notionArticles?.results?.map(async (article, index) => {
			const page: any = await notion.pages.retrieve({ page_id: article.id });

			if (page.properties?.Status?.status?.name !== 'Done') return;
			const date = page.properties['End Date']?.date?.start;

			if (!date) return;
			const headline = page.properties?.Name?.title[0]?.plain_text;

			const category = page.properties['Blog Category']?.select?.name;
			let articleContent = '';

			const blocks = await notion.blocks.children.list({ block_id: page.id });

			if (process.env.NODE_ENV === 'development')
				console.log('old array length: ', blocks?.results?.length);
			//Find the headline which marks the start of the article
			const content = blocks.results.slice(
				blocks.results.findIndex(
					(block: any) =>
						block.type === 'heading_1' && block.heading_1?.rich_text[0]?.plain_text === 'Article'
				) + 1
			);
			if (content?.length < 2) return;
			if (process.env.NODE_ENV === 'development')
				console.log('new array length: ', content?.length);

			content.forEach((it: any) => {
				if (it[it.type]?.rich_text?.length > 0) {
					if (it.type === 'heading_2') {
						articleContent += `${splitter}${it[it.type]?.rich_text[0]?.plain_text}${subSplitter}`;
					} else {
						articleContent += `${it[it.type]?.rich_text[0]?.plain_text}`;
					}
				}
			});
			return { headline, date, content: articleContent, category, id: index };
		})
	);
	const filteredArticles = prepareContent(articles.filter((article) => article !== undefined));

	const article = filteredArticles?.find((article) => article?.id.toString() === params.slug);
	return {
		id: article?.id,
		date: article?.date,
		headline: article?.headline,
		category: article?.category,
		content: article?.content
	};
}

const prepareContent = (
	data:
		| (
				| {
						headline: string;
						date: string;
						content: string;
						category: string;
						id: number;
				  }
				| undefined
		  )[]
) => {
	if (!data) return;
	let subtitle;
	let content;
	return data.map((it: any) => {
		it.content = it.content
			.split(splitter)
			.map((sub: string) => {
				const cache = sub.split(subSplitter);
				content = cache[1];
				subtitle = cache[0];
				if (!subtitle) return;
				return { content, subtitle };
			})
			.filter((it: any) => it?.subtitle !== undefined);
		return it;
	});
};
