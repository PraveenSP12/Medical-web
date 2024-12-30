import React from 'react';  
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import '@fortawesome/fontawesome-free/css/all.min.css';  
import Sidebar from './Sidebar';  
import Dashboard from './Dashboard';  
import AddPatient from './AddPatient'; // Import AddPatient component  
  
function App() {  
  return (  
    <Router>  
      <div className="app">  
        <Sidebar />  
        <div className="content">  
          <Routes>  
            <Route path="/" element={<Dashboard />} />  
            <Route path="/add-patients" element={<AddPatient />} /> {/* Add route for AddPatient */}  
          </Routes>  
        </div>  
      </div>  
    </Router>  
  );  
}  
  
export default App;  