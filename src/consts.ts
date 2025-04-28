export const REM = 16
export const GAP = 6 * REM

export const LOGOS = {
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

export const IMAGES = {
  novaship: ['register', 'profile', 'internship', 'offers'],
  todo: ['light', 'dark'],
  uptavs: ['stats', 'dashboard', 'courses', 'profile', 'payments'],
} as const

export const SKILLS = {
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

export interface ImageData {
  name: string
  project: string
  src: ImageMetadata
}
