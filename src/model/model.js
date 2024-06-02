import {getRandomTrip} from '../mock/points-mock.js';
import { SortType,} from '../const.js';
import { sortTripsByPrice, sortTripsByDay, sortTripsByTime } from '../utils.js';

const TRIP_COUNT = 4;

export default class TripModel {
  #trips = Array.from({length: TRIP_COUNT}, getRandomTrip);

  sourcedTrips = [...this.#trips];

  get trips() {
    return this.#trips;
  }

  toggleFavorite(id){
    this.#trips = this.#trips.map((trip) => {
      if(id === trip.id){
        return {
          ...trip,
          isFavorite: !trip.isFavorite,
        };
      }
      return trip;
    });
    console.log([...this.#trips])
  }

  sortTrips(sortType){
    console.log(sortType)
    switch(sortType){
      case SortType.TIME:
        this.#trips.sort(sortTripsByTime);
        break;
      case SortType.PRICE:
        this.#trips.sort(sortTripsByPrice);
        break;
      case SortType.DAY:
        this.#trips.sort(sortTripsByDay);
        break;
      default:
        this.#trips = [...this.sourcedTrips];
    }
  }

}
