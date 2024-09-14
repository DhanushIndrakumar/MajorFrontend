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

        {/* Additional Images Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <img
              className="w-full h-64 object-cover rounded-lg"
              src="https://media.istockphoto.com/id/1137539144/photo/view-from-back-seat-at-coach-bus-more-seats-in-blurred-background.jpg?s=612x612&w=0&k=20&c=0vmibUwm2ntH4xT8L2te2grpYimIF8A01h3XZmWIKzY="
              alt="Choose your seat"
            />
            <p className="text-center mt-4 text-lg text-gray-300">Choose your seat</p>
          </div>
          <div>
            <img
              className="w-full h-64 object-cover rounded-lg"
              src="https://static.vecteezy.com/system/resources/previews/002/744/886/original/real-time-schedule-illustration-vector.jpg"
              alt="Real-time updates"
            />
            <p className="text-center mt-4 text-lg text-gray-300">Real-time schedule updates</p>
          </div>
          <div>
            <img
              className="w-full h-64 object-cover rounded-lg"
              src="https://cdn.prod.website-files.com/627bcc3621084c83da56b474/641491ddeffdd221f7aa117b_what%20is%20a%20secure%20payment.jpg"
              alt="Secure payment"
            />
            <p className="text-center mt-4 text-lg text-gray-300">Secure online payment</p>
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
