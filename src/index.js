//add css
import './style.scss'
//add pageBuilding scripts
import {
  loadAllPics
} from './js/fileLoader.js'
import {
  controlAudio
} from './js/changer.js'


loadAllPics();

controlAudio();
console.log('hi')