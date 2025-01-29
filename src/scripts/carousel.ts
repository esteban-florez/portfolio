import { initTooltips } from 'flowbite'
type LogoKey = keyof typeof LOGOS

const REM = 16
const GAP = 6 * REM
const LOGOS = {
  vite: 'Vite',
  postgres: 'PostgreSQL',
  prisma: 'Prisma',
  nextjs: 'Next.js',
  typescript: 'TypeScript',
  vue: 'Vue',
  laravel: 'Laravel',
  mysql: 'MySQL',
  php: 'PHP',
  tailwind: 'TailwindCSS',
  react: 'React',
  github: 'GitHub',
  javascript: 'JavaScript',
  node: 'Node',
  npm: 'NPM',
  flowbite: 'Flowbite',
} as const

const tooltipContainer = document.querySelector('#tooltip-container') as HTMLElement
const template = document.querySelector('#tooltip-template') as HTMLTemplateElement
const carousel = document.querySelector('#carousel') as HTMLElement
let running = true

const keys = Object.keys(LOGOS) as LogoKey[]
const imgs = keys.concat(structuredClone(keys)).map(createImage)

carousel.append(...imgs)

carousel.addEventListener('mouseenter', () => {
  running = false
})

carousel.addEventListener('mouseleave', () => {
  running = true
  requestAnimationFrame(animate)
})

setTimeout(() => {
  initTooltips()
})

requestAnimationFrame(animate)

function animate() {
  if (!running) return

  imgs.forEach(img => {
    const { right } = img.getBoundingClientRect()
    const left = parseInt(img.style.left)
  
    if (right > 0) {
      img.style.left = `${left - 1}px`
      return
    }
  
    img.style.left = `${2992}px`
  })

  requestAnimationFrame(animate)
}

function createImage(src: LogoKey, i: number) {
  const tooltipSuffix = i < keys.length ? 'a' : 'b'
  const img = document.createElement('img')
  const tooltipId = `tooltip-${src}-${tooltipSuffix}`

  img.src = `/logos/${src}.svg`
  img.alt = `logo de ${src}`
  img.setAttribute('data-tooltip-target', tooltipId)

  img.classList.add('h-16', 'w-16', 'object-fill', 'absolute', 'top-[2.5rem]', 'brightness-100', 'hover:brightness-125')

  img.style.left = `${GAP * i + REM}px`
  img.style.transition = 'filter 300ms'

  createTooltip(src, tooltipId)

  return img
}

function createTooltip(src: LogoKey, id: string) {
  const fragment = template.content.cloneNode(true) as DocumentFragment
  const tooltip = fragment.children[0]

  tooltip.id = id
  tooltip.textContent = LOGOS[src]
  tooltipContainer.append(tooltip)
}
