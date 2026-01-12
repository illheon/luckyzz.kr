import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getPostBySlug, getAllPosts } from '@/lib/blog';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} - luckyzz.kr`,
    description: post.excerpt || post.title,
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-16 min-h-[calc(100vh-5rem)]">
      <Link href="/blog" className="text-sm mb-8 inline-block">
        ← Back to Blog
      </Link>

      <article>
        <header className="mb-12 pb-8 border-b border-black">
          <h1 className="text-4xl font-medium mb-4">{post.title}</h1>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <time>{post.date}</time>
            {post.tags && post.tags.length > 0 && (
              <>
                <span>•</span>
                <div className="flex gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag}>#{tag}</span>
                  ))}
                </div>
              </>
            )}
          </div>
        </header>

        <div
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content || '' }}
        />
      </article>
    </div>
  );
}
