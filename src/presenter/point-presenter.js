import NewEditPoint from '../view/edit-point.js';
import NewListItem from '../view/list-item.js';

import {render, replace, remove} from '../framework/render.js';

const Mode = {
  DEFAULT: 'DEFAULT',
  EDITING: 'EDITING',
};

export default class PointPresenter {
  #listItem = null;
  #editPoint = null;
  #tripEvents = null;
  #clickOnFavorite = null;
  #closeForms = null;
  #mode = Mode.DEFAULT;


  constructor({pointData, tripEvents, clickOnFavorite, closeForms, dataChange}) {
    this.pointData = pointData;
    this.#tripEvents = tripEvents;
    this.#clickOnFavorite = clickOnFavorite;
    this.#closeForms = closeForms;
    this.dataChange = dataChange;
  }

  init() {
    this.#renderTrip(this.pointData);
  }

  resetView(){
    if(this.#mode !== Mode.DEFAULT){
      this.replaceFormToItem();
    }
  }

  #replaceItemToForm() {
    this.#closeForms();
    replace(this.#editPoint, this.#listItem);
    document.addEventListener('keydown', this.#escKeyDownHandler);
    this.#mode = Mode.EDITING;
  }

  replaceFormToItem(){

    replace(this.#listItem, this.#editPoint);
    document.addEventListener('keydown', this.#escKeyDownHandler);
    this.#mode = Mode.DEFAULT;
  }

  removeTrip(){
    remove(this.#listItem);
  }

  #escKeyDownHandler = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      this.replaceFormToItem();
    }
  };

  #renderTrip(trip){
    this.#listItem = new NewListItem({
      trip,
      onEditClick: () => {
        this.#replaceItemToForm();
      },
      isFavourite: () => {
        this.#clickOnFavorite(trip.id);
      }
    });

    this.#editPoint = new NewEditPoint({
      onFormSubmit: () => {
        this.replaceFormToItem();
      },
      onFormClose: () => {
        this.replaceFormToItem();
      }

    });

    render (this.#listItem, this.#tripEvents.element);
  }
}


