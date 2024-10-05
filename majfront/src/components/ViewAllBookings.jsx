import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {  Link } from 'react-router-dom';


export default function ViewAllBookings() {
  const [bookings, setBookings] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token'); // Get token from localStorage
    axios.get('http://localhost:8082/api/admin/getBookings', {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    })
      .then((response) => {
        setBookings(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Error fetching bookings:', error.response?.data || error.message);
        setErrorMessage('Error fetching bookings');
      });
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen p-6 flex flex-col justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-6xl w-full">
        <h2 className="text-2xl font-bold mb-6 text-center text-indigo-600">All Bookings</h2>

        {errorMessage && (
          <p className="text-red-500 text-center mb-4">{errorMessage}</p>
        )}

        {bookings.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="table-auto w-full text-left border-collapse">
              <thead>
                <tr className="bg-indigo-600 text-white">
                  <th className="px-4 py-2">Booking ID</th>
                  <th className="px-4 py-2">Bus Name</th>
                  <th className="px-4 py-2">Source</th>
                  <th className="px-4 py-2">Destination</th>
                  <th className="px-4 py-2">Departure Date</th>
                  <th className="px-4 py-2">Departure Time</th>
                  <th className="px-4 py-2">No. of Tickets</th>
                  <th className="px-4 py-2">Total Calculated</th>
                  <th className="px-4 py-2">User ID</th>
                  <th className="px-4 py-2">Bus ID</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking) => (
                  <tr key={booking.bookingsId} className="border-b">
                    <td className="px-4 py-2">{booking.bookingsId}</td>
                    <td className="px-4 py-2">{booking.busName}</td>
                    <td className="px-4 py-2">{booking.source}</td>
                    <td className="px-4 py-2">{booking.destination}</td>
                    <td className="px-4 py-2">{booking.departureDate}</td>
                    <td className="px-4 py-2">{booking.departureTime}</td>
                    <td className="px-4 py-2">{booking.noOfTickets}</td>
                    <td className="px-4 py-2">{booking.totalCalculated}</td>
                    <td className="px-4 py-2">{booking.userId}</td>
                    <td className="px-4 py-2">{booking.busId}</td>
                   
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-gray-600 text-center">No bookings found.</p>
        )}
        {/* Back to Home link */}
       <div className="text-center mt-6">
          <Link to="/adminDashboard" className="text-indigo-600 hover:underline">
            Back to Home
          </Link>
        </div>
      </div>
       
    </div>
  );
}
