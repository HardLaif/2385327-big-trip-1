import {getRandomTrip} from '../mock/task.js';

const TRIP_COUNT = 3;

export default class TripModel {
  trips = Array.from({length: TRIP_COUNT}, getRandomTrip);

  getTrips() {
    return this.trips;
  }
}
