import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function ViewBookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // Hook for programmatic navigation

  useEffect(() => {
    const userDetails = JSON.parse(localStorage.getItem('userDetails')) || {};
    const userId = userDetails.userId;
    const token = localStorage.getItem('token'); // Get token from localStorage

    // Fetch bookings by userId with authorization token
    axios.get(`http://localhost:8082/api/user/getBookingsByUserId/${userId}`, {
      headers: {
        'Authorization': `Bearer ${token}` // Add token to request headers
      }
    })
      .then((response) => {
        setBookings(response.data); // Set the bookings data from the response
        setLoading(false); // Set loading to false after fetching the data
      })
      .catch((error) => {
        console.error('Error fetching bookings:', error);
        setLoading(false);
      });
  }, []);

  const handleCancel = (bookingId) => {
    // Pass bookingId as state when navigating to the CancelBooking component
    navigate('/cancelBooking', { state: { bookingId } });
  };

  if (loading) {
    return <div>Loading your bookings...</div>; // Display loading text while fetching
  }

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col justify-center items-center p-6">
      <div className="bg-white p-6 shadow-lg rounded-lg max-w-6xl w-full">
        <h2 className="text-2xl font-bold mb-6 text-center text-indigo-600">Your Bookings</h2>
        
        {bookings.length === 0 ? (
          <p className="text-center text-gray-700">You have made no Bookings!</p>
        ) : (
          <table className="min-w-full table-auto border-collapse border border-gray-300">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-4 py-2 border border-gray-300">Booking ID</th>
                <th className="px-4 py-2 border border-gray-300">Bus Name</th>
                <th className="px-4 py-2 border border-gray-300">Source</th>
                <th className="px-4 py-2 border border-gray-300">Destination</th>
                <th className="px-4 py-2 border border-gray-300">Departure Date</th>
                <th className="px-4 py-2 border border-gray-300">Departure Time</th>
                <th className="px-4 py-2 border border-gray-300">No. of Tickets</th>
                <th className="px-4 py-2 border border-gray-300">Total Amount</th>
                <th className="px-4 py-2 border border-gray-300">Action</th> {/* New Action column */}
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr key={booking.bookingsId} className="text-center">
                  <td className="px-4 py-2 border border-gray-300">{booking.bookingsId}</td>
                  <td className="px-4 py-2 border border-gray-300">{booking.busName}</td>
                  <td className="px-4 py-2 border border-gray-300">{booking.source}</td>
                  <td className="px-4 py-2 border border-gray-300">{booking.destination}</td>
                  <td className="px-4 py-2 border border-gray-300">{booking.departureDate}</td>
                  <td className="px-4 py-2 border border-gray-300">{booking.departureTime}</td>
                  <td className="px-4 py-2 border border-gray-300">{booking.noOfTickets}</td>
                  <td className="px-4 py-2 border border-gray-300">₹ {booking.totalCalculated}</td>
                  <td className="px-4 py-2 border border-gray-300">
                    <button
                      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                      onClick={() => handleCancel(booking.bookingsId)} // Handle cancel action
                    >
                      Cancel
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {/* Back to Home Link */}
        <div className="text-center mt-6">
          <button 
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
            onClick={() => navigate('/userDashboard')}
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
