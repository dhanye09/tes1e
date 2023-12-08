import Link from 'next/link';
import Heading from '@/components/Heading';
import { listReview } from '@/lib/reviews';

export const metadata = {
  title: 'Reviews'
};

export default async function ReviewsPage() {
  const list1 = await listReview();

  return (
    <>
      <Heading>Reviews</Heading>
      <ul className="flex flex-row gap-3 flex-wrap">
        {list1.map((review)=> (
            <li key={review.slug} className="bg-white border rounded shadow w-80 hover:shadow-xl">
            <Link href={`/reviews/${review.slug}`}>
              <img src={review.image} alt=""
                width="320" height="180" className="rounded-t"
              />
              <h2 className="py-1 text-center">
                {review.title}
              </h2>
            </Link>
            </li>
          )
        )}
        
      </ul>
    </>
  );
}
