// PersonalInfo.js
// Importing the necessary files
import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Qualif from "./Qualif";
import CR from "./CR";

// Declaring the useStyles react hook.
const useStyles = makeStyles((theme) => ({
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

// Declaring a const variable (steps) and assigning it an array with three values.
const steps = ["Personal Information", "Qualifications", "Work Experience"];

// PersonalInfo function
function PersonalInfo(props) {
  // Declaring the props for this function
  const { id } = props;

  // Using useStyles inside the function component to create classes object
  const classes = useStyles();

  // Created Hook Expressions React.useState()
  // Declaring a state variable (activeStep) and call (setActiveStep)
  const [activeStep, setActiveStep] = React.useState(0);
  // Declaring a state variable (fName) and call (setFname)
  const [fName, setFname] = React.useState("");
  // Declaring a state variable (lName) and call (setLname)
  const [lName, setLname] = React.useState("");
  // Declaring a state variable email) and call (setEmail)
  const [email, setEmail] = React.useState("");
  // Declaring a state variable (password) and call (setPassword)
  const [password, setPassword] = React.useState("");
  // Declaring a state variable (cPassword) and call (setCpassword)
  const [cPassword, setCpassword] = React.useState("");
  // Declaring a state variable (address1) and call (setAddress1)
  const [address1, setAddress1] = React.useState("");
  // Declaring a state variable (address2) and call (setAddress2)
  const [address2, setAddress2] = React.useState("");
  // Declaring a state variable (city) and call (setCity)
  const [city, setCity] = React.useState("");
  // Declaring a state variable (state) and call (setState)
  const [state, setState] = React.useState("");
  // Declaring a state variable (zip) and call (setZip)
  const [zip, setZip] = React.useState("");
  // Declaring a state variable (country) and call (setCountry)
  const [country, setCountry] = React.useState("");

  /* Declaring a variable (handleNext) and assigning it an arrow functiin such that
     when it's called it utilises the setActiveStep call to set the activeStep state variable to the new value (1) */
  const handleNext = () => {
    setActiveStep(1);
  };

  /* Nested if statements with differing returns depending on whether or not there respective 
  conditional argument have been satisfied*/
  if (activeStep === 1 && fName === "") {
    alert("Please input your first name.");
    setActiveStep(0);
  } else if (activeStep === 1 && lName === "") {
    alert("Please input your last name.");
    setActiveStep(0);
  } else if (activeStep === 1 && email === "") {
    alert("Please input your email.");
    setActiveStep(0);
  } else if (activeStep === 1 && !email.includes("@")) {
    alert("You did not input a valid email.");
    setEmail("");
    setActiveStep(0);
  } else if (activeStep === 1 && password === "") {
    alert("Please input your password.");
    setActiveStep(0);
  } else if (activeStep === 1 && password !== cPassword) {
    alert("Your password and your confirm password do not match.");
    setPassword("");
    setCpassword("");
    setActiveStep(0);
  } else if (activeStep === 1 && address1 === "") {
    alert("Please input your address in line 1.");
    setActiveStep(0);
  } else if (activeStep === 1 && city === "") {
    alert("Please input the name of your city.");
    setActiveStep(0);
  } else if (
    activeStep === 1 &&
    state === "Please select a region, state or province."
  ) {
    setState("");
    setActiveStep(0);
  } else if (activeStep === 1 && zip === "") {
    alert("Please input your Zip/Postal code.");
    setActiveStep(0);
  } else if (activeStep === 1 && country === "") {
    alert("Please input the name of your country of residence.");
    setActiveStep(0);
  } else if (activeStep === 1) {
    return (
      <Qualif
        id={id}
        fName={fName}
        lName={lName}
        email={email}
        password={password}
        address1={address1}
        address2={address2}
        city={city}
        state={state}
        zip={zip}
        country={country}
      />
    );
  }

  // Return for the PersonalInfo function
  /* It renders material ui's Typography component containing the title and secondary title to be displayed to the user and Stepper component within which the steps 
  const variable we declared previous is mapped through to ouput StepLabels which contain each element within the array. This is followed by a series of TextField 
  material ui components that allows the user to input their personal information. Whenever changes are made to these components, it is saved by using the 
  Hook Expressions we declared previously. When the "Next" button is clicked it calls the handleNext functions we created earlier, which uses the setActiveStep 
  call to set the activeStep state variable to the new value (1). This then feeds into the nested if statements we created earlier that conduct's error checking 
  before passing the information the user filled out as props to the Qualif component. Finally, the CR component is rendered to act as the footer for this section. */
  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Student Registration
          </Typography>

          <Stepper activeStep={0} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          <Typography variant="h6" gutterBottom>
            Personal Information
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="firstName"
                name="firstName"
                label="First name"
                value={fName}
                onChange={(e) => setFname(e.target.value)}
                fullWidth
                autoComplete="given-name"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="lastName"
                name="lastName"
                label="Last name"
                value={lName}
                onChange={(e) => setLname(e.target.value)}
                fullWidth
                autoComplete="family-name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="email"
                name="email"
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="password"
                name="password"
                label="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="confirm-password"
                name="confirm-password"
                label="Confrim Password"
                value={cPassword}
                onChange={(e) => setCpassword(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="address1"
                name="address1"
                label="Address line 1"
                value={address1}
                onChange={(e) => setAddress1(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="address2"
                name="address2"
                label="Address line 2"
                value={address2}
                onChange={(e) => setAddress2(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="city"
                name="city"
                label="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="state"
                name="state"
                label="State/Province/Region"
                value={state}
                onChange={(e) => setState(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="zip"
                name="zip"
                label="Zip / Postal code"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="country"
                name="country"
                label="Country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                fullWidth
              />
            </Grid>
          </Grid>
          <React.Fragment>
            <div className={classes.buttons}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                Next
              </Button>
            </div>
          </React.Fragment>
        </Paper>
      </main>
      <div>
        <CR />
      </div>
    </React.Fragment>
  );
}

// exporting the PersonalInfo function
export default PersonalInfo;
