import {
  birdContent,
  svgSprite
} from './fileLoader'

let controlBirds = (function () {
  // console.log(birdContent)
  const mainButton = document.querySelector('.main-button-icon');
  const header = document.querySelector('header');
  const mainAudio = document.querySelector('.main-audio');

  let bird = 'forest';
  let isPlaying = false;
  let itFirst = true;

  mainButton.addEventListener('click', playAudio);
  header.addEventListener('click', choseBird);
  setBird(bird);

  function choseBird(e) {
    if (!e.target.dataset.bird) return;
    if (e.target.closest('[data-bird]')) {
      bird = e.target.dataset.bird;
      setBird(bird);
    }
  }

  function setSound(name) {
    mainAudio.src = birdContent[name].song;
    mainAudio.currentTime = 0;
  }

  function setBackground(name) {
    const background = document.querySelector('.main')
    background.style.backgroundImage = `url(${birdContent[name].back})`
  }

  function setBird(bird) {
    if (itFirst) {
      setSound(bird);
      setBackground(bird);
      itFirst = false;
    } else {
      setSound(bird);
      setBackground(bird);
      isPlaying = false;
      playAudio()
    }
  }

  function controlButton() {
    const svgUse = document.querySelector('.main-button-icon');
    if (isPlaying) {
      svgUse.innerHTML = `<use xlink:href = "${svgSprite}#pause"></use>`;
    } else {
      svgUse.innerHTML = `<use xlink:href = "${svgSprite}#play"></use>`;
    }
  }

  function playAudio() {
    if (isPlaying) {
      mainAudio.pause();
      isPlaying = false;
      controlButton()
    } else {
      mainAudio.play();
      isPlaying = true;
      controlButton();
    }
  }
})

export {
  controlBirds,
}