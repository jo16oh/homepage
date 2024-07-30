import matter from 'gray-matter';
import * as fs from 'node:fs';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const directoryPath = path.join(__dirname, '../../assets/journal');

fs.readdir(directoryPath, (err, files) => {
	if (err) {
		return console.log('Unable to scan directory: ' + err);
	}

	files.forEach((file) => {
		if (path.extname(file) === '.md') {
			const filePath = path.join(directoryPath, file);
			const fileContent = fs.readFileSync(filePath, 'utf-8');
			const parsedContent = matter(fileContent);

			const currentDate = new Date().toISOString();

			// Set the created_at field if it doesn't exist
			console.log(parsedContent.data.created_at)
			if (!parsedContent.data.created_at) {
				parsedContent.data.created_at = currentDate;
			}

			// Update the updated_at field
			parsedContent.data.updated_at = currentDate;

			const updatedContent = matter.stringify(parsedContent.content, parsedContent.data);
			fs.writeFileSync(filePath, updatedContent, 'utf-8');
		}
	});
});
