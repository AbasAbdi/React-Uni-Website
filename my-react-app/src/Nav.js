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
import Womenswear from "./Womenswear";
import Menswear from "./Menswear";
import Screen1 from "./Screen1";
import Customer from "./Customer";
import SignIn from "./SignIn";
import Basket from "./Basket";
import axios from "axios";

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
  const [stud, setStud] = React.useState("");

  function fetchCustomerRecords() {
    axios
      .get("http://localhost:8080/customer")
      .then((response) => {
        // handle success
        var resData = response.data;
        // var data = JSON.stringify(resData);
        setStud(resData);
      })
      .catch((err) => console.log("Error: ", err));
  }
  function updateLog() {
    return (
      stud.data &&
      stud.data.map((login, idx) => {
        const value = {
          isLogged: "no",
        };
        axios
          .put(`http://localhost:8080/updateCustomer/${login.cust_id}`, value)
          .then((response) => {
            /* handle success
            var resData = response.data;
            let data = JSON.stringify(resData);
            window.alert("Response recieved from server = " + data);*/
          });

        const value2 = {
          isLogged: "yes",
        };
        axios
          .put(`http://localhost:8080/updateCustomer/${43}`, value2)
          .then((response) => {
            // handle success
            //  var resData = response.data;
            //let data = JSON.stringify(resData);
            // window.alert("Response recieved from server = " + data);
          });

        return setState("SignOut");
      })
    );
  }

  // Return for the Nav function
  /* Rendering the AppBar and the different links/buttons contained within the Toolbar. When a link/button is clicked
  it set's a different value for the state variable (state) that we declared previously. The value of the state variable (state) then
  defines which component is rendered beneath the AppBar. Since we assigned "home" as the initial value for the state variable (state)
  the Screen1 component will always be rendered beneath the appbar unless the user clicks on one of the links/buttons. */
  return (
    <div id="nav">
      <React.Fragment>
        <CssBaseline />
        {fetchCustomerRecords()}
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
              {
                <img
                  src="https://i.ibb.co/zFhmYyB/log.png"
                  className="App-logo"
                  alt="logo"
                />
              }
            </Typography>
            <nav>
              <Link
                variant="button"
                color="textPrimary"
                href="#"
                className={classes.link}
                onClick={() => setState("Womenswear")}
              >
                Womenswear
              </Link>
              <Link
                variant="button"
                color="textPrimary"
                href="#"
                className={classes.link}
                onClick={() => setState("Menswear")}
              >
                Menswear
              </Link>
              {stud.data &&
                stud.data.map((cust, idx) => {
                  if (cust.cust_id !== 43 && cust.isLogged === "yes") {
                    return (
                      <Link
                        variant="button"
                        color="textPrimary"
                        href="#"
                        className={classes.link}
                        onClick={() => setState("checkout")}
                      >
                        My Basket
                      </Link>
                    );
                  }
                })}
              {stud.data &&
                stud.data.map((cust, idx) => {
                  if (cust.cust_id !== 43 && cust.isLogged === "yes") {
                    return (
                      <Link
                        variant="button"
                        color="textPrimary"
                        href="#"
                        className={classes.link}
                        onClick={() => setState("Account")}
                      >
                        My Account
                      </Link>
                    );
                  }
                })}
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
            {stud.data &&
              stud.data.map((cust, idx) => {
                if (cust.cust_id === 43 && cust.isLogged === "yes") {
                  return (
                    <Button
                      href="#"
                      color="primary"
                      variant="outlined"
                      className={classes.link}
                      onClick={() => setState("SignIn")}
                    >
                      Login
                    </Button>
                  );
                } else if (cust.cust_id !== 43 && cust.isLogged === "yes") {
                  return (
                    <Button
                      href="#"
                      color="primary"
                      variant="outlined"
                      className={classes.link}
                      onClick={() => updateLog()}
                    >
                      Logout
                    </Button>
                  );
                }
              })}
          </Toolbar>
        </AppBar>
      </React.Fragment>

      {state === "home" ? <Screen1 /> : null}
      {state === "checkout" ? <Basket cust={stud} /> : null}
      {state === "Womenswear" ? <Womenswear stud={stud} /> : null}
      {state === "Menswear" ? <Menswear stud={stud} /> : null}
      {state === "Account"
        ? stud.data &&
          stud.data.map((cust, idx) => {
            if (cust.cust_id !== 43 && cust.isLogged === "yes") {
              return (
                <Customer
                  customer_id={cust.cust_id}
                  fName1={cust.fName}
                  lName1={cust.lName}
                />
              );
            }
          })
        : null}
      {state === "SignIn" ? <SignIn stud={stud} /> : null}
      {state === "SignOut" ? <Screen1 /> : null}
    </div>
  );
}

// exporting the Nav function
export default Nav;
