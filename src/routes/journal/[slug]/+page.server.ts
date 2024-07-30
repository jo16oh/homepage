/** @type {import('./$types').EntryGenerator} */
export function entries() {
	return [{ slug: 'test' }];
}

export async function load({ params }: { params: { slug: string } }) {
	return {
		slug: params.slug
	};
}
