import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

export default function Buses() {
  const [buses, setBuses] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate

  // Retrieve bus data from local storage when the component mounts
  useEffect(() => {
    const storedBuses = localStorage.getItem('buses');
    if (storedBuses) {
      setBuses(JSON.parse(storedBuses));
    }
  }, []);

  // Handle book button click
  const handleBook = (busId) => {
    // Navigate to the /billing page
    navigate('/billing', { state: { busId } }); // Optionally, you can pass the busId to the billing page if needed
  };

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col justify-center items-center">
      <div className="bg-white p-8 shadow-lg rounded-lg max-w-5xl w-full">
        <h2 className="text-2xl font-bold mb-6 text-center text-indigo-600">Available Buses</h2>

        {buses.length > 0 ? (
          <table className="min-w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2">Bus ID</th>
                <th className="border border-gray-300 px-4 py-2">Bus Name</th>
                <th className="border border-gray-300 px-4 py-2">Departure Date</th>
                <th className="border border-gray-300 px-4 py-2">Departure Time</th>
                <th className="border border-gray-300 px-4 py-2">Destination</th>
                <th className="border border-gray-300 px-4 py-2">Seats Available</th>
                <th className="border border-gray-300 px-4 py-2">Price</th>
                <th className="border border-gray-300 px-4 py-2">Source</th>
                <th className="border border-gray-300 px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {buses.map((bus) => (
                <tr key={bus.busId} className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">{bus.busId}</td>
                  <td className="border border-gray-300 px-4 py-2">{bus.busName}</td>
                  <td className="border border-gray-300 px-4 py-2">{bus.departureDate}</td>
                  <td className="border border-gray-300 px-4 py-2">{bus.departureTime}</td>
                  <td className="border border-gray-300 px-4 py-2">{bus.destination}</td>
                  <td className="border border-gray-300 px-4 py-2">{bus.noOfSeatsAvailable}</td>
                  <td className="border border-gray-300 px-4 py-2">${bus.price}</td>
                  <td className="border border-gray-300 px-4 py-2">{bus.source}</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    <button
                      className="bg-indigo-600 text-white px-4 py-1 rounded hover:bg-indigo-500"
                      onClick={() => handleBook(bus.busId)}
                    >
                      Book
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="text-center text-gray-700">Sorry, No Buses Available!</div>
        )}

        <div className="mt-6 text-center">
          <button
            onClick={() => navigate('/viewBuses')}
            className="bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-500"
          >
            Back to Search
          </button>
        </div>
      </div>
    </div>
  );
}
