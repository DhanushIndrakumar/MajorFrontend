import React from 'react';

export default function Home() {
  return (
    <div className="bg-gray-900 h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white">
          Online Bus Reservation System
        </h1>
        <p className="mt-6 text-lg sm:text-2xl text-gray-300">
          Book your tickets easily with just a few clicks. Explore bus routes, check availability, and confirm your travel plans from the comfort of your home.
        </p>
        <div className="mt-8">
          <a
            href="/book-now"
            className="inline-block px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500"
          >
            Book Now
          </a>
          <a
            href="/learn-more"
            className="ml-4 inline-block px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-200"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
}
