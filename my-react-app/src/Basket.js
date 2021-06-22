// Basket.js
// Importing the necessary files
import React from "react";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import PropTypes from "prop-types";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button2 from "react-bootstrap/Button";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import "./App.css";
import Finish from "./Finish";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import CR from "./CR";
import Customer from "./Customer";

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

  cardMedia: {
    paddingTop: "0%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));
const style = {
  height: "20%",
  width: "20%",
};
const style2 = {
  height: "50%",
  width: "50%",
};
// Basket function
function Basket(props) {
  const { cust } = props;
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
     then assigns the response to resData variable. */
  function fetchRecords() {
    axios
      .get("http://localhost:8080/basket")
      .then((response) => {
        // handle success

        var resData = response.data;
        //var data = JSON.stringify(resData);
        setStud(resData);
      })
      .catch((err) => console.log("Error: ", err));
  }

  // Declaring a state variable
  const [k, setK] = React.useState(1);
  const [custer, setCuster] = React.useState(0);

  if (k === 1) {
    getID();
  }
  var message = once(function () {
    return alert(
      "Sorry but there is not enough funds in this account to complete the transaction."
    );
  });
  if (k === 3) {
    cust.data &&
      cust.data.map((cust) => {
        stud.data &&
          stud.data.map((bask) => {
            if (cust.cust_id !== 43 && cust.isLogged === "yes") {
              const card_amount = cust.card_amount - total();
              const t_price = bask.bt_price;
              const t_cost = bask.prod_cost;
              const t_quantity = bask.bt_quantity;
              const h = t_price - t_cost;
              const profit = h.toFixed(2);
              const cust_name = cust.fName + " " + cust.lName;
              const prod_name = bask.bt_name;
              const value1 = {
                card_amount: card_amount,
              };
              const value = {
                prod_name: prod_name,
                cust_name: cust_name,
                t_quantity: t_quantity,
                t_cost: t_cost,
                t_price: t_price,
                profit: profit,
              };

              if (card_amount >= 0) {
                axios
                  .post("http://localhost:8080/sale", value)
                  .then((response) => {
                    // handle success
                    var resData = response.data;
                    let data = JSON.stringify(resData);
                    window.alert("Response recieved from server = " + data);
                  });

                axios
                  .put(`http://localhost:8080/updateBank/${custer}`, value1)
                  .then((response) => {
                    // handle success
                    var resData = response.data;
                    let data = JSON.stringify(resData);
                    window.alert(
                      "Response recieved from server = " + data + custer
                    );
                  });
              }
              if (card_amount < 0) {
                alert(
                  "Sorry but there is not enough funds in this account to complete the transaction."
                );
              }
            }
          });
      });
    setK(0);
  }

  if (k === 4) {
    return (
      cust.data &&
      cust.data.map((cust) => {
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
    );
  }
  function getID() {
    setK(2);
    return (
      stud.data &&
      stud.data.map((apply) => {
        return (
          cust.data &&
          cust.data.map((cust) => {
            if (
              cust.cust_id !== 43 &&
              cust.isLogged === "yes" &&
              cust.cust_id === apply.cust_id
            ) {
              return setCuster(cust.cust_id);
            } else return null;
          })
        );
      })
    );
  }

  function total() {
    var sum = 0;
    stud.data &&
      stud.data.map((apply) => {
        for (var x = 0; x < 1000; x++) {
          if (apply.bt_id === x && apply.cust_id === custer) {
            sum += parseInt(apply.bt_price) * parseInt(apply.bt_quantity);

            if (apply.bt_delivery === "DPD Express (£3.95) 1-2 Working Days.") {
              sum += 3.95;
            }
            if (
              apply.bt_delivery === "Hermes Next Day (£8.95) Get it Tomorrow!"
            ) {
              sum += 8.95;
            }
          }
        }
      });
    return sum.toFixed(2);
  }
  function item() {
    var item = 0;

    stud.data &&
      stud.data.map((apply) => {
        for (var x = 0; x < 1000; x++) {
          if (apply.bt_id === x && apply.cust_id === custer) {
            item += parseInt(apply.bt_price) * parseInt(apply.bt_quantity);
          }
        }
      });
    return item.toFixed(2);
  }

  function deliv() {
    var deliv = 0;

    stud.data &&
      stud.data.map((apply) => {
        for (var x = 0; x < 1000; x++) {
          if (apply.bt_id === x && apply.cust_id === custer) {
            if (apply.bt_delivery === "DPD Express (£3.95) 1-2 Working Days.") {
              deliv += 3.95;
            }
            if (
              apply.bt_delivery === "Hermes Next Day (£8.95) Get it Tomorrow!"
            ) {
              deliv += 8.95;
            }
          }
        }
      });
    return deliv.toFixed(2);
  }

  function once(fn, context) {
    var result;

    return function () {
      if (fn) {
        result = fn.apply(context || this, arguments);
        fn = null;
      }

      return result;
    };
  }

  // Return for the Admission function

  return (
    <main>
      <div className={classes.heroContent}>
        <br />
        <div class="flex-container">
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            className={classes.tabs}
          >
            <Tab label="Shopping Basket" {...a11yProps(0)} />

            <Tab label="Checkout" {...a11yProps(1)} />
          </Tabs>
          <TabPanel value={value} index={0}>
            <Typography variant="h3" align="center" color="textPrimary">
              <h2 className="word">Your Shopping Basket</h2>
            </Typography>
            <div onMouseMove={() => setK(1)}>
              <Typography
                className="sp"
                gutterBottom
                variant="p"
                component="h3"
                align="center"
              >
                Order Total: <b>£{total()}</b>
              </Typography>
            </div>
            <br />
            {fetchRecords()}
            {stud.data &&
              stud.data.map((apply) => {
                return (
                  cust.data &&
                  cust.data.map((cust) => {
                    if (
                      cust.cust_id !== 43 &&
                      cust.isLogged === "yes" &&
                      cust.cust_id === apply.cust_id
                    ) {
                      return (
                        <div className="flex-item ">
                          <Container className={classes.cardGrid} maxWidth="md">
                            <Grid container justify="center">
                              <Grid item md={12}>
                                <CardContent
                                  className={classes.cardContent}
                                  fullwidth
                                >
                                  <CardMedia
                                    className={classes.cardMedia}
                                    title="Image title"
                                  >
                                    <img src={apply.bt_img} style={style} />
                                  </CardMedia>
                                  <Typography
                                    className="sp"
                                    gutterBottom
                                    variant="p"
                                    component="h5"
                                  >
                                    {apply.bt_name}
                                  </Typography>
                                  <Typography
                                    className="sp"
                                    variant="p"
                                    component="h8"
                                  >
                                    Size: <b>{apply.bt_size}</b>
                                  </Typography>
                                  <br />
                                  <Typography component="h8" variant="p">
                                    Quantity: <b>{apply.bt_quantity}</b>
                                  </Typography>
                                  <br />
                                  <Typography component="h8" variant="p">
                                    <i>{apply.bt_delivery}</i>
                                  </Typography>
                                  <br />
                                  <Typography
                                    className="sp"
                                    gutterBottom
                                    variant="p"
                                    component="h5"
                                  >
                                    <b>
                                      £{apply.bt_price * apply.bt_quantity}{" "}
                                    </b>{" "}
                                    <small>
                                      {apply.bt_delivery ===
                                      "Standard Delivery (FREE) Approx. 3-5 Working Days"
                                        ? "+ (FREE)"
                                        : null}
                                      {apply.bt_delivery ===
                                      "DPD Express (£3.95) 1-2 Working Days."
                                        ? "+ (£3.95)"
                                        : null}
                                      {apply.bt_delivery ===
                                      "Hermes Next Day (£8.95) Get it Tomorrow!"
                                        ? "+ (£8.95)"
                                        : null}
                                    </small>
                                  </Typography>
                                </CardContent>
                                <CardActions>
                                  <Button
                                    variant="contained"
                                    color="secondary"
                                    onClick={(e) => {
                                      if (apply.bt_id !== 49) {
                                        axios
                                          .delete(
                                            `http://localhost:8080/deleteBasket/${apply.bt_id}`
                                          )
                                          .then((response) => {
                                            // handle success
                                            fetchRecords();
                                            var resData = response.data;
                                            let data = JSON.stringify(resData);
                                            window.alert(
                                              "Response recieved from server = " +
                                                data
                                            );
                                          });

                                        const value99 = {
                                          prod_quantity: apply.bt_oldq,
                                        };
                                        axios
                                          .put(
                                            `http://localhost:8080/updateProduct/${apply.prod_id}`,
                                            value99
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
                                      }
                                    }}
                                  >
                                    Remove
                                  </Button>
                                </CardActions>
                              </Grid>
                            </Grid>
                          </Container>
                        </div>
                      );
                    } else return null;
                  })
                );
              })}
          </TabPanel>

          <TabPanel value={value} index={1}>
            {cust.data &&
              cust.data.map((cust) => {
                if (cust.cust_id !== 43 && cust.isLogged === "yes") {
                  return (
                    <div className="flex-item ">
                      <Container className={classes.cardGrid} maxWidth="md">
                        <Grid justify="center">
                          <Grid item md={50}>
                            <CardContent
                              className={classes.cardContent}
                              fullwidth
                            >
                              <Typography
                                className="sp"
                                gutterBottom
                                variant="p"
                                component="h3"
                                align="center"
                              >
                                Order Summary
                              </Typography>
                              <div onMouseMove={() => setK(1)}>
                                <Typography>Items: £{item()}</Typography>
                                <Typography>
                                  Postage & Packing: £{deliv()}
                                </Typography>
                                <Divider />
                                <Typography
                                  className="sp"
                                  gutterBottom
                                  variant="p"
                                  component="h4"
                                >
                                  Order Total: <b>£{total()}</b>
                                </Typography>
                                <Typography
                                  className="sp"
                                  gutterBottom
                                  variant="p"
                                  component="h5"
                                >
                                  Order total includes VAT.
                                </Typography>
                              </div>
                            </CardContent>
                          </Grid>
                        </Grid>

                        <Button2
                          class="btn btn-primary btn-lg btn-block"
                          variant="primary"
                          onClick={() => setK(3)}
                          block
                        >
                          <p className="v">BUY NOW</p>
                        </Button2>
                        <Divider />
                        <Grid container spacing={4} justify="center">
                          <Grid item xs={12} sm={6} md={6} lg={6}>
                            <CardContent
                              className={classes.cardContent}
                              fullwidth
                            >
                              {" "}
                              <CardMedia
                                className={classes.cardMedia}
                                title="Image title"
                              >
                                <img
                                  src="https://static.vecteezy.com/system/resources/previews/000/509/325/original/bank-card-stock-vector-illustration.jpg"
                                  style={style2}
                                />
                              </CardMedia>
                              <Typography>Bank Card</Typography>
                              <Divider />
                              <Typography>
                                Card Holder: {cust.card_name}
                              </Typography>
                              <Typography>
                                Ending in {cust.card_num.toString().substr(-4)}
                              </Typography>
                            </CardContent>
                            <CardActions>
                              <Button
                                variant="contained"
                                color="primary"
                                onClick={(e) => {
                                  setK(4);
                                }}
                              >
                                Change
                              </Button>
                            </CardActions>
                          </Grid>
                          <Grid item xs={12} sm={6} md={6} lg={6}>
                            <CardContent
                              className={classes.cardContent}
                              fullwidth
                            >
                              <CardMedia
                                className={classes.cardMedia}
                                title="Image title"
                              >
                                <img
                                  src="https://th.bing.com/th/id/OIP.d_MN-D47f2lQs6ahKIMnZQAAAA?pid=ImgDet&rs=1"
                                  style={style2}
                                />
                              </CardMedia>
                              <Typography>Delivery Address</Typography>
                              <Divider />
                              <Typography>
                                Address Line 1: {cust.address1}
                              </Typography>
                              <Typography>
                                Address Line 2: {cust.address2}
                              </Typography>
                              <Typography>City: {cust.city}</Typography>
                              <Typography>
                                {cust.state ? "State: " + cust.state : null}
                              </Typography>
                              <Typography>
                                Zip/Postal Code: {cust.zip}
                              </Typography>
                              <Typography>Country: {cust.country}</Typography>
                            </CardContent>
                            <CardActions>
                              <Button
                                variant="contained"
                                color="primary"
                                onClick={(e) => {
                                  setK(4);
                                }}
                              >
                                Change
                              </Button>
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
// exporting the Basket function
export default Basket;
