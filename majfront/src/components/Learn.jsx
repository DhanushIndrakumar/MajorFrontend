import React from 'react';

export default function Learn() {
  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white">
          Why Choose Online Bus Reservation?
        </h1>
        <p className="mt-6 text-lg sm:text-2xl text-gray-300">
          Discover the benefits of booking your bus tickets online. Explore the advantages that make online reservations convenient, fast, and reliable.
        </p>

        {/* Advantages Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-left">
            <h3 className="text-2xl font-semibold text-white mb-4">Advantages of Online Bus Reservation</h3>
            <ul className="list-disc list-inside text-lg text-gray-300 space-y-3">
              <li>Convenience of booking from anywhere, anytime.</li>
              <li>Instant confirmation and secure payment options.</li>
              <li>View seat availability and choose your preferred seat.</li>
              <li>Receive real-time updates on bus schedules and routes.</li>
              <li>Easy cancellations and refund policies.</li>
            </ul>
          </div>
        </div>
        {/* Back to Home Button */}
        <div className="mt-8">
          <a
            href="/"
            className="inline-block px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}
