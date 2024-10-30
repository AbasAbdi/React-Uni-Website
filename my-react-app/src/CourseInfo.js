// CourseInfo.js
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
import Button2 from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import ModulePanel from "./ModulePanel";
import CR from "./CR";
import PersonalInfo from "./PersonalInfo";
import axios from "axios";

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
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

// Declaring the useStyles react hook.
const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
  },

  root2: {
    flexGrow: 1,
  },
}));

// CourseInfo function that takes props as arguments
function CourseInfo(props) {
  // Declaring the props for this function
  const { id } = props;

  // Using useStyles inside the function component to create classes object
  const classes = useStyles();

  // Using useTheme inside the function component to create theme object
  const theme = useTheme();

  // Created Hook Expressions React.useState()
  // Declaring a state variable (cor) and call (setCor)
  const [cor, setCor] = React.useState("");
  // Declaring a state variable (value2) and call (setValue2)
  const [value2, setValue2] = React.useState(0);
  // Declaring a state variable (state) and call (setState)
  const [state, setState] = React.useState(false);

  /* Function that returns Axios get method which reads data from the URL,
     then assigns the response to resData variable. Finally it utilises the 
     setCor call to set the cor state variable to the new value (resData). 
     It catches any error and prints it to console.log.  */
  function fetchRecords() {
    axios
      .get("http://localhost:8080/courses")
      .then((response) => {
        // handle success
        var resData = response.data;
        //var data = JSON.stringify(resData);
        setCor(resData);
      })
      .catch((err) => console.log("Error: ", err));
  }

  /* Declaring a variable (handleChangeIndex) and assigning it an arrow function such that
     when it's called it utilises the setValue2 call to set the value2 state variable to the new value (index) */
  const handleChangeIndex = (index) => {
    return setValue2(index);
  };

  /* Declaring a variable (switchTab) and assigning it an arrow function such that
     when it's called it utilises the setValue2 call to set the value2 state variable to the new value (newValue) */
  const switchTab = (event, newValue) => {
    return setValue2(newValue);
  };

  /* If the state variable (state) equals true then the CourseInfo component will return PersonalInfo
      component and assign PersonalInfo's "id" prop the value of CourseInfo's "id" prop */
  if (state === true) {
    return <PersonalInfo id={id} />;
  }

  // Return for the CourseInfo function
  /* It begins by calling fetchRecords() who's function we already described. It then fills out the information to be displayed to the user, 
  which it does by mapping through the information contained within the databases "courses" table, filtering by the "id" prop with the
  course_id value it recieved from either the Undergrad or Postgrad components, and then returning the relevant information for each section. It also
  contains Tabs with SwipeableViews that display TabPanel's which contain different course requirments for UK & EU/International students depending
  on which one is selected (it shows the UK requirments by default). It also contains a large boostrap button which when pressed uses the setState 
  call to alter the value of the state variable (state) from false to true. This then feeds into the if statements we mentioned earlier which 
  conditionally renders the PersonalInfo component. This return also renders the Module component and assigns it's "id" prop the value of 
  CourseInfo's "id" prop inorder to get modules relevant to the course information we are displaying to the user. Finally, the CR component 
  is rendered to act as the footer for this section.*/
  return (
    <main>
      {fetchRecords()}
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
              {cor.data &&
                cor.data.map((info) => {
                  if (String(info.course_id).match(id)) {
                    return info.course_name;
                  } else return null;
                })}
            </Typography>
            <Typography variant="h5" gutterBottom className="ht">
              Overview
            </Typography>
            <Divider />
            <Typography className="p">
              <p>
                {cor.data &&
                  cor.data.map((info) => {
                    if (String(info.course_id).match(id)) {
                      return info.course_ov1;
                    } else return null;
                  })}
              </p>
              <p>
                {cor.data &&
                  cor.data.map((info) => {
                    if (String(info.course_id).match(id)) {
                      return info.course_ov2;
                    } else return null;
                  })}
              </p>
              <p>
                {cor.data &&
                  cor.data.map((info) => {
                    if (
                      String(info.course_id).match(id) &&
                      info.course_ov3 !== "N/A"
                    ) {
                      return info.course_ov3;
                    } else return null;
                  })}
              </p>
              <br />
            </Typography>

            <Typography variant="h5" gutterBottom className="ht">
              <br />
              Entry Requirements
            </Typography>
            <Divider />
            <div className={classes.root2}>
              <Tabs
                value={value2}
                onChange={switchTab}
                indicatorColor="primary"
                textColor="primary"
                centered
              >
                <Tab label="UK" {...a11yProps(0)} />
                <Tab label="EU/International" {...a11yProps(1)} />
              </Tabs>

              <SwipeableViews
                axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                index={value2}
                onChangeIndex={handleChangeIndex}
              >
                <TabPanel value={value2} index={0} dir={theme.direction}>
                  <h1 className="pt">
                    {cor.data &&
                      cor.data.map((info) => {
                        if (
                          String(info.course_id).match(id) &&
                          info.ukReq_points !== "N/A"
                        ) {
                          return info.ukReq_points;
                        } else return null;
                      })}
                  </h1>
                  <h3 className="pt">
                    {cor.data &&
                      cor.data.map((info) => {
                        if (String(info.course_id).match(id)) {
                          return info.ukReq_title;
                        } else return null;
                      })}
                  </h3>
                  <p className="pt">
                    {cor.data &&
                      cor.data.map((info) => {
                        if (String(info.course_id).match(id)) {
                          return info.ukReq_sec;
                        } else return null;
                      })}
                  </p>
                  <div className="pt">
                    <ul>
                      {cor.data &&
                        cor.data.map((info) => {
                          if (
                            String(info.course_id).match(id) &&
                            info.ukReq_list1 !== "N/A"
                          ) {
                            return <li>{info.ukReq_list1}</li>;
                          } else return null;
                        })}
                    </ul>

                    <ul>
                      {cor.data &&
                        cor.data.map((info) => {
                          if (
                            String(info.course_id).match(id) &&
                            info.ukReq_list2 !== "N/A"
                          ) {
                            return <li>{info.ukReq_list2}</li>;
                          } else return null;
                        })}
                    </ul>

                    <ul>
                      {cor.data &&
                        cor.data.map((info) => {
                          if (
                            String(info.course_id).match(id) &&
                            info.ukReq_list3 !== "N/A"
                          ) {
                            return <li>{info.ukReq_list3}</li>;
                          } else return null;
                        })}
                    </ul>
                  </div>
                  <p className="pt">
                    {cor.data &&
                      cor.data.map((info) => {
                        if (
                          String(info.course_id).match(id) &&
                          info.ukReq_gcse !== "N/A"
                        ) {
                          return info.ukReq_gcse;
                        } else return null;
                      })}
                  </p>
                </TabPanel>
                <TabPanel value={value2} index={1} dir={theme.direction}>
                  <h1 className="pt">
                    {cor.data &&
                      cor.data.map((info) => {
                        if (String(info.course_id).match(id)) {
                          return info.euInt_points;
                        } else return null;
                      })}
                  </h1>
                  <h3 className="pt">
                    {cor.data &&
                      cor.data.map((info) => {
                        if (String(info.course_id).match(id)) {
                          return info.euInt_title;
                        } else return null;
                      })}
                  </h3>
                  <p className="pt">
                    {cor.data &&
                      cor.data.map((info) => {
                        if (String(info.course_id).match(id)) {
                          return info.euInt_p1;
                        } else return null;
                      })}
                  </p>
                  <p className="pt">
                    {cor.data &&
                      cor.data.map((info) => {
                        if (String(info.course_id).match(id)) {
                          return info.euInt_p2;
                        } else return null;
                      })}
                  </p>
                  <p className="pt">
                    {cor.data &&
                      cor.data.map((info) => {
                        if (String(info.course_id).match(id)) {
                          return info.euInt_p3;
                        } else return null;
                      })}
                  </p>
                </TabPanel>
              </SwipeableViews>
              <br />
            </div>
          </Grid>
        </div>
        <Button2
          size="lg"
          variant="success"
          onClick={() => setState(!state)}
          block
        >
          <p className="v">APPLY NOW</p>
        </Button2>
        <br /> <br />
        <Typography variant="h5" gutterBottom className="ht">
          Course Modules
        </Typography>
        <Divider />
      </div>
      <ModulePanel id={id} />

      <footer class="footer">
        <CR />
      </footer>
    </main>
  );
}
// exporting the CourseInfo function
export default CourseInfo;
