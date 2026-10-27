const skills = [
  'UI/UX Design', 'Visual Communication', 'React & Web Basics', 'Java & JavaFX',
  'Database · SQLite', 'Problem Solving', 'Team Collaboration', 'Adaptability',
]

const tools = ['Figma', 'Canva', 'Java', 'SQL', 'HTML / CSS / JS']

function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32">
      <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div>
          <p className="mono mb-5 text-[10px] uppercase tracking-[.22em] text-[#617995]">What I bring</p>
          <h2 className="text-4xl font-extrabold tracking-[-.06em] md:text-6xl">Skills in progress<span className="text-[#4da8e8]">.</span></h2>
        </div>
        <p className="max-w-sm text-sm leading-7 text-[#526984]">A growing toolkit across design, technology, and the human side of building things together.</p>
      </div>
      <div className="grid gap-10 md:grid-cols-[1.2fr_.8fr]">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {skills.map((skill, index) => (
            <div key={index} className="group flex min-h-20 items-center justify-between rounded-2xl border border-[#c4ddf3] bg-[#f4faff] px-5 transition hover:border-[#4da8e8] hover:bg-[#8bd3ff]">
              <span className="text-sm font-bold">{skill}</span>
              <span className="mono text-[10px] text-[#6d829d] group-hover:text-[#10233f]">{String(index + 1).padStart(2, '0')}</span>
            </div>
          ))}
        </div>
        <div className="rounded-[2rem] bg-[#10233f] p-7 text-[#eaf5ff] md:p-9">
          <p className="mono mb-8 text-[10px] uppercase tracking-[.2em] text-[#b9e5ff]">Tools I explore</p>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool, index) => (
              <span key={index} className="rounded-full border border-white/20 px-4 py-2.5 text-xs text-white/85">{tool}</span>
            ))}
          </div>
          <div className="mt-12 border-t border-white/15 pt-6">
            <p className="text-2xl font-extrabold tracking-tight">Always learning.</p>
            <p className="mt-2 text-sm leading-6 text-white/60">I believe good work comes from curiosity, iteration, and being open to feedback.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills