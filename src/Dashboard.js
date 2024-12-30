import React from 'react';  
import './Dashboard.css';  
import Sidebar from './Sidebar'; // Import Sidebar component  
  
function Dashboard() {  
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
        <h2>Welcome back, Dr. Baburajan!</h2>  
        <p>Today is Thursday, 19 December 2024</p>  
        <div className="dashboard-metrics">  
          <div className="metric">  
            <h3>Appointments</h3>  
            <p>0</p>  
          </div>  
          <div className="metric">  
            <h3>Today Patients</h3>  
            <p>0</p>  
          </div>  
          <div className="metric">  
            <h3>Available Staffs</h3>  
            <p>5</p>  
          </div>  
        </div>  
      </main>  
    </div>  
  );  
}  
  
export default Dashboard;  