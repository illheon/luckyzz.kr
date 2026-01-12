import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';

export const metadata = {
  title: 'Blog - luckyzz.kr',
  description: 'Thoughts, ideas, and writings',
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 min-h-[calc(100vh-5rem)]">
      <h1 className="text-5xl font-medium mb-4">Blog</h1>
      <p className="text-gray-600 mb-16">Thoughts, ideas, and writings.</p>

      {posts.length > 0 ? (
        <div className="space-y-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block border-0 group"
            >
              <article className="border-t border-black pt-6 pb-6 transition-all group-hover:pl-4">
                <div className="flex justify-between items-baseline mb-3">
                  <h2 className="text-2xl font-medium">{post.title}</h2>
                  <time className="text-sm text-gray-600">{post.date}</time>
                </div>
                {post.excerpt && (
                  <p className="text-gray-600 mb-3">{post.excerpt}</p>
                )}
                {post.tags && post.tags.length > 0 && (
                  <div className="flex gap-2 flex-wrap">
                    {post.tags.map((tag) => (
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
            No posts yet. Add markdown files to /content/blog to get started.
          </p>
        </div>
      )}
    </div>
  );
}
