import loadFile from './js/load-file';
import showPass from './js/show-pass';
import UI from './ui/js/index'
import { Sortable, Plugins } from '@shopify/draggable';
import tippy from 'tippy.js';
import theme from './js/theme';

import './ui/ui-reset.scss';
import './ui/libs.scss';
import './ui/ui-core.scss';
import './scss/frontend--style.scss';


window.tippy = tippy
window.draggable = { Sortable, Plugins }


showPass.init();
loadFile.init();

UI.init()

function loadHandler() {
  theme.init();
}
window.addEventListener('DOMContentLoaded', () => loadHandler())