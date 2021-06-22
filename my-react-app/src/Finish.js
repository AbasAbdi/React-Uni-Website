// Finish.js
// Importing the necessary files
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
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
}));

// Finish function
function Finish() {
  // Using useStyles inside the function component to create classes object
  const classes = useStyles();

  // Return for the Finish function
  /* It renders material ui's Typography component containing the information we want to display to the user upon completion of their student registation.
    Finally, the CR component is rendered to act as the footer for this section.*/
  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Customer Registration
          </Typography>
          <br />
          <React.Fragment>
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Thank you for registering with us.
              </Typography>
              <Typography variant="subtitle1">
                Your are now a registered member of Timber. Welcome aboard!
              </Typography>
            </React.Fragment>
          </React.Fragment>
        </Paper>
      </main>

      <div>
        <CR />
      </div>
    </React.Fragment>
  );
}

// exporting the Finish function
export default Finish;
