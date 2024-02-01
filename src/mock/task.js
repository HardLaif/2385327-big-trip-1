import {getRandomArrayElement} from '../utils.js';
import { CITIES } from '../const.js';
import { TIME } from '../const.js';
import { DATE } from '../const.js';
import { TYPE } from '../const.js';


const mockTasks = [
  {
    basePrice: 2100,
    eventDate: getRandomArrayElement(DATE),
    eventTime: getRandomArrayElement(TIME),
    destination: getRandomArrayElement(CITIES),
    isFavorite: false,
    offers: [
      null
    ],
    type: getRandomArrayElement(TYPE),
  },
  {
    basePrice: 5100,
    eventDate: getRandomArrayElement(DATE),
    eventTime: getRandomArrayElement(TIME),
    destination: getRandomArrayElement(CITIES),
    isFavorite: true,
    offers: [
      null
    ],
    type: getRandomArrayElement(TYPE),
  },
  {
    basePrice: 7100,
    eventDate: getRandomArrayElement(DATE),
    eventTime: getRandomArrayElement(TIME),
    destination: getRandomArrayElement(CITIES),
    isFavorite: false,
    offers: [
      null
    ],
    type: getRandomArrayElement(TYPE),
  },
  {
    basePrice: 4100,
    eventDate: getRandomArrayElement(DATE),
    eventTime: getRandomArrayElement(TIME),
    destination: getRandomArrayElement(CITIES),
    isFavorite: true,
    offers: [
      null
    ],
    type: getRandomArrayElement(TYPE),
  },

];


function getRandomTrip() {
  return getRandomArrayElement(mockTasks);
}

export {getRandomTrip};
