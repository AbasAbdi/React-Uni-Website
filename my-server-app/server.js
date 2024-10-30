var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var db = require("./database.js");

var app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Server port
var HTTP_PORT = 8080;

// Start server
app.listen(HTTP_PORT, () => {
  console.log("Server running on port %PORT%".replace("%PORT%", HTTP_PORT));
});

// Root endpoint
app.get("/", (req, res, next) => {
  res.json({ message: "Ok. Server is running." });
});

// List all the students and applicants as well as all their information
app.get("/students", (req, res, next) => {
  let sql = `SELECT * FROM students`;
  var params = [];
  db.all(sql, params, (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      data: rows,
    });
  });
});

// List all the courses as well as all their information
app.get("/courses", (req, res, next) => {
  let sql = `SELECT * FROM courses`;
  var params = [];
  db.all(sql, params, (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      data: rows,
    });
  });
});

// Listing all the modules as well as all their information
app.get("/modules", (req, res, next) => {
  let sql = `SELECT * FROM modules`;
  var params = [];
  db.all(sql, params, (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      data: rows,
    });
  });
});

// List all the assessments as well as all their information
app.get("/assessments", (req, res, next) => {
  let sql = `SELECT * FROM assessment`;
  var params = [];
  db.all(sql, params, (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      data: rows,
    });
  });
});

// Adding a potential new Student's Info into the database
app.post("/student/", (req, res, next) => {
  var errors = [];
  if (!req.body.fName) {
    errors.push("Student first name not specified");
  }
  if (errors.length) {
    res.status(400).json({ error: errors.join(",") });
    return;
  }

  var data = {
    course_id: req.body.course_id,
    isStudent: req.body.isStudent,
    fName: req.body.fName,
    lName: req.body.lName,
    email: req.body.email,
    password: req.body.password,
    address1: req.body.address1,
    address2: req.body.address2,
    city: req.body.city,
    state: req.body.state,
    zip: req.body.zip,
    country: req.body.country,
    gMaths: req.body.gMaths,
    gEnglish: req.body.gEnglish,
    gcse: req.body.gcse,
    aLevels: req.body.aLevels,
    diploma: req.body.diploma,
    HE: req.body.HE,
    ucas: req.body.ucas,
    IELTS: req.body.IELTS,
    degree: req.body.degree,
    EPQ1: req.body.EPQ1,
    EPQ2: req.body.EPQ2,
    EPQ3: req.body.EPQ3,
    workExp: req.body.workExp,
  };
  var sql =
    "INSERT INTO students(course_id, isStudent, fName, lName, email, password, address1, address2, city, state, zip, country, gMaths, gEnglish, gcse, aLevels, diploma, HE, ucas, IELTS, degree, EPQ1, EPQ2, EPQ3, workExp) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
  var params = [
    data.course_id,
    data.isStudent,
    data.fName,
    data.lName,
    data.email,
    data.password,
    data.address1,
    data.address2,
    data.city,
    data.state,
    data.zip,
    data.country,
    data.gMaths,
    data.gEnglish,
    data.gcse,
    data.aLevels,
    data.diploma,
    data.HE,
    data.ucas,
    data.IELTS,
    data.degree,
    data.EPQ1,
    data.EPQ2,
    data.EPQ3,
    data.workExp,
  ];
  db.run(sql, params, function (err, result) {
    if (err) {
      console.log(res.status(400).json({ error: err.message }));
      return;
    }
    res.json({
      message: "success",
      data: data,
      id: this.lastID,
    });
  });
});

// Adding new assessment information into the database
app.post("/assessment/", (req, res, next) => {
  var errors = [];
  if (!req.body.name) {
    errors.push("Assessment name not specified");
  }
  if (errors.length) {
    res.status(400).json({ error: errors.join(",") });
    return;
  }

  var data = {
    student_id: req.body.student_id,
    module_id: req.body.module_id,
    name: req.body.name,
    marks: req.body.marks,
  };
  var sql =
    "INSERT INTO assessment(student_id, module_id, name, marks) VALUES (?,?,?,?)";
  var params = [data.student_id, data.module_id, data.name, data.marks];
  db.run(sql, params, function (err, result) {
    if (err) {
      console.log(res.status(400).json({ error: err.message }));
      return;
    }
    res.json({
      message: "success",
      data: data,
      id: this.lastID,
    });
  });
});

// updating the applicants student status
// we use COALESCE function to keep the current value if there is no new value (null)
app.put("/updateStudent/:student_id", (req, res, next) => {
  console.log("UPDATE students:" + req.params.student_id);
  var data = {
    isStudent: req.body.isStudent,
  };
  console.log("UPDATE students: data.isStudent = " + data.isStudent);
  db.run(
    `UPDATE students set 
      isStudent = COALESCE(?,isStudent) 
           WHERE student_id = ?`,
    [data.isStudent, req.params.student_id],
    function (err, result) {
      if (err) {
        res.status(400).json({ error: res.message });
        return;
      }
      res.json({
        message: "success",
        data: data,
        changes: this.changes,
      });
    }
  );
});

// updating the image, name, and description of the courses sections
// we use COALESCE function to keep the current value if there is no new value (null)
app.put("/updateCourse/:course_id", (req, res, next) => {
  console.log("UPDATE course:" + req.params.course_id);
  var data = {
    course_img: req.body.course_img,
    course_name: req.body.course_name,
    course_desc: req.body.course_desc,
  };
  db.run(
    `UPDATE courses set 
    course_img = COALESCE(?,course_img),
    course_name = COALESCE(?,course_name),
    course_desc = COALESCE(?,course_desc) 
           WHERE course_id = ?`,
    [data.course_img, data.course_name, data.course_desc, req.params.course_id],
    function (err, result) {
      if (err) {
        res.status(400).json({ error: res.message });
        return;
      }
      res.json({
        message: "success",
        data: data,
        changes: this.changes,
      });
    }
  );
});

// deleting a student/applicant from the database
app.delete("/deleteStudent/:student_id", (req, res, next) => {
  console.log("DELETE Students " + req.params.student_id);

  db.run(`DELETE FROM students WHERE student_id=?`, req.params.student_id),
    function (err, result) {
      if (err) {
        res.status(400).json({ error: res.message });
        return;
      }
      res.json({ message: "deleted", changes: this.changes });
    };
});

// Default response for any other request
app.use(function (req, res) {
  res.status(404);
});
