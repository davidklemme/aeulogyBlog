import { copy } from '../../../content/copy/00002';

export type Params = {
	headline: string;
	content: { content: string; subtitle: string }[];
	category: string;
	date: string;
	id: string;
	slug: string;
};

/** @type {import('./$types').PageLoad} */
export function load({ params }: { params: Params }) {
	const article = copy.find((article) => article.id === params.slug);
	return {
		id: article?.id,
		date: article?.date,
		headline: article?.headline,
		category: article?.category,
		content: article?.content
	};
}
