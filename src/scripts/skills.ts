const grid = document.querySelector('#skills-grid') as HTMLDivElement
const template = document.querySelector('#skill-template') as HTMLTemplateElement
const fragment = template.content as DocumentFragment
const node = fragment.children[0] as HTMLDivElement

const SKILLS = {
  typescript: 'TypeScript',
  react: 'React',
  nextjs: 'Next.js',
  tailwind: 'Tailwind',
  php: 'PHP',
  laravel: 'Laravel',
  vue: 'Vue',
  bootstrap: 'Bootstrap',
  node: 'Node',
  vite: 'Vite',
  mysql: 'MySQL',
  postgres: 'PostgreSQL',
} as const

Object.entries(SKILLS).forEach(([img, name]) => {
  const clone = node.cloneNode(true) as HTMLDivElement
  const figure = clone.children[0]
  const imgNode = figure.children[0] as HTMLImageElement
  const captionNode = figure.children[1] as HTMLElement

  imgNode.src = `/logos/${img}.svg`
  imgNode.alt = `Logo de ${name}`
  captionNode.textContent = name

  grid.append(clone)
})
