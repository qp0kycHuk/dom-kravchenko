// Fancybox.defaults.closeButton = 'outside'
Fancybox.defaults.autoFocus = false
Fancybox.defaults.placeFocusBack = false

Fancybox.bind('[data-fancybox-modal]', {
  // type: 'ajax',
  dragToClose: false,
  mainClass: 'fancybox-custom-modal',
  // closeButton: 'outside'
})


Fancybox.modal = {}
Fancybox.modal.open = (src, options) => {
  Fancybox.show([{
    src: src,
    ...options
  }], {
    dragToClose: false,
    mainClass: 'fancybox-custom-modal',
    ...options
  })
}
