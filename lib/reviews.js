import { readdir, readFile} from 'node:fs/promises';
import { marked } from 'marked';
import matter from 'gray-matter';

export async function getFeaturedReview() {
    const reviews = await listReview();
    return reviews[0];
}

export async function getReview(slug) {
    const text1 = await readFile(`./content/reviews/${slug}.md`,'utf-8');
    const {content,data:{title,date, image}} = matter(text1);
    const text1b = marked(content);
    return {slug,title,date,image,text1b};
}

export async function listReview() {
    const slug1 = await getSlugs();
    const list2=[];
    for (const slug of slug1) {
        const review = await getReview(slug);
        list2.push(review);
    }
    list2.sort((a,b)=>b.date.localeCompare(a.date));
    return list2;
}

export async function getSlugs() {
    const file1 = await readdir('./content/reviews');
    return file1.filter((file)=>file.endsWith('.md'))
        .map((file)=>file.slice(0,-'.md'.length));
}