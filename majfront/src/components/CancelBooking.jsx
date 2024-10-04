import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

function CancelBooking() {
  const location = useLocation(); // Access location to get state
  const { bookingId } = location.state || {}; // Get bookingId from state
  const [responseMessage, setResponseMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token'); // Get token from localStorage

    // Check if bookingId is valid before making the API call
    if (!bookingId) {
      setResponseMessage('Invalid booking ID. Please check your link.');
      setLoading(false);
      return; // Exit early if bookingId is not valid
    }

    // Call API to cancel booking by bookingId
    axios.delete(`http://localhost:8082/api/user/cancelBookingsByBookingsId/${bookingId}`, {
      headers: {
        'Authorization': `Bearer ${token}` // Add token to request headers
      }
    })
    .then((response) => {
      // Set the response message after cancellation
      setResponseMessage(response.data.message || 'Booking cancelled successfully.');
    })
    .catch((error) => {
      console.error('Error cancelling booking:', error);
      setResponseMessage('Error cancelling the booking. Please try again later.');
    })
    .finally(() => {
      setLoading(false); // Set loading to false after API call is done
    });
  }, [bookingId]);

  if (loading) {
    return <div className="text-center text-white">Processing cancellation...</div>;
  }

  return (
    <div className="bg-gray-900 h-screen flex flex-col items-center justify-center p-6">
      <div className="bg-white p-6 shadow-lg rounded-lg max-w-2xl w-full text-center">
        <h2 className="text-2xl font-bold mb-6 text-red-600">Cancel Booking</h2>
        <p className="text-lg mb-6 text-gray-700">{responseMessage}</p>
        
        {/* Back to Home Link */}
        <button 
          className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition"
          onClick={() => navigate('/userDashboard')}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}

export default CancelBooking;
