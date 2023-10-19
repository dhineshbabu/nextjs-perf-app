import Link from 'next/link';
import React from 'react';
import classes from './event-item.module.css';
import Button from '../ui/button';
import DateIcon from '../icons/date-icon';
import AddressIcon from '../icons/address-icon';
import ArrowRightIcon from '../icons/arrow-right-icon';


const EventItem = (props) => {
  const { title, image, date, location, id } = props;

  const readableDate = new Date(date).toLocaleDateString('en-us', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const readableAddress = location.replace(', ', '\n');
  const exploreLink = `/events/${id}`;

  return (
    <li className={classes.item}>
      <img src={'/' + image} alt='' />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
        </div>
        <div className={classes.date}>
    <DateIcon></DateIcon>
          <time>{readableDate}</time>
        </div>
        <div className={classes.address}>
          <AddressIcon></AddressIcon>
          <address>{readableAddress}</address>
        </div>
        <div className={classes.actions}>
          <Button link={exploreLink}>
            <span>Explore Event</span>
          <span className={classes.icon}>
            <ArrowRightIcon />
          </span>
          </Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
