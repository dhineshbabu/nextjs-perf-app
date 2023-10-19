import React from 'react';
import EventList from '../components/events/event-list';
import { getFeaturedEvents } from '../dummy-data';


const HomePage = () => {
  const featuredEvents = getFeaturedEvents();
  console.log(featuredEvents)

  return (
    <div>
      <EventList items={featuredEvents}></EventList>
    </div>
  );
};

export default HomePage;
