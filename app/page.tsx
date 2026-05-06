export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-sm font-medium px-3 py-1 rounded-full mb-6 border border-[#58a6ff]/20">
          For Online Course Creators
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Create Quizzes with{" "}
          <span className="text-[#58a6ff]">Detailed Learning Analytics</span>
        </h1>
        <p className="text-lg md:text-xl text-[#8b949e] max-w-2xl mx-auto mb-10">
          Build quizzes in minutes, discover exactly where students struggle, and get actionable suggestions to improve your course content.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors duration-200"
        >
          Start for $13/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. No setup fees.</p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {[
            { title: "Quiz Builder", desc: "Drag-and-drop editor with multiple question types — MCQ, true/false, short answer." },
            { title: "Real-Time Analytics", desc: "See per-question drop-off rates, average scores, and time-on-question heatmaps." },
            { title: "Smart Suggestions", desc: "Automatically flag confusing questions and get rewrite recommendations." }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</p>
          <div className="text-5xl font-bold text-white mb-1">$13<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-8">Everything you need to run a data-driven course</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited quizzes & questions",
              "Real-time student analytics dashboard",
              "Per-question struggle detection",
              "Improvement suggestions engine",
              "Student portal with progress tracking",
              "CSV export of all analytics data",
              "Email support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span>{item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors duration-200"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does the analytics work?",
              a: "Every time a student takes a quiz, we record their answers, time spent per question, and score. The dashboard aggregates this data to show you which questions have the highest failure rates and where students abandon the quiz."
            },
            {
              q: "Can my students take quizzes without creating an account?",
              a: "Yes. You can share a public quiz link and students can take it anonymously. If you want to track individual progress over time, students can optionally create a free learner account."
            },
            {
              q: "What happens if I cancel my subscription?",
              a: "You keep access until the end of your billing period. After that, your quizzes are archived and your analytics data is retained for 90 days so you can export it before it's removed."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-8 text-[#8b949e] text-sm">
        © {new Date().getFullYear()} QuizMaker Analytics. All rights reserved.
      </footer>
    </main>
  );
}
