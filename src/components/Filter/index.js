import React, {useContext} from 'react';
import globalStateContext from '../../store';
import styles from './filter.module.css';
import {
  getSortBy, changeUI,
  getDeparturesFromHotels,
  getHolidayDateFromHotels,
  getDateFilter, getAirportFilter,
} from '../../reducer';

const Filter = () => {
  const [state, dispatch] = useContext(globalStateContext);
  const sortBy = getSortBy(state);
  const dateFilter = getDateFilter(state);
  const airportFilter = getAirportFilter(state);
  const airports = getDeparturesFromHotels(state);
  const fromDates = getHolidayDateFromHotels(state);

  const onSort = sortBy => () => dispatch(changeUI({name: 'sortBy', value: sortBy}));
  const onFilter = filterBy => ({target: {value}}) => dispatch(changeUI({name: filterBy, value: isNaN(parseInt(value)) ? value : parseInt(value, 10)}));

  return (
    <div className={styles.filter}>
      <div
        className={sortBy ==='name' ? `${styles.filterItems} ${styles.active}` : styles.filterItems}
        onClick={onSort('name')}
      >
        <div>sort <b>alphabatically</b></div>
        <div>A-Z</div>
      </div>
      <div
        className={sortBy ==='price' ? `${styles.filterItems} ${styles.active}` : styles.filterItems}
        onClick={onSort('price')}
      >
        <div>sort by <b>price</b></div>
        <div>￡</div>
      </div>
      <div
        className={sortBy ==='rating' ? `${styles.filterItems} ${styles.active}` : styles.filterItems}
        onClick={onSort('rating')}
      >
        <div>sort by <b>star rating</b></div>
        <div>★</div>
      </div>
      <div className={styles.filterTitle}>Filter by date</div>
      <select
        className={styles.filterItems}
        onChange={onFilter('dateFilter')}
        value={dateFilter}
      >
        <option value={-1}>Please select</option>
        {fromDates.map(fd => <option key={fd.value} value={fd.value}>{fd.name}</option>)}
      </select>
      <div className={styles.filterTitle}>Filter by airport</div>
      <select
        className={styles.filterItems}
        onChange={onFilter('airportFilter')}
        value={airportFilter}
      >
        <option value="">Please select</option>
        {airports.map(ap => <option key={ap} value={ap}>{ap}</option>)}
      </select>
    </div>
  )
};

export default Filter;
