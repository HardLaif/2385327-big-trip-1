import dayjs from 'dayjs';

function getRandomArrayElement(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function updateItem(items, update) {
  return items.map((item) => item.id === update.id ? update : item);
}


const DATE_FORMAT = 'D MMMM';

function humanizeTripDueDate(dueDate) {
  return dueDate ? dayjs(dueDate).format(DATE_FORMAT) : '';
}

function sortTripsByPrice (pointA, pointB) {
  return pointB.basePrice - pointA.basePrice;
}

function sortTripsByTime (pointA, pointB) {
  const durationA = dayjs(pointA.dateTo).diff(pointA.dateFrom);
  const durationB = dayjs(pointB.dateTo).diff(pointB.dateFrom);
  return durationB - durationA;
}

function sortTripsByDay (pointA, pointB) {
  return dayjs(pointA.dateFrom) - dayjs(pointB.dateFrom);
}


export {updateItem, getRandomArrayElement, humanizeTripDueDate, sortTripsByPrice, sortTripsByTime, sortTripsByDay};
