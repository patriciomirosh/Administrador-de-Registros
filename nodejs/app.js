const express = require('express');
const mysql = require('mysql');
const nodemailer = require('nodemailer')
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3050;

const app = express();

app.use(bodyParser.json());

// MySql

const connection = mysql.createConnection({
  multipleStatements: true,
  host: 'localhost', 
  user: 'root',
  Password: '',
  database: 'node20_mysql'
});

 
  

//Put the first Row in the table Checked 
app.post('/first/:Username', (req, res) => {
  const {Username} = req.params
  const sql = `INSERT INTO ${Username} SET ?`;
  
  const registerObj1 = {

    Concepto: req.body.Concepto,
    Monto: req.body.Monto,
    Fecha: req.body.Fecha,
    Tipo: req.body.Tipo
  };

  connection.query(sql, registerObj1, error => {
    if (error) throw error; 
    res.send('Error');
  }); 
})
  

 
// last 10 logs in the table Checked
app.get('/last10/:Username', (req, res) => {
  const {Username} = req.params;
  const sql = `SELECT * FROM ad${Username} ORDER BY ID DESC LIMIT 10`;

  connection.query(sql, (error, results) => {
    if (error) throw error;
    if (results.length > 0) {
      res.json(results);
    } else {
      res.send('Not result');
    }
  });
});
//Show all the Logs of the Table. Checked
app.get('/get/:Username', (req, res) => {
  const {Username} = req.params;
  const sql = `SELECT * FROM ad${Username}`;
  
  connection.query(sql, (error, results) => {
    if (error) throw error;
    if (results.length > 0) {
      res.json(results);
    } else {
      res.send('Not result');
    }
  });
});
// Bbtain By ID Checked
app.get('/get/:Username/:id', (req, res) => {
  const {Username} = req.params;  
  const { id } = req.params;
  const sql = `SELECT * FROM ${Username} WHERE id = ${id}`;
  connection.query(sql, (error, result) => {
    if (error) throw error;

    if (result.length > 0) {
      res.json(result);
    } else {
      res.send('Not result');
    }
  });
});
// Get the sum of all entry logs Checked
app.get('/balance/:Username', (req, res) => {
  const {Username} = req.params;
  const sql = `SELECT id,sum(Monto) as suma FROM ad${Username} WHERE Tipo = "in" `;
  
  connection.query(sql, (error, result) => {
  
    if (error) throw error;

    if (result.length > 0) {
      res.json(result);
    } else {
      res.send('No Register');
    }
  });
});
// Get the sum of all egress logs Checked
app.get('/balanceEg/:Username', (req, res) => {
  const {Username} = req.params;
  const sql =  `SELECT id,sum(Monto) as suma FROM ad${Username} WHERE Tipo = "eg" `;
  
  connection.query(sql, (error, result) => {
    if (error) throw error;

    if (result.length > 0) {
      res.json(result);
    } else {
      res.send('No Register');
    }
  });
})

//add a new log  Checked
app.post('/add/:Username', (req, res) => {
  const {Username} = req.params;
  const sql = `INSERT INTO ad${Username} SET ?`;

  const registerObj = {

    Concepto: req.body.Concepto,
    Monto: req.body.Monto,
    Fecha: req.body.Fecha,
    Tipo: req.body.Tipo
  };



  connection.query(sql, registerObj, error => {
    if (error) throw error;
    res.send('Register created!');
  });
});
// update a Logs by ID Checked
app.put('/update/:Username/:id', (req, res) => {
  const { Username} =req.params;
  const { id } = req.params;
  const { Concepto, Monto , Fecha}= req.body;
  const sql = `UPDATE ad${Username} SET Concepto = '${Concepto}', Monto='${Monto}',Fecha='${Fecha}' WHERE id =${id}`;

  connection.query(sql, error => {
    if (error) throw error;
    res.send('Customer updated!');
  });
});

// delete logs by ID Checked
app.delete('/delete/:Username/:id', (req, res) => {
  const { Username} =req.params;
  const { id } = req.params;
  const sql = `DELETE FROM ad${Username} WHERE id= ${id}`;

  connection.query(sql, error => {
    if (error) throw error;
    res.send('Delete Register');
  });
});

//Create table register checked 
app.post('/createtableregister', (req, res) => {
  const sql = 'CREATE TABLE node20_mysql.tableregister (ID INT NOT NULL  AUTO_INCREMENT, Username VARCHAR(50) NOT NULL , Mail VARCHAR(50) NOT NULL , Password VARCHAR(50) NOT NULL  ,PRIMARY KEY (ID))';
  connection.query(sql, (error, results) => {
    if (error) throw error;
    if (results.length > 0) {
      return res.json(results);
    } else {
      return res.send('Table created');
    }
  });
}); 

//Create table Username checked 
app.post('/create/:Username', (req, res) => {
  const { Username } = req.params;  
  const sql = `CREATE TABLE node20_mysql.ad${Username} (ID INT NOT NULL  AUTO_INCREMENT, Concepto VARCHAR(50) NOT NULL , Monto FLOAT NOT NULL , Fecha DATE NOT NULL , Tipo VARCHAR(50) NOT NULL ,PRIMARY KEY (ID))`;
  connection.query(sql, (error, results) => {
    if (error) throw error;
    if (results.length > 0) {
      return res.json(results);
    } else {
      return res.send('Table created');
    } 
  });
});


//Create Username checked
app.post('/newUser', (req, res) => {
 
  const sql =  `INSERT INTO tableregister SET ?` ;

  const registerObj = {

    Username: req.body.Username,
    Mail: req.body.Mail,
    Password: req.body.Password, 
  };
  
  connection.query(sql, registerObj, error => {
    if (error) throw error;
    return res.send('User not created!');
  });  
  
}) 
//Create fist Column of the new User Table, Checked
app.post('/newUser/:Username', (req, res) => {
  const { Username } = req.params;  
  const sql =  `INSERT INTO ${Username} SET ?` ;

  const registerObj = {

    Concepto: req.body.Concepto,
    Monto: req.body.Monto,
    Fecha: req.body.Fecha,
    Tipo: req.body.Tipo
  };
 
  connection.query(sql, registerObj, error => {
    if (error) throw error;
    return res.send('User not created!');
  });  
  
}) 




// Check Users and PassWord, Checked
app.get('/PassWord/:Username', (req, res) => {
  const {Username} = req.params;
  const sql = `SELECT Username, Password FROM tableregister  `;
  
  connection.query(sql, (error, result) => {
  
    if (error) throw error;

    if (result.length > 0) {
      res.json(result);
    } else {
      res.send('No Register');
    }
  });
});


//send email
app.post('/email/', (req, res) => {
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
      user: 'mirospatricio@gmail.com',
      pass: 'patoteam16'
  }})
  
  
  var mailOptions = {
    from: 'mirospatricio@gmail.com',
    to: 'pato.16.pp@gmail.com',
    subject: `${req.body.subject}`,
    text: `Enviado de parte de ${req.body.name} \n
    .Cuerpo del mensaje ${req.body.message}. \n
    Contactos: mail:${req.body.email}`}

transporter.sendMail(mailOptions, function(error, info){
  if (error){
      console.log(error);
      res.send(500, error.message);
  } else {
      console.log("Email sent"); 
      res.status(200).jsonp(req.body);
  }
})



})

// Check connect
connection.connect(error => {
  if (error) throw error;
  console.log('Database server running!');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


