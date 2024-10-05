import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Learn from './components/Learn';
import Register from './components/Register';
import Login from './components/Login';
import './index.css';
import AdminLogin from './components/AdminLogin';
import UserDashboard from './components/UserDashboard';
import AdminDashboard from './components/AdminDashboard';
import ViewBookings from './components/ViewBookings';
import ViewBuses from './components/ViewBuses';
import CancelBooking from './components/CancelBooking';
import Buses from './components/Buses';
import Billing from './components/Billing';
import Confirmation from './components/Confirmation';
import AddBus from './components/AddBus';
import ViewAllBookings from './components/ViewAllBookings';
import AllBuses from './components/AllBuses';


function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/learn-more" element={<Learn/>} />
          <Route path="/book-now" element={<Register/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/userDashboard" element={<UserDashboard />} />
          <Route path="/adminDashboard" element={<AdminDashboard />} />
          <Route path="/viewBookings" element={<ViewBookings />} />
          <Route path="/viewBuses" element={<ViewBuses />} />
          <Route path="/cancelBooking" element={<CancelBooking />} />
          <Route path="/buses" element={<Buses />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/confirm" element={<Confirmation />} />
          <Route path="/addBus" element={<AddBus />} />
          <Route path="/viewAllBookings" element={<ViewAllBookings />} />
          <Route path="/allBuses" element={<AllBuses />} />
          
      </Routes>
      
    </div>
  );
}

export default App;
