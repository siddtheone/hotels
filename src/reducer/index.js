import { createSelector } from "reselect";
import {testData} from '../constants/hotels';
import {createAction} from '../helpers/actionHelpers';
import { dateFormat } from "../helpers/utils";

export const TOGGLE_OVERVIEW = 'TOGGLE_OVERVIEW';
export const toggleOverview = createAction(TOGGLE_OVERVIEW);

export const CHANGE_UI = 'CHANGE_UI';
export const changeUI = createAction(CHANGE_UI);

export const initialState = {
  hotels: testData.map(data => ({
    ...data,
    guestList: {...data.guestList},
    expanded: false,
  })),
  sortBy: 'name',
  dateFilter: -1,
  airportFilter: '',
};

function reducer(state = initialState, {type, payload}) {
  switch (type) {
    case CHANGE_UI:
      const {name, value} = payload;
      return {
        ...state,
        [name]: value,
      }
    case TOGGLE_OVERVIEW:
      const {index} = payload;
      return {
        ...state,
        hotels: state.hotels.map((h) => {
          if(h.imageIndex !== index) {
            return h;
          } else {
            return {
              ...h,
              expanded: !h.expanded,
            }
          }
        })
      }
    default:
      return state;
  }
}

export const getHotels = state => state.hotels;
export const getSortBy = state => state.sortBy;
export const getDateFilter = state => state.dateFilter;
export const getAirportFilter = state => state.airportFilter;

export const getDeparturesFromHotels = createSelector(getHotels, hotels => hotels.map(e => e.departure));
export const getHolidayDateFromHotels = createSelector(getHotels, hotels => {
  const days = [];
  hotels.forEach(e => {
    const df = dateFormat(e.fromDate);
    if(days.findIndex(e => e.name === df) === -1) {
      days.push({value: e.fromDate, name: df})
    }
  })
  return days;
});

export const getHotelsSortBy = createSelector(getHotels, getSortBy,
  (hotels, sortBy) => {
    if(sortBy === 'name') {
      return hotels.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      return hotels.sort((a, b) => a[sortBy] - b[sortBy]);
    }
  }
);

export const getFilteredHotels = createSelector(getDateFilter, getAirportFilter, getHotelsSortBy, getSortBy,
  (date, airport, hotels) => {
    return hotels.filter(hotel => {
      if(date > -1 && airport === '' && dateFormat(hotel.fromDate) === dateFormat(date)) {
        return true;
      }

      if(airport !== '' && date === -1 && hotel.departure === airport) {
        return true;
      }

      if(date > -1 && airport !== '' && dateFormat(hotel.fromDate) === dateFormat(date) && hotel.departure === airport) {
        return true;
      }

      if(date === -1 && airport === '') {
        return true;
      }

      return false;
    })
  }
);

export default reducer;
