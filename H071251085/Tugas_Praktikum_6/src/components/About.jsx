const profileData = [
  { id: 1, label: 'Based in', value: 'Makassar, Indonesia' },
  { id: 2, label: 'Studying', value: 'Information Systems' },
  { id: 3, label: 'Interested in', value: 'UI/UX · Web · Data' },
  { id: 4, label: 'Currently', value: 'Learning by making' },
  { id: 5, label: 'Hobby', value: 'Design' },
]


function About() {
  return (
    <section id="about" className="border-t border-[#c4ddf3] bg-[#dceeff]">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 md:grid-cols-[.8fr_1.2fr] md:px-10 md:py-32">
        <div>
          <p className="mono mb-5 text-[10px] uppercase tracking-[.22em] text-[#617995]">A little about me</p>
          <div className="relative max-w-sm">
            <div className="absolute -left-3 -top-3 h-full w-full rounded-[2rem] border border-[#a8cbe8]" />
            <img src="/profile.jpeg" alt="Portrait of Alifah" className="relative aspect-[4/4.5] w-full rounded-[2rem] object-cover object-center" />
            <span className="absolute -bottom-4 -right-3 rounded-full bg-[#8bd3ff] px-5 py-3 text-xs font-extrabold shadow-sm">Nice to meet you! ✳</span>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="mb-7 text-4xl font-extrabold leading-tight tracking-[-.06em] md:text-6xl">A curious mind, <br />a <span className="text-[#378bc9]">creative lens.</span></h2>
          <p className="max-w-2xl text-sm leading-7 text-[#526984] md:text-base md:leading-8">
            I enjoy learning new things, solving problems, and working with others to create useful digital experiences. I’m drawn to the space where technology meets people — from understanding user needs to shaping interfaces that feel clear, thoughtful, and easy to use.
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-[#526984] md:text-base md:leading-8">
            This portfolio is a snapshot of my growth so far: the projects I’ve helped build, the visual work I’ve created, and the experiences that keep me curious.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-0 border-y border-[#c4ddf3] sm:grid-cols-2">
            {profileData.map((item) => (
              <div key={item.id} className="border-b border-[#c4ddf3] py-4 sm:odd:pr-5 sm:even:pl-5 sm:even:border-l sm:odd:border-r">
                <p className="mono mb-2 text-[10px] uppercase tracking-[.16em] text-[#6d829d]">{item.label}</p>
                <p className="text-sm font-bold">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About