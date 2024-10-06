import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function ViewBuses() {
  const [formData, setFormData] = useState({
    departureDate: '',
    source: '',
    destination: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); // To navigate to another page

  // Set minimum date to today’s date
  const getTodayDate = () => {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
    const year = today.getFullYear();
    return `${year}-${month}-${day}`;
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Format date to 'dd-MM-yyyy'
  const formatDateToDDMMYYYY = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Retrieve token from local storage
    const token = localStorage.getItem('token');

    if (!token) {
      console.error("Token not found in local storage.");
      return;
    }

    // Format the departureDate in dd-MM-yyyy
    const formattedFormData = {
      ...formData,
      departureDate: formatDateToDDMMYYYY(formData.departureDate), // format date
    };

    try {
      // Make POST request to the API
      const response = await axios.post('http://localhost:8082/api/user/getBuses', formattedFormData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const buses = response.data;

      if (buses && buses.length > 0) {
        // Store the response data in local storage as 'buses'
        localStorage.setItem('buses', JSON.stringify(buses));
        console.log("Buses data stored in local storage:", buses);

        // Navigate to the buses page
        navigate('/buses'); // Assuming you have a route setup for this
      } else {
        // If no buses were found, show the error message
        setErrorMessage('Sorry, No Buses!');
      }
      
    } catch (error) {
      console.error("Error fetching buses:", error);
      setErrorMessage('Error fetching buses. Please try again.');
    }
  };

  return (
    <div className="bg-gray-900 h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
        <h2 className="text-2xl font-bold mb-6 text-center text-indigo-600">Search Buses</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Departure Date */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Departure Date</label>
            <input
              type="date"
              name="departureDate"
              value={formData.departureDate}
              onChange={handleInputChange}
              required
              min={getTodayDate()}  // Disable today’s date
              className="w-full px-4 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {/* Source Dropdown */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Source</label>
            <select
              name="source"
              value={formData.source}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="">Select Source</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Chennai">Chennai</option>
              <option value="Hyderabad">Hyderabad</option>
              <option value="Delhi">Delhi</option>
              <option value="Kolkata">Kolkata</option>
              <option value="Tirupati">Tirupati</option>
            </select>
          </div>

          {/* Destination Dropdown */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Destination</label>
            <select
              name="destination"
              value={formData.destination}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="">Select Destination</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Chennai">Chennai</option>
              <option value="Hyderabad">Hyderabad</option>
              <option value="Delhi">Delhi</option>
              <option value="Kolkata">Kolkata</option>
              <option value="Tirupati">Tirupati</option>
            </select>
          </div>

          {/* Error Message */}
          {errorMessage && (
            <div className="text-red-500 text-center">
              {errorMessage}
            </div>
          )}

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500 transition"
            >
              Search
            </button>
          </div>
        </form>

        {/* Back to Home Button */}
        <div className="mt-8 text-center">
          <a
            href="/userDashboard"
            className="px-6 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-500 transition"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}

export default ViewBuses;
