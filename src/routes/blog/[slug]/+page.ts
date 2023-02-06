import { copy } from '../../../content/copy/00002';

export type Params = { title: string; content: string; slug: string };

/** @type {import('./$types').PageLoad} */
export function load({ params }: { params: Params }) {
	const article = copy.find((article) => article.id === params.slug);
	console.log(article, params.slug);
	return {
		id: article?.id,
		date: article?.date,
		headline: article?.headline,
		content: article?.content
	};
}
