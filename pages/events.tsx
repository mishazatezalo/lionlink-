import React from 'react';
import { GetServerSideProps } from 'next';
import axios from 'axios';

interface Event {
  _id: string;
  title: string;
  description: string;
  date: string;
}

interface EventsProps {
  events: Event[];
}

const Events: React.FC<EventsProps> = ({ events }) => {
  return (
    <div className="events-page">
      <h1>Upcoming Events</h1>
      <div className="events-list">
        {events.map((event) => (
          <div key={event._id} className="event-card">
            <h2>{event.title}</h2>
            <p>{event.description}</p>
            <p>Date: {new Date(event.date).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const response = await axios.get<Event[]>(`${process.env.API_URL}/api/events`);
    return {
      props: {
        events: response.data,
      },
    };
  } catch (error) {
    console.error('Error fetching events:', error);
    return {
      props: {
        events: [],
      },
    };
  }
};

export default Events;

