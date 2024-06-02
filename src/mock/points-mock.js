import {getRandomArrayElement} from '../utils.js';

const mockPoints = [
  {
    id: 'f6138082-e710-48cc-abd3-15716cc7d602',
    type: 'train',
    dateFrom: '2023-11-20',
    dateTo: '2023-12-21',
    destination: 'Moskow',
    basePrice: 700,
    isFavorite: true,
    offers: [
      '1',
      '2'
    ]
  },
  {
    id: 'f6138082-e712-48cc-abd3-15716cc7d502',
    type: 'ship',
    dateFrom: '2023-11-13',
    dateTo: '2023-12-14',
    destination: 'Saint-Petersburg',
    basePrice: 800,
    isFavorite: false,
    offers: [
      '1',
      '2'
    ]
  },
  {
    id: 'f6138082-e722-48cc-abd3-13716cc7d602',
    type: 'bus',
    dateFrom: '2023-11-22',
    dateTo: '2023-12-25',
    destination: 'Kazan',
    basePrice: 300,
    isFavorite: true,
    offers: [
      '1',
    ]
  },
  {
    id: 'f6138082-e722-48cc-abe3-15716cc7d603',
    type: 'train',
    dateFrom: '2023-11-23',
    dateTo: '2023-11-24',
    destination: 'Kirov',
    basePrice: 800,
    isFavorite: false,
    offers: [
      '2'
    ]
  },
  {
    id: 'f6138082-e722-48cc-abe3-15716cc7d601',
    type: 'train',
    dateFrom: '2023-11-23',
    dateTo: '2023-11-23',
    destination: 'Pokrov',
    basePrice: 800,
    isFavorite: false,
    offers: [
      '1'
    ]
  },

];

function getRandomTrip() {
  return {
    ...getRandomArrayElement(mockPoints),
    id: crypto.randomUUID()
  };
}

const currentDate = '2023-11-23T09:04:46.633Z';
export { mockPoints, currentDate, getRandomTrip };
