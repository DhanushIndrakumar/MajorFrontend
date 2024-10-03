import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // Import useNavigate

export default function Billing() {
  const location = useLocation(); // Get the current location
  const navigate = useNavigate(); // Initialize navigate
  const [bookingData, setBookingData] = useState({
    departureDate: '',
    departureTime: '',
    source: '',
    destination: '',
    price: 0,
    busName: '',
    noOfTickets: 1, // Default value
    totalCalculated: 0,
    busId: 0,
    email: '', // To be filled from user details
  });

  useEffect(() => {
    // Get user details from local storage
    const userDetails = JSON.parse(localStorage.getItem('userDetails')) || {};

    // Get selected bus ID from location state
    const selectedBusId = location.state?.busId; // Access busId from location state
    const storedBuses = localStorage.getItem('buses');
    const buses = storedBuses ? JSON.parse(storedBuses) : [];

    // Find the selected bus by ID and populate bookingData
    const selectedBus = buses.find(bus => bus.busId === Number(selectedBusId));
    
    if (selectedBus) {
      setBookingData({
        ...bookingData,
        departureDate: selectedBus.departureDate,
        departureTime: selectedBus.departureTime,
        source: selectedBus.source,
        destination: selectedBus.destination,
        price: selectedBus.price,
        busName: selectedBus.busName,
        busId: selectedBus.busId,
        email: userDetails.email || '', // Use user email from retrieved userDetails
      });
    } else {
      console.error('No bus found with the selected ID');
    }
  }, [location.state]); // Add location.state as a dependency

  // Update total calculated when number of tickets changes
  const handleTicketsChange = (e) => {
    const noOfTickets = Number(e.target.value);
    setBookingData((prev) => ({
      ...prev,
      noOfTickets,
      totalCalculated: (prev.price * noOfTickets).toFixed(2), // Calculate total
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Get user details from local storage for userId and token
    const userDetails = JSON.parse(localStorage.getItem('userDetails'));
    const userId = userDetails.userId;
    const token = localStorage.getItem('token') // Assuming token is stored in local storage

    try {
      // Send a POST request to the backend
      const response = await fetch(`http://localhost:8082/api/user/bookBus/${userId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` // Set the token for authentication
        },
        body: JSON.stringify(bookingData) // Send the bookingData as JSON
      });

      if (!response.ok) {
        throw new Error('Failed to book the bus');
      }

      const bookingResponse = await response.json(); // Get the response body
      localStorage.setItem('bookingResponse', JSON.stringify(bookingResponse)); // Store the response in local storage
      console.log('Booking successful:', bookingResponse); // Log success message
      navigate('/confirm'); // Navigate to the confirm page
    } catch (error) {
      console.error('Error booking bus:', error); // Log error message
      // You can add additional error handling here if needed
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen flex justify-center items-center p-4">
      <div className="bg-white p-4 shadow-lg rounded-lg max-w-md w-full">
        <h2 className="text-xl font-bold mb-4 text-center text-indigo-600">Billing</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Departure Date */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Departure Date</label>
            <input
              type="text"
              name="departureDate"
              value={bookingData.departureDate}
              readOnly
              className="w-full px-3 py-2 border rounded-md bg-gray-200"
            />
          </div>

          {/* Departure Time */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Departure Time</label>
            <input
              type="text"
              name="departureTime"
              value={bookingData.departureTime}
              readOnly
              className="w-full px-3 py-2 border rounded-md bg-gray-200"
            />
          </div>

          {/* Source */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Source</label>
            <input
              type="text"
              name="source"
              value={bookingData.source}
              readOnly
              className="w-full px-3 py-2 border rounded-md bg-gray-200"
            />
          </div>

          {/* Destination */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Destination</label>
            <input
              type="text"
              name="destination"
              value={bookingData.destination}
              readOnly
              className="w-full px-3 py-2 border rounded-md bg-gray-200"
            />
          </div>

          {/* Price */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Price</label>
            <input
              type="text"
              name="price"
              value={`₹ ${bookingData.price}`}
              readOnly
              className="w-full px-3 py-2 border rounded-md bg-gray-200"
            />
          </div>

          {/* Bus Name */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Bus Name</label>
            <input
              type="text"
              name="busName"
              value={bookingData.busName}
              readOnly
              className="w-full px-3 py-2 border rounded-md bg-gray-200"
            />
          </div>

          {/* Number of Tickets */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Number of Tickets</label>
            <input
              type="number"
              name="noOfTickets"
              value={bookingData.noOfTickets}
              onChange={handleTicketsChange}
              min="1"
              className="w-full px-3 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {/* Total Calculated */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Total</label>
            <input
              type="text"
              name="totalCalculated"
              value={`₹ ${bookingData.totalCalculated}`}
              readOnly
              className="w-full px-3 py-2 border rounded-md bg-gray-200"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={bookingData.email}
              readOnly
              className="w-full px-3 py-2 border rounded-md bg-gray-200"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500 transition"
            >
              Confirm Booking
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
