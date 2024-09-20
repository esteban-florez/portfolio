const techs = [
  { name: 'nextjs' },
  { name: 'typescript' },
  { name: 'laravel' },
  { name: 'php' },
  { name: 'tailwind' },
  { name: 'react' },
  { name: 'git' },
  { name: 'github' },
  { name: 'javascript' },
  { name: 'node' },
  { name: 'npm' },
  { name: 'vite' },
  { name: 'postgres' },
  { name: 'mysql' },
  { name: 'prisma' },
]

const carousel = document.querySelector('.carousel') as HTMLElement

const REM = 16
const GAP = 6 * REM

const imgs = techs.concat(structuredClone(techs)).map((tech, i) => {
  const { name } = tech
  const img = document.createElement('img')
  img.src = `/logos/${name}.svg`
  img.alt = `logo de ${name}`
  img.classList.add('h-16', 'w-16', 'object-fill', 'absolute', 'top-[2.5rem]')

  img.style.left = `${GAP * i + GAP}px`

  return img
})

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

  requestAnimationFrame(animate)
}

requestAnimationFrame(animate)

carousel.append(...imgs)
