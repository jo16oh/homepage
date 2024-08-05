import { marked } from 'marked';
import type { MarkedExtension } from 'marked';

const extension: MarkedExtension = {
  useNewRenderer: true,
  renderer: {
    heading(token) {
      const text = this.parser.parseInline(token.tokens);
      const level = token.depth;
      const common = 'text-white font-main font-bold py-1 mt-8 border-b-2 my-6 w-fit';

      if (level === 1) {
        return `<h1 class="text-3xl  ${common}">${text}</h1>`;
      } else if (level === 2) {
        return `<h2 class="text-2xl ${common}">${text}</h2>`;
      } else if (level === 3) {
        return `<h3 class="text-xl ${common}">${text}</h3>`;
      } else if (level === 4) {
        return `<h4 class="text-lg ${common}">${text}</h4>`;
      } else if (level === 5) {
        return `<h5 class="text-base ${common}">${text}</h5>`;
      } else if (level === 6) {
        return `<h6 class="text-sm ${common}">${text}</h6>`;
      } else {
        return ``;
      }
    },
    paragraph(token) {
      const text = this.parser.parseInline(token.tokens);
      return `<p class='text-white text-base leading-7 font-main pb-5 break-words text-justify'>${text}</p>`;
    },
    link(token) {
      return `<a href=${token.href} class="text-sky-300 hover:underline">${token.text}</a>`;
    },
    code(token) {
      return `<pre class="text-white bg-gray-800/40 rounded-lg p-4 font-mono"><code>${token.text}</code></pre>`;
    },
    codespan(token) {
      return `<code class="text-white bg-gray-800/40 rounded-md px-2 py-1 font-mono">${token.text}</code>`;
    }
  }
};

marked.use(extension);

export function parse(md: string): string {
  return marked.parse(md) as string;
}
