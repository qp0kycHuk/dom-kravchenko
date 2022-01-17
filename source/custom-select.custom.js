customSelect('[data-custom-select]', {
  // openerClass: '',
  prefix: (select) => select.getAttribute('data-prefix'),
  prefixClasses:['mr-2', 'text--demibold']
});