const socials = [
  { id: 1, label: 'Email', value: 'andialifah201@gmail.com', href: 'mailto:andialifah201@gmail.com' },
  { id: 2, label: 'Instagram', value: '@aalfm._', href: 'https://instagram.com/aalfm._' },
  { id: 3, label: 'GitHub', value: 'aalfm', href: 'https://github.com/aalfm' },
]

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer id="contact" className="bg-[#10233f] text-[#eaf5ff]">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
        <p className="mono mb-6 text-[10px] uppercase tracking-[.22em] text-[#b9e5ff]">Say hello</p>
        <h2 className="max-w-4xl text-5xl font-extrabold leading-[.98] tracking-[-.07em] md:text-8xl">Have an idea?<br /><span className="text-[#8bd3ff]">Let’s make it matter.</span></h2>
        <div className="mt-12 flex flex-col justify-between gap-10 border-t border-white/15 pt-8 md:flex-row">
          <p className="max-w-xs text-sm leading-7 text-white/55">Ready to learn, collaborate, and grow together. I’d love to hear what you’re working on.</p>
          <div className="grid gap-4 sm:grid-cols-3 sm:gap-8">
            {socials.map((social) => (
              <a key={social.id} href={social.href} target={social.href.startsWith('http') ? '_blank' : undefined} rel={social.href.startsWith('http') ? 'noreferrer' : undefined} className="group">
                <span className="mono mb-2 block text-[10px] uppercase tracking-[.15em] text-white/40">{social.label}</span>
                <span className="text-sm font-semibold transition group-hover:text-[#8bd3ff]">{social.value} ↗</span>
              </a>
            ))}
          </div>
        </div>
        <div className="mt-20 flex flex-col justify-between gap-3 border-t border-white/15 pt-5 sm:flex-row">
          <p className="text-xs text-white/50">© {year} Andi Alifah Mahrani. All rights reserved.</p>
          <a href="#home" className="text-xs text-white/50 transition hover:text-[#8bd3ff]">Back to top ↑</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer