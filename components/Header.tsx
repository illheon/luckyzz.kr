import Link from 'next/link';

export default function Header() {
  return (
    <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-50 hidden md:block">
      <div className="flex flex-col gap-8 text-sm">
        <Link
          href="/"
          className="border-0 hover:opacity-60 transition-opacity -rotate-90 origin-center whitespace-nowrap"
        >
          luckyzz.kr
        </Link>
        <Link
          href="/works"
          className="border-0 hover:opacity-60 transition-opacity -rotate-90 origin-center"
        >
          Works
        </Link>
        <Link
          href="/blog"
          className="border-0 hover:opacity-60 transition-opacity -rotate-90 origin-center"
        >
          Blog
        </Link>
        <Link
          href="/about"
          className="border-0 hover:opacity-60 transition-opacity -rotate-90 origin-center"
        >
          About
        </Link>
      </div>
    </nav>
  );
}
