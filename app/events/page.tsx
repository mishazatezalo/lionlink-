import React from 'react'
import { Event } from '@/types/event'

async function getEvents(): Promise<Event[]> {
  // In a real application, this would be an API call
  return [
    { id: '1', title: 'Football Game vs. Michigan', description: 'Annual rivalry game', date: '2024-10-15' },
    { id: '2', title: 'Club Meeting: Robotics Club', description: 'Weekly meeting for robotics enthusiasts', date: '2024-10-16' },
    { id: '3', title: 'Career Fair', description: 'Connect with potential employers', date: '2024-10-20' },
  ]
}

export default async function Events() {
  const events = await getEvents()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Upcoming Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <div key={event.id} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-2">{event.title}</h2>
            <p className="text-gray-600 mb-4">{event.description}</p>
            <p className="text-sm text-gray-500">Date: {new Date(event.date).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

