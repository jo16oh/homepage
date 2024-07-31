import * as fs from 'node:fs';
import * as path from 'node:path';
import matter from 'gray-matter';

export type MarkdownDocument = {
	fileName: string;
	title: string;
	created_at: Date;
	updated_at: Date;
	prev: string | null;
	next: string | null;
	frontmatter: {
		[key: string]: string;
	};
	content: string;
};

type MarkdownRetriever = {
	journal: Map<string, MarkdownDocument>;
	blog: Map<string, MarkdownDocument>;
};

const journals: MarkdownDocument[] = fs
	.readdirSync('assets/journal')
	.map((file) => {
		const data = fs.readFileSync(path.resolve('assets/journal', file), 'utf8');
		const doc = matter(data);

		if (!doc.data.created_at || !doc.data.updated_at) throw new Error('timestamp not found!');
		const fileName = file.slice(0, file.length - 3);

		const { title, created_at, updated_at, ...metadata } = doc.data;

		return {
			fileName: fileName,
			title: fileName,
			created_at: new Date(doc.data.created_at as string),
			updated_at: new Date(doc.data.updated_at as string),
			frontmatter: {
				...metadata
			},
			content: doc.content
		};
	})
	.sort((a, b) => a.created_at.getTime() - b.created_at.getTime())
	.map((e, index, array) => {
		const prev = array[index - 1]?.fileName || null;
		const next = array[index + 1]?.fileName || null;
		return {
			...e,
			prev: prev,
			next: next
		};
	});

const blogs: MarkdownDocument[] = fs
	.readdirSync('assets/blog')
	.map((file) => {
		const data = fs.readFileSync(path.resolve('assets/blog', file), 'utf8');
		const doc = matter(data);

		if (!doc.data.created_at || !doc.data.updated_at) throw new Error('timestamp not found!');
		if (!doc.data.tite) throw new Error('no title specified!');

		const { title, created_at, updated_at, ...metadata } = doc.data;

		return {
			fileName: file.slice(0, file.length - 3),
			title: doc.data.title,
			created_at: new Date(doc.data.created_at as string),
			updated_at: new Date(doc.data.updated_at as string),
			frontmatter: {
				...metadata
			},
			content: doc.content
		};
	})
	.sort((a, b) => a.created_at.getTime() - b.created_at.getTime())
	.map((e, index, array) => {
		const prev = array[index - 1]?.fileName || null;
		const next = array[index + 1]?.fileName || null;
		return {
			...e,
			prev: prev,
			next: next
		};
	});

const blogMap = new Map<string, MarkdownDocument>();
for (const i of blogs) {
	blogMap.set(i.fileName, i);
}

const journalMap = new Map<string, MarkdownDocument>();
for (const i of journals) {
	journalMap.set(i.fileName, i);
}

export const MarkdownRetriever: MarkdownRetriever = {
	blog: blogMap,
	journal: journalMap
};
