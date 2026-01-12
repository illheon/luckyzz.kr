import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-black">
      <nav className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-medium border-0 hover:opacity-60">
            luckyzz.kr
          </Link>
          <div className="flex gap-8">
            <Link href="/works" className="border-0 hover:opacity-60 transition-opacity">
              Works
            </Link>
            <Link href="/blog" className="border-0 hover:opacity-60 transition-opacity">
              Blog
            </Link>
            <Link href="/about" className="border-0 hover:opacity-60 transition-opacity">
              About
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
