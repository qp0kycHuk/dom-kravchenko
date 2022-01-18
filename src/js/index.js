import loadFile from "./load-file";
import showPass from "./show-pass";
import fancybox from "./fancybox";
import tippy from 'tippy.js';
import customSelect from "./custom-select";
import Swiper, { Navigation, Pagination, Scrollbar, Autoplay, Grid, Thumbs, EffectFade } from 'swiper';
import tab from './ui--tab';
import rangeSlider from './range-slider';
import toggle from './ui--toggle';
import { Sortable, Plugins } from '@shopify/draggable';

window.tippy = tippy
window.draggable = { Sortable, Plugins }


Swiper.use([Navigation, Pagination, Scrollbar, Autoplay, Grid, Thumbs, EffectFade]);
window.Swiper = Swiper

tab.init();
toggle.init();
fancybox.init();
showPass.init();
loadFile.init();

window.addEventListener('DOMContentLoaded', () => {
  customSelect.init()
  rangeSlider.init()
})