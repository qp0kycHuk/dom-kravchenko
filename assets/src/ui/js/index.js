import fancybox from "./fancybox";
import Swiper, { Navigation, Pagination, Scrollbar, Autoplay, Grid, Thumbs, EffectFade, Lazy } from 'swiper';
import tab from 'npm-kit-tab';
import toggle from 'npm-kit-toggle';
import rangeSlider from './range-slider';
import ripple from 'npm-kit-ripple';

import 'npm-kit-ripple/index.css';
import 'swiper/css/bundle';

Swiper.use([Navigation, Pagination, Scrollbar, Autoplay, Grid, Thumbs, EffectFade, Lazy]);
Swiper.defaults.touchStartPreventDefault = false
window.Swiper = Swiper


function loadHandler() {
  fancybox.init();
  rangeSlider.init()
  tab.init();
  toggle.init();
  ripple.init();


  ripple.attach('.btn')
  ripple.attach('.waved')
  ripple.deAttach('.btn--link')



}


const init = () => {
  window.addEventListener('DOMContentLoaded', () => loadHandler())
}

const destroy = () => {
  window.addEventListener('DOMContentLoaded', () => loadHandler())
}


export default { init, destroy } 