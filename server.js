const express = require("express");
const mysql = require("mysql");
var bodyparse = require("body-parser");
const multer = require("multer");
const cors = require("cors");
var path = require("path");
app = express();
app.use(express.json());
app.use(bodyparse.urlencoded({ extended: true }));
app.use("/images", express.static("images"));
app.use(cors());
const db = mysql.createPool({
  connectionLimit: "10",
  host: "",
  user: "root",
  password: "",
  database: "dynamic",
});

db.getConnection((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("server is connected succesfull");
  }
});
// app.post("/insert", (req, res) => {
//   const stdname = req.body.regno;
//   const regno = req.body.stdname;
//   //  console.log("reporting");
//   const sql = "insert into student(regno,stdname) values(?,?)";
//   db.query(sql, [regno, stdname], (err, result) => {
//     if (err) throw err;
//     else {
//       console.log(result);
//       res.send("success");
//       res.end();
//     }
//   });
// });

app.post("/retrieve", (req, res) => {
  const regno = req.body.regno;
  console.log("in retrieve" + regno);
  const sql = "Select * from student where regno=?";
  db.query(sql, [regno], (err, data) => {
    if (err) {
      console.log("got er in DB execution");
      console.log(err);
    } else {
      console.log("got the data from DB" + data);
      // console.log(data);
      // console.log(typeof data);
      res.send(data);
    }
    res.end();
  });
});
app.post("/Bulkdisplay", (req, res) => {
  const branch = req.body.b;
  const section = req.body.s;
  const year = req.body.y;
  console.log(branch, section, year);
  const sql = "Select * from student where branch=? and section=? and year=? ";
  db.query(sql, [branch, section, year], (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
      res.send(data);
    }
    res.end();
  });
});

app.listen(8080, () => {
  console.log("Server Listening");
});
