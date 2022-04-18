import fancybox from "./fancybox";
import Swiper, { Navigation, Pagination, Scrollbar, Autoplay, Grid, Thumbs, EffectFade, Lazy } from 'swiper';
import 'swiper/css';
import tab from './ui--tab';
import rangeSlider from './range-slider';
import toggle from './ui--toggle';
import ripple from './ripple';

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