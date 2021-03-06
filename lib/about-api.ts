import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

// --- About ---

const aboutsDirectory = join(process.cwd(), '_abouts');

export function getAboutSlugs() {
	return fs.readdirSync(aboutsDirectory);
}

export function getAboutBySlug(slug: string, fields: string[] = []) {
	const realSlug = slug.replace(/\.md$/, '');
	const fullPath = join(aboutsDirectory, `${realSlug}.md`);
	const fileContents = fs.readFileSync(fullPath, 'utf8');
	const { data, content } = matter(fileContents);

	type Items = {
		[key: string]: string;
	};

	const items: Items = {};

	// Ensure only the minimal needed data is exposed
	fields.forEach(field => {
		if (field === 'slug') {
			items[field] = realSlug;
		}
		if (field === 'content') {
			items[field] = content;
		}

		if (data[field]) {
			items[field] = data[field];
		}
	});

	return items;
}

export function getAllAbouts(fields: string[] = []) {
	const slugs = getAboutSlugs();
	const abouts = slugs
		.map(slug => getAboutBySlug(slug, fields))
		// sort posts by date in descending order
		.sort((about1, about2) => (about1.date > about2.date ? -1 : 1));
	return abouts;
}
