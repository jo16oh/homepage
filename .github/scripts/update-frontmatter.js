import matter from 'gray-matter';
import * as fs from 'node:fs';
const path = process.argv[2];

const fileContent = fs.readFileSync(path, 'utf-8');
const parsedContent = matter(fileContent);

const currentDate = new Date().toISOString();

// Set the created_at field if it doesn't exist
console.log(parsedContent.data.created_at);
if (!parsedContent.data.created_at) {
	parsedContent.data.created_at = currentDate;
}

// Update the updated_at field
parsedContent.data.updated_at = currentDate;

const updatedContent = matter.stringify(parsedContent.content, parsedContent.data);
fs.writeFileSync(path, updatedContent, 'utf-8');
