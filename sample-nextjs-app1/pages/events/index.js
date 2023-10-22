import React, { Fragment } from 'react';

import EventList from '../../components/events/event-list';
import EventsSearch from '../../components/events/events-search';
import { useRouter } from 'next/router';
import { getAllEvents } from '../../helpers/api-util';
import Head from 'next/head';

const AllEventsPage = (props) => {
  const {events} = props;

  const router = useRouter();
  function findEventsHandler(year, month) {
    const url = `/events/${year}/${month}`;
    router.push(url);
  }

  return (
    <Fragment>
       <Head>
        <title>All Events</title>
        <meta 
        name='description'
        content='This is from kanis eents page'/>
      </Head>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events}></EventList>
    </Fragment>
  );
};

export async function getStaticProps() {
  const events = await getAllEvents();

  return {
    props: {
      events: events,
    },
    revalidate: 60
  };
}

export default AllEventsPage;
