export const testData = [{
  imageIndex: 1,
  name: 'Iberostar Grand Salome',
  guestList: {adults: 2, children: 2, infants: 1},
  departure: 'East Midlands',
  rating: 3,
  price: 9999,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
}, {
  imageIndex: 2,
  name: 'Aguamarina Golf Hotel',
  guestList: {adults: 2, children: 2, infants: 1},
  departure: 'Liverpool',
  rating: 4,
  price: 5678,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
}, {
  imageIndex: 3,
  name: 'Las Piramides Resort',
  guestList: {adults: 2, children: 2, infants: 1},
  departure: 'Manchester',
  rating: 5,
  price: 1234,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
}].map((data, index) => ({
  ...data,
  location: 'Costa Adeje, Tenerife',
  fromDate: Date.now() - (index * 1000000000),
  forDays: index + 1,
}));
