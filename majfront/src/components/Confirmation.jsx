import React from 'react';
import { useNavigate } from 'react-router-dom';

function Confirmation() {
  const navigate = useNavigate();
  const bookingResponse = JSON.parse(localStorage.getItem('bookingResponse'));

  const handleGoBack = () => {
    navigate('/userDashboard'); // Navigate back to user dashboard
  };

  return (
    <div className="bg-gray-900 min-h-screen flex justify-center items-center p-4">
      <div className="bg-white p-6 shadow-lg rounded-lg max-w-md w-full">
        <h2 className="text-xl font-bold mb-4 text-center text-indigo-600">Booking Confirmed!</h2>
        
        <div className="border border-gray-300 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Here are your booking details:</h3>
          <p><strong>Bus Name:</strong> {bookingResponse.busName}</p>
          <p><strong>Departure Date:</strong> {bookingResponse.departureDate}</p>
          <p><strong>Departure Time:</strong> {bookingResponse.departureTime}</p>
          <p><strong>Source:</strong> {bookingResponse.source}</p>
          <p><strong>Destination:</strong> {bookingResponse.destination}</p>
          <p><strong>Number of Tickets:</strong> {bookingResponse.noOfTickets}</p>
          <p><strong>Total Amount:</strong> ₹ {bookingResponse.totalCalculated}</p>
        </div>

        <div className="text-center mt-4">
          <button
            onClick={handleGoBack}
            className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500 transition"
          >
            Go Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default Confirmation;
