const TRIP_POINT_TYPES = [
  'taxi',
  'bus',
  'train',
  'ship',
  'drive',
  'flight',
  'check-in',
  'sightseeing',
  'restaurant'
];

const DateFormat = {
  MONTH_DAY: 'MMM D',
  DAY_MONTH: 'D MMM',
  HOURS_MINUTES: 'HH:mm',
  DAYS: 'DD',
  HOURS: 'HH',
  MINUTES: 'mm',
  MINUTE_DAY_JS: 'minute',
  YEAR_MONTH_DAY: 'DD/MM/YY HH:mm',
  MS_IN_MINUTE: 60000,
  MINUTES_IN_HOUR: 60,
  MINUTES_IN_DAY: 1440,
};


const FilterType = {
  EVERYTHING: 'everything',
  FUTURE: 'future',
  PRESENT: 'present',
  PAST: 'past'
};

const SortType = {
  DAY: 'day',
  TIME: 'time',
  PRICE: 'price',
};

const UserAction = {
  UPDATE_POINT: 'UPDATE_POINT',
  ADD_POINT: 'ADD_POINT',
  DELETE_POINT: 'DELETE_POINT',
};

const UpdateType = {
  PATCH: 'PATCH',
  MINOR: 'MINOR',
  MAJOR: 'MAJOR',
  INIT: 'INIT',
};

const ApiMethod = {
  GET: 'GET',
  PUT: 'PUT',
  POST: 'POST',
  DELETE: 'DELETE'
};

const BaseUrl = {
  POINTS: 'points',
  DESTINATIONS: 'destinations',
  OFFERS: 'offers',
};


const emptyPoint = {
  basePrice: 0,
  dateFrom: '',
  dateTo: '',
  destination: '',
  isFavorite: false,
  offers: [],
  type: 'flight',
};

const TimeLimit = {
  LOWER_LIMIT: 350,
  UPPER_LIMIT: 1000,
};

export { TRIP_POINT_TYPES, DateFormat, FilterType, SortType, UserAction, UpdateType, ApiMethod, BaseUrl, emptyPoint, TimeLimit };
