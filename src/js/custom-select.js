import customSelect from '@src/vendors/custom-select/';


const init = () => {
  customSelect('[data-custom-select]', {

    prefix: (select) => select.getAttribute('data-prefix'),
    prefixClasses: ['mr-2', 'text--demibold']
  });
}


export default { init }