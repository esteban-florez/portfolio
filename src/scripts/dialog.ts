const triggers = document.querySelectorAll<HTMLElement>('[data-dialog]')
const dismissers = document.querySelectorAll<HTMLElement>('[data-dismiss]')
const dialogs = new Map()

document.querySelectorAll<HTMLDialogElement>('dialog').forEach(dialog => {
  dialogs.set(dialog.id, dialog)
  dialog.addEventListener('close', () => {
    document.documentElement.style.overflow = ''
  })
})

triggers.forEach(trigger => trigger.addEventListener('click', () => {
  const dialog = dialogs.get(trigger.dataset.dialog)
  dialog.showModal()
  document.documentElement.style.overflow = 'hidden'
}))

dismissers.forEach(dismisser => dismisser.addEventListener('click', () => {
  const dialog = dialogs.get(dismisser.dataset.dismiss)
  dialog.close()
}))
