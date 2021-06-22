// Shipping.js
// Importing the necessary files
import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Banking from "./Banking";
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

// Qualfi function
function Shipping(props) {
  // Declaring the props for this function
  const { isLogged, fName, lName, email, phone_number, password } = props;

  // Using useStyles inside the function component to create classes object
  const classes = useStyles();

  // Created Hook Expressions React.useState()

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
  // Declaring a state variable (activeStep) and call (setActiveStep)
  const [activeStep, setActiveStep] = React.useState(0);

  /* Nested if statements with differing returns depending on whether or not there respective 
  conditional argument have been satisfied */

  if (activeStep === 1 && address1 === "") {
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
  } else if (activeStep === 2) {
    return (
      <Banking
        isLogged={isLogged}
        fName={fName}
        lName={lName}
        email={email}
        phone_number={phone_number}
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

  // Declaring a const variable (steps) and assigning it an array with three values.
  const steps = [
    "Login Information",
    "Shipping Information",
    "Banking Details",
  ];

  // Return for the Shipping function
  /* It renders material ui's Typography component containing the title and secondary title to be displayed to the user and Stepper component within which the steps 
  const variable we declared previous is mapped through to ouput StepLabels which contain each element within the array. It will display a series of TextField's/MenuItem's tailored for the shipping requirments of the store. Whenever changes are made to these components, it is saved by using the Hook Expressions we declared previously. When the 
  "Next" button is clicked it uses the setActiveStep  call to set the activeStep state variable to the new value (2). This then feeds into the nested if statements we 
  created earlier that conduct's error checking before passing the information the user filled out as props to the Banking component. Finally, the CR component is rendered to 
  act as the footer for this section. */
  return (
    <main className={classes.layout}>
      <Paper className={classes.paper}>
        <Typography component="h1" variant="h4" align="center">
          Customer Registration
        </Typography>
        <Stepper activeStep={1} className={classes.stepper}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <Typography variant="h6" gutterBottom>
          Shipping Information
        </Typography>
        <br />
        <Grid container spacing={3}>
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
              onClick={(e) => setActiveStep(2)}
              className={classes.button}
            >
              Next
            </Button>
          </div>
        </React.Fragment>
      </Paper>
      <div>
        <CR />
      </div>
    </main>
  );
}

export default Shipping;
