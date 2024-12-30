import React, { useState } from 'react';  
import './Dashboard.css'; // Reuse the same CSS  
import Sidebar from './Sidebar';  
import AddPatientForm from './AddPatientForm'; // Import the form component  
  
function AddPatient() {  
  const [showForm, setShowForm] = useState(false);  
  
  const handleAddPatientClick = () => {  
    setShowForm(true); // Show the form when button is clicked  
  };  
  
  return (  
    <div className="dashboard">  
      <header className="header">  
        <h1>Kandasamy Hospital</h1>  
        <input type="text" placeholder="Search with name" />  
        <div className="icons">  
          <span>🌐</span>  
          <span>👤</span>  
        </div>  
      </header>  
      <main className="content">  
        <h2>Add New Patient</h2>  
        <button onClick={handleAddPatientClick}>Add Patient</button>  
        {showForm && <AddPatientForm onClose={() => setShowForm(false)} />}  
      </main>  
    </div>  
  );  
}  
  
export default AddPatient;  