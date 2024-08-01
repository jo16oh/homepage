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
		if (!doc.data.title) throw new Error('no title specified!');

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

export const journalListDesc = groupByMonth(journals);

function groupByMonth(docs: MarkdownDocument[]): { month: string; docs: MarkdownDocument[] }[] {
	const grouped: { [key: string]: MarkdownDocument[] } = {};

	docs.forEach((obj) => {
		const month =
			obj.created_at.getFullYear() +
			'-' +
			(obj.created_at.getMonth() + 1).toString().padStart(2, '0');

		if (!grouped[month]) {
			grouped[month] = [];
		}

		grouped[month].push(obj);
	});

	// オブジェクトを配列に変換
	const groupedArray: { month: string; docs: MarkdownDocument[] }[] = Object.keys(grouped)
		.map((month) => {
			return {
				month,
				docs: grouped[month]
			};
		})
		.map((i) => {
			const docs = i.docs.sort((a, b) => b.created_at.getTime() - a.created_at.getTime());

			return {
				month: i.month,
				docs
			};
		});

	// 月ごとに降順にソート
	groupedArray.sort((a, b) => b.month.localeCompare(a.month));

	return groupedArray.map((i) => {
		const date = new Date(`${i.month}-01`);
		const options = { year: 'numeric', month: 'long' };
		const formatter = new Intl.DateTimeFormat('en-US', options);
		const formatted = formatter.format(date).split(' ').join(', ');

		return {
			month: formatted,
			docs: i.docs
		};
	});
}
