import Link from 'next/link';
import { getAllWorks } from '@/lib/blog';

export const metadata = {
  title: 'Works - luckyzz.kr',
  description: 'Selected works and projects',
};

export default function WorksPage() {
  const works = getAllWorks();

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 min-h-[calc(100vh-5rem)]">
      <h1 className="text-5xl font-medium mb-4">Works</h1>
      <p className="text-gray-600 mb-16">Selected works and projects.</p>

      {works.length > 0 ? (
        <div className="space-y-12">
          {works.map((work) => (
            <Link
              key={work.slug}
              href={`/works/${work.slug}`}
              className="block border-0 group"
            >
              <article className="border-t border-black pt-8 pb-8 transition-all group-hover:pl-4">
                <div className="flex justify-between items-baseline mb-4">
                  <h2 className="text-3xl font-medium">{work.title}</h2>
                  <time className="text-sm text-gray-600">{work.date}</time>
                </div>
                {work.description && (
                  <p className="text-gray-600 mb-4 text-lg">{work.description}</p>
                )}
                {work.tags && work.tags.length > 0 && (
                  <div className="flex gap-3 flex-wrap">
                    {work.tags.map((tag) => (
                      <span key={tag} className="text-sm text-gray-500">
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </article>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-gray-600">
            No works yet. Add markdown files to /content/works to get started.
          </p>
        </div>
      )}
    </div>
  );
}
