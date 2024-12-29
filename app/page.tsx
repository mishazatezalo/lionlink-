import React from 'react'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Welcome to LionLink</h1>
      <p className="text-xl mb-4">Connect with fellow students and discover exciting events!</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Latest Events</h2>
          <ul className="space-y-2">
            <li>Football Game vs. Michigan - October 15, 2024</li>
            <li>Club Meeting: Robotics Club - October 16, 2024</li>
            <li>Career Fair - October 20, 2024</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Get Started</h2>
          <p className="mb-4">Complete your profile and start connecting with other students!</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
            Update Profile
          </button>
        </div>
      </div>
    </div>
  )
}

