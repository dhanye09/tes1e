import Heading from '@/components/Heading';
import ShareLinkButton from '@/components/ShareLinkButton';
import { getReview, getSlugs } from '@/lib/reviews';

export async function generateStaticParams() {
  const slugs = await getSlugs();
  return slugs.map((slug)=>({slug}));
}

export async function generateMetadata({params: {slug}}) {
  const review = await getReview(slug);
  return {
    title: review.title
  };
}

export default async function ReviewPage({params: {slug}}) {
    const review = await getReview(slug);
    

  return (
    <>
      <Heading>{review.title}</Heading>
      <div className='flex gap-3 items-baseline'>
        <p className='italic'>{review.date}</p>
        <ShareLinkButton /> 
      </div>
      <img src={review.image} width="640" height="360" className='mb-2 rounded' />
      <article dangerouslySetInnerHTML={{__html: review.text1b}} className='max-w-screen-sm prose prose-slate' />
    </>
  );
}