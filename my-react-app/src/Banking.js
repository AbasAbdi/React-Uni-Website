// Banking.js
// Importing the necessary files
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Finish from "./Finish";
import Paper from "@material-ui/core/Paper";
import axios from "axios";
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
  width: {
    width: "100%",
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

// Banking function that takes props as arguments
function Banking(props) {
  // Declaring the props for this function
  const {
    isLogged,
    fName,
    lName,
    email,
    phone_number,
    password,
    address1,
    address2,
    city,
    state,
    zip,
    country,
  } = props;

  function once(fn, context) {
    var result;

    return function () {
      if (fn) {
        result = fn.apply(context || this, arguments);
        fn = null;
      }

      return result;
    };
  }

  var saveCustomer = once(function () {
    const value = {
      isLogged: isLogged,
      fName: fName,
      lName: lName,
      email: email,
      phone_number: phone_number,
      password: password,
      address1: address1,
      address2: address2,
      city: city,
      state: state,
      zip: zip,
      country: country,
      card_name: card_name,
      card_amount: card_amount,
      card_num: card_num,
      expir_month: expir_month,
      expir_year: expir_year,
      card_cvs: card_cvs,
    };

    axios.post("http://localhost:8080/customer", value).then((response) => {
      // handle success
      //var resData = response.data;
      // let data = JSON.stringify(resData);
      // window.alert("Response recieved from server = " + data);
    });
  });

  // Using useStyles inside the function component to create classes object
  const classes = useStyles();

  // Created Hook Expressions React.useState()
  // Declaring a state variable (activeStep) and call (setActiveStep)
  const [activeStep, setActiveStep] = React.useState(0);
  // Declaring a state variable (card_name) and call (setCard_name)
  const [card_name, setCard_name] = React.useState("");
  // Declaring a state variable (card_amount) and call (setCard_amount)
  const [card_amount, setCard_amount] = React.useState("");
  // Declaring a state variable (card_num) and call (setCard_num)
  const [card_num, setCard_num] = React.useState("");
  // Declaring a state variable (expir_month) and call (setExpir_month)
  const [expir_month, setExpir_month] = React.useState("");
  // Declaring a state variable expir_year) and call (setExpir_year)
  const [expir_year, setExpir_year] = React.useState("");
  // Declaring a state variable (card_cvs) and call (setCard_cvs)
  const [card_cvs, setCard_cvs] = React.useState("");

  // Declaring a const variable (steps) and assigning it an array with three values.
  const steps = [
    "Login Information",
    "Shipping Information",
    "Banking Details",
  ];

  /* Nested if statements with differing returns depending on whether or not there respective 
  conditional argument have been satisfied*/

  if (activeStep === 3 && card_num === "") {
    alert("Please input your card number");
    setActiveStep(0);
  } else if (activeStep === 3 && expir_month === "") {
    alert("Please input your card expiration Month.");
    setActiveStep(0);
  } else if (activeStep === 3 && expir_year === "") {
    alert("Please input your card expiration Year.");
    setActiveStep(0);
  } else if (activeStep === 3 && card_cvs === "") {
    alert("Please input your card CVS.");
    setActiveStep(0);
  } else if (activeStep === 3) {
    saveCustomer();
    setActiveStep(4);
  } else if (activeStep === 4) {
    return <Finish />;
  }
  // Return for the Banking function

  return (
    <React.Fragment>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Customer Registration
          </Typography>
          <Stepper activeStep={2} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <Typography variant="h6" gutterBottom>
            Banking Details
          </Typography>
          <br />
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="card_name"
                name="card_name"
                label="Cardholder name"
                value={card_name}
                placeholder="Cardholder name"
                onChange={(e) => setCard_name(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="card_amount"
                name="card_amount"
                label="Balance on the card"
                value={card_amount}
                placeholder="£ "
                onChange={(e) => setCard_amount(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="card_num"
                name="card_num"
                label="Card number"
                value={card_num}
                placeholder="Card number"
                onChange={(e) => setCard_num(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="expir_month"
                name="expir_month"
                label="Expiration Month"
                value={expir_month}
                placeholder="Expiration Month"
                onChange={(e) => setExpir_month(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="expir_year"
                name="expir_year"
                label="Expiration Year"
                value={expir_year}
                placeholder="Expiration Year"
                onChange={(e) => setExpir_year(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="card_cvs"
                name="card_cvs"
                label="CVS"
                value={card_cvs}
                placeholder="CVS"
                onChange={(e) => setCard_cvs(e.target.value)}
                fullWidth
              />
            </Grid>
          </Grid>
          <React.Fragment>
            <div className={classes.buttons}>
              <Button
                variant="contained"
                color="primary"
                onClick={(e) => setActiveStep(3)}
                className={classes.button}
              >
                Submit
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

// exporting the Banking function
export default Banking;
