
import titiklapakImage from '../assets/gallery/titiklapak.png'
import pilahkiImage from '../assets/gallery/pilahki.png'
import luminaraImage from '../assets/gallery/luminara.png'
import mascotImage from '../assets/gallery/mascot.png'
import posterImage from '../assets/gallery/poster.png'
import socialImage from '../assets/gallery/social.png'

const projects = [
  {
    id: 1,
    title: 'TitikLapak',
    category: 'UI/UX · Economics',
    description: 'A location-based platform helping local vendors find strategic selling spots through AI-driven insights and profit estimation.',
    image: titiklapakImage,
    number: '01',
    figmaLink: 'https://www.figma.com/design/BwPWu92uXk1ZabcpipdI3S/AZZEKK-%7C-THE-ACE-2026?node-id=1098-1110',
  },
  {
    id: 2,
    title: 'PilahKi’',
    category: 'UI/UX · Sustainability',
    description: 'A waste-management concept connecting waste identification, nearby facilities, and disposal guidance.',
    image: pilahkiImage,
    number: '02',
    figmaLink: 'https://www.figma.com/design/FWonz7aKngQafpWToLAzE3/AZZEKK-%7C-IFEST-2026?node-id=211-1405',
  },
  {
    id: 3,
    title: 'LUMINARA',
    category: 'Desktop App · Culture',
    description: 'A desktop platform to discover festivals, workshops, music events, and cultural experiences in South Sulawesi.',
    image: luminaraImage,
    number: '03',
    figmaLink: 'https://www.figma.com/design/JsVbQlHE35ux6Ln0gDJHM8/LUMINARA?node-id=116-65',
    githubLink: 'https://github.com/aalfm/LUMINARA',
  },
  {
    id: 4,
    title: 'Character & identity',
    category: 'Illustration · Branding',
    description: 'Exploring personality through simple forms, playful details, and consistent visual language.',
    image: mascotImage,
    number: '04',
  },
  {
    id: 5,
    title: 'Campaign posters',
    category: 'Poster · Communication',
    description: 'Poster concepts built around visual hierarchy, strong messages, and a clear point of focus.',
    image: posterImage,
    number: '05',
  },
  {
    id: 6,
    title: 'Social media visuals',
    category: 'Content · Creative',
    description: 'Digital assets created to support event communication and keep visual identity consistent.',
    image: socialImage,
    number: '06',
  },
]

function Gallery() {
  return (
    <section id="work" className="border-t border-[#c4ddf3] bg-[#dceeff]">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32">

        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mono mb-5 text-[10px] uppercase tracking-[.22em] text-[#617995]">
              Selected work
            </p>
            <h2 className="text-4xl font-extrabold tracking-[-.06em] text-[#10233f] md:text-6xl">
              Ideas made visible<span className="text-[#4da8e8]">.</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-[#526984]">
            A mix of digital product concepts, development, and visual design.
            Each project is another step in the process.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.id}
              className="project-card overflow-visible rounded-[1.5rem] border border-[#c4ddf3] bg-[#f4faff]"
            >
              <div className="relative flex h-56 items-center justify-center overflow-hidden rounded-t-[1.5rem] bg-[#dceeff] p-4">
                <img
                  src={project.image}
                  alt={`${project.title} portfolio preview`}
                  className="project-image h-full w-full object-contain"
                />

                <span className="mono absolute left-4 top-4 rounded-full bg-[#f4faff]/90 px-3 py-1.5 text-[10px] text-[#10233f]">
                  {project.number}
                </span>
              </div>

              <div className="p-5">
                <p className="mono mb-3 text-[9px] uppercase tracking-[.16em] text-[#6d829d]">
                  {project.category}
                </p>

                <h3 className="text-xl font-extrabold tracking-tight text-[#10233f]">
                  {project.title}
                </h3>

                <p className="mt-3 min-h-[72px] text-xs leading-6 text-[#526984]">
                  {project.description}
                </p>

                <div className="mt-5 flex items-center justify-between border-t border-[#d5e8f8] pt-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#6d829d]">
                    Portfolio piece
                  </span>

                  {project.figmaLink || project.githubLink ? (
                  <div className="group relative">
                    <button
                      type="button"
                      aria-label={`View links for ${project.title}`}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-[#10233f] text-lg text-[#8bd3ff] transition hover:bg-[#23466e] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#4da8e8]"
                    >
                      ↗
                    </button>

                    <div className="invisible absolute bottom-full right-0 z-20 mb-2 w-36 translate-y-2 rounded-xl border border-[#c4ddf3] bg-white p-1.5 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                      {project.figmaLink && (
                        <a
                          href={project.figmaLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between rounded-lg px-3 py-2.5 text-xs font-medium text-[#10233f] transition hover:bg-[#eaf5ff]"
                        >
                          Figma
                          <span>↗</span>
                        </a>
                      )}

                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between rounded-lg px-3 py-2.5 text-xs font-medium text-[#10233f] transition hover:bg-[#eaf5ff]"
                        >
                          GitHub
                          <span>↗</span>
                        </a>
                      )}
                    </div>
                  </div>
                ) : (
                  <span className="text-lg text-[#6d829d]">↗</span>
                )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
