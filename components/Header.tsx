import Link from 'next/link';

export default function Header() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-sm tracking-tight border-0 hover:opacity-50 transition-opacity"
          >
            luckyzz.kr
          </Link>
          <div className="flex gap-8 text-sm">
            <Link
              href="/thinking"
              className="border-0 hover:opacity-50 transition-opacity"
            >
              Thinking
            </Link>
            <Link
              href="/work"
              className="border-0 hover:opacity-50 transition-opacity"
            >
              Work
            </Link>
            <Link
              href="/experiments"
              className="border-0 hover:opacity-50 transition-opacity"
            >
              Experiments
            </Link>
            <Link
              href="/info"
              className="border-0 hover:opacity-50 transition-opacity"
            >
              Info
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
