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
import DeptWomen from "./DeptWomen";
import DeptMen from "./DeptMen";
import Screen1 from "./Screen1";
import Sales from "./Sales";
import Register from "./PersonalInfo";
import CR from "./CR";
import axios from "axios";

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
function SignIn(props) {
  // Declaring the props for this function
  const { stud } = props;

  // Using useStyles inside the function component to create classes object
  const classes = useStyles();

  // Created Hook Expressions React.useState()
  // Declaring a state variable (first) and call (setFirst)
  const [first, setFirst] = React.useState(0);
  // Declaring a state variable (user) and call (setUser)
  const [user, setUser] = React.useState("Customer");
  // Declaring a state variable (username) and call (setUsername)
  const [username, setUsername] = React.useState("");
  // Declaring a state variable (password) and call (setPassword)
  const [password, setPassword] = React.useState("");
  // Declaring a state variable (v) and call (setV)
  const [v, setV] = React.useState(false);
  // Declaring a state variable (customer_id) and call (setCustomer_id)
  const [customer_id, setCustomer_id] = React.useState("");

  // An object containing the #staff login information
  const staff = {
    dw: { username: "DeptWomen", password: "DeptWomen" },
    dm: { username: "DeptMen", password: "DeptMen" },
    st: { username: "SalesTeam", password: "SalesTeam" },
  };

  function displayModuleHandler() {
    setFirst(5);
    return (
      stud.data &&
      stud.data.map((login, idx) => {
        if (
          String(login.email).match(username) &&
          login.password.match(password)
        ) {
          return setV(true) + setCustomer_id(login.cust_id);
        } else return null;
      })
    );
  }

  /* Nested if statements with differing returns depending on whether or not there respective 
  conditional argument have been satisfied*/
  if (first === 7) {
    return <Screen1 />;
  }
  if (first === 6) {
    return <Register />;
  }
  if (first === 5 && user === "") {
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
    username === staff.dw.username &&
    password === staff.dw.password
  ) {
    return <DeptWomen stud={stud} />;
  } else if (
    first === 5 &&
    user === "Staff" &&
    username === staff.dm.username &&
    password === staff.dm.password
  ) {
    return <DeptMen stud={stud} />;
  } else if (
    first === 5 &&
    user === "Staff" &&
    username === staff.st.username &&
    password === staff.st.password
  ) {
    return <Sales />;
  } else if (first === 5 && user === "Customer" && v === true) {
    const value1 = {
      isLogged: "yes",
    };
    axios
      .put(`http://localhost:8080/updateCustomer/${customer_id}`, value1)
      .then((response) => {
        // handle success
        //  var resData = response.data;
        //let data = JSON.stringify(resData);
        // window.alert("Response recieved from server = " + data);
      });

    const value2 = {
      isLogged: "no",
    };
    axios
      .put(`http://localhost:8080/updateCustomer/${43}`, value2)
      .then((response) => {
        // handle success
        //  var resData = response.data;
        //let data = JSON.stringify(resData);
        // window.alert("Response recieved from server = " + data);
      });
    setFirst(7);
  }
  // Return for the SignIn function

  return (
    <Container component="main" maxWidth="xs">
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
              <MenuItem value="Customer">Customer</MenuItem>
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
            placeholder="Email Address"
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
            onClick={(e) => displayModuleHandler()}
            className={classes.submit}
          >
            Sign In
          </Button>
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            onClick={(e) => setFirst(6)}
            className={classes.submit}
          >
            Register
          </Button>
        </form>
      </div>
      <CR />
    </Container>
  );
}

// exporting the SignIn function
export default SignIn;
