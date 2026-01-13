export const metadata = {
  title: 'Info - luckyzz.kr',
  description: 'Information',
};

export default function InfoPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24 min-h-screen">
      <h1 className="text-4xl mb-8 tracking-tight">Info</h1>

      <div className="space-y-12 text-gray-700 leading-relaxed">
        <section>
          <h2 className="text-xl mb-4">Background</h2>
          <p className="mb-4">
            디자인과 기술의 경계를 넘나들며, AI 시대의 새로운 가능성을 탐구합니다.
          </p>
          <p className="text-sm text-gray-500">
            현재 AI 관련 대학원 진학과 연구실, 산업 역할을 탐색 중입니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl mb-4">Focus Areas</h2>
          <ul className="space-y-2 text-sm">
            <li>• Post-Human Philosophy & Technology</li>
            <li>• AI-First Design Systems</li>
            <li>• Computational Research Methods</li>
            <li>• Critical Technology Studies</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl mb-4">Contact</h2>
          <div className="space-y-2 text-sm">
            <p>
              <span className="inline-block w-24 text-gray-500">Email</span>
              <a href="mailto:hanjihunted@gmail.com" className="border-b border-gray-300 hover:border-black">
                hanjihunted@gmail.com
              </a>
            </p>
            <p>
              <span className="inline-block w-24 text-gray-500">Instagram</span>
              <a
                href="https://instagram.com/neohijnah"
                target="_blank"
                rel="noopener noreferrer"
                className="border-b border-gray-300 hover:border-black"
              >
                @neohijnah
              </a>
            </p>
            <p>
              <span className="inline-block w-24 text-gray-500">GitHub</span>
              <a
                href="https://github.com/illheon"
                target="_blank"
                rel="noopener noreferrer"
                className="border-b border-gray-300 hover:border-black"
              >
                @illheon
              </a>
            </p>
          </div>
        </section>

        <section className="pt-8 border-t border-gray-200">
          <p className="text-xs text-gray-400">
            Built with Next.js, TypeScript, and a focus on clarity over decoration.
            <br />
            Fonts: PP Lettra Mono, Arita Buri, Mulche
          </p>
        </section>
      </div>
    </div>
  );
}
