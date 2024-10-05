import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

export default function AddBus() {
  const [busData, setBusData] = useState({
    departureDate: '',
    departureTime: '',
    source: '',
    destination: '',
    price: '',
    busName: '',
    noOfSeatsAvailable: ''
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setBusData({ ...busData, [e.target.name]: e.target.value });
  };

  // Function to format the date to 'dd-MM-yyyy'
  const formatDate = (date) => {
    const dateObj = new Date(date);
    const day = String(dateObj.getDate()).padStart(2, '0');
    const month = String(dateObj.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed
    const year = dateObj.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const token = localStorage.getItem('token'); // Get token from localStorage

    // Prepare the data in the required format
    const formattedBusData = {
      ...busData,
      departureDate: formatDate(busData.departureDate),  // Format date to dd-MM-yyyy
      price: parseFloat(busData.price),  // Ensure price is a number
      noOfSeatsAvailable: parseInt(busData.noOfSeatsAvailable, 10)  // Ensure seats are a number
    };

    axios.post('http://localhost:8082/api/admin/addBus', formattedBusData, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
      .then((response) => {
        setSuccessMessage('Bus added successfully');
        setErrorMessage('');
      })
      .catch((error) => {
        setErrorMessage("Couldn't add bus");
        setSuccessMessage('');
      });
  };

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col justify-center items-center p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl w-full">
        <h2 className="text-2xl font-bold mb-6 text-center text-indigo-600">Add a New Bus</h2>

        {errorMessage && (
          <p className="text-red-500 text-center mb-4">{errorMessage}</p>
        )}

        {successMessage && (
          <p className="text-green-500 text-center mb-4">{successMessage}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            {/* Departure Date */}
            <div className="w-full">
              <label className="block text-gray-700 text-sm mb-2">Departure Date</label>
              <input
                type="date"
                name="departureDate"
                value={busData.departureDate}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
              />
            </div>

            {/* Departure Time */}
            <div className="w-full">
              <label className="block text-gray-700 text-sm mb-2">Departure Time</label>
              <input
                type="time"
                name="departureTime"
                value={busData.departureTime}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            {/* Source */}
            <div className="w-full">
              <label className="block text-gray-700 text-sm mb-2">Source</label>
              <input
                type="text"
                name="source"
                value={busData.source}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
              />
            </div>

            {/* Destination */}
            <div className="w-full">
              <label className="block text-gray-700 text-sm mb-2">Destination</label>
              <input
                type="text"
                name="destination"
                value={busData.destination}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            {/* Price */}
            <div className="w-full">
              <label className="block text-gray-700 text-sm mb-2">Price</label>
              <input
                type="number"
                name="price"
                value={busData.price}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
                step="0.01"
              />
            </div>

            {/* Bus Name */}
            <div className="w-full">
              <label className="block text-gray-700 text-sm mb-2">Bus Name</label>
              <input
                type="text"
                name="busName"
                value={busData.busName}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
              />
            </div>
          </div>

          {/* No. of Seats Available */}
          <div>
            <label className="block text-gray-700 text-sm mb-2">Number of Seats Available</label>
            <input
              type="number"
              name="noOfSeatsAvailable"
              value={busData.noOfSeatsAvailable}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
              min="1"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-300"
            >
              Add Bus
            </button>
          </div>
        </form>

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
