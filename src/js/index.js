import loadFile from "./load-file";
import showPass from "./show-pass";
import fancybox from "./fancybox";
import tippy from 'tippy.js';
import InstantClick from 'instantclick';
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



function loadHandler() {

  fancybox.init();
  showPass.init();
  loadFile.init();
  customSelect.init()
  rangeSlider.init()
  tab.init();
  toggle.init();
}

window.addEventListener('DOMContentLoaded', () => loadHandler(false))

