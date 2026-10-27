function Hero() {
  const handleContactClick = () => {
    console.log('Hero contact button clicked')
    window.location.href = 'mailto:andialifah201@gmail.com'
  }

  return (
    <section id="home" className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-center overflow-hidden px-5 pb-16 pt-32 md:px-10">
      <div className="dot-grid absolute right-3 top-32 h-36 w-36 rounded-full opacity-60 md:right-20 md:top-36 md:h-56 md:w-56" aria-hidden="true" />
      <div className="relative z-10 mb-8 flex items-center gap-3">
        <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-[#4da8e8]" />
        <p className="mono text-[10px] uppercase tracking-[.24em] text-[#526984]">Information Systems Student · Makassar, ID</p>
      </div>
      <h1 className="hero-title relative z-10 max-w-5xl text-[clamp(3.7rem,10.6vw,9.5rem)] font-extrabold">
        Designing<br /><span className="outline-text">with purpose.</span><br />
        <span className="text-[#4da8e8]">Building</span> with tech.
      </h1>
      <div className="relative z-10 mt-10 grid gap-8 md:grid-cols-[1fr_260px] md:items-end">
        <p className="max-w-xl text-base leading-7 text-[#526984] md:text-lg md:leading-8">
          Hello, I’m Alifah, an Information Systems student interested in digital product design, technology, and turning everyday problems into meaningful solutions.
        </p>
        <button onClick={handleContactClick} className="group flex w-fit items-center gap-4 rounded-full bg-[#10233f] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#4da8e8] hover:text-[#10233f]">
          Get in touch <span className="text-lg transition group-hover:translate-x-1">↗</span>
        </button>
      </div>
      <div className="relative z-10 mt-16 flex items-center justify-between border-t border-[#c4ddf3] pt-5">
        <span className="mono text-[10px] uppercase tracking-[.18em] text-[#6d829d]">Curiosity → Ideas → Impact</span>
        <a href="#about" className="mono text-[10px] uppercase tracking-[.18em] text-[#6d829d] hover:text-[#10233f]">Scroll to explore ↓</a>
      </div>
    </section>
  )
}

export default Hero