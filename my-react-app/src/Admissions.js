// Admissions.js
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
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
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

// Function that takes index as argument and returns id
function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

// Declaring the useStyles react hook.
const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
  },

  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    paddingLeft: theme.spacing(10),
  },

  cardGrid: {
    paddingLeft: theme.spacing(25),
    paddingBottom: theme.spacing(2),
  },

  cardContent: {
    flexGrow: 1,
  },
}));

// Admissions function
function Admissions() {
  // Using useStyles inside the function component to create classes object
  const classes = useStyles();

  // Created Hook Expressions React.useState()
  // Declaring a state variable (value) and call (setValue)
  const [value, setValue] = React.useState(0);
  // Declaring a state variable (stud) and call (setStud)
  const [stud, setStud] = React.useState([]);

  /* Declaring a variable (handleChange) and assigning it an arrow function such that
     when it's called it utilises the setValue call to set the value state variable to the new value (newValue) */
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  /* Function that returns Axios get method which reads data from the URL,
     then assigns the response to resData variable. Finally it utilises the 
     setStud call to set the stud state variable to the new value (resData). 
     It catches any error and prints it to console.log.  */
  function fetchModuleRecords() {
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

  // Return for the Admission function
  /*  It renders the title of this section of the application along with two tabs, one displaying undergraduate applicants, and the other 
    postgraduate applicants who wish to enrol. The fetchModuleRecords() function is called and the information is displayed for each tab by mapping 
    through the data within the students table that is now contained within the "stud" state variable. This information is filtered by undergraduate/postgraduate
    by checking the value of the course_id number (if it's below 85 then it's undergraduate and if it's above it's postgraduate). For each applicant 
    the Admission staff have two buttons they can press, reject or accept. If they click reject the button utalises axios.delete request to remove the 
    applicants information from the database. If they click accepet however, the button utalises axios.put request to update the isStudent value from "no" to "yes".
    Whatever the admission staff decide, once a button is clicked, that applicants information will no longer be visible and they can move on to the next applicant.
    Finally the CR component is rendered to act as footer for this section. */
  return (
    <main>
      <div className={classes.heroContent}>
        <Typography
          variant="h3"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          <h2 className="word">Admissions</h2>
        </Typography>
        <div class="flex-container">
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            className={classes.tabs}
          >
            <Tab label="Undergraduate Applications" {...a11yProps(0)} />
            <Tab label="Postgraduate Applications" {...a11yProps(1)} />
          </Tabs>
          <TabPanel value={value} index={0}>
            {fetchModuleRecords()}
            {stud.data &&
              stud.data.map((apply) => {
                if (apply.course_id < 85 && apply.isStudent === "no") {
                  return (
                    <div className="flex-item ">
                      <Container className={classes.cardGrid} maxWidth="md">
                        <Grid container justify="center">
                          <Grid item md={12}>
                            <CardContent
                              className={classes.cardContent}
                              fullwidth
                            >
                              <Typography>Student ID</Typography>
                              <Divider />
                              <Typography
                                className="sp"
                                gutterBottom
                                variant="h5"
                                component="h2"
                              >
                                {apply.student_id}
                              </Typography>
                              <Typography> Full Name</Typography>
                              <Divider />
                              <Typography
                                className="sp"
                                gutterBottom
                                variant="h5"
                                component="h2"
                              >
                                {apply.fName + " " + apply.lName}
                              </Typography>
                              <Typography className="sp">
                                {" "}
                                Personal Information
                              </Typography>
                              <Divider />
                              <Typography className="sp">
                                Email Address: {apply.email}
                              </Typography>
                              <Typography>
                                Address Line 1: {apply.address1}
                              </Typography>
                              <Typography>
                                Address Line 2: {apply.address2}
                              </Typography>
                              <Typography>City: {apply.city}</Typography>
                              <Typography>
                                {apply.state ? "State: " + apply.state : null}
                              </Typography>
                              <Typography>
                                Zip/Postal Code: {apply.zip}{" "}
                              </Typography>
                              <Typography>Country: {apply.country}</Typography>
                              <Typography className="sp">
                                Qualifications
                              </Typography>
                              <Divider />
                              <Typography>
                                {apply.ucas
                                  ? "Total UCAS Points: " + apply.ucas
                                  : "IELTS: " + apply.IELTS}
                              </Typography>
                              <Typography>
                                GCSE Maths: {apply.gMaths}
                              </Typography>
                              <Typography>
                                GCSE English: {apply.gEnglish}
                              </Typography>
                              <Typography>
                                Total GCSE's: {apply.gcse}
                              </Typography>
                              <Typography>
                                {apply.aLevels !== "N/A"
                                  ? "A Levels: " + apply.aLevels
                                  : null}
                              </Typography>
                              <Typography>
                                {apply.diploma !== "N/A"
                                  ? "Diploma : " + apply.diploma
                                  : null}
                              </Typography>
                              <Typography>
                                {apply.HE !== "N/A"
                                  ? "Access to Higher Education : " + apply.HE
                                  : null}
                              </Typography>
                              <Typography>
                                {apply.degree !== "N/A"
                                  ? "Degree: " + apply.degree
                                  : null}
                              </Typography>
                              {apply.workExp !== "N/A" ? (
                                <React.Fragment>
                                  <Typography className="sp">
                                    Work Experience
                                  </Typography>
                                  <Divider />
                                  <Typography>{apply.workExp}</Typography>
                                </React.Fragment>
                              ) : null}
                            </CardContent>
                            <CardActions>
                              <Button
                                variant="contained"
                                color="secondary"
                                onClick={() =>
                                  axios
                                    .delete(
                                      `http://localhost:8080/deleteStudent/${apply.student_id}`
                                    )
                                    .then((response) => {
                                      // handle success
                                      fetchModuleRecords();
                                      var resData = response.data;
                                      let data = JSON.stringify(resData);
                                      window.alert(
                                        "Response recieved from server = " +
                                          data
                                      );
                                    })
                                }
                              >
                                Reject
                              </Button>
                              <div class="align-right">
                                <Button
                                  variant="contained"
                                  color="primary"
                                  onClick={() => {
                                    const value = {
                                      isStudent: "yes",
                                    };
                                    axios
                                      .put(
                                        `http://localhost:8080/updateStudent/${apply.student_id}`,
                                        value
                                      )
                                      .then((response) => {
                                        // handle success
                                        var resData = response.data;
                                        let data = JSON.stringify(resData);
                                        window.alert(
                                          "Response recieved from server = " +
                                            data
                                        );
                                      });
                                  }}
                                >
                                  Accept
                                </Button>
                              </div>
                            </CardActions>
                          </Grid>
                        </Grid>
                      </Container>
                    </div>
                  );
                } else return null;
              })}
          </TabPanel>
          <TabPanel value={value} index={1}>
            {stud.data &&
              stud.data.map((apply, idx) => {
                if (apply.course_id > 85 && apply.isStudent === "no") {
                  return (
                    <div className="flex-item ">
                      <Container className={classes.cardGrid} maxWidth="md">
                        <Grid container justify="center">
                          <Grid item md={12}>
                            <CardContent
                              className={classes.cardContent}
                              fullwidth
                            >
                              <Typography>Student ID</Typography>
                              <Divider />
                              <Typography
                                className="sp"
                                gutterBottom
                                variant="h5"
                                component="h2"
                              >
                                {apply.student_id}
                              </Typography>
                              <Typography> Full Name</Typography>
                              <Divider />
                              <Typography
                                className="sp"
                                gutterBottom
                                variant="h5"
                                component="h2"
                              >
                                {apply.fName + " " + apply.lName}
                              </Typography>
                              <Typography className="sp">
                                {" "}
                                Personal Information
                              </Typography>
                              <Divider />
                              <Typography className="sp">
                                Email Address: {apply.email}
                              </Typography>
                              <Typography>
                                Address Line 1: {apply.address1}
                              </Typography>
                              <Typography>
                                Address Line 2: {apply.address2}
                              </Typography>
                              <Typography>City: {apply.city}</Typography>
                              <Typography>
                                {apply.state ? "State: " + apply.state : null}
                              </Typography>
                              <Typography>
                                Zip/Postal Code: {apply.zip}
                              </Typography>
                              <Typography>Country: {apply.country}</Typography>
                              <Typography className="sp">
                                Qualifications
                              </Typography>
                              <Divider />
                              <Typography>
                                {apply.degree !== "N/A"
                                  ? "Degree: " + apply.degree
                                  : null}
                              </Typography>
                              <Typography>
                                {apply.EPQ1 !== "N/A"
                                  ? "Equivalent professional qualification: " +
                                    apply.EPQ1
                                  : null}
                              </Typography>
                              <Typography>
                                {apply.EPQ2 !== "N/A"
                                  ? "Equivalent professional qualification: " +
                                    apply.EPQ2
                                  : null}
                              </Typography>
                              <Typography>
                                {apply.EPQ3 !== "N/A"
                                  ? "Equivalent professional qualification: " +
                                    apply.EPQ3
                                  : null}
                              </Typography>
                              {apply.workExp !== "N/A" ? (
                                <React.Fragment>
                                  <Typography className="sp">
                                    Work Experience
                                  </Typography>
                                  <Divider />
                                  <Typography>{apply.workExp}</Typography>
                                </React.Fragment>
                              ) : null}
                            </CardContent>
                            <CardActions>
                              <Button
                                variant="contained"
                                color="secondary"
                                onClick={() => {
                                  axios
                                    .delete(
                                      `http://localhost:8080/deleteStudent/${apply.student_id}`
                                    )
                                    .then((response) => {
                                      fetchModuleRecords();
                                      // handle success
                                      var resData = response.data;
                                      let data = JSON.stringify(resData);
                                      window.alert(
                                        "Response recieved from server = " +
                                          data
                                      );
                                    });
                                }}
                              >
                                Reject
                              </Button>
                              <div class="align-right">
                                <Button
                                  variant="contained"
                                  color="primary"
                                  onClick={() => {
                                    const value = {
                                      isStudent: "yes",
                                    };
                                    axios
                                      .put(
                                        `http://localhost:8080/updateStudent/${apply.student_id}`,
                                        value
                                      )
                                      .then((response) => {
                                        // handle success
                                        var resData = response.data;
                                        let data = JSON.stringify(resData);
                                        window.alert(
                                          "Response recieved from server = " +
                                            data
                                        );
                                      });
                                  }}
                                >
                                  Accept
                                </Button>
                              </div>
                            </CardActions>
                          </Grid>
                        </Grid>
                      </Container>
                    </div>
                  );
                } else return null;
              })}
          </TabPanel>
        </div>
      </div>
      <footer class="footer">
        <CR />
      </footer>
    </main>
  );
}
// exporting the Admissions function
export default Admissions;
