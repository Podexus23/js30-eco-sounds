//add favicon img, trough html
import favicon from '../assets/favicon.png'
import {
  default as svgSprite
} from '../assets/svg/sprite.svg'

let putFavicon = (function () {
  const linkFavicon = document.querySelector('link[rel="shortcut icon"]')
  const icon = new Image();
  icon.src = favicon
  linkFavicon.href = favicon
})
let svgLoader = (function () {
  const svgUse = document.querySelector('.header-logo-icon')
  svgUse.innerHTML = `<use xlink:href = "${svgSprite}#logo" data-bird="forest"></use>`
})
let svgLoaderRain = (function () {
  const svgUse = document.querySelector('.header-logo-icon-rain')
  svgUse.innerHTML = `<use xlink:href = "${svgSprite}#rain" data-bird="rain"></use>`
})
let svgLoaderMain = (function () {
  const svgUse = document.querySelector('.main-button-icon')
  svgUse.innerHTML = `<use xlink:href = "${svgSprite}#play"></use>`;
})
let svgLoaderFooter = (function () {
  const svgUse = document.querySelector('.footer-rs-icon')
  svgUse.innerHTML = `<use xlink:href = "${svgSprite}#rss"></use>`;
})

let loadSVG = (function () {
  putFavicon();
  svgLoader();
  svgLoaderRain();
  svgLoaderMain();
  svgLoaderFooter();
})

const birdContent = {};

let loadBirdContent = (function () {
  function loadAudio(r) {
    r.keys().forEach((elem) => {
      birdContent[elem.slice(2, -4)] = {
        'song': r(elem).default
      }
    });
  }

  function loadBacks(r) {
    r.keys().forEach((elem) => {
      birdContent[elem.slice(2, -4)]['back'] = r(elem);
    });
  }

  loadAudio(require.context('../assets/audio', true, /\.mp3$/));
  loadBacks(require.context('../assets/img', true, /\.jpg$/));
})

export {
  loadSVG,
  loadBirdContent,
  birdContent,
  svgSprite,
}