// WorkExp.js
// Importing the necessary files
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
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

// WorkExp function that takes props as arguments
function WorkExp(props) {
  // Declaring the props for this function
  const {
    course_id,
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
    gMaths,
    gEnglish,
    gcse,
    aLevels,
    diploma,
    HE,
    ucas,
    IELTS,
    degree,
    EPQ1,
    EPQ2,
    EPQ3,
  } = props;

  /* Function that declares and assigns values to a "value" object and returns Axios post method. 
    The first parameter reads data from the URL, and the second parameter is the value object we mentioned earlier. 
    Then the response data recieved is assigned to a "resData" variable we declared. A let "data" variable is declared and we
    assign it a string using JSON.stringify() method to convert the JavaScript object to a JSON string .
    Finally window.alert() method displays the data recieved from the server to the user.*/
  function saveStudent() {
    const value = {
      course_id: course_id,
      isStudent: isStudent,
      fName: fName,
      lName: lName,
      email: email,
      password: password,
      address1: address1,
      address2: address2,
      city: city,
      state: state,
      zip: zip,
      country: country,
      gMaths: gMaths,
      gEnglish: gEnglish,
      gcse: gcse,
      aLevels: aLevels,
      diploma: diploma,
      HE: HE,
      ucas: ucas,
      IELTS: IELTS,
      degree: degree,
      EPQ1: EPQ1,
      EPQ2: EPQ2,
      EPQ3: EPQ3,
      workExp: workExp,
    };

    axios.post("http://localhost:8080/student", value).then((response) => {
      // handle success
      var resData = response.data;
      let data = JSON.stringify(resData);
      window.alert("Response recieved from server = " + data);
    });
  }

  // Using useStyles inside the function component to create classes object
  const classes = useStyles();

  // Created Hook Expressions React.useState()
  // Declaring a state variable (activeStep) and call (setActiveStep)
  const [activeStep, setActiveStep] = React.useState(0);
  // Declaring a state variable (workExp) and call (setWorkExp)
  const [workExp, setWorkExp] = React.useState("");

  // Declaring a const variable (isStudent) and assigning the value ("no")
  const isStudent = "no";

  /* Declaring a variable (handleNext) and assigning it an arrow function such that
     when it's called it utilises the setActiveStep call to set the activeStep state 
     variable to the new value (3) */
  const handleNext = () => {
    setActiveStep(3);
  };

  // Declaring a const variable (steps) and assigning it an array with three values.
  const steps = ["Personal Information", "Qualifications", "Work Experience"];

  /* Nested if statements with differing returns depending on whether or not there respective 
  conditional argument have been satisfied*/
  if (activeStep === 3 && workExp === "") {
    setWorkExp("N/A");
  } else if (activeStep === 3) {
    saveStudent();
    return <Finish />;
  }

  // Return for the WorkExp function
  /* It renders material ui's Typography component containing the title, secondary title, and some information to be displayed to the user and Stepper 
    component within which the steps  const variable we declared previous is mapped through to ouput StepLabels which contain each element within the array. 
   It will go on to display a TextareaAutosize component and when changes are made to it, it is saved by using the setWorkExp call to change the value of the 
   state variable "workExp" to whatever the user has entered. When the "submit" button is clicked it calls the handleNext functions we created earlier, which 
   uses the setActiveStep call to set the activeStep state variable to the new value (3). This then feeds into the nested if statements we created earlier that 
   conduct's error checking before calling the saveStudent() function and returning the Finish component. Finally, the CR component is rendered to act 
   as the footer for this section. */
  return (
    <React.Fragment>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Student Registration
          </Typography>
          <Stepper activeStep={2} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <Typography variant="h6" gutterBottom>
            Work Experience
          </Typography>
          <br />
          <Grid item xs={12}>
            <Typography>
              Skip this step if you already meet the requirments.
            </Typography>
            <TextareaAutosize
              className={classes.width}
              rowsMax={300}
              rowsMin={20}
              aria-label="maximum height"
              placeholder="Mature applicants (aged 21+): If you do not hold the qualifications listed but have relevant work experience, please feel free to mention them here, and your application will be considered on an individual basis. Otherwise SKIP this step and submit."
              value={workExp}
              onChange={(e) => setWorkExp(e.target.value)}
              fullWidth
            />
          </Grid>
          <React.Fragment>
            <div className={classes.buttons}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
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

// exporting the WorkExp function
export default WorkExp;
