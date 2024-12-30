import React, { useState, useEffect } from 'react';  
import axios from 'axios';  
import './AddPatientForm.css';  
  
function AddPatientForm({ onClose }) {  
  const [activeTab, setActiveTab] = useState('new');  
  const [selectedPatient, setSelectedPatient] = useState('');  
  const [formData, setFormData] = useState({  
    registrationId: '',  
    firstName: '',  
    lastName: '',  
    recNo: '',  
    mobileNo: '',  
    city: '',  
    zip: '',  
    address: '',  
    dateOfBirth: '',  
    age: '',  
    phoneNumber: '',  
    guardianName: '',  
    opNumber: '',  
    dischargeDate: '',  
    gender: '',  
    residentIdNo: '',  
    bloodGroup: '',  
    medicalHistory: '',  
    patientRemarks: '',  
    medicalConditions: '',  
    patientGroup: '',  
  });  
  
  const [patients, setPatients] = useState([]);  
  
  useEffect(() => {  
    axios.get('http://localhost:5000/patients')  
      .then(response => {  
        setPatients(response.data);  
      })  
      .catch(error => {  
        console.error('There was an error fetching patients!', error);  
      });  
  }, []);  
  
  const handleTabChange = (tab) => {  
    setActiveTab(tab);  
    setSelectedPatient('');  
  };  
  
  const handleChange = (e) => {  
    const { name, value } = e.target;  
  
    if (['age', 'mobileNo', 'phoneNumber', 'opNumber'].includes(name) && isNaN(value)) {  
      alert('Numbers only');  
      return;  
    }  
  
    setFormData({  
      ...formData,  
      [name]: value,  
    });  
  };  
  
  const handleSubmit = (e) => {  
    e.preventDefault();  
    const { registrationId, firstName, mobileNo, opNumber } = formData;  
  
    if (!registrationId || !firstName || !mobileNo || !opNumber) {  
      alert('Please fill in all mandatory fields: Registration Id, Name, Mobile No, and OP Number.');  
      return;  
    }  
  
    axios.post('http://localhost:5000/add-patient', formData)  
      .then(response => {  
        alert('Data Updated');  
        onClose();  
      })  
      .catch(error => {  
        console.error('There was an error adding the patient!', error);  
      });  
  };  
  
  const selectedPatientDetails = patients.find(p => p.id === parseInt(selectedPatient));  

  return (  
    <div className="form-backdrop">  
      <div className="form-dialog">  
        <button className="close-button" onClick={onClose}>✖</button>  
        <div class="tabs">  
          <span class="tab active" onClick={() => handleTabChange('new')}>New Patient</span>  
          <span class="tab" onClick={() => handleTabChange('with')}>With Patient</span>  
        </div>  
  
        {activeTab === 'new' && (  
          <form onSubmit={handleSubmit}>  
            <h2>New Patient</h2>  
            <div className="form-section">  
              <h3>Basic Info</h3>  
              <div className="form-grid">  
                <input type="text" name="registrationId" placeholder="Registration Id" onChange={handleChange} required />  
                <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} required />  
                <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} />  
                <input type="text" name="recNo" placeholder="Rec No" onChange={handleChange} />  
                <input type="text" name="mobileNo" placeholder="Mobile No" onChange={handleChange} required />  
                <input type="text" name="city" placeholder="City" onChange={handleChange} />  
                <input type="text" name="zip" placeholder="Zip" onChange={handleChange} />  
                <input type="text" name="address" placeholder="Address" onChange={handleChange} />  
                <input type="text" name="dateOfBirth" placeholder="Date of Birth" onChange={handleChange} />  
                <input type="text" name="age" placeholder="Age" onChange={handleChange} />  
                <input type="text" name="phoneNumber" placeholder="Phone Number" onChange={handleChange} />  
                <input type="text" name="guardianName" placeholder="Guardian Name" onChange={handleChange} />  
                <input type="text" name="opNumber" placeholder="OP Number" onChange={handleChange} required />  
                <input type="text" name="dischargeDate" placeholder="Discharge Date" onChange={handleChange} />  
                <select name="gender" onChange={handleChange}>  
                  <option>Gender</option>  
                  <option>Male</option>  
                  <option>Female</option>  
                </select>  
                <input type="text" name="residentIdNo" placeholder="Resident Id No" onChange={handleChange} />  
              </div>  
            </div>  
            <div className="form-section">  
              <h3>Medical History</h3>  
              <div className="form-grid">  
                <select name="bloodGroup" onChange={handleChange}>  
                  <option>Blood Group</option>  
                  <option>A+</option>  
                  <option>B+</option>  
                  <option>O+</option>  
                  <option>AB+</option>  
                  <option>A-</option>  
                  <option>B-</option>  
                  <option>O-</option>  
                  <option>AB-</option>  
                </select>  
                <input type="text" name="medicalHistory" placeholder="Medical History" onChange={handleChange} />  
                <input type="text" name="patientRemarks" placeholder="Patient Remarks" onChange={handleChange} />  
                <input type="text" name="medicalConditions" placeholder="Medical Conditions" onChange={handleChange} />  
                <input type="text" name="patientGroup" placeholder="Patient Group" onChange={handleChange} />  
              </div>  
            </div>  
            <button type="submit">Submit</button>  
          </form>  
        )}  
  
        {activeTab === 'with' && (  
          <div>  
            <h3>Select Existing Patient</h3>  
            <select  
              onChange={(e) => setSelectedPatient(e.target.value)}  
              value={selectedPatient}  
            >  
              <option value="">--Select--</option>  
              {patients.map((patient) => (  
                <option key={patient.id} value={patient.id}>  
                  {patient.firstName} ({patient.registrationId})  
                </option>  
              ))}  
            </select>  
  
            {selectedPatientDetails && (  
            <div className="patient-details">  
              <h3>Patient Profile</h3>  
            
              <h4>Basic Information</h4>  
              <div className="info-grid">  
                <p><strong>Registration No:</strong> {selectedPatientDetails.registrationId}</p>  
                <p><strong>Rec No:</strong> {selectedPatientDetails.recNo}</p>  
                <p><strong>Name:</strong> {selectedPatientDetails.firstName} {selectedPatientDetails.lastName}</p>  
                <p><strong>Gender:</strong> {selectedPatientDetails.gender}</p>  
                <p><strong>Date of Birth:</strong> {selectedPatientDetails.dateOfBirth}</p>  
                <p><strong>Age:</strong> {selectedPatientDetails.age}</p>  
                <p><strong>Address:</strong> {selectedPatientDetails.address}</p>  
                <p><strong>City:</strong> {selectedPatientDetails.city}</p>  
                <p><strong>Mobile No:</strong> {selectedPatientDetails.mobileNo}</p>  
                <p><strong>Zip:</strong> {selectedPatientDetails.zip}</p>  
                <p><strong>Blood Group:</strong> {selectedPatientDetails.bloodGroup}</p>  
              </div>  
            
              <h4>Medical History</h4>  
              <div className="info-grid">  
                <p><strong>Medical History:</strong> {selectedPatientDetails.medicalHistory}</p>  
                <p><strong>Patient Remarks:</strong> {selectedPatientDetails.patientRemarks}</p>  
                <p><strong>Medical Conditions:</strong> {selectedPatientDetails.medicalConditions}</p>  
              </div>  
            
              <h4>Other Info</h4>  
              <div className="info-grid">  
                <p><strong>Guardian Name:</strong> {selectedPatientDetails.guardianName}</p>  
                <p><strong>Resident ID No:</strong> {selectedPatientDetails.residentIdNo}</p>  
                <p><strong>OP Number:</strong> {selectedPatientDetails.opNumber}</p>  
                <p><strong>Discharge Date:</strong> {selectedPatientDetails.dischargeDate}</p>  
              </div>  
            
              <button className="save-print-button">Save & Print</button>  
            </div>  
          )}  

          </div>  
        )}  
      </div>  
    </div>  
  );  
}  
  
export default AddPatientForm;  