import { marked } from 'marked';

const renderer = new marked.Renderer();

renderer.paragraph = (text) => {
	return `<p class='text-white text-base leading-7 indent-4 font-main pb-5 break-words text-justify'>${text}</p>`;
};

marked.use({
	renderer
});

export function parse(md: string): string {
	return marked.parse(md) as string;
}
