import { Fancybox } from "@fancyapps/ui";



const init = () => {
  Fancybox.defaults.autoFocus = false
  Fancybox.defaults.placeFocusBack = false

  Fancybox.bind('[data-fancybox-modal]', {

    dragToClose: false,
    mainClass: 'fancybox-custom-modal',

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
}

export default { init }