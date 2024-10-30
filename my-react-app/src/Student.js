// Student.js
// Importing the necessary files
import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import SwipeableViews from "react-swipeable-views";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ModulePanel from "./ModulePanel";
import CardContent from "@material-ui/core/CardContent";
import Container from "@material-ui/core/Container";
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

// TabPanel2 function that takes props as arguments
function TabPanel2(props) {
  // Declaring the props for this function
  const { children, value, index, ...other } = props;

  // Returns a div tabpanel that displays a box containing the children prop
  // wrapped in the Typography component we imported... if the value prop matches the index prop
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={2}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

// Validation.
TabPanel2.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

// Function that takes index as argument and returns id
function a11yProps2(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
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

  root2: {
    flexGrow: 1,
  },

  cardGrid: {
    paddingLeft: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },

  cardContent: {
    flexGrow: 1,
  },
}));

// Student function that takes props as arguments
function Student(props) {
  // Declaring the props for this function
  const { student_id, fName, lName, course_id, assess, mod } = props;

  // Using useStyles inside the function component to create classes object
  const classes = useStyles();

  // Using useTheme inside the function component to create theme object
  const theme = useTheme();

  // Created Hook Expressions React.useState()
  // Declaring a state variable (value2) and call (setValue2)
  const [value2, setValue2] = React.useState(0);

  /* Declaring a variable (handleChangeIndex) and assigning it an arrow functiin such that
     when it's called it utilises the setValue2 call to set the value2 state variable to the new value (index) */
  const handleChangeIndex = (index) => {
    return setValue2(index);
  };

  /* Declaring a variable (switchTab) and assigning it an arrow functiin such that
     when it's called it utilises the setValue2 call to set the value2 state variable to the new value (newValue) */
  const switchTab = (event, newValue) => {
    return setValue2(newValue);
  };

  // Return for the Student function
  /* It renders material ui's Typography component containing the title that will be displayed to the user which will be the user's first and last name 
   who's values have been received as props from the SignIn component. It will then display two horizontal Tabs with the labels "My Modules" & "My Marks". 
   By default it will display the "My Modules" Tab in which the Modules component is rendered and it's "id" prop is given the value of the "course_id" prop 
   who's value was given from the SignIn component. If the "My Marks" Tab is clicked it fills out the information to be displayed to the user by  mapping 
   through the information contained within the databases "assessment" table (which is in the assess state variable) and returning the relevant information 
   for each section or returning null. Finally, the CR component is rendered to act as the footer for this section.*/
  return (
    <main>
      <div className={classes.heroContent}>
        <div className={classes.heroContent}>
          <Grid item md={12}>
            <Typography
              variant="h3"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              <br />
              {fName + " " + lName + " | " + student_id}
            </Typography>

            <div className={classes.root2}>
              <Tabs
                value={value2}
                onChange={switchTab}
                indicatorColor="primary"
                textColor="primary"
                centered
              >
                <Tab label="My Modules" {...a11yProps2(0)} />
                <Tab label="My Marks" {...a11yProps2(1)} />
              </Tabs>

              <SwipeableViews
                axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                index={value2}
                onChangeIndex={handleChangeIndex}
              >
                <TabPanel2 value={value2} index={0} dir={theme.direction}>
                  <ModulePanel id={course_id} />
                </TabPanel2>
                <TabPanel2 value={value2} index={1} dir={theme.direction}>
                  {assess.data &&
                    assess.data.map((assess, idx) => {
                      return (
                        mod.data &&
                        mod.data.map((mod, idx) => {
                          if (
                            String(assess.module_id).match(mod.module_id) &&
                            String(assess.student_id).match(student_id) &&
                            String(mod.course_id).match(course_id)
                          ) {
                            return (
                              <div className="flex-item ">
                                <Container
                                  className={classes.cardGrid}
                                  maxWidth="md"
                                >
                                  <Grid container justify="center">
                                    <Grid item md={12}>
                                      <CardContent
                                        className={classes.cardContent}
                                        fullwidth
                                      >
                                        <Typography>
                                          {mod.module_name}
                                        </Typography>
                                        <Divider />
                                        <Typography
                                          className="sp"
                                          gutterBottom
                                          variant="h5"
                                          component="h2"
                                        >
                                          {assess.name}
                                        </Typography>

                                        <Typography>Marks</Typography>
                                        <Divider />
                                        <Typography
                                          className="sp"
                                          gutterBottom
                                          variant="h5"
                                          component="h2"
                                        >
                                          {assess.marks}
                                        </Typography>
                                        <Divider />
                                      </CardContent>
                                    </Grid>
                                  </Grid>
                                </Container>
                              </div>
                            );
                          } else return null;
                        })
                      );
                    })}
                </TabPanel2>
              </SwipeableViews>
              <br />
            </div>
          </Grid>
        </div>
      </div>
      <CR />
    </main>
  );
}

// exporting the Student function
export default Student;
