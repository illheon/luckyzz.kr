import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getWorkBySlug, getAllWorks } from '@/lib/blog';

export async function generateStaticParams() {
  const works = getAllWorks();
  return works.map((work) => ({
    slug: work.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const work = await getWorkBySlug(slug);

  if (!work) {
    return {
      title: 'Work Not Found',
    };
  }

  return {
    title: `${work.title} - luckyzz.kr`,
    description: work.description || work.title,
  };
}

export default async function WorkDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const work = await getWorkBySlug(slug);

  if (!work) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-16 min-h-[calc(100vh-5rem)]">
      <Link href="/works" className="text-sm mb-8 inline-block">
        ← Back to Works
      </Link>

      <article>
        <header className="mb-12 pb-8 border-b border-black">
          <h1 className="text-4xl font-medium mb-4">{work.title}</h1>
          <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
            <time>{work.date}</time>
            {work.tags && work.tags.length > 0 && (
              <>
                <span>•</span>
                <div className="flex gap-2">
                  {work.tags.map((tag) => (
                    <span key={tag}>#{tag}</span>
                  ))}
                </div>
              </>
            )}
          </div>
          {work.description && (
            <p className="text-xl text-gray-600">{work.description}</p>
          )}
          {work.link && (
            <a
              href={work.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-sm"
            >
              View Project →
            </a>
          )}
        </header>

        <div
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: work.content || '' }}
        />
      </article>
    </div>
  );
}
