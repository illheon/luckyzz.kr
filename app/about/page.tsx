export const metadata = {
  title: 'About - luckyzz.kr',
  description: 'About luckyzz',
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 min-h-[calc(100vh-5rem)]">
      <h1 className="text-5xl font-medium mb-16">About</h1>

      <div className="space-y-8 text-lg leading-relaxed">
        <section>
          <h2 className="text-2xl font-medium mb-4">luckyzz</h2>
          <p className="text-gray-600">
            Designer, Developer, Creator based in Korea.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-medium mb-4">Focus</h2>
          <p className="text-gray-600 mb-4">
            Passionate about minimal design, clean code, and thoughtful user experiences.
          </p>
          <ul className="list-none space-y-2 text-gray-600">
            <li>• Design Systems</li>
            <li>• Web Development</li>
            <li>• Creative Coding</li>
            <li>• Typography</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-medium mb-4">Contact</h2>
          <div className="space-y-2 text-gray-600">
            <p>Feel free to reach out for collaborations or just to say hello.</p>
            <div className="pt-4 space-y-2">
              <p>
                <span className="inline-block w-20">Email:</span>
                <a href="mailto:hello@luckyzz.kr">hello@luckyzz.kr</a>
              </p>
              <p>
                <span className="inline-block w-20">GitHub:</span>
                <a href="https://github.com/luckyzz" target="_blank" rel="noopener noreferrer">
                  @luckyzz
                </a>
              </p>
              <p>
                <span className="inline-block w-20">Twitter:</span>
                <a href="https://twitter.com/luckyzz" target="_blank" rel="noopener noreferrer">
                  @luckyzz
                </a>
              </p>
            </div>
          </div>
        </section>

        <section className="pt-8 border-t border-black">
          <p className="text-sm text-gray-500">
            This website is built with Next.js, TypeScript, and Tailwind CSS.
            <br />
            Fonts: PP Lettra Mono, Arita Buri, Mulche
          </p>
        </section>
      </div>
    </div>
  );
}
