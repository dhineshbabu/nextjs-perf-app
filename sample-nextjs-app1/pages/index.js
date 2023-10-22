import React from 'react';
import EventList from '../components/events/event-list';
import Head from 'next/head';

import { getFeaturedEvents } from '../helpers/api-util';

const HomePage = (props) => {
  return (
    <div>
      <Head>
        <title>Kani's Tech Events</title>
        <meta 
        name='description'
        content='This is from kanis eents page'/>
      </Head>
      <EventList items={props.events}></EventList>
    </div>
  );
};

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800
  };
}



export default HomePage;
