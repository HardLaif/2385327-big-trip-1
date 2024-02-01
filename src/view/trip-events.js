import {createElement} from '../render.js';

function createNewTripEventsTemplate() {
  return (
    `<section class="trip-events">
    <h2 class="visually-hidden">Trip events</h2>

    <!-- Сортировка -->

    <!-- Контент -->
  </section>`
  );
}

export default class NewTripEvents {
  getTemplate() {
    return createNewTripEventsTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
