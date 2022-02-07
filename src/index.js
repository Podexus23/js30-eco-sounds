//add css
import './style.scss'
//add pageBuilding scripts
import {
  loadSVG,
  loadBirdContent,
} from './js/fileLoader.js'
import {
  controlBirds
} from './js/changer.js'

const header = document.querySelector('.header');
loadSVG();
loadBirdContent();
controlBirds();
header.addEventListener('click', setActive);

function setActive(e) {
  const birds = document.querySelectorAll('[data-bird]');
  if (!e.target.dataset.bird) return;
  if (e.target.closest('[data-bird]')) {
    birds.forEach(elem => elem.classList.remove('active'))
    e.target.closest('[data-bird]').classList.add('active')
  }
}

console.log(`Вёрстка +10:
- есть не меньше пяти интерактивных элементов, 
  с которыми пользователи могут взаимодействовать. 
  Изменение внешнего вида самого элемента и состояния курсора при наведении, 
  плавные анимации +5
- в футере приложения есть ссылка на гитхаб автора приложения, 
  год создания приложения, логотип курса со ссылкой на курс +5
При кликах по интерактивным элементам меняется изображение: +10
При кликах по интерактивным элементам меняется звук: +10
Активный в данный момент интерактивный элемент выделяется стилем: +10

Кнопка Play/Pause +20
- есть кнопка Play/Pause, при клике по которой можно запустить 
  или остановить проигрывание звука +10
- внешний вид и функционал кнопки Play/Pause изменяется в зависимости от того, 
  проигрывается ли в данный момент звук +10

Очень высокое качество оформления приложения и/или дополнительный не предусмотренный в задании функционал, улучшающий качество приложения +5

Качество хорошее, добавил звук дождя думаю на этом фоне +5 заслужил =)

Итого: 65 баллов и 5 в запасе`)