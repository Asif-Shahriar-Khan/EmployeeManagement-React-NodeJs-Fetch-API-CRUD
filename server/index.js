const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "practice",
});

app.get("/employees", (req, res) => {
    db.query("SELECT * FROM employees", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });


  app.post("/add", (req, res) => {
    const id = req.body.id;
    const name = req.body.name;
    const age = req.body.age;
    const designation = req.body.designation;
   
  
    db.query(
      "INSERT INTO employees (id, name, age, designation) VALUES (?,?,?,?)",
      [id, name, age, designation],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send("Values Inserted");
        }
      }
    );
  });

  app.put("/edit:id", (req, res) => {
    const id = req.body.id;
    const name = req.body.name;
    const age = req.body.age;
    const designation = req.body.designation;
    db.query(
      "UPDATE employees SET name,age,designation = ? WHERE id = ?",
      [name,age, designations, id],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      }
    );
  });

  app.delete("/delete/:id", (req, res) => {
    const id = req.params.id;
    db.query("DELETE FROM employees WHERE id = ?", id, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });


  app.listen(4000, () => {
    console.log("Yey, your server is running on port 4000");
  });