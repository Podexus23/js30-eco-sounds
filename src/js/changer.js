export {
  controlAudio
}
let audios = {};

function requireAll(r) {
  r.keys().forEach((elem) => {
    audios[elem.slice(2, -4)] = r(elem).default
  });
}

console.log(audios)

requireAll(require.context('../assets/audio', true, /\.mp3$/));

let controlAudio = (function () {
  const mainButton = document.querySelector('.main-button-icon');
  const mainAudio = document.querySelector('.main-audio');
  console.log()
  mainAudio.src = audios[2];
  mainAudio.currentTime = 0;
  let isPlaying = false;

  mainButton.addEventListener('click', playAudio);

  function playAudio() {
    if (isPlaying) {
      mainAudio.pause();
      isPlaying = false
    } else {
      mainAudio.play();
      isPlaying = true
    }
  }
})