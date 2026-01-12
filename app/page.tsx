import Link from 'next/link';
import { getAllPosts, getAllWorks } from '@/lib/blog';

export default function Home() {
  const recentPosts = getAllPosts().slice(0, 3);
  const recentWorks = getAllWorks().slice(0, 3);

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 min-h-[calc(100vh-5rem)]">
      {/* Hero Section */}
      <section className="mb-24 pt-16">
        <h1 className="text-6xl font-medium mb-6 leading-tight">
          luckyzz
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
          Designer, Developer, Creator.
          <br />
          Minimal design with maximum impact.
        </p>
      </section>

      {/* Recent Works */}
      {recentWorks.length > 0 && (
        <section className="mb-24">
          <div className="flex justify-between items-baseline mb-8">
            <h2 className="text-3xl font-medium">Recent Works</h2>
            <Link href="/works" className="text-sm">
              View all →
            </Link>
          </div>
          <div className="grid gap-8">
            {recentWorks.map((work) => (
              <Link
                key={work.slug}
                href={`/works/${work.slug}`}
                className="group block border-0"
              >
                <div className="border-t border-black pt-4 pb-4 transition-all group-hover:pl-4">
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="text-xl font-medium">{work.title}</h3>
                    <span className="text-sm text-gray-600">{work.date}</span>
                  </div>
                  {work.description && (
                    <p className="text-gray-600">{work.description}</p>
                  )}
                  {work.tags && work.tags.length > 0 && (
                    <div className="flex gap-2 mt-2">
                      {work.tags.map((tag) => (
                        <span key={tag} className="text-xs text-gray-500">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Recent Blog Posts */}
      {recentPosts.length > 0 && (
        <section className="mb-24">
          <div className="flex justify-between items-baseline mb-8">
            <h2 className="text-3xl font-medium">Recent Posts</h2>
            <Link href="/blog" className="text-sm">
              View all →
            </Link>
          </div>
          <div className="grid gap-6">
            {recentPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block border-0"
              >
                <div className="border-t border-black pt-4 pb-4 transition-all group-hover:pl-4">
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="text-lg font-medium">{post.title}</h3>
                    <span className="text-sm text-gray-600">{post.date}</span>
                  </div>
                  {post.excerpt && (
                    <p className="text-gray-600 text-sm">{post.excerpt}</p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Empty state if no content */}
      {recentWorks.length === 0 && recentPosts.length === 0 && (
        <section className="text-center py-16">
          <p className="text-gray-600 mb-8">
            Content coming soon. Add markdown files to /content/blog and /content/works to get started.
          </p>
        </section>
      )}
    </div>
  );
}
