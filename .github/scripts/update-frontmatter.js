import matter from 'gray-matter';
import * as fs from 'node:fs';
import * as path from 'node:path';
const mdPath = process.argv[2];

if (path.extname(mdPath) !== '.md') throw new Error('provided file is not md');

const fileContent = fs.readFileSync(mdPath, 'utf-8');
const parsedContent = matter(fileContent);

const currentDate = new Date().toISOString();

// Set the created_at field if it doesn't exist
if (!parsedContent.data.created_at) {
	parsedContent.data.created_at = currentDate;
}

// Update the updated_at field
parsedContent.data.updated_at = currentDate;

const updatedContent = matter.stringify(parsedContent.content, parsedContent.data);
fs.writeFileSync(mdPath, updatedContent, 'utf-8');
