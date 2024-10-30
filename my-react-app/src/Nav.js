// Nav.js
// Importing the necessary files
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import React from "react";
import Undergrad from "./Undergrad";
import Postgrad from "./Postgrad";
import Screen1 from "./Screen1";
import SignIn from "./SignIn";

// Declaring the useStyles react hook.
const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: "wrap",
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
}));

// Nav function
function Nav() {
  // Using useStyles inside the function component to create classes object
  const classes = useStyles();

  // Created Hook Expressions React.useState()
  // Declaring a state variable (state) and call (setState)
  const [state, setState] = React.useState("home");

  // Return for the Nav function
  /* Rendering the AppBar and the different links/buttons contained within the Toolbar. When a link/button is clicked
  it set's a different value for the state variable (state) that we declared previously. The value of the state variable (state) then
  defines which component is rendered beneath the AppBar. Since we assigned "home" as the initial value for the state variable (state)
  the Screen1 component will always be rendered beneath the appbar unless the user clicks on one of the links/buttons. */
  return (
    <div id="nav">
      <React.Fragment>
        <CssBaseline />
        <AppBar
          position="static"
          color="default"
          elevation={0}
          className={classes.appBar}
        >
          <Toolbar className={classes.toolbar}>
            <Typography
              variant="h6"
              color="inherit"
              noWrap
              className={classes.toolbarTitle}
            >
              Abas Abdi
            </Typography>
            <nav>
              <Link
                variant="button"
                color="textPrimary"
                href="#"
                className={classes.link}
                onClick={() => setState("undergrad")}
              >
                Undergraduate
              </Link>
              <Link
                variant="button"
                color="textPrimary"
                href="#"
                className={classes.link}
                onClick={() => setState("postgrad")}
              >
                Postgraduate
              </Link>
              <Link
                variant="button"
                color="textPrimary"
                href="#"
                className={classes.link}
                onClick={() => setState("home")}
              >
                Home
              </Link>
            </nav>
            <Button
              href="#"
              color="primary"
              variant="outlined"
              className={classes.link}
              onClick={() => setState("SignIn")}
            >
              Login
            </Button>
          </Toolbar>
        </AppBar>
      </React.Fragment>

      {state === "home" ? <Screen1 /> : null}
      {state === "undergrad" ? <Undergrad /> : null}
      {state === "postgrad" ? <Postgrad /> : null}
      {state === "SignIn" ? <SignIn /> : null}
    </div>
  );
}

// exporting the Nav function
export default Nav;
