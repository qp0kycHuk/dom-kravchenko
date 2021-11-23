document.addEventListener('change', (event) => {
  const input = event.target

  if (input.getAttribute('data-load-file') === null) return
  const type = input.getAttribute('data-load-type')
  const targetId = input.getAttribute('data-load-target')

  if (type === 'image') {
    const target = document.getElementById(targetId)

    const file = input.files[0]

    if (file) {
      let reader = new FileReader();
      reader.addEventListener("load", function (event) {
        target.src = event.target.result
      }, false);
      reader.readAsDataURL(file);
    } else {
      target.src = ''
    }
  }

})