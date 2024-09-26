const REM = 16
const GAP = 6 * REM
const LOGOS = [
  'nextjs',
  'typescript',
  'laravel',
  'php',
  'tailwind',
  'react',
  'git',
  'github',
  'javascript',
  'node',
  'npm',
  'vite',
  'postgres',
  'mysql',
  'prisma',
]

const carousel = document.querySelector('.carousel') as HTMLElement
let running = true

const imgs = LOGOS.concat(structuredClone(LOGOS)).map(createImage)

carousel.append(...imgs)

carousel.addEventListener('mouseenter', () => {
  running = false
})

carousel.addEventListener('mouseleave', () => {
  running = true
  requestAnimationFrame(animate)
})

requestAnimationFrame(animate)

function animate() {
  imgs.forEach(img => {
    const { right } = img.getBoundingClientRect()
    const left = parseInt(img.style.left)
  
    if (right > 0) {
      img.style.left = `${left - 1}px`
      return
    }
  
    img.style.left = `${2800}px`
  })

  if (running) {
    requestAnimationFrame(animate)
  }
}

function createImage(src: string, i: number) {
  const img = document.createElement('img')
  img.src = `/logos/${src}.svg`
  img.alt = `logo de ${src}`
  img.classList.add('h-16', 'w-16', 'object-fill', 'absolute', 'top-[2.5rem]', 'hoverable')

  img.classList.add('grayscale', 'hover:grayscale-0')

  if (src === 'nextjs') {
    img.classList.add('brightness-90', 'hover:brightness-200')
  }

  img.style.left = `${GAP * i + GAP}px`
  img.style.transition = 'filter 300ms'

  return img
}
