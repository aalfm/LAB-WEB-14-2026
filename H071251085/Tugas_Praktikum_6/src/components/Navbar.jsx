const menu = [
  { id: 1, label: 'Home', href: '#home' },
  { id: 2, label: 'About', href: '#about' },
  { id: 3, label: 'Skills', href: '#skills' },
  { id: 4, label: 'Selected work', href: '#work' },
  { id: 5, label: 'Closing', href: '#closing' },
  
]

function Navbar() {
  const handleMenuClick = (label) => {
    console.log(`Menu clicked: ${label}`)
  }

  return (
    <header className="fixed top-0 z-50 w-full border-b border-[#c4ddf3]/80 bg-[#eaf5ff]/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10" aria-label="Main navigation">
        <a href="#home" className="flex items-center gap-3" aria-label="Alifah home">
        <img src="/ilustrasi.png" alt="Ilustrasi Alifah" className="h-9 w-9 rounded-full object-cover"/>
          <span className="text-sm font-extrabold tracking-tight">ALIFAH</span>
        </a>
        <div className="flex items-center gap-4 sm:gap-7">
          {menu.map((item) => (
            <a key={item.id} href={item.href} onClick={() => handleMenuClick(item.label)} className="hidden text-xs font-semibold text-[#526984] transition hover:text-[#10233f] sm:inline-block">
              {item.label}
            </a>
          ))}
          <a href="#contact" className="rounded-full border border-[#10233f] px-4 py-2 text-xs font-bold transition hover:bg-[#10233f] hover:text-white">Let’s talk ↗</a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar