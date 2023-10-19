import React, { Fragment } from 'react';
import { getAllEvents } from '../../dummy-data';
import EventList from '../../components/events/event-list';
import EventsSearch from '../../components/events/events-search';
import { useRouter } from 'next/router';



const AllEventsPage = () => {
  const events = getAllEvents();
  const router = useRouter();
  function findEventsHandler(year, month) {
    const url = `/events/${year}/${month}`
    router.push(url)
  }

  return (
    <Fragment>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events}></EventList>
    </Fragment> 
  );
};

export default AllEventsPage;
