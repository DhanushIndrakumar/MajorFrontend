import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Learn from './components/Learn';
import './index.css';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/learn-more" element={<Learn/>} />
      </Routes>
      
    </div>
  );
}

export default App;
