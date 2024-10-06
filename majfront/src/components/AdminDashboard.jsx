import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function AdminDashboard() {
  const [userName, setUserName] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate for redirection

  useEffect(() => {
    // Get token from local storage
    const token = localStorage.getItem('token');

    // If token exists, make the API request
    if (token) {
      axios.post('http://localhost:8082/api/auth/getDetailsByToken', { token }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(response => {
        // Store the response in local storage as 'userDetails'
        localStorage.setItem('userDetails', JSON.stringify(response.data));
        console.log("User details stored in local storage:", response.data);

        // Update username in state
        setUserName(response.data.userName);
      })
      .catch(error => {
        console.error("Error fetching user details:", error);
      });
    } else {
      console.log("Token not found in local storage.");
    }
  }, []); // Empty dependency array ensures this runs once when the component loads

  const handleLogout = () => {
    // Remove the token and userDetails from local storage
    localStorage.removeItem('token');
    localStorage.removeItem('userDetails');

    // Navigate to the logout page
    navigate('/logout');
  };

  return (
    <div className="bg-gray-900 h-screen flex flex-col items-center justify-center">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white mb-10">
          Hi {userName || 'User'}, Welcome to Online Bus Reservation System!
        </h1>
        <p className="mb-12 text-lg sm:text-2xl text-gray-300">
          Manage your reservations, explore bus routes, and plan your next trip easily.
        </p>

        {/* Dashboard Options */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* Add Bus */}
          <a
            href="/addBus"
            className="px-6 py-4 bg-indigo-600 text-white text-lg font-medium rounded-lg shadow hover:bg-indigo-500 transition duration-300 ease-in-out"
          >
            Add Bus
          </a>

          {/* View Scheduled Buses */}
          <a
            href="/allBuses"
            className="px-6 py-4 bg-gray-600 text-white text-lg font-medium rounded-lg shadow hover:bg-gray-500 transition duration-300 ease-in-out"
          >
            View Buses Scheduled
          </a>

          {/* All Bookings */}
          <a
            href="/viewAllBookings"
            className="px-6 py-4 bg-green-600 text-white text-lg font-medium rounded-lg shadow hover:bg-green-500 transition duration-300 ease-in-out"
          >
            All Bookings
          </a>
        </div>

        {/* Logout Option */}
        <div className="mt-10">
          <button
            onClick={handleLogout}
            className="px-6 py-4 bg-red-600 text-white text-lg font-medium rounded-lg shadow hover:bg-red-500 transition duration-300 ease-in-out"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
