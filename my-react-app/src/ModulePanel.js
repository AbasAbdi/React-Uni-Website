// ModulePanel.js
// Importing the necessary files
import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
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
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
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
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

// Declaring the useStyles react hook.
const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
  },

  root: {
    paddingTop: theme.spacing(8),
    paddingLeft: theme.spacing(0),
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: 1190,
  },

  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    paddingLeft: theme.spacing(15),
    fontSize: 54,
  },
  cardGrid: {
    paddingLeft: theme.spacing(15),
    paddingBottom: theme.spacing(8),
  },

  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },

  cardContent: {
    flexGrow: 1,
  },
}));

// ModulePanel function that takes props as arguments
function ModulePanel(props) {
  // Declaring the props for this function
  const { id } = props;

  // Using useStyles inside the function component to create classes object
  const classes = useStyles();

  // Created Hook Expressions React.useState()
  // Declaring a state variable (view1) and call (setView1)
  const [view1, setView1] = React.useState(false);
  // Declaring a state variable (view2) and call (setView2)
  const [view2, setView2] = React.useState(false);
  // Declaring a state variable (view3) and call (setView3)
  const [view3, setView3] = React.useState(false);
  // Declaring a state variable (view4) and call (setView4)
  const [view4, setView4] = React.useState(false);
  // Declaring a state variable (view5) and call (setView5)
  const [view5, setView5] = React.useState(false);
  // Declaring a state variable (view6) and call (setView6)
  const [view6, setView6] = React.useState(false);
  // Declaring a state variable (view7) and call (setView7)
  const [view7, setView7] = React.useState(false);
  // Declaring a state variable (mod) and call (setMod)
  const [mod, setMod] = React.useState("");
  // Declaring a state variable (value) and call (setValue)
  const [value, setValue] = React.useState(0);

  /* Function that returns Axios get method which reads data from the URL,
     then assigns the response to resData variable. Finally it utilises the 
     setMod call to set the mod state variable to the new value (resData). 
     It catches any error and prints it to console.log.  */
  function fetchRecords() {
    axios
      .get("http://localhost:8080/modules")
      .then((response) => {
        // handle success
        var resData = response.data;
        //var data = JSON.stringify(resData);
        setMod(resData);
      })
      .catch((err) => console.log("Error: ", err));
  }

  /* Declaring a variable (handleChange) and assigning it an arrow function such that
     when it's called it utilises the setValue call to set the value state variable to the new value (newValue). It also utilises the setView(1-7) calls to set the view(1-7) state variables to the new value (false)  */
  const handleChange = (event, newValue) => {
    setValue(newValue);
    setView1(false);
    setView2(false);
    setView3(false);
    setView4(false);
    setView5(false);
    setView6(false);
    setView7(false);
  };

  // Return for the ModulePanel function
  /* It begins by calling fetchRecords() who's function we already described. It contains vertical Tabs that show different Tab labels depending on whether 
  or not the "id" prop with it's course_id value it recieved from either the CourseInfo or Student components is less than 85 (undergraduate course) or 
  greater than 85 (postgraduate course). The TabPanel's then displays different module information by essentially mapping through the databases "module" table 
  who's information is contained in the "mod" state variable and filtering by where the course_id and module_id match the module we are looking for, before 
  returning the relevant information for each section. Finally, the CR component is rendered to act as the footer for this section. */
  return (
    <main>
      <div class="flex-container">
        <div className={classes.root}>
          {fetchRecords()}
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            className={classes.tabs}
          >
            {id < 85 ? (
              <Tab label="Level 4" {...a11yProps(0)} />
            ) : (
              <Tab label="Compulsary Modules" {...a11yProps(0)} />
            )}
            {id < 85 ? (
              <Tab label="Level 5" {...a11yProps(1)} />
            ) : (
              <Tab label="Optional Modules" {...a11yProps(0)} />
            )}
            {id < 85 ? <Tab label="Level 6" {...a11yProps(2)} /> : null}
          </Tabs>

          <TabPanel value={value} index={0}>
            <div class="flex-item">
              <Container className={classes.cardGrid} maxWidth="md">
                <Grid container spacing={8} justify="center">
                  <Grid item md={6}>
                    <Card className={classes.card}>
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {mod.data &&
                            mod.data.map((info) => {
                              if (
                                String(info.module_id).match(10) &&
                                String(info.course_id).match(id)
                              ) {
                                return info.module_name;
                              } else return null;
                            })}
                        </Typography>
                        {view1 ? (
                          <Typography>
                            {mod.data &&
                              mod.data.map((info) => {
                                if (
                                  String(info.module_id).match(10) &&
                                  String(info.course_id).match(id)
                                ) {
                                  return info.module_desc;
                                } else return null;
                              })}
                          </Typography>
                        ) : (
                          <Typography>
                            {mod.data &&
                              mod.data.map((info) => {
                                if (
                                  String(info.module_id).match(10) &&
                                  String(info.course_id).match(id)
                                ) {
                                  return info.module_type;
                                } else return null;
                              })}
                          </Typography>
                        )}
                      </CardContent>
                      <CardActions>
                        <Button
                          size="small"
                          color="primary"
                          onClick={() =>
                            setView1(!view1) &
                            setView2(false) &
                            setView3(false) &
                            setView4(false) &
                            setView5(false) &
                            setView6(false)
                          }
                        >
                          View
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>

                  <Grid item md={6}>
                    <Card className={classes.card}>
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {mod.data &&
                            mod.data.map((info) => {
                              if (
                                String(info.module_id).match(11) &&
                                String(info.course_id).match(id)
                              ) {
                                return info.module_name;
                              } else return null;
                            })}
                        </Typography>
                        {view2 ? (
                          <Typography>
                            {mod.data &&
                              mod.data.map((info) => {
                                if (
                                  String(info.module_id).match(11) &&
                                  String(info.course_id).match(id)
                                ) {
                                  return info.module_desc;
                                } else return null;
                              })}
                          </Typography>
                        ) : (
                          <Typography>
                            {mod.data &&
                              mod.data.map((info) => {
                                if (
                                  String(info.module_id).match(11) &&
                                  String(info.course_id).match(id)
                                ) {
                                  return info.module_type;
                                } else return null;
                              })}
                          </Typography>
                        )}
                      </CardContent>
                      <CardActions>
                        <Button
                          size="small"
                          color="primary"
                          onClick={() =>
                            setView2(!view2) &
                            setView1(false) &
                            setView3(false) &
                            setView4(false) &
                            setView5(false) &
                            setView6(false)
                          }
                        >
                          View
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>

                  <Grid item md={6}>
                    <Card className={classes.card}>
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {mod.data &&
                            mod.data.map((info) => {
                              if (
                                String(info.module_id).match(12) &&
                                String(info.course_id).match(id)
                              ) {
                                return info.module_name;
                              } else return null;
                            })}
                        </Typography>
                        {view3 ? (
                          <Typography>
                            {mod.data &&
                              mod.data.map((info) => {
                                if (
                                  String(info.module_id).match(12) &&
                                  String(info.course_id).match(id)
                                ) {
                                  return info.module_desc;
                                } else return null;
                              })}
                          </Typography>
                        ) : (
                          <Typography>
                            {mod.data &&
                              mod.data.map((info) => {
                                if (
                                  String(info.module_id).match(12) &&
                                  String(info.course_id).match(id)
                                ) {
                                  return info.module_type;
                                } else return null;
                              })}
                          </Typography>
                        )}
                      </CardContent>
                      <CardActions>
                        <Button
                          size="small"
                          color="primary"
                          onClick={() =>
                            setView3(!view3) &
                            setView2(false) &
                            setView1(false) &
                            setView4(false) &
                            setView5(false) &
                            setView6(false)
                          }
                        >
                          View
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                  <Grid item md={6}>
                    <Card className={classes.card}>
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {mod.data &&
                            mod.data.map((info) => {
                              if (
                                String(info.module_id).match(13) &&
                                String(info.course_id).match(id)
                              ) {
                                return info.module_name;
                              } else return null;
                            })}
                        </Typography>
                        {view4 ? (
                          <Typography>
                            {mod.data &&
                              mod.data.map((info) => {
                                if (
                                  String(info.module_id).match(13) &&
                                  String(info.course_id).match(id)
                                ) {
                                  return info.module_desc;
                                } else return null;
                              })}
                          </Typography>
                        ) : (
                          <Typography>
                            {mod.data &&
                              mod.data.map((info) => {
                                if (
                                  String(info.module_id).match(13) &&
                                  String(info.course_id).match(id)
                                ) {
                                  return info.module_type;
                                } else return null;
                              })}
                          </Typography>
                        )}
                      </CardContent>
                      <CardActions>
                        <Button
                          size="small"
                          color="primary"
                          onClick={() =>
                            setView4(!view4) &
                            setView2(false) &
                            setView3(false) &
                            setView1(false) &
                            setView5(false) &
                            setView6(false)
                          }
                        >
                          View
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                  <Grid item md={6}>
                    <Card className={classes.card}>
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {mod.data &&
                            mod.data.map((info) => {
                              if (
                                String(info.module_id).match(14) &&
                                String(info.course_id).match(id)
                              ) {
                                return info.module_name;
                              } else return null;
                            })}
                        </Typography>
                        {view5 ? (
                          <Typography>
                            {mod.data &&
                              mod.data.map((info) => {
                                if (
                                  String(info.module_id).match(14) &&
                                  String(info.course_id).match(id)
                                ) {
                                  return info.module_desc;
                                } else return null;
                              })}
                          </Typography>
                        ) : (
                          <Typography>
                            {mod.data &&
                              mod.data.map((info) => {
                                if (
                                  String(info.module_id).match(14) &&
                                  String(info.course_id).match(id)
                                ) {
                                  return info.module_type;
                                } else return null;
                              })}
                          </Typography>
                        )}
                      </CardContent>
                      <CardActions>
                        <Button
                          size="small"
                          color="primary"
                          onClick={() =>
                            setView5(!view5) &
                            setView2(false) &
                            setView3(false) &
                            setView4(false) &
                            setView1(false) &
                            setView6(false)
                          }
                        >
                          View
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                  <Grid item md={6}>
                    <Card className={classes.card}>
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {mod.data &&
                            mod.data.map((info) => {
                              if (
                                String(info.module_id).match(15) &&
                                String(info.course_id).match(id)
                              ) {
                                return info.module_name;
                              } else return null;
                            })}
                        </Typography>
                        {view6 ? (
                          <Typography>
                            {mod.data &&
                              mod.data.map((info) => {
                                if (
                                  String(info.module_id).match(15) &&
                                  String(info.course_id).match(id)
                                ) {
                                  return info.module_desc;
                                } else return null;
                              })}
                          </Typography>
                        ) : (
                          <Typography>
                            {mod.data &&
                              mod.data.map((info) => {
                                if (
                                  String(info.module_id).match(15) &&
                                  String(info.course_id).match(id)
                                ) {
                                  return info.module_type;
                                } else return null;
                              })}
                          </Typography>
                        )}
                      </CardContent>
                      <CardActions>
                        <Button
                          size="small"
                          color="primary"
                          onClick={() =>
                            setView6(!view6) &
                            setView2(false) &
                            setView3(false) &
                            setView4(false) &
                            setView5(false) &
                            setView1(false)
                          }
                        >
                          View
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                </Grid>
              </Container>
            </div>
          </TabPanel>

          <TabPanel value={value} index={1}>
            <div class="flex-item">
              <Container className={classes.cardGrid} maxWidth="md">
                <Grid container spacing={8} justify="center">
                  <Grid item md={6}>
                    <Card className={classes.card}>
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {mod.data &&
                            mod.data.map((info) => {
                              if (
                                String(info.module_id).match(16) &&
                                String(info.course_id).match(id)
                              ) {
                                return info.module_name;
                              } else return null;
                            })}
                        </Typography>
                        {view1 ? (
                          <Typography>
                            {mod.data &&
                              mod.data.map((info) => {
                                if (
                                  String(info.module_id).match(16) &&
                                  String(info.course_id).match(id)
                                ) {
                                  return info.module_desc;
                                } else return null;
                              })}
                          </Typography>
                        ) : (
                          <Typography>
                            {mod.data &&
                              mod.data.map((info) => {
                                if (
                                  String(info.module_id).match(16) &&
                                  String(info.course_id).match(id)
                                ) {
                                  return info.module_type;
                                } else return null;
                              })}
                          </Typography>
                        )}
                      </CardContent>
                      <CardActions>
                        <Button
                          size="small"
                          color="primary"
                          onClick={() =>
                            setView1(!view1) &
                            setView2(false) &
                            setView3(false) &
                            setView4(false) &
                            setView5(false) &
                            setView6(false)
                          }
                        >
                          View
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>

                  <Grid item md={6}>
                    <Card className={classes.card}>
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {mod.data &&
                            mod.data.map((info) => {
                              if (
                                String(info.module_id).match(17) &&
                                String(info.course_id).match(id)
                              ) {
                                return info.module_name;
                              } else return null;
                            })}
                        </Typography>
                        {view2 ? (
                          <Typography>
                            {mod.data &&
                              mod.data.map((info) => {
                                if (
                                  String(info.module_id).match(17) &&
                                  String(info.course_id).match(id)
                                ) {
                                  return info.module_desc;
                                } else return null;
                              })}
                          </Typography>
                        ) : (
                          <Typography>
                            {mod.data &&
                              mod.data.map((info) => {
                                if (
                                  String(info.module_id).match(17) &&
                                  String(info.course_id).match(id)
                                ) {
                                  return info.module_type;
                                } else return null;
                              })}
                          </Typography>
                        )}
                      </CardContent>
                      <CardActions>
                        <Button
                          size="small"
                          color="primary"
                          onClick={() =>
                            setView2(!view2) &
                            setView1(false) &
                            setView3(false) &
                            setView4(false) &
                            setView5(false) &
                            setView6(false)
                          }
                        >
                          View
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>

                  <Grid item md={6}>
                    <Card className={classes.card}>
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {mod.data &&
                            mod.data.map((info) => {
                              if (
                                String(info.module_id).match(18) &&
                                String(info.course_id).match(id)
                              ) {
                                return info.module_name;
                              } else return null;
                            })}
                        </Typography>
                        {view3 ? (
                          <Typography>
                            {mod.data &&
                              mod.data.map((info) => {
                                if (
                                  String(info.module_id).match(18) &&
                                  String(info.course_id).match(id)
                                ) {
                                  return info.module_desc;
                                } else return null;
                              })}
                          </Typography>
                        ) : (
                          <Typography>
                            {mod.data &&
                              mod.data.map((info) => {
                                if (
                                  String(info.module_id).match(18) &&
                                  String(info.course_id).match(id)
                                ) {
                                  return info.module_type;
                                } else return null;
                              })}
                          </Typography>
                        )}
                      </CardContent>
                      <CardActions>
                        <Button
                          size="small"
                          color="primary"
                          onClick={() =>
                            setView3(!view3) &
                            setView2(false) &
                            setView1(false) &
                            setView4(false) &
                            setView5(false) &
                            setView6(false)
                          }
                        >
                          View
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                  <Grid item md={6}>
                    <Card className={classes.card}>
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {mod.data &&
                            mod.data.map((info) => {
                              if (
                                String(info.module_id).match(19) &&
                                String(info.course_id).match(id)
                              ) {
                                return info.module_name;
                              } else return null;
                            })}
                        </Typography>
                        {view4 ? (
                          <Typography>
                            {mod.data &&
                              mod.data.map((info) => {
                                if (
                                  String(info.module_id).match(19) &&
                                  String(info.course_id).match(id)
                                ) {
                                  return info.module_desc;
                                } else return null;
                              })}
                          </Typography>
                        ) : (
                          <Typography>
                            {mod.data &&
                              mod.data.map((info) => {
                                if (
                                  String(info.module_id).match(19) &&
                                  String(info.course_id).match(id)
                                ) {
                                  return info.module_type;
                                } else return null;
                              })}
                          </Typography>
                        )}
                      </CardContent>
                      <CardActions>
                        <Button
                          size="small"
                          color="primary"
                          onClick={() =>
                            setView4(!view4) &
                            setView2(false) &
                            setView3(false) &
                            setView1(false) &
                            setView5(false) &
                            setView6(false)
                          }
                        >
                          View
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                  <Grid item md={6}>
                    <Card className={classes.card}>
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {mod.data &&
                            mod.data.map((info) => {
                              if (
                                String(info.module_id).match(20) &&
                                String(info.course_id).match(id)
                              ) {
                                return info.module_name;
                              } else return null;
                            })}
                        </Typography>
                        {view5 ? (
                          <Typography>
                            {mod.data &&
                              mod.data.map((info) => {
                                if (
                                  String(info.module_id).match(20) &&
                                  String(info.course_id).match(id)
                                ) {
                                  return info.module_desc;
                                } else return null;
                              })}
                          </Typography>
                        ) : (
                          <Typography>
                            {mod.data &&
                              mod.data.map((info) => {
                                if (
                                  String(info.module_id).match(20) &&
                                  String(info.course_id).match(id)
                                ) {
                                  return info.module_type;
                                } else return null;
                              })}
                          </Typography>
                        )}
                      </CardContent>
                      <CardActions>
                        <Button
                          size="small"
                          color="primary"
                          onClick={() =>
                            setView5(!view5) &
                            setView2(false) &
                            setView3(false) &
                            setView4(false) &
                            setView1(false) &
                            setView6(false)
                          }
                        >
                          View
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                  <Grid item md={6}>
                    <Card className={classes.card}>
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {mod.data &&
                            mod.data.map((info) => {
                              if (
                                String(info.module_id).match(21) &&
                                String(info.course_id).match(id)
                              ) {
                                return info.module_name;
                              } else return null;
                            })}
                        </Typography>
                        {view6 ? (
                          <Typography>
                            {mod.data &&
                              mod.data.map((info) => {
                                if (
                                  String(info.module_id).match(21) &&
                                  String(info.course_id).match(id)
                                ) {
                                  return info.module_desc;
                                } else return null;
                              })}
                          </Typography>
                        ) : (
                          <Typography>
                            {mod.data &&
                              mod.data.map((info) => {
                                if (
                                  String(info.module_id).match(21) &&
                                  String(info.course_id).match(id)
                                ) {
                                  return info.module_type;
                                } else return null;
                              })}
                          </Typography>
                        )}
                      </CardContent>
                      <CardActions>
                        <Button
                          size="small"
                          color="primary"
                          onClick={() =>
                            setView6(!view6) &
                            setView2(false) &
                            setView3(false) &
                            setView4(false) &
                            setView5(false) &
                            setView1(false)
                          }
                        >
                          View
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                </Grid>
              </Container>
            </div>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <div class="flex-item">
              <Container className={classes.cardGrid} maxWidth="md">
                <Grid container spacing={4} justify="center">
                  <Grid item md={6}>
                    <Card className={classes.card}>
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {mod.data &&
                            mod.data.map((info) => {
                              if (
                                String(info.module_id).match(22) &&
                                String(info.course_id).match(id)
                              ) {
                                return info.module_name;
                              } else return null;
                            })}
                        </Typography>
                        {view1 ? (
                          <Typography>
                            {mod.data &&
                              mod.data.map((info) => {
                                if (
                                  String(info.module_id).match(22) &&
                                  String(info.course_id).match(id)
                                ) {
                                  return info.module_desc;
                                } else return null;
                              })}
                          </Typography>
                        ) : (
                          <Typography>
                            {mod.data &&
                              mod.data.map((info) => {
                                if (
                                  String(info.module_id).match(22) &&
                                  String(info.course_id).match(id)
                                ) {
                                  return info.module_type;
                                } else return null;
                              })}
                          </Typography>
                        )}
                      </CardContent>
                      <CardActions>
                        <Button
                          size="small"
                          color="primary"
                          onClick={() =>
                            setView1(!view1) &
                            setView2(false) &
                            setView3(false) &
                            setView4(false) &
                            setView5(false) &
                            setView6(false) &
                            setView7(false)
                          }
                        >
                          View
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>

                  <Grid item md={6}>
                    <Card className={classes.card}>
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {mod.data &&
                            mod.data.map((info) => {
                              if (
                                String(info.module_id).match(23) &&
                                String(info.course_id).match(id)
                              ) {
                                return info.module_name;
                              } else return null;
                            })}
                        </Typography>
                        {view2 ? (
                          <Typography>
                            {mod.data &&
                              mod.data.map((info) => {
                                if (
                                  String(info.module_id).match(23) &&
                                  String(info.course_id).match(id)
                                ) {
                                  return info.module_desc;
                                } else return null;
                              })}
                          </Typography>
                        ) : (
                          <Typography>
                            {mod.data &&
                              mod.data.map((info) => {
                                if (
                                  String(info.module_id).match(23) &&
                                  String(info.course_id).match(id)
                                ) {
                                  return info.module_type;
                                } else return null;
                              })}
                          </Typography>
                        )}
                      </CardContent>
                      <CardActions>
                        <Button
                          size="small"
                          color="primary"
                          onClick={() =>
                            setView2(!view2) &
                            setView1(false) &
                            setView3(false) &
                            setView4(false) &
                            setView5(false) &
                            setView6(false) &
                            setView7(false)
                          }
                        >
                          View
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>

                  <Grid item md={6}>
                    <Card className={classes.card}>
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {mod.data &&
                            mod.data.map((info) => {
                              if (
                                String(info.module_id).match(24) &&
                                String(info.course_id).match(id)
                              ) {
                                return info.module_name;
                              } else return null;
                            })}
                        </Typography>
                        {view3 ? (
                          <Typography>
                            {mod.data &&
                              mod.data.map((info) => {
                                if (
                                  String(info.module_id).match(24) &&
                                  String(info.course_id).match(id)
                                ) {
                                  return info.module_desc;
                                } else return null;
                              })}
                          </Typography>
                        ) : (
                          <Typography>
                            {mod.data &&
                              mod.data.map((info) => {
                                if (
                                  String(info.module_id).match(24) &&
                                  String(info.course_id).match(id)
                                ) {
                                  return info.module_type;
                                } else return null;
                              })}
                          </Typography>
                        )}
                      </CardContent>
                      <CardActions>
                        <Button
                          size="small"
                          color="primary"
                          onClick={() =>
                            setView3(!view3) &
                            setView2(false) &
                            setView1(false) &
                            setView4(false) &
                            setView5(false) &
                            setView6(false) &
                            setView7(false)
                          }
                        >
                          View
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                  <Grid item md={6}>
                    <Card className={classes.card}>
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {mod.data &&
                            mod.data.map((info) => {
                              if (
                                String(info.module_id).match(25) &&
                                String(info.course_id).match(id)
                              ) {
                                return info.module_name;
                              } else return null;
                            })}
                        </Typography>
                        {view4 ? (
                          <Typography>
                            {mod.data &&
                              mod.data.map((info) => {
                                if (
                                  String(info.module_id).match(25) &&
                                  String(info.course_id).match(id)
                                ) {
                                  return info.module_desc;
                                } else return null;
                              })}
                          </Typography>
                        ) : (
                          <Typography>
                            {mod.data &&
                              mod.data.map((info) => {
                                if (
                                  String(info.module_id).match(25) &&
                                  String(info.course_id).match(id)
                                ) {
                                  return info.module_type;
                                } else return null;
                              })}
                          </Typography>
                        )}
                      </CardContent>
                      <CardActions>
                        <Button
                          size="small"
                          color="primary"
                          onClick={() =>
                            setView4(!view4) &
                            setView2(false) &
                            setView3(false) &
                            setView1(false) &
                            setView5(false) &
                            setView6(false) &
                            setView7(false)
                          }
                        >
                          View
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                  <Grid item md={6}>
                    <Card className={classes.card}>
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {mod.data &&
                            mod.data.map((info) => {
                              if (
                                String(info.module_id).match(26) &&
                                String(info.course_id).match(id)
                              ) {
                                return info.module_name;
                              } else return null;
                            })}
                        </Typography>
                        {view5 ? (
                          <Typography>
                            {mod.data &&
                              mod.data.map((info) => {
                                if (
                                  String(info.module_id).match(26) &&
                                  String(info.course_id).match(id)
                                ) {
                                  return info.module_desc;
                                } else return null;
                              })}
                          </Typography>
                        ) : (
                          <Typography>
                            {mod.data &&
                              mod.data.map((info) => {
                                if (
                                  String(info.module_id).match(26) &&
                                  String(info.course_id).match(id)
                                ) {
                                  return info.module_type;
                                } else return null;
                              })}
                          </Typography>
                        )}
                      </CardContent>
                      <CardActions>
                        <Button
                          size="small"
                          color="primary"
                          onClick={() =>
                            setView5(!view5) &
                            setView2(false) &
                            setView3(false) &
                            setView4(false) &
                            setView1(false) &
                            setView6(false) &
                            setView7(false)
                          }
                        >
                          View
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                  <Grid item md={6}>
                    <Card className={classes.card}>
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {mod.data &&
                            mod.data.map((info) => {
                              if (
                                String(info.module_id).match(27) &&
                                String(info.course_id).match(id)
                              ) {
                                return info.module_name;
                              } else return null;
                            })}
                        </Typography>
                        {view6 ? (
                          <Typography>
                            {mod.data &&
                              mod.data.map((info) => {
                                if (
                                  String(info.module_id).match(27) &&
                                  String(info.course_id).match(id)
                                ) {
                                  return info.module_desc;
                                } else return null;
                              })}
                          </Typography>
                        ) : (
                          <Typography>
                            {mod.data &&
                              mod.data.map((info) => {
                                if (
                                  String(info.module_id).match(27) &&
                                  String(info.course_id).match(id)
                                ) {
                                  return info.module_type;
                                } else return null;
                              })}
                          </Typography>
                        )}
                      </CardContent>
                      <CardActions>
                        <Button
                          size="small"
                          color="primary"
                          onClick={() =>
                            setView6(!view6) &
                            setView2(false) &
                            setView3(false) &
                            setView4(false) &
                            setView5(false) &
                            setView1(false) &
                            setView7(false)
                          }
                        >
                          View
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                  <Grid item md={6}>
                    <Card className={classes.card}>
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {mod.data &&
                            mod.data.map((info) => {
                              if (
                                String(info.module_id).match(28) &&
                                String(info.course_id).match(id)
                              ) {
                                return info.module_name;
                              } else return null;
                            })}
                        </Typography>
                        {view7 ? (
                          <Typography>
                            {mod.data &&
                              mod.data.map((info) => {
                                if (
                                  String(info.module_id).match(28) &&
                                  String(info.course_id).match(id)
                                ) {
                                  return info.module_desc;
                                } else return null;
                              })}
                          </Typography>
                        ) : (
                          <Typography>
                            {mod.data &&
                              mod.data.map((info) => {
                                if (
                                  String(info.module_id).match(28) &&
                                  String(info.course_id).match(id)
                                ) {
                                  return info.module_type;
                                } else return null;
                              })}
                          </Typography>
                        )}
                      </CardContent>
                      <CardActions>
                        <Button
                          size="small"
                          color="primary"
                          onClick={() =>
                            setView7(!view7) &
                            setView6(false) &
                            setView2(false) &
                            setView3(false) &
                            setView4(false) &
                            setView5(false) &
                            setView1(false)
                          }
                        >
                          View
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                </Grid>
              </Container>
            </div>
          </TabPanel>
        </div>
      </div>
    </main>
  );
}

// exporting the ModulePanel function
export default ModulePanel;
