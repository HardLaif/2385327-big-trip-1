import NewListFilter from './view/list-filter.js';
import {render} from './render.js';
import TripPresenter from './presenter/trip-presenter.js';
import TripModel from './model/model.js';

const siteMainElement = document.querySelector('.page-main .page-body__container');
const siteHeaderElement = document.querySelector('.trip-controls__filters');
const tripModel = new TripModel();
const tripPresenter = new TripPresenter({tripContainer: siteMainElement, tripModel,});

render(new NewListFilter(), siteHeaderElement);


tripPresenter.init();
