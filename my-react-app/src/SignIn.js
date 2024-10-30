// SignIn.js
// Importing the necessary files
import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Admissions from "./Admissions";
import Udepartment from "./Udepartment";
import Pdepartment from "./Pdepartment";
import Student from "./Student";
import CR from "./CR";
import axios from "axios";
import Tutor from "./Tutor";

// Declaring the useStyles react hook.
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

// SignIn function
function SignIn() {
  // Using useStyles inside the function component to create classes object
  const classes = useStyles();

  // Created Hook Expressions React.useState()
  // Declaring a state variable (first) and call (setFirst)
  const [first, setFirst] = React.useState(0);
  // Declaring a state variable (user) and call (setUser)
  const [user, setUser] = React.useState("");
  // Declaring a state variable (username) and call (setUsername)
  const [username, setUsername] = React.useState("");
  // Declaring a state variable (password) and call (setPassword)
  const [password, setPassword] = React.useState("");
  // Declaring a state variable (stud) and call (setStud)
  const [stud, setStud] = React.useState([]);
  // Declaring a state variable (mod) and call (setMod)
  const [mod, setMod] = React.useState([]);
  // Declaring a state variable (cor) and call (setCor)
  const [cor, setCor] = React.useState([]);
  // Declaring a state variable (assess) and call (setAssess)
  const [assess, setAssess] = React.useState([]);
  // Declaring a state variable (v) and call (setV)
  const [v, setV] = React.useState(false);
  // Declaring a state variable (fName) and call (setFname)
  const [fName, setFname] = React.useState("");
  // Declaring a state variable (lName) and call (setLname)
  const [lName, setLname] = React.useState("");
  // Declaring a state variable (course_id) and call (setCourse_id)
  const [course_id, setCourse_id] = React.useState("");
  // Declaring a state variable (student_id) and call (setStudent_id)
  const [student_id, setStudent_id] = React.useState("");

  // An object containing the #staff login information
  /* The first character "u"/"p" stand for "undergraduate"/"postgraduate".
   For the tutors the second character 1-4 stand for the courses position 
   as it appears on the screen from left to right . u1 for example would 
   be Computer Science, u2 Civil Engineering.... etc etc. */
  const staff = {
    ad: { username: "Admission", password: "Ad7744u" },
    ud: { username: "uDept", password: "uD3232u" },
    pd: { username: "pDept", password: "pGhL99Qp" },
    u1T: { username: "u1Tutor", password: "u1tPOhc5" },
    u2T: { username: "u2Tutor", password: "u2tOPug7" },
    u3T: { username: "u3Tutor", password: "u3tKLY64" },
    u4T: { username: "u4Tutor", password: "u4tUL87d" },
    p1T: { username: "p1Tutor", password: "pGtQ54cD" },
    p2T: { username: "p2Tutor", password: "pGh35fQp" },
    p3T: { username: "p3Tutor", password: "pGhLwetc" },
    p4T: { username: "p4Tutor", password: "pGh743hc" },
  };

  /* Function that returns Axios get method which reads data from the URL,
     then assigns the response to resData variable. Finally it utilises the 
     setStud call to set the stud state variable to the new value (resData). 
     It catches any error and prints it to console.log.  */
  function fetchStudentRecords() {
    axios
      .get("http://localhost:8080/students")
      .then((response) => {
        // handle success
        var resData = response.data;
        // var data = JSON.stringify(resData);
        setStud(resData);
      })
      .catch((err) => console.log("Error: ", err));
  }

  /* Function that returns Axios get method which reads data from the URL,
     then assigns the response to resData variable. Finally it utilises the 
     setMod call to set the mod state variable to the new value (resData). 
     It catches any error and prints it to console.log.  */
  function fetchModuleRecords() {
    axios
      .get("http://localhost:8080/modules")
      .then((response) => {
        // handle success
        var resData = response.data;
        // var data = JSON.stringify(resData);
        setMod(resData);
      })
      .catch((err) => console.log("Error: ", err));
  }

  /* Function that returns Axios get method which reads data from the URL,
     then assigns the response to resData variable. Finally it utilises the 
     setCor call to set the stud cor variable to the new value (resData). 
     It catches any error and prints it to console.log.  */
  function fetchCourseRecords() {
    axios
      .get("http://localhost:8080/courses")
      .then((response) => {
        // handle success
        var resData = response.data;
        // var data = JSON.stringify(resData);
        setCor(resData);
      })
      .catch((err) => console.log("Error: ", err));
  }

  /* Function that returns Axios get method which reads data from the URL,
     then assigns the response to resData variable. Finally it utilises the 
     setAssess call to set the assess state variable to the new value (resData). 
     It catches any error and prints it to console.log.  */
  function fetchAssessmentRecords() {
    axios
      .get("http://localhost:8080/assessments")
      .then((response) => {
        // handle success
        var resData = response.data;
        // var data = JSON.stringify(resData);
        setAssess(resData);
      })
      .catch((err) => console.log("Error: ", err));
  }

  /* Function that calls all the other functions that return Axios get methods. It also 
  uses setFirst call to set the "first" state variable to 5. Finally, the function maps through 
  the data in the stud state variable and if it satisfies the conditional argument of the if statement 
  it uses the setV, setStudent_id, setFname, setLname, and setCourse_id calls to alter the values of their 
  respective state variables. */
  function displayModuleHandler() {
    fetchStudentRecords();
    fetchModuleRecords();
    fetchCourseRecords();
    fetchAssessmentRecords();
    setFirst(5);
    return (
      stud.data &&
      stud.data.map((login, idx) => {
        if (
          String(login.student_id).match(username) &&
          login.password.match(password) &&
          login.isStudent.match("yes")
        ) {
          return (
            setV(true),
            setStudent_id(login.student_id),
            setFname(login.fName),
            setLname(login.lName),
            setCourse_id(login.course_id)
          );
        } else return null;
      })
    );
  }

  /* Nested if statements with differing returns depending on whether or not there respective 
  conditional argument have been satisfied*/
  if (first === 5 && user === "Student" && v === true) {
    return (
      <Student
        student_id={student_id}
        fName={fName}
        lName={lName}
        course_id={course_id}
        assess={assess}
        mod={mod}
      />
    );
  } else if (first === 5 && user === "") {
    setFirst(4);
    alert("Please select a user type.");
  } else if (first === 5 && username === "") {
    setFirst(4);
    alert("Please input a username.");
  } else if (first === 5 && password === "") {
    setFirst(4);
    alert("Please input a password");
  } else if (
    first === 5 &&
    user === "Staff" &&
    username === staff.ad.username &&
    password === staff.ad.password
  ) {
    return <Admissions stud={stud} />;
  } else if (
    first === 5 &&
    user === "Staff" &&
    username === staff.ud.username &&
    password === staff.ud.password
  ) {
    return <Udepartment />;
  } else if (
    first === 5 &&
    user === "Staff" &&
    username === staff.pd.username &&
    password === staff.pd.password
  ) {
    return <Pdepartment />;
  } else if (
    first === 5 &&
    user === "Staff" &&
    username === staff.u1T.username &&
    password === staff.u1T.password
  ) {
    return <Tutor course_id={50} stud={stud} mod={mod} cor={cor} />;
  } else if (
    first === 5 &&
    user === "Staff" &&
    username === staff.u2T.username &&
    password === staff.u2T.password
  ) {
    return <Tutor course_id={60} stud={stud} mod={mod} cor={cor} />;
  } else if (
    first === 5 &&
    user === "Staff" &&
    username === staff.u3T.username &&
    password === staff.u3T.password
  ) {
    return <Tutor course_id={70} stud={stud} mod={mod} cor={cor} />;
  } else if (
    first === 5 &&
    user === "Staff" &&
    username === staff.u4T.username &&
    password === staff.u4T.password
  ) {
    return <Tutor course_id={80} stud={stud} mod={mod} cor={cor} />;
  } else if (
    first === 5 &&
    user === "Staff" &&
    username === staff.p1T.username &&
    password === staff.p1T.password
  ) {
    return <Tutor course_id={90} stud={stud} mod={mod} cor={cor} />;
  } else if (
    first === 5 &&
    user === "Staff" &&
    username === staff.p2T.username &&
    password === staff.p2T.password
  ) {
    return <Tutor course_id={100} stud={stud} mod={mod} cor={cor} />;
  } else if (
    first === 5 &&
    user === "Staff" &&
    username === staff.p3T.username &&
    password === staff.p3T.password
  ) {
    return <Tutor course_id={110} stud={stud} mod={mod} cor={cor} />;
  } else if (
    first === 5 &&
    user === "Staff" &&
    username === staff.p4T.username &&
    password === staff.p4T.password
  ) {
    return <Tutor course_id={120} stud={stud} mod={mod} cor={cor} />;
  }

  // Return for the SignIn function
  /* It begins by calling fetchStudentRecords() who's function we already described. It renders material ui's Typography component containing the title that will be 
  displayed to the user and Select component that contains MenuItems with "Student" & "Staff" as values inorder to filter between the different types of users. This 
  is followed by two TextField material ui components, one for the username and the other for the password, that allows the user to input their login information. 
  Whenever changes are made to these components, it is saved by using the Hook Expressions we declared previously. When the "Sign In" button is clicked it calls 
  the displayModuleHandler() functions we created earlier. Finally, the CR component is rendered to act as the footer for this section. */
  return (
    <Container component="main" maxWidth="xs">
      {fetchStudentRecords()}
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <br />
          <Grid item xs={12} sm={4}>
            <InputLabel>User Type</InputLabel>
            <Select
              value={user}
              onChange={(e) => setUser(e.target.value)}
              fullWidth
            >
              <MenuItem value="Student">Student</MenuItem>
              <MenuItem value="Staff">Staff</MenuItem>
            </Select>
          </Grid>
          <br />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            onChange={(e) => setUsername(e.target.value)}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />
          <br />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={displayModuleHandler}
            className={classes.submit}
          >
            Sign In
          </Button>
        </form>
      </div>
      <CR />
    </Container>
  );
}

// exporting the SignIn function
export default SignIn;
