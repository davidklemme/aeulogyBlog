import { copy } from '../../../content/copy/00002';
import { topics } from '../../../content/topics';

export type Params = {
	title: string;
	description: string;
	slug: string;
};

/** @type {import('./$types').PageLoad} */
export function load({ params }: { params: Params }) {
	const topic = topics.find((topic) => topic.id === params.slug);

	return {
		topic,
		copy
	};
}
