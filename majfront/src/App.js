import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Learn from './components/Learn';
import Register from './components/Register';
import Login from './components/Login';
import './index.css';
import AdminLogin from './components/AdminLogin';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/learn-more" element={<Learn/>} />
          <Route path="/book-now" element={<Register/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
      </Routes>
      
    </div>
  );
}

export default App;
