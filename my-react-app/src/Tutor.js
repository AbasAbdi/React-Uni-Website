// Tutor.js
// Importing the necessary files
import React from "react";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import CR from "./CR";

// TabPanel function that takes props as arguments
function TabPanel(props) {
  // Declaring the props for this function
  const { children, value, index, ...other } = props;

  // Returns a div tabpanel that displays a box containing the children prop
  // wrapped in the Typography component we imported... if the value prop matches the index prop
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

// Validation.
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

// Declaring the useStyles react hook.
const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
  },
  cardGrid: {
    paddingLeft: theme.spacing(25),
    paddingBottom: theme.spacing(2),
  },
  cardContent: {
    flexGrow: 1,
  },
}));

// Student function that takes props as arguments
function Tutor(props) {
  // Declaring the props for this function
  const { course_id, stud, mod, cor } = props;

  // Using useStyles inside the function component to create classes object
  const classes = useStyles();

  // Created Hook Expressions React.useState()
  // Declaring a state variable (student_id) and call (setStudent_id)
  const [student_id, setStudent_id] = React.useState(0);
  // Declaring a state variable (module_id) and call (setModule_id)
  const [module_id, setModule_id] = React.useState(0);
  // Declaring a state variable (name) and call (setName)
  const [name, setName] = React.useState("");
  // Declaring a state variable (marks) and call (setMark)
  const [marks, setMarks] = React.useState([]);

  /* Function that declares and assigns values to a "value" object and returns Axios post method. 
    The first parameter reads data from the URL, and the second parameter is the value object we mentioned earlier. 
    Then the response data recieved is assigned to a "resData" variable we declared. A let "data" variable is declared and we
    assign it a string using JSON.stringify() method to convert the JavaScript object to a JSON string .
    Finally window.alert() method displays the data recieved from the server to the user.*/
  function saveAssessment() {
    const value = {
      student_id: student_id,
      module_id: module_id,
      name: name,
      marks: marks,
    };

    axios.post("http://localhost:8080/assessment", value).then((response) => {
      // handle success
      var resData = response.data;
      let data = JSON.stringify(resData);
      window.alert("Response recieved from server = " + data);
    });
  }

  // Declaring a variable called "course_name"
  var course_name;

  /* Function that maps through the "cor" state variable and if the conditional argument 
  for the "if statement" is satisfied it assigns the course_name value in the "cor" state variable
  to the course_name variable we declared beforehand */
  function cor_name() {
    cor.data &&
      cor.data.map((id) => {
        if (String(id.course_id).match(course_id)) {
          course_name = id.course_name;
        } else return null;
      });
  }

  // Return for the Tutor function
  /* It begins by calling cor_name() who's function we already described. It will then renders material ui's Typography component containing the title that 
    will be displayed to the user, which will be the value of the course_name variable, that was derived by the function of cor_name(). It will then display 
    two Select components, the first of which will have it's MenutItems display the student id's as well as first and last names of the students taking the 
    course. It will do this by mapping through the databases "students" table who's information is contained in the "stud" state variable it recieved as a 
    prop from the SignIn component and filtering by the course_id and isStudent columns. The second Select component will have it's MenutItems display the 
    module id's and module names of the course. It will do this by mapping through the databases "modules" table who's information is contained in the "mod" 
    state variable it recieved as a prop from the SignIn component and filtering by the course_id. Once the user has selected a student and a module from 
    MentuItem's of the Select components it will map through mod state variable once again and display a container that will have the name of the module the 
    user selected as the title, followed by two TextField components for the user to input information.  Whenever changes are made to these components, it 
    is saved by using the Hook Expressions we declared previously. Once the user clicks the "Submit Marks" button it calls the saveAssessment() function.
    Finally, the CR component is rendered to act as the footer for this section.*/
  return (
    <main>
      <div className={classes.heroContent}>
        {cor_name()}
        <Typography align="center" color="textPrimary" gutterBottom>
          <h1 className="word">{course_name} Tutor</h1>
        </Typography>
        <br />
        <div className="App">
          <Grid container>
            <Grid item xs={12}>
              <InputLabel>Select A {course_name} Student To Mark</InputLabel>
              <Select
                value={student_id}
                onClick={(e) => setStudent_id(e.target.value)}
                fullWidth
              >
                {stud.data &&
                  stud.data.map((apply, idx) => {
                    if (
                      String(apply.course_id).match(course_id) &&
                      apply.isStudent === "yes"
                    ) {
                      return (
                        <MenuItem value={apply.student_id}>
                          {apply.student_id} | {apply.fName} {apply.lName}
                        </MenuItem>
                      );
                    } else return null;
                  })}
              </Select>
              <br />
            </Grid>

            <Grid item xs={12}>
              <br />
              <InputLabel>Select A {course_name} Module</InputLabel>
              <Select
                value={module_id}
                onClick={(e) => setModule_id(e.target.value)}
                fullWidth
              >
                {mod.data &&
                  mod.data.map((apply, idx) => {
                    if (String(apply.course_id).match(course_id)) {
                      return (
                        <MenuItem value={apply.module_id}>
                          {apply.module_id} | {apply.module_name}
                        </MenuItem>
                      );
                    } else return null;
                  })}
              </Select>
            </Grid>
          </Grid>
        </div>
        <br /> <br />
        <div class="flex-container">
          {student_id > 0 && module_id > 0
            ? mod.data &&
              mod.data.map((apply, idx) => {
                if (
                  String(apply.course_id).match(course_id) &&
                  String(apply.module_id).match(module_id)
                ) {
                  return (
                    <div className="flex-item ">
                      <Container
                        className={classes.cardGrid}
                        container
                        spacing={3}
                        justify="center"
                      >
                        <CardContent className={classes.cardContent} fullwidth>
                          <Typography variant="h6" text-align="center">
                            {apply.module_name}
                          </Typography>

                          <Divider />
                          <br />
                          <Grid item md={12}>
                            <TextField
                              required
                              label="Assessment Name"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              fullWidth
                            />
                          </Grid>
                          <br />
                          <Grid item md={12}>
                            <InputLabel>Marks</InputLabel>
                            <TextField
                              required
                              type="text"
                              value={marks}
                              placeholder="100/100"
                              onChange={(e) => setMarks(e.target.value)}
                              fullWidth
                            />
                          </Grid>
                        </CardContent>
                        <div class="align-right">
                          <CardActions>
                            <React.Fragment>
                              <Button
                                variant="contained"
                                color="primary"
                                onClick={saveAssessment}
                              >
                                Submit Marks
                              </Button>
                            </React.Fragment>
                          </CardActions>
                        </div>
                      </Container>
                    </div>
                  );
                } else return null;
              })
            : null}
        </div>
      </div>
      <footer class="footer">
        <CR />
      </footer>
    </main>
  );
}

// exporting the Tutor function
export default Tutor;
