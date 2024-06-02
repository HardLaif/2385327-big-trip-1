
import PointPresenter from './point-presenter.js';
import NewListEmpty from '../view/list-empty.js';
import NewTripEvents from '../view/trip-events.js';
import ListSort from '../view/list-sort.js';
import { remove, render } from '../framework/render.js';
import { SortType,} from '../const.js';
import { updateItem } from '../utils.js';
import { sortTripsByPrice, sortTripsByTime, sortTripsByDay } from '../utils.js';

export default class TripPresenter {
  #tripEvents = new NewTripEvents();
  #listSort = null;
  #tripModel = null;
  #tripList = [];
  #tripContainer = null;

  #pointPresenters = [];
  #sourcedTrips = [];
  #currentSortType = SortType.DAY;

  constructor({tripContainer, tripModel}) {
    this.#tripContainer = tripContainer;
    this.#tripModel = tripModel;
  }

  #renderList(){
    for (let i = 0; i < this.#tripModel.trips.length; i++) {
      const pointData = this.#tripModel.trips[i];
      const pointPresenter = new PointPresenter({
        pointData,
        tripEvents: this.#tripEvents,
        clickOnFavorite: (id) => this.#clickOnFavorite(id),
        closeForms: () => this.closeEditForms(),
        dataChange: this.#handleTripChange
      });
      pointPresenter.init();
      this.#pointPresenters.push(pointPresenter);
    }
  }

  init() {
    this.#tripList = [...this.#tripModel.trips];
    this.#renderListSort();
    this.#renderEmptyList();
    render(this.#tripEvents, this.#tripContainer);
    this.#renderList();

    document.addEventListener('keydown', this.#escKeyDownHandler);

    this.#sourcedTrips = [...this.#tripModel.trips];
  }

  #handleTripChange = (updatedTrip) => {
    this.#sourcedTrips = updateItem(this.#sourcedTrips, updatedTrip);
  };

  #sortTrips(sortType){
    this.#tripModel.sortTrips(sortType);
  }

  #handleSortTypeChange = (sortType) => {
    // - Сортируем задачи
    // - Очищаем список
    // - Рендерим список заново
    if(this.#currentSortType === sortType){
      return;
    }
    this.#sortTrips(sortType);
    this.#clearTripList();
    this.#renderList();
  };

  #renderListSort(){
    this.#listSort = new ListSort({
      onSortTypeChange: this.#handleSortTypeChange
    });

    render(this.#listSort, this.#tripContainer);
  }

  #clearTripList(){
    for(let i = 0; i < this.#pointPresenters.length; i++) {
      this.#pointPresenters[i].removeTrip();
    }
  }

  #escKeyDownHandler = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      for (let i = 0; i < this.#pointPresenters.length; i++) {
        this.#pointPresenters[i].replaceFormToItem();
      }
    }
  };

  #renderEmptyList() {
    if (this.#tripList.length === 0) {
      render(new NewListEmpty(), this.#tripEvents.element);
    }
  }

  #clickOnFavorite(id){
    this.#tripModel.toggleFavorite(id);
    this.#pointPresenters.forEach((point) => {
      point.removeTrip();
    });
    this.init();
  }

  closeEditForms(){
    this.#pointPresenters.forEach((point) => {
      point.resetView();
    });
  }
}
