const dialog = document.querySelector<HTMLDialogElement>('dialog#contact-info')
const infoBtn = document.querySelector<HTMLButtonElement>('button#info-btn')
const closeBtn = document.querySelector<HTMLButtonElement>('button#info-close')

infoBtn?.addEventListener('click', () => {
  dialog?.showModal()
  document.documentElement.style.overflow = 'hidden'
})

closeBtn?.addEventListener('click', () => {
  dialog?.close()
  document.documentElement.style.overflow = ''
})
