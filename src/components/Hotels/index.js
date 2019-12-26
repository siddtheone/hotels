import React, { useContext } from 'react';
import globalStateContext from '../../store';
import {
  getFilteredHotels,
  toggleOverview,
} from '../../reducer';
import Hotel from '../Hotel';
import styles from './hotels.module.css';

const Hotels = () => {
  const [state, dispatch] = useContext(globalStateContext);
  const hotels = getFilteredHotels(state);
  const onToggle = i => {dispatch(toggleOverview({index: i}))};

  return (
    <div className={styles.hotelsContainer}>
      {hotels.length > 0 && hotels.map(h => <Hotel key={h.imageIndex} {...h} onToggle={() => onToggle(h.imageIndex)} />)}
      {hotels.length === 0 && <div>No matching hotels for given filters</div>}
    </div>
  );
};

export default Hotels;
