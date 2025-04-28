import { IMAGES } from '../consts'

const promises = Object.entries(IMAGES).flatMap(([project, images]) => {
  return images.map(image => ({ project, name: image }))
}).map(async image => ({
  project: image.project,
  name: image.name,
  src: (await import(`../images/projects/${image.project}/${image.name}.png`)).default
}))

const images = await Promise.all(promises)

export { images as sources }
