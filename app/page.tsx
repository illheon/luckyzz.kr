export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-6 min-h-screen flex items-center">
      <section className="w-full py-24">
        {/* Main Identity Statement */}
        <h1 className="text-[2.75rem] leading-[1.25] tracking-tight mb-12 font-normal max-w-2xl">
          포스트휴먼 관점에서
          <br />
          이 시대의 기술과 변화를
          <br />
          냉철하게 판단하는 사람
        </h1>

        {/* Elaboration */}
        <p className="text-lg leading-relaxed mb-6 text-gray-700 max-w-xl font-light">
          디자인, AI, 시스템을 횡단하며
          <br />
          무엇이 바뀌어야 하는지와 그 이유를 구조적으로 탐구합니다.
        </p>

        {/* English Supporting Line */}
        <p className="text-sm leading-relaxed mb-10 text-gray-500 max-w-xl font-light">
          Exploring technology and change
          <br />
          from a post-human perspective.
        </p>

        {/* Positioning Keywords */}
        <div className="text-xs tracking-wide text-gray-400 mb-12 font-light">
          Post-Humanism · AI-First Thinking · Systems · Research
        </div>

        {/* Proof Hint Line */}
        <p className="text-xs text-gray-400 font-light">
          사고의 흔적과 실험은 아래에 정리되어 있습니다.
        </p>
      </section>
    </div>
  );
}
