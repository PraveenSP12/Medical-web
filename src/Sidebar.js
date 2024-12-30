import React from 'react';  
import { Link } from 'react-router-dom';  
import './Sidebar.css';  
  
const Sidebar = () => {  
    return (  
        <div className="sidebar">  
            {/* <div className="profile">  
                <img src="profile-pic-url" alt="Profile" />  
                <h3>Dr. Baburajan</h3>  
                <p>Kanyakumari</p>  
            </div>   */}
            <ul>  
                <li><Link to="/"><i className="fas fa-tachometer-alt"></i>Dashboard</Link></li>  
                <li><Link to="/add-patients"><i className="fas fa-user-plus"></i>Add Patients</Link></li>  
                <li><Link to="/appointments"><i className="fas fa-calendar-alt"></i>Appointments</Link></li>  
                <li><Link to="/today-appointments"><i className="fas fa-calendar-check"></i>Today Appointment</Link></li>  
                <li><Link to="/search-patient"><i className="fas fa-search"></i>Search Patient</Link></li>  
                <li><Link to="/tele-medicine"><i className="fas fa-video"></i>Tele Medicine</Link></li>  
                <li><Link to="/communication"><i className="fas fa-comments"></i>Communication</Link></li>  
                <li><Link to="/laboratory"><i className="fas fa-vials"></i>Laboratory</Link></li>  
                <li><Link to="/accounts"><i className="fas fa-file-invoice-dollar"></i>Accounts</Link></li>  
                <li><Link to="/pharmacy"><i className="fas fa-pills"></i>Pharmacy</Link></li>  
                <li><Link to="/clinic-emr"><i className="fas fa-clinic-medical"></i>Clinic EMR</Link></li>  
                <li><Link to="/billing"><i className="fas fa-cash-register"></i>Billing</Link></li>  
            </ul>  
        </div>  
    );  
}  
  
export default Sidebar;  