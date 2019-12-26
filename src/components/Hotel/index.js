import React from 'react';
import {dateFormat} from '../../helpers/utils';
import styles from './hotel.module.css';

const Hotel =  ({
  imageIndex,
  name,
  location,
  rating,
  guestList: {adults, children, infants},
  fromDate,
  forDays,
  departure,
  price,
  description,
  expanded,
  onToggle
}) => {
  return (
    <div className={styles.hotelContainer}>
      <div className={styles.header}>
        <div className={styles.img}>
          <img src={require(`../../assets/hotel-image-${imageIndex}.png`)} alt={`${name}`} />
          <span className={`${styles.overviewBtn} ${expanded ? styles.rotateDown : ''}`} onClick={onToggle}>
            <b>Read {!expanded ? 'more' : 'less'}</b> about this hotel
          </span>
        </div>
        <div className={styles.details}>
          <h3 className={styles.name}>{name}</h3>
          <p className={styles.location}>{location}</p>
          <p className={styles.rating}>{decodeURI('★ '.repeat(rating))}</p>
          <p className={styles.guests}>
            <b>{adults}</b> Adults, <b>{children}</b> childrens & <b>{infants}</b> infant
          </p>
          <p className={styles.duration}><b>{dateFormat(fromDate)}</b> for <b>{forDays} days</b></p>
          <p className={styles.boarding}>departing from <b>{departure}</b></p>
          <button className={styles.btn}>Book now <br /> <span className={styles.amount}>£ {price}</span></button>
        </div>
      </div>
      {expanded && <div className={styles.description}>
        <h4 className={styles.overviewHeading}>Overview</h4>
        <p>{description}</p>
      </div>}
    </div>
  );
}

export default Hotel;
