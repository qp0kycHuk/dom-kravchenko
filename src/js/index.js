import loadFile from "./load-file";
import showPass from "./show-pass";
import fancybox from "./fancybox";
import dragula from 'dragula';
import tippy from 'tippy.js';
import customSelect from "./custom-select";
import Swiper, { Navigation, Pagination, Scrollbar, Autoplay, Grid, Thumbs, EffectFade } from 'swiper';
import tab from './ui--tab';
import rangeSlider from './range-slider';
import toggle from './ui--toggle';

window.dragula = dragula
window.tippy = tippy

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