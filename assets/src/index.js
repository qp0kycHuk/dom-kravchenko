import { Sortable, Plugins } from '@shopify/draggable';
import tippy from 'tippy.js';
import loadFile from './js/load-file';
import showPass from './js/show-pass';
import theme from './js/theme';
import UI from './ui/js/index'
// import * as FilePond from 'filepond';
// import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
// import filePondRU from 'filepond/locale/ru-ru.js';

// import 'filepond/dist/filepond.css';
// import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

import './ui/ui-reset.scss';
import './ui/libs.scss';
import './ui/ui-core.scss';
import './scss/frontend--style.scss';


window.tippy = tippy
window.draggable = { Sortable, Plugins }
// window.FilePond = FilePond


showPass.init();
loadFile.init();

// FilePond.setOptions(filePondRU);
// FilePond.registerPlugin(FilePondPluginImagePreview);
// FilePond.registerPlugin(
//   FilePondPluginImagePreview,
//   FilePondPluginImageExifOrientation,
//   FilePondPluginFileValidateSize,
//   FilePondPluginImageEdit
// );


UI.init()

function loadHandler() {
  theme.init();
  // FilePond.create( document.querySelector('[data-load-file]') );
}
window.addEventListener('DOMContentLoaded', () => loadHandler())