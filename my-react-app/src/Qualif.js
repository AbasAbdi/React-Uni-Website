// Admissions.js
// Importing the necessary files
import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import WorkExp from "./WorkExp";
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
function Qualif(props) {
  // Declaring the props for this function
  const {
    id,
    fName,
    lName,
    email,
    password,
    address1,
    address2,
    city,
    state,
    zip,
    country,
  } = props;

  // Using useStyles inside the function component to create classes object
  const classes = useStyles();

  // Created Hook Expressions React.useState()
  // Declaring a state variable (activeStep) and call (setActiveStep)
  const [activeStep, setActiveStep] = React.useState(0);
  // Declaring a state variable (check) and call (setCheck)
  const [check, setCheck] = React.useState("");
  // Declaring a state variable (gMaths) and call (setGmaths)
  const [gMaths, setGmaths] = React.useState("");
  // Declaring a state variable (gEnglish) and call (setGenglish)
  const [gEnglish, setGenglish] = React.useState("");
  // Declaring a state variable (gcse) and call (setGcse)
  const [gcse, setGcse] = React.useState("");
  // Declaring a state variable (aLevels) and call (setAlevels)
  const [aLevels, setAlevels] = React.useState("");
  // Declaring a state variable (diploma) and call (setDiploma)
  const [diploma, setDiploma] = React.useState("");
  // Declaring a state variable (HE) and call (setHE)
  const [HE, setHE] = React.useState("");
  // Declaring a state variable (ucas) and call (setUCAS)
  const [ucas, setUCAS] = React.useState(0);
  // Declaring a state variable (IELT) and call (setIELTS)
  const [IELTS, setIELTS] = React.useState(0);
  // Declaring a state variable (degree) and call (setDegree)
  const [degree, setDegree] = React.useState("");
  // Declaring a state variable (EPQ1) and call (setEPQ1)
  const [EPQ1, setEPQ1] = React.useState("");
  // Declaring a state variable (EPQ2) and call (setEPQ2)
  const [EPQ2, setEPQ2] = React.useState("");
  // Declaring a state variable (EPQ3) and call (setEPQ3)
  const [EPQ3, setEPQ3] = React.useState("");

  /* Nested if statements with differing returns depending on whether or not there respective 
  conditional argument have been satisfied*/
  if (activeStep === 2 && degree === "" && id > 85) {
    alert("Please select an option for Degree.");
    setActiveStep(1);
  } else if (activeStep === 2 && check === "" && id > 85) {
    alert(
      "Please click the checkbox to confirm your degree contains a significant level of computing."
    );
    setActiveStep(1);
  } else if (activeStep === 2 && EPQ1 === "" && id > 85) {
    setEPQ1("N/A");
  } else if (activeStep === 2 && EPQ2 === "" && id > 85) {
    setEPQ2("N/A");
  } else if (activeStep === 2 && EPQ3 === "" && id > 85) {
    setEPQ3("N/A");
  } else if (activeStep === 2 && gEnglish === "" && id > 85) {
    setGmaths("N/A");
    setGenglish("N/A");
    setGcse("N/A");
    setAlevels("N/A");
    setDiploma("N/A");
    setHE("N/A");
    setUCAS(0);
    setIELTS(0);
  } else if (activeStep === 2 && id > 85) {
    return (
      <WorkExp
        course_id={id}
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
        gMaths={gMaths}
        gEnglish={gEnglish}
        gcse={gcse}
        aLevels={aLevels}
        diploma={diploma}
        HE={HE}
        ucas={ucas}
        IELTS={IELTS}
        degree={degree}
        EPQ1={EPQ1}
        EPQ2={EPQ2}
        EPQ3={EPQ3}
      />
    );
  }

  /* Nested if statements with differing returns depending on whether or not there respective 
  conditional argument have been satisfied*/
  if (activeStep === 2 && gMaths === "" && id < 85) {
    alert("Please select an option for GCSE Maths.");
    setActiveStep(1);
  } else if (activeStep === 2 && gEnglish === "" && id < 85) {
    alert("Please select an option for GCSE English.");
    setActiveStep(1);
  } else if (activeStep === 2 && gcse === "" && id < 85) {
    alert("Please select an option for Total GCSE's.");
    setActiveStep(1);
  } else if (activeStep === 2 && aLevels === "" && id < 85) {
    alert("Please select an option for A Levels.");
    setActiveStep(1);
  } else if (activeStep === 2 && diploma === "" && id < 85) {
    alert("Please select an option for BTEC Extended Diploma.");
    setActiveStep(1);
  } else if (activeStep === 2 && HE === "" && id < 85) {
    alert("Please select an option for Access to HE Diploma.");
    setActiveStep(1);
  } else if (activeStep === 2 && (ucas > 1000 || IELTS > 9) && id < 85) {
    alert("Let's be realistic now ;)");
    setActiveStep(1);
  } else if (activeStep === 2 && ucas > 0 && IELTS > 0 && id < 85) {
    alert(
      "Please choose either UCAS or IELTS. \nYou can not enter values for both."
    );
    setUCAS(0);
    setIELTS(0);
    setActiveStep(1);
  } else if (
    activeStep === 2 &&
    (ucas === 0 || ucas === "") &&
    (IELTS === 0 || IELTS === "") &&
    id < 85
  ) {
    alert("Please enter UCAS or IELTS points.");
    setActiveStep(1);
    setUCAS(0);
    setIELTS(0);
  } else if (activeStep === 2 && degree === "" && id < 85) {
    alert("Please select an option for Degree.");
    setActiveStep(1);
  } else if (activeStep === 2 && check === "" && id < 85) {
    alert(
      "Please click the checkbox to confirm your Level 3 qualifications includes a science subject."
    );
    setActiveStep(1);
  } else if (activeStep === 2 && EPQ1 === "" && id < 85) {
    setEPQ1("N/A");
    setEPQ2("N/A");
    setEPQ3("N/A");
  } else if (activeStep === 2 && id < 85) {
    return (
      <WorkExp
        course_id={id}
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
        gMaths={gMaths}
        gEnglish={gEnglish}
        gcse={gcse}
        aLevels={aLevels}
        diploma={diploma}
        HE={HE}
        ucas={ucas}
        IELTS={IELTS}
        degree={degree}
        EPQ1={EPQ1}
        EPQ2={EPQ2}
        EPQ3={EPQ3}
      />
    );
  }

  // Declaring a const variable (steps) and assigning it an array with three values.
  const steps = ["Personal Information", "Qualifications", "Work Experience"];

  // Return for the Qualif function
  /* It renders material ui's Typography component containing the title and secondary title to be displayed to the user and Stepper component within which the steps 
  const variable we declared previous is mapped through to ouput StepLabels which contain each element within the array. Now it will check whether 
  or not the "id" prop with it's course_id value, that it recieved from the PersonalInfo component, is less than 85 (undergraduate course) or 
  greater than 85 (postgraduate course). Depending on the value of "id" it will go on to display a series of TextField's/MenuItem's tailored for the qualification requirments
  of undergraduate or postgraduate courses. Whenever changes are made to these components, it is saved by using the Hook Expressions we declared previously. When the 
  "Next" button is clicked it uses the setActiveStep  call to set the activeStep state variable to the new value (2). This then feeds into the nested if statements we 
  created earlier that conduct's error checking before passing the information the user filled out as props to the WorkExp component. Finally, the CR component is rendered to 
  act as the footer for this section. */
  return (
    <main className={classes.layout}>
      <Paper className={classes.paper}>
        <Typography component="h1" variant="h4" align="center">
          Student Registration
        </Typography>
        <Stepper activeStep={1} className={classes.stepper}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <Typography variant="h6" gutterBottom>
          Qualifications
        </Typography>
        <br />
        {id < 85 ? (
          <div>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={4}>
                <InputLabel>GCSE Maths (A*-C)</InputLabel>
                <Select
                  value={gMaths}
                  onChange={(e) => setGmaths(e.target.value)}
                  fullWidth
                >
                  <MenuItem value="A*">A*</MenuItem>
                  <MenuItem value="A">A</MenuItem>
                  <MenuItem value="B">B</MenuItem>
                  <MenuItem value="C">C</MenuItem>
                  <MenuItem value="Level 2 equivalent">
                    Level 2 equivalent
                  </MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12} sm={4}>
                <InputLabel>GCSE English (A*-C)</InputLabel>
                <Select
                  value={gEnglish}
                  onChange={(e) => setGenglish(e.target.value)}
                  fullWidth
                >
                  <MenuItem value="A*">A*</MenuItem>
                  <MenuItem value="A">A</MenuItem>
                  <MenuItem value="B">B</MenuItem>
                  <MenuItem value="C">C</MenuItem>
                  <MenuItem value="Level 2 equivalent">
                    Level 2 equivalent
                  </MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12} sm={4}>
                <InputLabel>Total GCSE's (5-9+)</InputLabel>
                <Select
                  value={gcse}
                  onChange={(e) => setGcse(e.target.value)}
                  fullWidth
                >
                  <MenuItem value="9+">9+</MenuItem>
                  <MenuItem value="8">8</MenuItem>
                  <MenuItem value="7">7</MenuItem>
                  <MenuItem value="6">6</MenuItem>
                  <MenuItem value="5">5</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12} sm={4}>
                <InputLabel>A Levels</InputLabel>
                <Select
                  value={aLevels}
                  onChange={(e) => setAlevels(e.target.value)}
                  fullWidth
                >
                  <MenuItem value="A*, A*, A*">A*, A*, A*</MenuItem>
                  <MenuItem value="A, A, A">A, A, A</MenuItem>
                  <MenuItem value="A, A, B">A, A, B</MenuItem>
                  <MenuItem value="A, B, B">A, B, B</MenuItem>
                  <MenuItem value="B, B, B">B, B, B</MenuItem>
                  <MenuItem value="B, B, C">B, B, C</MenuItem>
                  <MenuItem value="N/A">N/A</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12} sm={3}>
                <InputLabel>IELTS Points</InputLabel>
                <TextField
                  required
                  id="ucas"
                  type="number"
                  name="IELTS"
                  value={IELTS}
                  onChange={(e) => setIELTS(e.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={5}>
                <InputLabel>BTEC Extended Diploma</InputLabel>
                <Select
                  value={diploma}
                  onChange={(e) => setDiploma(e.target.value)}
                  fullWidth
                >
                  <MenuItem value="Distinction, Distinction, Distinction">
                    Distinction, Distinction, Distinction
                  </MenuItem>
                  <MenuItem value="Distinction, Distinction, Merit">
                    Distinction, Distinction, Merit
                  </MenuItem>
                  <MenuItem value="Distinction, Merit, Merit">
                    Distinction, Merit, Merit
                  </MenuItem>
                  <MenuItem value="N/A">N/A</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12} sm={4}>
                <InputLabel>Access to HE Diploma</InputLabel>
                <Select
                  value={HE}
                  onChange={(e) => setHE(e.target.value)}
                  fullWidth
                >
                  <MenuItem value="Pass">Pass</MenuItem>
                  <MenuItem value="N/A">N/A</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12} sm={3}>
                <InputLabel>UCAS Points</InputLabel>
                <TextField
                  required
                  id="ucas"
                  type="number"
                  name="ucas"
                  value={ucas}
                  onChange={(e) => setUCAS(e.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={5}>
                <InputLabel>Degree</InputLabel>
                <Select
                  value={degree}
                  onChange={(e) => setDegree(e.target.value)}
                  fullWidth
                >
                  <MenuItem value="Doctoral degree">Doctoral degree</MenuItem>
                  <MenuItem value="Graduate diploma">Graduate diploma</MenuItem>
                  <MenuItem value="Graduate certificate">
                    Graduate certificate
                  </MenuItem>
                  <MenuItem value="Bachelor degree">Bachelor degree</MenuItem>
                  <MenuItem value="Advanced diploma / Associates degree">
                    Advanced diploma / Associates degree
                  </MenuItem>
                  <MenuItem value="N/A">N/A</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  required
                  control={<Checkbox color="secondary" value="yes" />}
                  onChange={(e) => setCheck("yes")}
                  label="My Level 3 qualifications includes a science subject."
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
          </div>
        ) : (
          /* If the applicant chose a postgraduate course then it will show this layout */ <div>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <InputLabel required>
                  Degree in Computing or Business/Engineering
                </InputLabel>
                <Select
                  value={degree}
                  onChange={(e) => setDegree(e.target.value)}
                  fullWidth
                >
                  <MenuItem value="Doctoral Degree">Doctoral Degree</MenuItem>
                  <MenuItem value="Masters Degree">Masters Degree</MenuItem>
                  <MenuItem value="Graduate Diploma">Graduate Diploma</MenuItem>
                  <MenuItem value="Bachelor's Degree (1st) (Hons)">
                    Bachelor's Degree (1st) (Hons)
                  </MenuItem>
                  <MenuItem value="Bachelor's Degree (2:1) (Hons)">
                    Bachelor's Degree (2:1) (Hons)
                  </MenuItem>
                  <MenuItem value="Bachelor's Degree (2:2) (Hons)">
                    Bachelor's Degree (2:2) (Hons)
                  </MenuItem>
                  <MenuItem value="Bachelor's Degree (3rd) (Hons)">
                    Bachelor's Degree (3rd) (Hons)
                  </MenuItem>
                  <MenuItem value="Graduate Certificate">
                    Graduate Certificate
                  </MenuItem>
                  <MenuItem value="Higher National Diploma">
                    Higher National Diploma
                  </MenuItem>
                  <MenuItem value="N/A">N/A</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Equivalent professional qualification"
                  value={EPQ1}
                  onChange={(e) => setEPQ1(e.target.value)}
                  fullWidth
                />
                <TextField
                  label="Equivalent professional qualification"
                  value={EPQ2}
                  onChange={(e) => setEPQ2(e.target.value)}
                  fullWidth
                />
                <TextField
                  label="Equivalent professional qualification"
                  value={EPQ3}
                  onChange={(e) => setEPQ3(e.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  required
                  control={<Checkbox color="secondary" value="yes" />}
                  onChange={(e) => setCheck("yes")}
                  label="My degree contains a significant level of computing."
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
          </div>
        )}
      </Paper>
      <div>
        <CR />
      </div>
    </main>
  );
}

export default Qualif;
