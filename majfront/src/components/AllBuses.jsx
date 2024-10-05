import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function AllBuses() {
  const [buses, setBuses] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  
  // Get token from local storage
  const token = localStorage.getItem('token');

  useEffect(() => {
    // Fetch all buses when the component is mounted
    axios.get('http://localhost:8082/api/admin/getBuses', {
      headers: {
        Authorization: `Bearer ${token}` // Include the token in the request headers
      }
    })
      .then((response) => {
        setBuses(response.data);
      })
      .catch((error) => {
        console.error('Error fetching buses:', error.response?.data || error.message);
        setErrorMessage('Error fetching buses');
      });
  }, [token]);

  

  return (
    <div className="bg-gray-900 min-h-screen p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center text-indigo-600">Scheduled Buses</h2>

        {errorMessage && (
          <p className="text-red-500 text-center mb-4">{errorMessage}</p>
        )}

        {buses.length === 0 ? (
          <p className="text-center text-gray-600">No Buses Scheduled!</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="px-4 py-2 border">Bus Name</th>
                  <th className="px-4 py-2 border">Departure Date</th>
                  <th className="px-4 py-2 border">Departure Time</th>
                  <th className="px-4 py-2 border">Source</th>
                  <th className="px-4 py-2 border">Destination</th>
                  <th className="px-4 py-2 border">Price</th>
                  <th className="px-4 py-2 border">Seats Available</th>
                  
                </tr>
              </thead>
              <tbody>
                {buses.map((bus) => (
                  <tr key={bus.busId}>
                    <td className="px-4 py-2 border">{bus.busName}</td>
                    <td className="px-4 py-2 border">{bus.departureDate}</td>
                    <td className="px-4 py-2 border">{bus.departureTime}</td>
                    <td className="px-4 py-2 border">{bus.source}</td>
                    <td className="px-4 py-2 border">{bus.destination}</td>
                    <td className="px-4 py-2 border">${bus.price}</td>
                    <td className="px-4 py-2 border">{bus.noOfSeatsAvailable}</td>
                    
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <div className="mt-6 text-center">
          <button
            onClick={() => navigate('/adminDashboard')}
            className="bg-indigo-600 text-white py-2 px-4 rounded-lg"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
