const express = require('express');  
const mysql = require('mysql2');  
const cors = require('cors');  

const app = express();  
app.use(cors());  
app.use(express.json());  

const db = mysql.createConnection({  
  host: 'bypc3fjlameol0tq2w3b-mysql.services.clever-cloud.com',  
  user: 'unnwhnhfejgbxnt8',  
  password: '4KZXeNuoZcg7OAOeOfjQ',  
  database: 'bypc3fjlameol0tq2w3b',  
});  

db.connect(err => {  
  if (err) throw err;  
  console.log('Connected to MySQL');  
});  

app.post('/add-patient', (req, res) => {  
  const patient = req.body;  
  const sql = 'INSERT INTO patients SET ?';  
  db.query(sql, patient, (err, result) => {  
    if (err) throw err;  
    res.send('Patient added');  
  });  
});  

app.get('/patients', (req, res) => {  
    const sql = 'SELECT * FROM patients';  
    db.query(sql, (err, result) => {  
      if (err) {  
        console.error('Error fetching patients:', err);  
        res.status(500).send('Error fetching patients');  
        return;  
      }  
      res.json(result);  
    });  
  });  
  
const PORT = process.env.PORT || 5000;  
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));  