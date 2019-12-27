import reducer, {
  TOGGLE_OVERVIEW,
  toggleOverview,
  CHANGE_UI,
  changeUI,
  initialState,
  getHotels,
  getSortBy,
  getDateFilter,
  getAirportFilter,
  getDeparturesFromHotels,
  getHolidayDateFromHotels,
  getHotelsSortBy,
  getFilteredHotels,
} from '../reducer';

import globalStateMock from '../mocks/storeMock';

describe("reducer reducer", () => {
  it("should return default state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it("should return default state for not serviced action", () => {
    expect(reducer(initialState, { type: "SOME_ACTION" })).toEqual(initialState);
  });

  it("should return correct state for CHANGE_UI action", () => {
    expect(
      reducer(initialState, {
        type: CHANGE_UI,
        payload: {
          name: "sortBy",
          value: 'rating'
        }
      })
    ).toEqual({ ...initialState, sortBy: 'rating' });
  });

  it("should toggle overview of hotel with imageIndex 1", () => {
    const testState = {hotels: [{
      imageIndex: 1,
      expanded: true,
    }]};

    const toggleToFalse = reducer(testState, {
      type: TOGGLE_OVERVIEW,
      payload: {index: 1}
    });

    const toggleToTrue = reducer(toggleToFalse, {
      type: TOGGLE_OVERVIEW,
      payload: {index: 1}
    });

    expect(toggleToFalse).toEqual({hotels: [{
      imageIndex: 1,
      expanded: false,
    }]});

    expect(toggleToTrue).toEqual({hotels: [{
      imageIndex: 1,
      expanded: true,
    }]});
  });

  it("should create correct action by toggleOverview ", () => {
    const expectedAction = { payload: { index: 5 }, type: TOGGLE_OVERVIEW };
    expect(
      toggleOverview({
        index: 5
      })
    ).toEqual(expectedAction);
  });

  it("should create correct action by changeUi ", () => {
    const expectedAction = { payload: { name: "sortBy", value: 'rating' }, type: CHANGE_UI };
    expect(
      changeUI({
        name: "sortBy",
        value: 'rating'
      })
    ).toEqual(expectedAction);
  });

  describe("selectors should return asked data", () => {
    it("should return hotels", () => {
      expect(getHotels(globalStateMock)).toEqual(globalStateMock.hotels);
    });
    it("should return current sort key", () => {
      expect(getSortBy(globalStateMock)).toEqual(globalStateMock.sortBy);
    });
    it("should return date filter key", () => {
      expect(getDateFilter(globalStateMock)).toEqual(globalStateMock.dateFilter);
    });
    it("should return airport filter", () => {
      expect(getAirportFilter(globalStateMock)).toEqual(globalStateMock.airportFilter);
    });

    it('Should get departures list from list of hotels', () => {
      expect(getDeparturesFromHotels(globalStateMock)).toEqual([
        'Liverpool',
        'East Midlands',
        'Manchester'
      ]);
    });

    it('Should get holidays list dayswise', () => {
      expect(getHolidayDateFromHotels(globalStateMock)).toEqual([
        {name: '26th Dec 2019', value: 1577383271716},
        {name: '27th Dec 2019', value: 1577433271716}
      ]);
    });

    it('Should sort hotels by alphabates', () => {
      expect(getHotelsSortBy(globalStateMock)).toEqual(globalStateMock.hotels);
    });

    it('Should sort hotels by rating', () => {
      expect(getHotelsSortBy({
        ...globalStateMock,
        sortBy: 'rating',
      })[0].name).toEqual('Iberostar Grand Salome');
    });

    it('Should sort hotels by price', () => {
      expect(getHotelsSortBy({
        ...globalStateMock,
        sortBy: 'price',
      })[0].name).toEqual('Las Piramides Resort');
    });

    it('Should filter hotels for Liverpool', () => {
      expect(getFilteredHotels({
        ...globalStateMock,
        airportFilter: 'Manchester',
      })[0].name).toEqual('Las Piramides Resort');
    });
  });

});
