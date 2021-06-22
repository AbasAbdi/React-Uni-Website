// Menswear.js
// Importing the necessary files
import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CR from "./CR";
import PropTypes from "prop-types";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import axios from "axios";
import SignIn from "./SignIn";
import Register from "./PersonalInfo";

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
    padding: theme.spacing(8, 0, 6),
  },

  heroButtons: {
    marginTop: theme.spacing(1),
  },
  cardGrid: {
    paddingLeft: theme.spacing(20),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "150%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },

  root: {
    paddingTop: theme.spacing(0),
    paddingLeft: theme.spacing(0),
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: "flex",
  },

  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    paddingLeft: theme.spacing(15),
    fontSize: 54,
  },
}));

// Menswear function
function Menswear(props) {
  // Declaring the props for this function
  const { stud } = props;

  // Using useStyles inside the function component to create classes object
  const classes = useStyles();

  // Created Hook Expressions React.useState()

  // Declaring a state variable (cor) and call (setCor)
  const [cor, setCor] = React.useState("");

  // Declaring a state variable (value) and call (setValue)
  const [value, setValue] = React.useState(0);

  // Declaring a state variable (bt_quantity1) and call (setQuantity1)
  const [bt_quantity1, setQuantity1] = React.useState(1);
  // Declaring a state variable (bt_size1) and call (setSize1)
  const [bt_size1, setSize1] = React.useState("");
  const [bt_delivery1, setBt_delivery1] = React.useState("");

  // Declaring a state variable (bt_quantity2) and call (setQuantity2)
  const [bt_quantity2, setQuantity2] = React.useState(1);
  // Declaring a state variable (bt_size2) and call (setSize2)
  const [bt_size2, setSize2] = React.useState("");
  const [bt_delivery2, setBt_delivery2] = React.useState("");

  // Declaring a state variable (bt_quantity3) and call (setQuantity3)
  const [bt_quantity3, setQuantity3] = React.useState(1);
  // Declaring a state variable (bt_size3) and call (setSize3)
  const [bt_size3, setSize3] = React.useState("");
  const [bt_delivery3, setBt_delivery3] = React.useState("");

  // Declaring a state variable (bt_quantity4) and call (setQuantity4)
  const [bt_quantity4, setQuantity4] = React.useState(1);
  // Declaring a state variable (bt_size4) and call (setSize4)
  const [bt_size4, setSize4] = React.useState("");
  const [bt_delivery4, setBt_delivery4] = React.useState("");

  // Declaring a state variable (bt_quantity5) and call (setQuantity5)
  const [bt_quantity5, setQuantity5] = React.useState(1);
  // Declaring a state variable (bt_size5) and call (setSize5)
  const [bt_size5, setSize5] = React.useState("");
  const [bt_delivery5, setBt_delivery5] = React.useState("");

  // Declaring a state variable (bt_quantity6) and call (setQuantity6)
  const [bt_quantity6, setQuantity6] = React.useState(1);
  // Declaring a state variable (bt_size8) and call (setSize8)
  const [bt_size6, setSize6] = React.useState("");
  const [bt_delivery6, setBt_delivery6] = React.useState("");

  // Declaring a state variable (bt_quantity7) and call (setQuantity7)
  const [bt_quantity7, setQuantity7] = React.useState(1);
  // Declaring a state variable (bt_size7) and call (setSize7)
  const [bt_size7, setSize7] = React.useState("");
  const [bt_delivery7, setBt_delivery7] = React.useState("");

  // Declaring a state variable (bt_quantity8) and call (setQuantity8)
  const [bt_quantity8, setQuantity8] = React.useState(1);
  // Declaring a state variable (bt_size8) and call (setSize8)
  const [bt_size8, setSize8] = React.useState("");
  const [bt_delivery8, setBt_delivery8] = React.useState("");

  // Declaring a state variable (bt_quantity9) and call (setQuantity9)
  const [bt_quantity9, setQuantity9] = React.useState(1);
  // Declaring a state variable (bt_size9) and call (setSize9)
  const [bt_size9, setSize9] = React.useState("");
  const [bt_delivery9, setBt_delivery9] = React.useState("");

  // Declaring a state variable (bt_quantity10) and call (setQuantity10)
  const [bt_quantity10, setQuantity10] = React.useState(1);
  // Declaring a state variable (bt_size10) and call (setSize10)
  const [bt_size10, setSize10] = React.useState("");
  const [bt_delivery10, setBt_delivery10] = React.useState("");

  // Declaring a state variable (bt_quantity11) and call (setQuantity11)
  const [bt_quantity11, setQuantity11] = React.useState(1);
  // Declaring a state variable (bt_size11) and call (setSize11)
  const [bt_size11, setSize11] = React.useState("");
  const [bt_delivery11, setBt_delivery11] = React.useState("");

  // Declaring a state variable (bt_quantity12) and call (setQuantity12)
  const [bt_quantity12, setQuantity12] = React.useState(1);
  // Declaring a state variable (bt_size12) and call (setSize12)
  const [bt_size12, setSize12] = React.useState("");
  const [bt_delivery12, setBt_delivery12] = React.useState("");

  // Declaring a state variable (bt_quantity13) and call (setQuantity13)
  const [bt_quantity13, setQuantity13] = React.useState(1);
  // Declaring a state variable (bt_size13) and call (setSize13)
  const [bt_size13, setSize13] = React.useState("");
  const [bt_delivery13, setBt_delivery13] = React.useState("");

  // Declaring a state variable (bt_quantity14) and call (setQuantity14)
  const [bt_quantity14, setQuantity14] = React.useState(1);
  // Declaring a state variable (bt_size14) and call (setSize14)
  const [bt_size14, setSize14] = React.useState("");
  const [bt_delivery14, setBt_delivery14] = React.useState("");

  // Declaring a state variable (bt_quantity15) and call (setQuantity15)
  const [bt_quantity15, setQuantity15] = React.useState(1);
  // Declaring a state variable (bt_size15) and call (setSize15)
  const [bt_size15, setSize15] = React.useState("");
  const [bt_delivery15, setBt_delivery15] = React.useState("");

  // Declaring a state variable (bt_quantity16) and call (setQuantity16)
  const [bt_quantity16, setQuantity16] = React.useState(1);
  // Declaring a state variable (bt_size16) and call (setSize16)
  const [bt_size16, setSize16] = React.useState("");
  const [bt_delivery16, setBt_delivery16] = React.useState("");

  // Declaring a state variable (cust_id) and call (setCust_id)
  const [cust_id, setCust_id] = React.useState("");

  // Declaring a state variable (first) and call (setFirst)
  const [first, setFirst] = React.useState(0);

  /* Function that returns Axios get method which reads data from the URL,
     then assigns the response to resData variable. Finally it utilises the 
     setCor call to set the cor state variable to the new value (resData). 
     It catches any error and prints it to console.log.  */

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
  var save = once(function () {
    cor.data &&
      cor.data.map((info) => {
        if (
          String(info.prod_id).match(27) &&
          info.prod_quantity >= bt_quantity1
        ) {
          var prod_quantity = info.prod_quantity - bt_quantity1;

          const value1 = {
            prod_quantity: prod_quantity,
          };
          axios
            .put(`http://localhost:8080/updateProduct/${27}`, value1)
            .then((response) => {
              // handle success
              var resData = response.data;
              let data = JSON.stringify(resData);
              window.alert("Response recieved from server = " + data);
            });
        } else if (
          String(info.prod_id).match(27) &&
          info.prod_quantity < bt_quantity1
        ) {
          alert("Sorry we have " + info.prod_quantity + " left in stock.");
        }
      });
    setFirst(1);
  });

  function saveCustID(n) {
    fetchRecords();

    if (n === 1 && bt_size1 === "") {
      alert("Please select a size.");
      setFirst(0);
    } else if (n === 1 && bt_delivery1 === "") {
      alert("Please select a delivery option.");
      setFirst(0);
    } else if (n === 1 && bt_quantity1 < 1) {
      alert("Please input quantity.");
      setFirst(0);
    } else if (n === 1) {
      cor.data &&
        cor.data.map((info) => {
          if (
            String(info.prod_id).match(27) &&
            info.prod_quantity >= bt_quantity1
          ) {
            setFirst(1);
            var prod_quantity = info.prod_quantity - bt_quantity1;

            const value1 = {
              prod_quantity: prod_quantity,
            };
            axios
              .put(`http://localhost:8080/updateProduct/${27}`, value1)
              .then((response) => {
                // handle success
                var resData = response.data;
                let data = JSON.stringify(resData);
                window.alert("Response recieved from server = " + data);
              });
          }
          if (
            String(info.prod_id).match(27) &&
            info.prod_quantity < bt_quantity1
          ) {
            alert("Sorry we have " + info.prod_quantity + " left in stock.");
          }
        });
    }

    if (n === 2 && bt_size2 === "") {
      alert("Please select a size.");
      setFirst(0);
    } else if (n === 2 && bt_delivery2 === "") {
      alert("Please select a delivery option.");
      setFirst(0);
    } else if (n === 2 && bt_quantity2 < 1) {
      alert("Please input quantity.");
      setFirst(0);
    } else if (n === 2) {
      cor.data &&
        cor.data.map((info) => {
          if (
            String(info.prod_id).match(28) &&
            info.prod_quantity >= bt_quantity2
          )
            do {
              {
                setFirst(2);
                var prod_quantity = info.prod_quantity - bt_quantity2;

                const value2 = {
                  prod_quantity: prod_quantity,
                };
                axios
                  .put(`http://localhost:8080/updateProduct/${28}`, value2)
                  .then((response) => {
                    // handle success
                    var resData = response.data;
                    let data = JSON.stringify(resData);
                    window.alert("Response recieved from server = " + data);
                  });
              }
              if (
                String(info.prod_id).match(28) &&
                info.prod_quantity < bt_quantity2
              ) {
                alert(
                  "Sorry we have " + info.prod_quantity + " left in stock."
                );
                break;
              }
            } while (false);
        });
    }
    if (n === 3 && bt_size3 === "") {
      alert("Please select a size.");
      setFirst(0);
    } else if (n === 3 && bt_delivery3 === "") {
      alert("Please select a delivery option.");
      setFirst(0);
    } else if (n === 3 && bt_quantity3 < 1) {
      alert("Please input quantity.");
      setFirst(0);
    } else if (n === 3) {
      cor.data &&
        cor.data.map((info) => {
          if (
            String(info.prod_id).match(29) &&
            info.prod_quantity >= bt_quantity3
          ) {
            setFirst(3);
            var prod_quantity = info.prod_quantity - bt_quantity3;

            const value3 = {
              prod_quantity: prod_quantity,
            };
            axios
              .put(`http://localhost:8080/updateProduct/${29}`, value3)
              .then((response) => {
                // handle success
                var resData = response.data;
                let data = JSON.stringify(resData);
                window.alert("Response recieved from server = " + data);
              });
          } else if (
            String(info.prod_id).match(29) &&
            info.prod_quantity < bt_quantity3
          ) {
            alert("Sorry we have " + info.prod_quantity + " left in stock.");
          }
        });
    }
    if (n === 4 && bt_size4 === "") {
      alert("Please select a size.");
      setFirst(0);
    } else if (n === 4 && bt_delivery4 === "") {
      alert("Please select a delivery option.");
      setFirst(0);
    } else if (n === 4 && bt_quantity4 < 1) {
      alert("Please input quantity.");
      setFirst(0);
    } else if (n === 4) {
      cor.data &&
        cor.data.map((info) => {
          if (
            String(info.prod_id).match(30) &&
            info.prod_quantity >= bt_quantity4
          ) {
            setFirst(4);
            var prod_quantity = info.prod_quantity - bt_quantity4;

            const value4 = {
              prod_quantity: prod_quantity,
            };
            axios
              .put(`http://localhost:8080/updateProduct/${30}`, value4)
              .then((response) => {
                // handle success
                var resData = response.data;
                let data = JSON.stringify(resData);
                window.alert("Response recieved from server = " + data);
              });
          } else if (
            String(info.prod_id).match(30) &&
            info.prod_quantity < bt_quantity4
          ) {
            alert("Sorry we have " + info.prod_quantity + " left in stock.");
          }
        });
    }
    if (n === 5 && bt_size5 === "") {
      alert("Please select a size.");
      setFirst(0);
    } else if (n === 5 && bt_delivery5 === "") {
      alert("Please select a delivery option.");
      setFirst(0);
    } else if (n === 5 && bt_quantity5 < 1) {
      alert("Please input quantity.");
      setFirst(0);
    } else if (n === 5) {
      cor.data &&
        cor.data.map((info) => {
          if (
            String(info.prod_id).match(31) &&
            info.prod_quantity >= bt_quantity5
          ) {
            setFirst(5);
            var prod_quantity = info.prod_quantity - bt_quantity5;

            const value5 = {
              prod_quantity: prod_quantity,
            };
            axios
              .put(`http://localhost:8080/updateProduct/${31}`, value5)
              .then((response) => {
                // handle success
                var resData = response.data;
                let data = JSON.stringify(resData);
                window.alert("Response recieved from server = " + data);
              });
          } else if (
            String(info.prod_id).match(31) &&
            info.prod_quantity < bt_quantity5
          ) {
            alert("Sorry we have " + info.prod_quantity + " left in stock.");
          }
        });
    }
    if (n === 6 && bt_size6 === "") {
      alert("Please select a size.");
      setFirst(0);
    } else if (n === 6 && bt_delivery6 === "") {
      alert("Please select a delivery option.");
      setFirst(0);
    } else if (n === 6 && bt_quantity6 < 1) {
      alert("Please input quantity.");
      setFirst(0);
    } else if (n === 6) {
      cor.data &&
        cor.data.map((info) => {
          if (
            String(info.prod_id).match(32) &&
            info.prod_quantity >= bt_quantity6
          ) {
            setFirst(6);
            var prod_quantity = info.prod_quantity - bt_quantity6;

            const value6 = {
              prod_quantity: prod_quantity,
            };
            axios
              .put(`http://localhost:8080/updateProduct/${32}`, value6)
              .then((response) => {
                // handle success
                var resData = response.data;
                let data = JSON.stringify(resData);
                window.alert("Response recieved from server = " + data);
              });
          } else if (
            String(info.prod_id).match(32) &&
            info.prod_quantity < bt_quantity6
          ) {
            alert("Sorry we have " + info.prod_quantity + " left in stock.");
          }
        });
    }
    if (n === 7 && bt_size7 === "") {
      alert("Please select a size.");
      setFirst(0);
    } else if (n === 7 && bt_delivery7 === "") {
      alert("Please select a delivery option.");
      setFirst(0);
    } else if (n === 7 && bt_quantity7 < 1) {
      alert("Please input quantity.");
      setFirst(0);
    } else if (n === 7) {
      cor.data &&
        cor.data.map((info) => {
          if (
            String(info.prod_id).match(33) &&
            info.prod_quantity >= bt_quantity7
          ) {
            setFirst(7);
            var prod_quantity = info.prod_quantity - bt_quantity7;

            const value7 = {
              prod_quantity: prod_quantity,
            };
            axios
              .put(`http://localhost:8080/updateProduct/${33}`, value7)
              .then((response) => {
                // handle success
                var resData = response.data;
                let data = JSON.stringify(resData);
                window.alert("Response recieved from server = " + data);
              });
          } else if (
            String(info.prod_id).match(33) &&
            info.prod_quantity < bt_quantity7
          ) {
            alert("Sorry we have " + info.prod_quantity + " left in stock.");
          }
        });
    }
    if (n === 8 && bt_size8 === "") {
      alert("Please select a size.");
      setFirst(0);
    } else if (n === 8 && bt_delivery8 === "") {
      alert("Please select a delivery option.");
      setFirst(0);
    } else if (n === 8 && bt_quantity8 < 1) {
      alert("Please input quantity.");
      setFirst(0);
    } else if (n === 8) {
      cor.data &&
        cor.data.map((info) => {
          if (
            String(info.prod_id).match(34) &&
            info.prod_quantity >= bt_quantity8
          ) {
            setFirst(8);
            var prod_quantity = info.prod_quantity - bt_quantity8;

            const value8 = {
              prod_quantity: prod_quantity,
            };
            axios
              .put(`http://localhost:8080/updateProduct/${34}`, value8)
              .then((response) => {
                // handle success
                var resData = response.data;
                let data = JSON.stringify(resData);
                window.alert("Response recieved from server = " + data);
              });
          } else if (
            String(info.prod_id).match(34) &&
            info.prod_quantity < bt_quantity8
          ) {
            alert("Sorry we have " + info.prod_quantity + " left in stock.");
          }
        });
    }
    if (n === 9 && bt_size9 === "") {
      alert("Please select a size.");
      setFirst(0);
    } else if (n === 9 && bt_delivery9 === "") {
      alert("Please select a delivery option.");
      setFirst(0);
    } else if (n === 9 && bt_quantity9 < 1) {
      alert("Please input quantity.");
      setFirst(0);
    } else if (n === 9) {
      cor.data &&
        cor.data.map((info) => {
          if (
            String(info.prod_id).match(35) &&
            info.prod_quantity >= bt_quantity9
          ) {
            setFirst(9);
            var prod_quantity = info.prod_quantity - bt_quantity9;

            const value9 = {
              prod_quantity: prod_quantity,
            };
            axios
              .put(`http://localhost:8080/updateProduct/${35}`, value9)
              .then((response) => {
                // handle success
                var resData = response.data;
                let data = JSON.stringify(resData);
                window.alert("Response recieved from server = " + data);
              });
          } else if (
            String(info.prod_id).match(35) &&
            info.prod_quantity < bt_quantity9
          ) {
            alert("Sorry we have " + info.prod_quantity + " left in stock.");
          }
        });
    }
    if (n === 10 && bt_size10 === "") {
      alert("Please select a size.");
      setFirst(0);
    } else if (n === 10 && bt_delivery10 === "") {
      alert("Please select a delivery option.");
      setFirst(0);
    } else if (n === 10 && bt_quantity10 < 1) {
      alert("Please input quantity.");
      setFirst(0);
    } else if (n === 10) {
      cor.data &&
        cor.data.map((info) => {
          if (
            String(info.prod_id).match(36) &&
            info.prod_quantity >= bt_quantity10
          ) {
            setFirst(10);
            var prod_quantity = info.prod_quantity - bt_quantity10;

            const value10 = {
              prod_quantity: prod_quantity,
            };
            axios
              .put(`http://localhost:8080/updateProduct/${36}`, value10)
              .then((response) => {
                // handle success
                var resData = response.data;
                let data = JSON.stringify(resData);
                window.alert("Response recieved from server = " + data);
              });
          } else if (
            String(info.prod_id).match(36) &&
            info.prod_quantity < bt_quantity10
          ) {
            alert("Sorry we have " + info.prod_quantity + " left in stock.");
          }
        });
    }
    if (n === 11 && bt_size11 === "") {
      alert("Please select a size.");
      setFirst(0);
    } else if (n === 11 && bt_delivery11 === "") {
      alert("Please select a delivery option.");
      setFirst(0);
    } else if (n === 11 && bt_quantity11 < 1) {
      alert("Please input quantity.");
      setFirst(0);
    } else if (n === 11) {
      cor.data &&
        cor.data.map((info) => {
          if (
            String(info.prod_id).match(37) &&
            info.prod_quantity >= bt_quantity11
          ) {
            setFirst(11);
            var prod_quantity = info.prod_quantity - bt_quantity11;

            const value11 = {
              prod_quantity: prod_quantity,
            };
            axios
              .put(`http://localhost:8080/updateProduct/${37}`, value11)
              .then((response) => {
                // handle success
                var resData = response.data;
                let data = JSON.stringify(resData);
                window.alert("Response recieved from server = " + data);
              });
          } else if (
            String(info.prod_id).match(37) &&
            info.prod_quantity < bt_quantity11
          ) {
            alert("Sorry we have " + info.prod_quantity + " left in stock.");
          }
        });
    }
    if (n === 12 && bt_size12 === "") {
      alert("Please select a size.");
      setFirst(0);
    } else if (n === 12 && bt_delivery12 === "") {
      alert("Please select a delivery option.");
      setFirst(0);
    } else if (n === 12 && bt_quantity12 < 1) {
      alert("Please input quantity.");
      setFirst(0);
    } else if (n === 12) {
      cor.data &&
        cor.data.map((info) => {
          if (
            String(info.prod_id).match(38) &&
            info.prod_quantity >= bt_quantity12
          ) {
            setFirst(12);
            var prod_quantity = info.prod_quantity - bt_quantity12;

            const value12 = {
              prod_quantity: prod_quantity,
            };
            axios
              .put(`http://localhost:8080/updateProduct/${38}`, value12)
              .then((response) => {
                // handle success
                var resData = response.data;
                let data = JSON.stringify(resData);
                window.alert("Response recieved from server = " + data);
              });
          } else if (
            String(info.prod_id).match(38) &&
            info.prod_quantity < bt_quantity12
          ) {
            alert("Sorry we have " + info.prod_quantity + " left in stock.");
          }
        });
    }
    if (n === 13 && bt_size13 === "") {
      alert("Please select a size.");
      setFirst(0);
    } else if (n === 13 && bt_delivery13 === "") {
      alert("Please select a delivery option.");
      setFirst(0);
    } else if (n === 13 && bt_quantity13 < 1) {
      alert("Please input quantity.");
      setFirst(0);
    } else if (n === 13) {
      cor.data &&
        cor.data.map((info) => {
          if (
            String(info.prod_id).match(39) &&
            info.prod_quantity >= bt_quantity13
          ) {
            setFirst(13);
            var prod_quantity = info.prod_quantity - bt_quantity13;

            const value13 = {
              prod_quantity: prod_quantity,
            };
            axios
              .put(`http://localhost:8080/updateProduct/${39}`, value13)
              .then((response) => {
                // handle success
                var resData = response.data;
                let data = JSON.stringify(resData);
                window.alert("Response recieved from server = " + data);
              });
          } else if (
            String(info.prod_id).match(39) &&
            info.prod_quantity < bt_quantity13
          ) {
            alert("Sorry we have " + info.prod_quantity + " left in stock.");
          }
        });
    }
    if (n === 14 && bt_size14 === "") {
      alert("Please select a size.");
      setFirst(0);
    } else if (n === 14 && bt_delivery14 === "") {
      alert("Please select a delivery option.");
      setFirst(0);
    } else if (n === 14 && bt_quantity14 < 1) {
      alert("Please input quantity.");
      setFirst(0);
    } else if (n === 14) {
      cor.data &&
        cor.data.map((info) => {
          if (
            String(info.prod_id).match(40) &&
            info.prod_quantity >= bt_quantity14
          ) {
            setFirst(14);
            var prod_quantity = info.prod_quantity - bt_quantity14;

            const value14 = {
              prod_quantity: prod_quantity,
            };
            axios
              .put(`http://localhost:8080/updateProduct/${40}`, value14)
              .then((response) => {
                // handle success
                var resData = response.data;
                let data = JSON.stringify(resData);
                window.alert("Response recieved from server = " + data);
              });
          } else if (
            String(info.prod_id).match(40) &&
            info.prod_quantity < bt_quantity14
          ) {
            alert("Sorry we have " + info.prod_quantity + " left in stock.");
          }
        });
    }

    if (n === 15 && bt_size15 === "") {
      alert("Please select a size.");
      setFirst(0);
    } else if (n === 15 && bt_delivery15 === "") {
      alert("Please select a delivery option.");
      setFirst(0);
    } else if (n === 15 && bt_quantity15 < 1) {
      alert("Please input quantity.");
      setFirst(0);
    } else if (n === 15) {
      cor.data &&
        cor.data.map((info) => {
          if (
            String(info.prod_id).match(41) &&
            info.prod_quantity >= bt_quantity15
          ) {
            setFirst(15);
            var prod_quantity = info.prod_quantity - bt_quantity15;

            const value15 = {
              prod_quantity: prod_quantity,
            };
            axios
              .put(`http://localhost:8080/updateProduct/${41}`, value15)
              .then((response) => {
                // handle success
                var resData = response.data;
                let data = JSON.stringify(resData);
                window.alert("Response recieved from server = " + data);
              });
          } else if (
            String(info.prod_id).match(41) &&
            info.prod_quantity < bt_quantity15
          ) {
            alert("Sorry we have " + info.prod_quantity + " left in stock.");
          }
        });
    }

    if (n === 16 && bt_size16 === "") {
      alert("Please select a size.");
      setFirst(0);
    } else if (n === 16 && bt_delivery16 === "") {
      alert("Please select a delivery option.");
      setFirst(0);
    } else if (n === 16 && bt_quantity16 < 1) {
      alert("Please input quantity.");
      setFirst(0);
    } else if (n === 16) {
      cor.data &&
        cor.data.map((info) => {
          if (
            String(info.prod_id).match(42) &&
            info.prod_quantity >= bt_quantity16
          ) {
            setFirst(16);
            var prod_quantity = info.prod_quantity - bt_quantity16;

            const value16 = {
              prod_quantity: prod_quantity,
            };
            axios
              .put(`http://localhost:8080/updateProduct/${42}`, value16)
              .then((response) => {
                // handle success
                var resData = response.data;
                let data = JSON.stringify(resData);
                window.alert("Response recieved from server = " + data);
              });
          } else if (
            String(info.prod_id).match(42) &&
            info.prod_quantity < bt_quantity16
          ) {
            alert("Sorry we have " + info.prod_quantity + " left in stock.");
          }
        });
    }

    return (
      stud.data &&
      stud.data.map((cust, idx) => {
        if (cust.cust_id !== 43 && cust.isLogged === "yes") {
          return setCust_id(cust.cust_id);
        }
      })
    );
  }

  /* Declaring a variable (handleChange) and assigning it an arrow function such that
     when it's called it utilises the setValue call to set the value state variable to the new value (newValue). It also utilises the setView(1-7) calls to set the view(1-7) state variables to the new value (false)  */
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  /* Declaring a variable and assigning it many values. Each property (b1-d4) has a property value
    and within that value we map through the data in the cor state variable and if the course_id matches 
    the id we're looking for a String containing the information we we're looking for is returned. Otherwise, null is returned. */
  var b = {
    b1:
      cor.data &&
      cor.data.map((info) => {
        if (String(info.prod_id).match(27)) {
          return String(info.prod_img);
        } else return null;
      }),
    n1:
      cor.data &&
      cor.data.map((info) => {
        if (String(info.prod_id).match(27)) {
          return String(info.prod_name);
        } else return null;
      }),
    p1:
      cor.data &&
      cor.data.map((info) => {
        if (String(info.prod_id).match(27)) {
          return String(info.current_price);
        } else return null;
      }),
    b2:
      cor.data &&
      cor.data.map((info) => {
        if (String(info.prod_id).match(28)) {
          return String(info.prod_img);
        } else return null;
      }),
    n2:
      cor.data &&
      cor.data.map((info) => {
        if (String(info.prod_id).match(28)) {
          return String(info.prod_name);
        } else return null;
      }),
    p2:
      cor.data &&
      cor.data.map((info) => {
        if (String(info.prod_id).match(28)) {
          return String(info.current_price);
        } else return null;
      }),
    b3:
      cor.data &&
      cor.data.map((info) => {
        if (String(info.prod_id).match(29)) {
          return String(info.prod_img);
        } else return null;
      }),
    n3:
      cor.data &&
      cor.data.map((info) => {
        if (String(info.prod_id).match(29)) {
          return String(info.prod_name);
        } else return null;
      }),
    p3:
      cor.data &&
      cor.data.map((info) => {
        if (String(info.prod_id).match(29)) {
          return String(info.current_price);
        } else return null;
      }),
    b4:
      cor.data &&
      cor.data.map((info) => {
        if (String(info.prod_id).match(30)) {
          return String(info.prod_img);
        } else return null;
      }),
    n4:
      cor.data &&
      cor.data.map((info) => {
        if (String(info.prod_id).match(30)) {
          return String(info.prod_name);
        } else return null;
      }),
    p4:
      cor.data &&
      cor.data.map((info) => {
        if (String(info.prod_id).match(30)) {
          return String(info.current_price);
        } else return null;
      }),
    b5:
      cor.data &&
      cor.data.map((info) => {
        if (String(info.prod_id).match(31)) {
          return String(info.prod_img);
        } else return null;
      }),
    n5:
      cor.data &&
      cor.data.map((info) => {
        if (String(info.prod_id).match(31)) {
          return String(info.prod_name);
        } else return null;
      }),
    p5:
      cor.data &&
      cor.data.map((info) => {
        if (String(info.prod_id).match(31)) {
          return String(info.current_price);
        } else return null;
      }),
    b6:
      cor.data &&
      cor.data.map((info) => {
        if (String(info.prod_id).match(32)) {
          return String(info.prod_img);
        } else return null;
      }),
    n6:
      cor.data &&
      cor.data.map((info) => {
        if (String(info.prod_id).match(32)) {
          return String(info.prod_name);
        } else return null;
      }),
    p6:
      cor.data &&
      cor.data.map((info) => {
        if (String(info.prod_id).match(32)) {
          return String(info.current_price);
        } else return null;
      }),
    b7:
      cor.data &&
      cor.data.map((info) => {
        if (String(info.prod_id).match(33)) {
          return String(info.prod_img);
        } else return null;
      }),
    n7:
      cor.data &&
      cor.data.map((info) => {
        if (String(info.prod_id).match(33)) {
          return String(info.prod_name);
        } else return null;
      }),
    p7:
      cor.data &&
      cor.data.map((info) => {
        if (String(info.prod_id).match(33)) {
          return String(info.current_price);
        } else return null;
      }),
    b8:
      cor.data &&
      cor.data.map((info) => {
        if (String(info.prod_id).match(34)) {
          return String(info.prod_img);
        } else return null;
      }),
    n8:
      cor.data &&
      cor.data.map((info) => {
        if (String(info.prod_id).match(34)) {
          return String(info.prod_name);
        } else return null;
      }),
    p8:
      cor.data &&
      cor.data.map((info) => {
        if (String(info.prod_id).match(34)) {
          return String(info.current_price);
        } else return null;
      }),
    b9:
      cor.data &&
      cor.data.map((info) => {
        if (String(info.prod_id).match(35)) {
          return String(info.prod_img);
        } else return null;
      }),
    n9:
      cor.data &&
      cor.data.map((info) => {
        if (String(info.prod_id).match(35)) {
          return String(info.prod_name);
        } else return null;
      }),
    p9:
      cor.data &&
      cor.data.map((info) => {
        if (String(info.prod_id).match(35)) {
          return String(info.current_price);
        } else return null;
      }),
    b10:
      cor.data &&
      cor.data.map((info) => {
        if (String(info.prod_id).match(36)) {
          return String(info.prod_img);
        } else return null;
      }),
    n10:
      cor.data &&
      cor.data.map((info) => {
        if (String(info.prod_id).match(36)) {
          return String(info.prod_name);
        } else return null;
      }),
    p10:
      cor.data &&
      cor.data.map((info) => {
        if (String(info.prod_id).match(36)) {
          return String(info.current_price);
        } else return null;
      }),
    b11:
      cor.data &&
      cor.data.map((info) => {
        if (String(info.prod_id).match(37)) {
          return String(info.prod_img);
        } else return null;
      }),
    n11:
      cor.data &&
      cor.data.map((info) => {
        if (String(info.prod_id).match(37)) {
          return String(info.prod_name);
        } else return null;
      }),
    p11:
      cor.data &&
      cor.data.map((info) => {
        if (String(info.prod_id).match(37)) {
          return String(info.current_price);
        } else return null;
      }),
    b12:
      cor.data &&
      cor.data.map((info) => {
        if (String(info.prod_id).match(38)) {
          return String(info.prod_img);
        } else return null;
      }),
    n12:
      cor.data &&
      cor.data.map((info) => {
        if (String(info.prod_id).match(38)) {
          return String(info.prod_name);
        } else return null;
      }),
    p12:
      cor.data &&
      cor.data.map((info) => {
        if (String(info.prod_id).match(38)) {
          return String(info.current_price);
        } else return null;
      }),
    b13:
      cor.data &&
      cor.data.map((info) => {
        if (String(info.prod_id).match(39)) {
          return String(info.prod_img);
        } else return null;
      }),
    n13:
      cor.data &&
      cor.data.map((info) => {
        if (String(info.prod_id).match(39)) {
          return String(info.prod_name);
        } else return null;
      }),
    p13:
      cor.data &&
      cor.data.map((info) => {
        if (String(info.prod_id).match(39)) {
          return String(info.current_price);
        } else return null;
      }),
    b14:
      cor.data &&
      cor.data.map((info) => {
        if (String(info.prod_id).match(40)) {
          return String(info.prod_img);
        } else return null;
      }),

    n14:
      cor.data &&
      cor.data.map((info) => {
        if (String(info.prod_id).match(40)) {
          return String(info.prod_name);
        } else return null;
      }),
    p14:
      cor.data &&
      cor.data.map((info) => {
        if (String(info.prod_id).match(40)) {
          return String(info.current_price);
        } else return null;
      }),
    b15:
      cor.data &&
      cor.data.map((info) => {
        if (String(info.prod_id).match(41)) {
          return String(info.prod_img);
        } else return null;
      }),
    n15:
      cor.data &&
      cor.data.map((info) => {
        if (String(info.prod_id).match(41)) {
          return String(info.prod_name);
        } else return null;
      }),
    p15:
      cor.data &&
      cor.data.map((info) => {
        if (String(info.prod_id).match(41)) {
          return String(info.current_price);
        } else return null;
      }),
    b16:
      cor.data &&
      cor.data.map((info) => {
        if (String(info.prod_id).match(42)) {
          return String(info.prod_img);
        } else return null;
      }),
    n16:
      cor.data &&
      cor.data.map((info) => {
        if (String(info.prod_id).match(42)) {
          return String(info.prod_name);
        } else return null;
      }),

    p16:
      cor.data &&
      cor.data.map((info) => {
        if (String(info.prod_id).match(42)) {
          return String(info.current_price);
        } else return null;
      }),
  };

  /* Declaring variables (b1-d4) and assigning them the values of the object we created earlier (b.b1 - b.d4). 
      However, as some of the strings being returned contain commas "," we use .replace to get rid of them by replacing this char with "". */
  var b1 = String(b.b1).replace(/,/g, "");
  var b2 = String(b.b2).replace(/,/g, "");
  var b3 = String(b.b3).replace(/,/g, "");
  var b4 = String(b.b4).replace(/,/g, "");
  var b5 = String(b.b5).replace(/,/g, "");
  var b6 = String(b.b6).replace(/,/g, "");
  var b7 = String(b.b7).replace(/,/g, "");
  var b8 = String(b.b8).replace(/,/g, "");
  var b9 = String(b.b9).replace(/,/g, "");
  var b10 = String(b.b10).replace(/,/g, "");
  var b11 = String(b.b11).replace(/,/g, "");
  var b12 = String(b.b12).replace(/,/g, "");
  var b13 = String(b.b13).replace(/,/g, "");
  var b14 = String(b.b14).replace(/,/g, "");
  var b15 = String(b.b15).replace(/,/g, "");
  var b16 = String(b.b16).replace(/,/g, "");
  var n1 = String(b.n1).replace(/,/g, "");
  var n2 = String(b.n2).replace(/,/g, "");
  var n3 = String(b.n3).replace(/,/g, "");
  var n4 = String(b.n4).replace(/,/g, "");
  var n5 = String(b.n5).replace(/,/g, "");
  var n6 = String(b.n6).replace(/,/g, "");
  var n7 = String(b.n7).replace(/,/g, "");
  var n8 = String(b.n8).replace(/,/g, "");
  var n9 = String(b.n9).replace(/,/g, "");
  var n10 = String(b.n10).replace(/,/g, "");
  var n11 = String(b.n11).replace(/,/g, "");
  var n12 = String(b.n12).replace(/,/g, "");
  var n13 = String(b.n13).replace(/,/g, "");
  var n14 = String(b.n14).replace(/,/g, "");
  var n15 = String(b.n15).replace(/,/g, "");
  var n16 = String(b.n16).replace(/,/g, "");
  var p1 = String(b.p1).replace(/,/g, "");
  var p2 = String(b.p2).replace(/,/g, "");
  var p3 = String(b.p3).replace(/,/g, "");
  var p4 = String(b.p4).replace(/,/g, "");
  var p5 = String(b.p5).replace(/,/g, "");
  var p6 = String(b.p6).replace(/,/g, "");
  var p7 = String(b.p7).replace(/,/g, "");
  var p8 = String(b.p8).replace(/,/g, "");
  var p9 = String(b.p9).replace(/,/g, "");
  var p10 = String(b.p10).replace(/,/g, "");
  var p11 = String(b.p11).replace(/,/g, "");
  var p12 = String(b.p12).replace(/,/g, "");
  var p13 = String(b.p13).replace(/,/g, "");
  var p14 = String(b.p14).replace(/,/g, "");
  var p15 = String(b.p15).replace(/,/g, "");
  var p16 = String(b.p16).replace(/,/g, "");

  var saveBasket1 = once(function () {
    cor.data &&
      cor.data.map((info) => {
        if (String(info.prod_id).match(27)) {
          const bt_oldq = info.prod_quantity;
          const value = {
            bt_img: b1,
            bt_name: n1,
            prod_id: 27,
            cust_id: cust_id,
            bt_size: bt_size1,
            bt_quantity: bt_quantity1,
            bt_price: p1,
            bt_delivery: bt_delivery1,
            bt_oldq: bt_oldq,
            prod_cost: info.prod_cost,
          };

          axios.post("http://localhost:8080/basket", value).then((response) => {
            // handle success
            //var resData = response.data;
            // let data = JSON.stringify(resData);
            window.alert(
              "Item: " +
                n1 +
                "\nQuantity: " +
                bt_quantity1 +
                "\nSucessfully Added To Your Shopping Basket 🛒"
            );
          });
        }
      });
  });
  var fetchRecords = once(function () {
    axios
      .get("http://localhost:8080/product")
      .then((response) => {
        // handle success
        var resData = response.data;
        //var data = JSON.stringify(resData);
        setCor(resData);
      })
      .catch((err) => console.log("Error: ", err));
  });

  var saveBasket2 = once(function () {
    cor.data &&
      cor.data.map((info) => {
        if (String(info.prod_id).match(28)) {
          const bt_oldq = info.prod_quantity;
          const value = {
            bt_img: b2,
            bt_name: n2,
            prod_id: 28,
            cust_id: cust_id,
            bt_size: bt_size2,
            bt_quantity: bt_quantity2,
            bt_price: p2,
            bt_delivery: bt_delivery2,
            bt_oldq: bt_oldq,
            prod_cost: info.prod_cost,
          };

          axios.post("http://localhost:8080/basket", value).then((response) => {
            // handle success
            //var resData = response.data;
            // let data = JSON.stringify(resData);
            window.alert(
              "Item: " +
                n2 +
                "\nQuantity: " +
                bt_quantity2 +
                "\nSucessfully Added To Your Shopping Basket 🛒"
            );
          });
        }
      });
  });

  var saveBasket3 = once(function () {
    cor.data &&
      cor.data.map((info) => {
        if (String(info.prod_id).match(29)) {
          const bt_oldq = info.prod_quantity;
          const value = {
            bt_img: b3,
            bt_name: n3,
            prod_id: 29,
            cust_id: cust_id,
            bt_size: bt_size3,
            bt_quantity: bt_quantity3,
            bt_price: p3,
            bt_delivery: bt_delivery3,
            bt_oldq: bt_oldq,
            prod_cost: info.prod_cost,
          };

          axios.post("http://localhost:8080/basket", value).then((response) => {
            // handle success
            //var resData = response.data;
            // let data = JSON.stringify(resData);
            window.alert(
              "Item: " +
                n3 +
                "\nQuantity: " +
                bt_quantity3 +
                "\nSucessfully Added To Your Shopping Basket 🛒"
            );
          });
        }
      });
  });

  var saveBasket4 = once(function () {
    cor.data &&
      cor.data.map((info) => {
        if (String(info.prod_id).match(30)) {
          const bt_oldq = info.prod_quantity;
          const value = {
            bt_img: b4,
            bt_name: n4,
            prod_id: 30,
            cust_id: cust_id,
            bt_size: bt_size4,
            bt_quantity: bt_quantity4,
            bt_price: p4,
            bt_delivery: bt_delivery4,
            bt_oldq: bt_oldq,
            prod_cost: info.prod_cost,
          };

          axios.post("http://localhost:8080/basket", value).then((response) => {
            // handle success
            //var resData = response.data;
            // let data = JSON.stringify(resData);
            window.alert(
              "Item: " +
                n4 +
                "\nQuantity: " +
                bt_quantity4 +
                "\nSucessfully Added To Your Shopping Basket 🛒"
            );
          });
        }
      });
  });

  var saveBasket5 = once(function () {
    cor.data &&
      cor.data.map((info) => {
        if (String(info.prod_id).match(31)) {
          const bt_oldq = info.prod_quantity;
          const value = {
            bt_img: b5,
            bt_name: n5,
            prod_id: 31,
            cust_id: cust_id,
            bt_size: bt_size5,
            bt_quantity: bt_quantity5,
            bt_price: p5,
            bt_delivery: bt_delivery5,
            bt_oldq: bt_oldq,
            prod_cost: info.prod_cost,
          };

          axios.post("http://localhost:8080/basket", value).then((response) => {
            // handle success
            //var resData = response.data;
            // let data = JSON.stringify(resData);
            window.alert(
              "Item: " +
                n5 +
                "\nQuantity: " +
                bt_quantity5 +
                "\nSucessfully Added To Your Shopping Basket 🛒"
            );
          });
        }
      });
  });

  var saveBasket6 = once(function () {
    cor.data &&
      cor.data.map((info) => {
        if (String(info.prod_id).match(32)) {
          const bt_oldq = info.prod_quantity;
          const value = {
            bt_img: b6,
            bt_name: n6,
            prod_id: 32,
            cust_id: cust_id,
            bt_size: bt_size6,
            bt_quantity: bt_quantity6,
            bt_price: p6,
            bt_delivery: bt_delivery6,
            bt_oldq: bt_oldq,
            prod_cost: info.prod_cost,
          };

          axios.post("http://localhost:8080/basket", value).then((response) => {
            // handle success
            //var resData = response.data;
            // let data = JSON.stringify(resData);
            window.alert(
              "Item: " +
                n6 +
                "\nQuantity: " +
                bt_quantity6 +
                "\nSucessfully Added To Your Shopping Basket 🛒"
            );
          });
        }
      });
  });

  var saveBasket7 = once(function () {
    cor.data &&
      cor.data.map((info) => {
        if (String(info.prod_id).match(33)) {
          const bt_oldq = info.prod_quantity;
          const value = {
            bt_img: b7,
            bt_name: n7,
            prod_id: 33,
            cust_id: cust_id,
            bt_size: bt_size7,
            bt_quantity: bt_quantity7,
            bt_price: p7,
            bt_delivery: bt_delivery7,
            bt_oldq: bt_oldq,
            prod_cost: info.prod_cost,
          };

          axios.post("http://localhost:8080/basket", value).then((response) => {
            // handle success
            //var resData = response.data;
            // let data = JSON.stringify(resData);
            window.alert(
              "Item: " +
                n7 +
                "\nQuantity: " +
                bt_quantity7 +
                "\nSucessfully Added To Your Shopping Basket 🛒"
            );
          });
        }
      });
  });

  var saveBasket8 = once(function () {
    cor.data &&
      cor.data.map((info) => {
        if (String(info.prod_id).match(34)) {
          const bt_oldq = info.prod_quantity;
          const value = {
            bt_img: b8,
            bt_name: n8,
            prod_id: 34,
            cust_id: cust_id,
            bt_size: bt_size8,
            bt_quantity: bt_quantity8,
            bt_price: p8,
            bt_delivery: bt_delivery8,
            bt_oldq: bt_oldq,
            prod_cost: info.prod_cost,
          };

          axios.post("http://localhost:8080/basket", value).then((response) => {
            // handle success
            //var resData = response.data;
            // let data = JSON.stringify(resData);
            window.alert(
              "Item: " +
                n8 +
                "\nQuantity: " +
                bt_quantity8 +
                "\nSucessfully Added To Your Shopping Basket 🛒"
            );
          });
        }
      });
  });

  var saveBasket9 = once(function () {
    cor.data &&
      cor.data.map((info) => {
        if (String(info.prod_id).match(35)) {
          const bt_oldq = info.prod_quantity;
          const value = {
            bt_img: b9,
            bt_name: n9,
            prod_id: 35,
            cust_id: cust_id,
            bt_size: bt_size9,
            bt_quantity: bt_quantity9,
            bt_price: p9,
            bt_delivery: bt_delivery9,
            bt_oldq: bt_oldq,
            prod_cost: info.prod_cost,
          };

          axios.post("http://localhost:8080/basket", value).then((response) => {
            // handle success
            //var resData = response.data;
            // let data = JSON.stringify(resData);
            window.alert(
              "Item: " +
                n9 +
                "\nQuantity: " +
                bt_quantity9 +
                "\nSucessfully Added To Your Shopping Basket 🛒"
            );
          });
        }
      });
  });

  var saveBasket10 = once(function () {
    cor.data &&
      cor.data.map((info) => {
        if (String(info.prod_id).match(36)) {
          const bt_oldq = info.prod_quantity;
          const value = {
            bt_img: b10,
            bt_name: n10,
            prod_id: 36,
            cust_id: cust_id,
            bt_size: bt_size10,
            bt_quantity: bt_quantity10,
            bt_price: p10,
            bt_delivery: bt_delivery10,
            bt_oldq: bt_oldq,
            prod_cost: info.prod_cost,
          };

          axios.post("http://localhost:8080/basket", value).then((response) => {
            // handle success
            //var resData = response.data;
            // let data = JSON.stringify(resData);
            window.alert(
              "Item: " +
                n10 +
                "\nQuantity: " +
                bt_quantity10 +
                "\nSucessfully Added To Your Shopping Basket 🛒"
            );
          });
        }
      });
  });

  var saveBasket11 = once(function () {
    cor.data &&
      cor.data.map((info) => {
        if (String(info.prod_id).match(37)) {
          const bt_oldq = info.prod_quantity;
          const value = {
            bt_img: b11,
            bt_name: n11,
            prod_id: 37,
            cust_id: cust_id,
            bt_size: bt_size11,
            bt_quantity: bt_quantity11,
            bt_price: p11,
            bt_delivery: bt_delivery11,
            bt_oldq: bt_oldq,
            prod_cost: info.prod_cost,
          };

          axios.post("http://localhost:8080/basket", value).then((response) => {
            // handle success
            //var resData = response.data;
            // let data = JSON.stringify(resData);
            window.alert(
              "Item: " +
                n11 +
                "\nQuantity: " +
                bt_quantity11 +
                "\nSucessfully Added To Your Shopping Basket 🛒"
            );
          });
        }
      });
  });

  var saveBasket12 = once(function () {
    cor.data &&
      cor.data.map((info) => {
        if (String(info.prod_id).match(38)) {
          const bt_oldq = info.prod_quantity;
          const value = {
            bt_img: b12,
            bt_name: n12,
            prod_id: 38,
            cust_id: cust_id,
            bt_size: bt_size12,
            bt_quantity: bt_quantity12,
            bt_price: p12,
            bt_delivery: bt_delivery12,
            bt_oldq: bt_oldq,
            prod_cost: info.prod_cost,
          };

          axios.post("http://localhost:8080/basket", value).then((response) => {
            // handle success
            //var resData = response.data;
            window.alert(
              "Item: " +
                n12 +
                "\nQuantity: " +
                bt_quantity12 +
                "\nSucessfully Added To Your Shopping Basket 🛒"
            );
          });
        }
      });
  });

  var saveBasket13 = once(function () {
    cor.data &&
      cor.data.map((info) => {
        if (String(info.prod_id).match(39)) {
          const bt_oldq = info.prod_quantity;
          const value = {
            bt_img: b13,
            bt_name: n13,
            prod_id: 39,
            cust_id: cust_id,
            bt_size: bt_size13,
            bt_quantity: bt_quantity13,
            bt_price: p13,
            bt_delivery: bt_delivery13,
            bt_oldq: bt_oldq,
            prod_cost: info.prod_cost,
          };

          axios.post("http://localhost:8080/basket", value).then((response) => {
            // handle success
            //var resData = response.data;
            // let data = JSON.stringify(resData);
            window.alert(
              "Item: " +
                n13 +
                "\nQuantity: " +
                bt_quantity13 +
                "\nSucessfully Added To Your Shopping Basket 🛒"
            );
          });
        }
      });
  });

  var saveBasket14 = once(function () {
    cor.data &&
      cor.data.map((info) => {
        if (String(info.prod_id).match(40)) {
          const bt_oldq = info.prod_quantity;
          const value = {
            bt_img: b14,
            bt_name: n14,
            prod_id: 40,
            cust_id: cust_id,
            bt_size: bt_size14,
            bt_quantity: bt_quantity14,
            bt_price: p14,
            bt_delivery: bt_delivery14,
            bt_oldq: bt_oldq,
            prod_cost: info.prod_cost,
          };

          axios.post("http://localhost:8080/basket", value).then((response) => {
            // handle success
            //var resData = response.data;
            // let data = JSON.stringify(resData);
            window.alert(
              "Item: " +
                n14 +
                "\nQuantity: " +
                bt_quantity14 +
                "\nSucessfully Added To Your Shopping Basket 🛒"
            );
          });
        }
      });
  });

  var saveBasket15 = once(function () {
    cor.data &&
      cor.data.map((info) => {
        if (String(info.prod_id).match(41)) {
          const bt_oldq = info.prod_quantity;
          const value = {
            bt_img: b15,
            bt_name: n15,
            prod_id: 41,
            cust_id: cust_id,
            bt_size: bt_size15,
            bt_quantity: bt_quantity15,
            bt_price: p15,
            bt_delivery: bt_delivery15,
            bt_oldq: bt_oldq,
            prod_cost: info.prod_cost,
          };

          axios.post("http://localhost:8080/basket", value).then((response) => {
            // handle success
            //var resData = response.data;
            // let data = JSON.stringify(resData);
            window.alert(
              "Item: " +
                n15 +
                "\nQuantity: " +
                bt_quantity15 +
                "\nSucessfully Added To Your Shopping Basket 🛒"
            );
          });
        }
      });
  });

  var saveBasket16 = once(function () {
    cor.data &&
      cor.data.map((info) => {
        if (String(info.prod_id).match(42)) {
          const bt_oldq = info.prod_quantity;
          const value = {
            bt_img: b16,
            bt_name: n16,
            prod_id: 42,
            cust_id: cust_id,
            bt_size: bt_size16,
            bt_quantity: bt_quantity16,
            bt_price: p16,
            bt_delivery: bt_delivery16,
            bt_oldq: bt_oldq,
            prod_cost: info.prod_cost,
          };

          axios.post("http://localhost:8080/basket", value).then((response) => {
            // handle success
            //var resData = response.data;
            // let data = JSON.stringify(resData);
            window.alert(
              "Item: " +
                n16 +
                "\nQuantity: " +
                bt_quantity16 +
                "\nSucessfully Added To Your Shopping Basket 🛒"
            );
          });
        }
      });
  });

  /* Nested if statements that take the value of the "first" variable we declared earlier 
   as a conditional argument . */
  if (first === 1) {
    saveBasket1();

    setFirst(0);
  } else if (first === 2) {
    saveBasket2();

    setFirst(0);
  } else if (first === 3) {
    saveBasket3();

    setFirst(0);
  } else if (first === 4) {
    saveBasket4();

    setFirst(0);
  } else if (first === 5) {
    saveBasket5();

    setFirst(0);
  } else if (first === 6) {
    saveBasket6();

    setFirst(0);
  } else if (first === 7) {
    saveBasket7();

    setFirst(0);
  } else if (first === 8) {
    saveBasket8();

    setFirst(0);
  } else if (first === 9) {
    saveBasket9();

    setFirst(0);
  } else if (first === 10) {
    saveBasket10();

    setFirst(0);
  } else if (first === 11) {
    saveBasket11();

    setFirst(0);
  } else if (first === 12) {
    saveBasket12();

    setFirst(0);
  } else if (first === 13) {
    saveBasket13();

    setFirst(0);
  } else if (first === 14) {
    saveBasket14();

    setFirst(0);
  } else if (first === 15) {
    saveBasket15();

    setFirst(0);
  } else if (first === 16) {
    saveBasket16();

    setFirst(0);
  } else if (first === 17) {
    return <SignIn stud={stud} />;
  } else if (first === 18) {
    return <Register />;
  }

  // Return for the Menswear function

  return (
    <main>
      {fetchRecords()}

      <div className={classes.heroContent}>
        <div className={classes.heroButtons}>
          <div className={classes.root}>
            <Tabs
              orientation="vertical"
              variant="scrollable"
              value={value}
              onChange={handleChange}
              aria-label="Vertical tabs example"
              className={classes.tabs}
            >
              <Tab label="BLAZERS" {...a11yProps(0)} />
              <Tab label="DRESS SHIRTS" {...a11yProps(1)} />
              <Tab label="COATS AND JACKETS" {...a11yProps(2)} />
              <Tab label="TROUSERS" {...a11yProps(3)} />
            </Tabs>
            <TabPanel value={value} index={0}>
              <Container className={classes.cardGrid} maxWidth="md">
                <Grid container spacing={4} justify="center">
                  <Grid item xs={12} sm={6} md={6} lg={6}>
                    <Card className={classes.card}>
                      <CardMedia
                        className={classes.cardMedia}
                        image={b1}
                        title="Image title"
                      />
                      <Divider />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {" "}
                          {cor.data &&
                            cor.data.map((info) => {
                              if (String(info.prod_id).match(27)) {
                                return info.prod_name;
                              } else return null;
                            })}
                        </Typography>
                        <Divider />
                        <br />
                        <Typography>
                          {cor.data &&
                            cor.data.map((info) => {
                              if (String(info.prod_id).match(27)) {
                                return info.prod_desc;
                              } else return null;
                            })}
                        </Typography>
                        <br />
                        <Divider />
                        <br />
                        <Grid container spacing={3}>
                          <Grid item xs={12} sm={6}>
                            <InputLabel>Select Your Size</InputLabel>
                            <Select
                              value={bt_size1}
                              onChange={(e) => setSize1(e.target.value)}
                              fullWidth
                            >
                              <MenuItem value="36R">36R</MenuItem>
                              <MenuItem value="38R">38R</MenuItem>
                              <MenuItem value="40R">40R</MenuItem>
                              <MenuItem value="42R">42R</MenuItem>
                              <MenuItem value="44R">44R</MenuItem>
                              <MenuItem value="46R">46R</MenuItem>
                              <MenuItem value="48R">48R</MenuItem>
                              <MenuItem value="50R">50R</MenuItem>
                            </Select>
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <InputLabel>Quantity</InputLabel>
                            <TextField
                              required
                              id="ucas"
                              type="number"
                              name="Quantity"
                              inputProps={{
                                min: 1,
                                style: { textAlign: "center" },
                              }}
                              value={bt_quantity1}
                              onChange={(e) => setQuantity1(e.target.value)}
                              fullWidth
                            />
                          </Grid>

                          <Grid item xs={12} sm={12}>
                            <InputLabel>Select Delivery Option</InputLabel>
                            <Select
                              value={bt_delivery1}
                              onChange={(e) => setBt_delivery1(e.target.value)}
                              fullWidth
                            >
                              <MenuItem value="Standard Delivery (FREE) Approx. 3-5 Working Days">
                                Standard Delivery (FREE) Approx. 3-5 Working
                                Days
                              </MenuItem>
                              <MenuItem value="DPD Express (£3.95) 1-2 Working Days.">
                                DPD Express (£3.95) 1-2 Working Days.
                              </MenuItem>
                              <MenuItem value="Hermes Next Day (£8.95) Get it Tomorrow!">
                                Hermes Next Day (£8.95) Get it Tomorrow!
                              </MenuItem>
                            </Select>
                          </Grid>
                        </Grid>
                        <Divider />
                        <br />
                        <Typography variant="h5">
                          <h4 className="strike">
                            {cor.data &&
                              cor.data.map((info) => {
                                if (String(info.prod_id).match(27)) {
                                  return "£" + info.old_price;
                                } else return null;
                              })}
                          </h4>
                          {cor.data &&
                            cor.data.map((info) => {
                              if (String(info.prod_id).match(27)) {
                                return "Price: £" + info.current_price;
                              } else return null;
                            })}
                        </Typography>
                      </CardContent>
                      {stud.data &&
                        stud.data.map((stud, idx) => {
                          if (stud.cust_id === 43 && stud.isLogged === "yes") {
                            return (
                              <CardActions>
                                <Button
                                  variant="contained"
                                  color="primary"
                                  onClick={(e) => setFirst(17)}
                                >
                                  Sign In to add to basket
                                </Button>
                                <Button
                                  variant="contained"
                                  color="secondary"
                                  onClick={(e) => setFirst(18)}
                                >
                                  Register
                                </Button>
                              </CardActions>
                            );
                          } else if (
                            stud.cust_id !== 43 &&
                            stud.isLogged === "yes" &&
                            first !== 2
                          ) {
                            return (
                              <CardActions>
                                <Button
                                  id="btn"
                                  variant="contained"
                                  color="primary"
                                  onClick={(e) => saveCustID(1)}
                                >
                                  Add to Basket
                                </Button>
                              </CardActions>
                            );
                          }
                        })}
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={6} md={6}>
                    <Card className={classes.card}>
                      <CardMedia
                        className={classes.cardMedia}
                        image={b2}
                        title="Image title"
                      />
                      <Divider />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {cor.data &&
                            cor.data.map((info) => {
                              if (String(info.prod_id).match(28)) {
                                return info.prod_name;
                              } else return null;
                            })}
                        </Typography>
                        <Divider />
                        <br />
                        <Typography>
                          {cor.data &&
                            cor.data.map((info) => {
                              if (String(info.prod_id).match(28)) {
                                return info.prod_desc;
                              } else return null;
                            })}
                        </Typography>
                        <br />
                        <Divider />
                        <br />
                        <Grid container spacing={3}>
                          <Grid item xs={12} sm={6}>
                            <InputLabel>Select Your Size</InputLabel>
                            <Select
                              value={bt_size2}
                              onChange={(e) => setSize2(e.target.value)}
                              fullWidth
                            >
                              <MenuItem value="36R">36R</MenuItem>
                              <MenuItem value="38R">38R</MenuItem>
                              <MenuItem value="40R">40R</MenuItem>
                              <MenuItem value="42R">42R</MenuItem>
                              <MenuItem value="44R">44R</MenuItem>
                              <MenuItem value="46R">46R</MenuItem>
                              <MenuItem value="48R">48R</MenuItem>
                              <MenuItem value="50R">50R</MenuItem>
                            </Select>
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <InputLabel>Quantity</InputLabel>
                            <TextField
                              required
                              id="ucas"
                              type="number"
                              name="Quantity"
                              inputProps={{
                                min: 1,
                                style: { textAlign: "center" },
                              }}
                              value={bt_quantity2}
                              onChange={(e) => setQuantity2(e.target.value)}
                              fullWidth
                            />
                          </Grid>
                          <Grid item xs={12} sm={12}>
                            <InputLabel>Select Delivery Option</InputLabel>
                            <Select
                              value={bt_delivery2}
                              onChange={(e) => setBt_delivery2(e.target.value)}
                              fullWidth
                            >
                              <MenuItem value="Standard Delivery (FREE) Approx. 3-5 Working Days">
                                Standard Delivery (FREE) Approx. 3-5 Working
                                Days
                              </MenuItem>
                              <MenuItem value="DPD Express (£3.95) 1-2 Working Days.">
                                DPD Express (£3.95) 1-2 Working Days.
                              </MenuItem>
                              <MenuItem value="Hermes Next Day (£8.95) Get it Tomorrow!">
                                Hermes Next Day (£8.95) Get it Tomorrow!
                              </MenuItem>
                            </Select>
                          </Grid>
                        </Grid>
                        <Divider />
                        <br />
                        <Typography variant="h5">
                          <h4 className="strike">
                            {cor.data &&
                              cor.data.map((info) => {
                                {
                                  if (String(info.prod_id).match(28)) {
                                    return "£" + info.old_price;
                                  } else return null;
                                }
                              })}
                          </h4>
                          {cor.data &&
                            cor.data.map((info) => {
                              if (String(info.prod_id).match(28)) {
                                return "Price: £" + info.current_price;
                              } else return null;
                            })}
                        </Typography>
                      </CardContent>
                      {stud.data &&
                        stud.data.map((stud, idx) => {
                          if (stud.cust_id === 43 && stud.isLogged === "yes") {
                            return (
                              <CardActions>
                                <Button
                                  variant="contained"
                                  color="primary"
                                  onClick={(e) => setFirst(17)}
                                >
                                  Sign In to add to basket
                                </Button>
                                <Button
                                  variant="contained"
                                  color="secondary"
                                  onClick={(e) => setFirst(18)}
                                >
                                  Register
                                </Button>
                              </CardActions>
                            );
                          } else if (
                            stud.cust_id !== 43 &&
                            stud.isLogged === "yes"
                          ) {
                            return (
                              <CardActions>
                                <Button
                                  variant="contained"
                                  color="primary"
                                  onClick={(e) => saveCustID(2)}
                                >
                                  Add to Basket
                                </Button>
                              </CardActions>
                            );
                          }
                        })}
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={6} md={6}>
                    <Card className={classes.card}>
                      <CardMedia
                        className={classes.cardMedia}
                        image={b3}
                        title="Image title"
                      />
                      <Divider />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {cor.data &&
                            cor.data.map((info) => {
                              if (String(info.prod_id).match(29)) {
                                return info.prod_name;
                              } else return null;
                            })}
                        </Typography>
                        <Divider />
                        <br />
                        <Typography>
                          {cor.data &&
                            cor.data.map((info) => {
                              if (String(info.prod_id).match(29)) {
                                return info.prod_desc;
                              } else return null;
                            })}
                        </Typography>

                        <br />
                        <Divider />
                        <br />
                        <Grid container spacing={3}>
                          <Grid item xs={12} sm={6}>
                            <InputLabel>Select Your Size</InputLabel>
                            <Select
                              value={bt_size3}
                              onChange={(e) => setSize3(e.target.value)}
                              fullWidth
                            >
                              <MenuItem value="36R">36R</MenuItem>
                              <MenuItem value="38R">38R</MenuItem>
                              <MenuItem value="40R">40R</MenuItem>
                              <MenuItem value="42R">42R</MenuItem>
                              <MenuItem value="44R">44R</MenuItem>
                              <MenuItem value="46R">46R</MenuItem>
                              <MenuItem value="48R">48R</MenuItem>
                              <MenuItem value="50R">50R</MenuItem>
                            </Select>
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <InputLabel>Quantity</InputLabel>
                            <TextField
                              required
                              id="ucas"
                              type="number"
                              name="Quantity"
                              inputProps={{
                                min: 1,
                                style: { textAlign: "center" },
                              }}
                              value={bt_quantity3}
                              onChange={(e) => setQuantity3(e.target.value)}
                              fullWidth
                            />
                          </Grid>
                          <Grid item xs={12} sm={12}>
                            <InputLabel>Select Delivery Option</InputLabel>
                            <Select
                              value={bt_delivery3}
                              onChange={(e) => setBt_delivery3(e.target.value)}
                              fullWidth
                            >
                              <MenuItem value="Standard Delivery (FREE) Approx. 3-5 Working Days">
                                Standard Delivery (FREE) Approx. 3-5 Working
                                Days
                              </MenuItem>
                              <MenuItem value="DPD Express (£3.95) 1-2 Working Days.">
                                DPD Express (£3.95) 1-2 Working Days.
                              </MenuItem>
                              <MenuItem value="Hermes Next Day (£8.95) Get it Tomorrow!">
                                Hermes Next Day (£8.95) Get it Tomorrow!
                              </MenuItem>
                            </Select>
                          </Grid>
                        </Grid>
                        <Divider />
                        <br />
                        <Typography variant="h5">
                          <h4 className="strike">
                            {cor.data &&
                              cor.data.map((info) => {
                                if (String(info.prod_id).match(29)) {
                                  return "£" + info.old_price;
                                } else return null;
                              })}
                          </h4>
                          {cor.data &&
                            cor.data.map((info) => {
                              if (String(info.prod_id).match(29)) {
                                return "Price: £" + info.current_price;
                              } else return null;
                            })}
                        </Typography>
                      </CardContent>
                      {stud.data &&
                        stud.data.map((stud, idx) => {
                          if (stud.cust_id === 43 && stud.isLogged === "yes") {
                            return (
                              <CardActions>
                                <Button
                                  variant="contained"
                                  color="primary"
                                  onClick={(e) => setFirst(17)}
                                >
                                  Sign In to add to basket
                                </Button>
                                <Button
                                  variant="contained"
                                  color="secondary"
                                  onClick={(e) => setFirst(18)}
                                >
                                  Register
                                </Button>
                              </CardActions>
                            );
                          } else if (
                            stud.cust_id !== 43 &&
                            stud.isLogged === "yes"
                          ) {
                            return (
                              <CardActions>
                                <Button
                                  variant="contained"
                                  color="primary"
                                  onClick={(e) => saveCustID(3)}
                                >
                                  Add to Basket
                                </Button>
                              </CardActions>
                            );
                          }
                        })}
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={6} md={6}>
                    <Card className={classes.card}>
                      <CardMedia
                        className={classes.cardMedia}
                        image={b4}
                        title="Image title"
                      />
                      <Divider />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {cor.data &&
                            cor.data.map((info) => {
                              if (String(info.prod_id).match(30)) {
                                return info.prod_name;
                              } else return null;
                            })}
                        </Typography>
                        <Divider />
                        <br />
                        <Typography>
                          {cor.data &&
                            cor.data.map((info) => {
                              if (String(info.prod_id).match(30)) {
                                return info.prod_desc;
                              } else return null;
                            })}
                        </Typography>
                        <br />
                        <Divider />
                        <br />
                        <Grid container spacing={3}>
                          <Grid item xs={12} sm={6}>
                            <InputLabel>Select Your Size</InputLabel>
                            <Select
                              value={bt_size4}
                              onChange={(e) => setSize4(e.target.value)}
                              fullWidth
                            >
                              <MenuItem value="36R">36R</MenuItem>
                              <MenuItem value="38R">38R</MenuItem>
                              <MenuItem value="40R">40R</MenuItem>
                              <MenuItem value="42R">42R</MenuItem>
                              <MenuItem value="44R">44R</MenuItem>
                              <MenuItem value="46R">46R</MenuItem>
                              <MenuItem value="48R">48R</MenuItem>
                              <MenuItem value="50R">50R</MenuItem>
                            </Select>
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <InputLabel>Quantity</InputLabel>
                            <TextField
                              required
                              id="ucas"
                              type="number"
                              name="Quantity"
                              inputProps={{
                                min: 1,
                                style: { textAlign: "center" },
                              }}
                              value={bt_quantity4}
                              onChange={(e) => setQuantity4(e.target.value)}
                              fullWidth
                            />
                          </Grid>
                          <Grid item xs={12} sm={12}>
                            <InputLabel>Select Delivery Option</InputLabel>
                            <Select
                              value={bt_delivery4}
                              onChange={(e) => setBt_delivery4(e.target.value)}
                              fullWidth
                            >
                              <MenuItem value="Standard Delivery (FREE) Approx. 3-5 Working Days">
                                Standard Delivery (FREE) Approx. 3-5 Working
                                Days
                              </MenuItem>
                              <MenuItem value="DPD Express (£3.95) 1-2 Working Days.">
                                DPD Express (£3.95) 1-2 Working Days.
                              </MenuItem>
                              <MenuItem value="Hermes Next Day (£8.95) Get it Tomorrow!">
                                Hermes Next Day (£8.95) Get it Tomorrow!
                              </MenuItem>
                            </Select>
                          </Grid>
                        </Grid>
                        <Divider />
                        <br />
                        <Typography variant="h5">
                          <h4 className="strike">
                            {cor.data &&
                              cor.data.map((info) => {
                                {
                                  if (String(info.prod_id).match(30)) {
                                    return "£" + info.old_price;
                                  } else return null;
                                }
                              })}
                          </h4>
                          {cor.data &&
                            cor.data.map((info) => {
                              if (String(info.prod_id).match(30)) {
                                return "Price: £" + info.current_price;
                              } else return null;
                            })}
                        </Typography>
                      </CardContent>
                      {stud.data &&
                        stud.data.map((stud, idx) => {
                          if (stud.cust_id === 43 && stud.isLogged === "yes") {
                            return (
                              <CardActions>
                                <Button
                                  variant="contained"
                                  color="primary"
                                  onClick={(e) => setFirst(17)}
                                >
                                  Sign In to add to basket
                                </Button>
                                <Button
                                  variant="contained"
                                  color="secondary"
                                  onClick={(e) => setFirst(18)}
                                >
                                  Register
                                </Button>
                              </CardActions>
                            );
                          } else if (
                            stud.cust_id !== 43 &&
                            stud.isLogged === "yes"
                          ) {
                            return (
                              <CardActions>
                                <Button
                                  variant="contained"
                                  color="primary"
                                  onClick={(e) => saveCustID(4)}
                                >
                                  Add to Basket
                                </Button>
                              </CardActions>
                            );
                          }
                        })}
                    </Card>
                  </Grid>
                </Grid>
              </Container>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Container className={classes.cardGrid} maxWidth="md">
                <Grid container spacing={4} justify="center">
                  <Grid item xs={12} sm={6} md={6}>
                    <Card className={classes.card}>
                      <CardMedia
                        className={classes.cardMedia}
                        image={b5}
                        title="Image title"
                      />
                      <Divider />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {" "}
                          {cor.data &&
                            cor.data.map((info) => {
                              if (String(info.prod_id).match(31)) {
                                return info.prod_name;
                              } else return null;
                            })}
                        </Typography>
                        <Divider />
                        <br />
                        <Typography>
                          {cor.data &&
                            cor.data.map((info) => {
                              if (String(info.prod_id).match(31)) {
                                return info.prod_desc;
                              } else return null;
                            })}
                        </Typography>
                        <br />
                        <Divider />
                        <br />
                        <Grid container spacing={3}>
                          <Grid item xs={12} sm={6}>
                            <InputLabel>Select Your Size</InputLabel>
                            <Select
                              value={bt_size5}
                              onChange={(e) => setSize5(e.target.value)}
                              fullWidth
                            >
                              <MenuItem value="36R">36R</MenuItem>
                              <MenuItem value="38R">38R</MenuItem>
                              <MenuItem value="40R">40R</MenuItem>
                              <MenuItem value="42R">42R</MenuItem>
                              <MenuItem value="44R">44R</MenuItem>
                              <MenuItem value="46R">46R</MenuItem>
                              <MenuItem value="48R">48R</MenuItem>
                              <MenuItem value="50R">50R</MenuItem>
                            </Select>
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <InputLabel>Quantity</InputLabel>
                            <TextField
                              required
                              id="ucas"
                              type="number"
                              name="Quantity"
                              inputProps={{
                                min: 1,
                                style: { textAlign: "center" },
                              }}
                              value={bt_quantity5}
                              onChange={(e) => setQuantity5(e.target.value)}
                              fullWidth
                            />
                          </Grid>
                          <Grid item xs={12} sm={12}>
                            <InputLabel>Select Delivery Option</InputLabel>
                            <Select
                              value={bt_delivery5}
                              onChange={(e) => setBt_delivery5(e.target.value)}
                              fullWidth
                            >
                              <MenuItem value="Standard Delivery (FREE) Approx. 3-5 Working Days">
                                Standard Delivery (FREE) Approx. 3-5 Working
                                Days
                              </MenuItem>
                              <MenuItem value="DPD Express (£3.95) 1-2 Working Days.">
                                DPD Express (£3.95) 1-2 Working Days.
                              </MenuItem>
                              <MenuItem value="Hermes Next Day (£8.95) Get it Tomorrow!">
                                Hermes Next Day (£8.95) Get it Tomorrow!
                              </MenuItem>
                            </Select>
                          </Grid>
                        </Grid>
                        <Divider />
                        <br />
                        <Typography variant="h5">
                          <h4 className="strike">
                            {cor.data &&
                              cor.data.map((info) => {
                                if (String(info.prod_id).match(31)) {
                                  return "£" + info.old_price;
                                } else return null;
                              })}
                          </h4>
                          {cor.data &&
                            cor.data.map((info) => {
                              if (String(info.prod_id).match(31)) {
                                return "Price: £" + info.current_price;
                              } else return null;
                            })}
                        </Typography>
                      </CardContent>
                      {stud.data &&
                        stud.data.map((stud, idx) => {
                          if (stud.cust_id === 43 && stud.isLogged === "yes") {
                            return (
                              <CardActions>
                                <Button
                                  variant="contained"
                                  color="primary"
                                  onClick={(e) => setFirst(17)}
                                >
                                  Sign In to add to basket
                                </Button>
                                <Button
                                  variant="contained"
                                  color="secondary"
                                  onClick={(e) => setFirst(18)}
                                >
                                  Register
                                </Button>
                              </CardActions>
                            );
                          } else if (
                            stud.cust_id !== 43 &&
                            stud.isLogged === "yes"
                          ) {
                            return (
                              <CardActions>
                                <Button
                                  variant="contained"
                                  color="primary"
                                  onClick={(e) => saveCustID(5)}
                                >
                                  Add to Basket
                                </Button>
                              </CardActions>
                            );
                          }
                        })}
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={6} md={6}>
                    <Card className={classes.card}>
                      <CardMedia
                        className={classes.cardMedia}
                        image={b6}
                        title="Image title"
                      />
                      <Divider />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {cor.data &&
                            cor.data.map((info) => {
                              if (String(info.prod_id).match(32)) {
                                return info.prod_name;
                              } else return null;
                            })}
                        </Typography>
                        <Divider />
                        <br />
                        <Typography>
                          {cor.data &&
                            cor.data.map((info) => {
                              if (String(info.prod_id).match(32)) {
                                return info.prod_desc;
                              } else return null;
                            })}
                        </Typography>
                        <br />
                        <Divider />
                        <br />
                        <Grid container spacing={3}>
                          <Grid item xs={12} sm={6}>
                            <InputLabel>Select Your Size</InputLabel>
                            <Select
                              value={bt_size6}
                              onChange={(e) => setSize6(e.target.value)}
                              fullWidth
                            >
                              <MenuItem value="36R">36R</MenuItem>
                              <MenuItem value="38R">38R</MenuItem>
                              <MenuItem value="40R">40R</MenuItem>
                              <MenuItem value="42R">42R</MenuItem>
                              <MenuItem value="44R">44R</MenuItem>
                              <MenuItem value="46R">46R</MenuItem>
                              <MenuItem value="48R">48R</MenuItem>
                              <MenuItem value="50R">50R</MenuItem>
                            </Select>
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <InputLabel>Quantity</InputLabel>
                            <TextField
                              required
                              id="ucas"
                              type="number"
                              name="Quantity"
                              inputProps={{
                                min: 1,
                                style: { textAlign: "center" },
                              }}
                              value={bt_quantity6}
                              onChange={(e) => setQuantity6(e.target.value)}
                              fullWidth
                            />
                          </Grid>
                          <Grid item xs={12} sm={12}>
                            <InputLabel>Select Delivery Option</InputLabel>
                            <Select
                              value={bt_delivery6}
                              onChange={(e) => setBt_delivery6(e.target.value)}
                              fullWidth
                            >
                              <MenuItem value="Standard Delivery (FREE) Approx. 3-5 Working Days">
                                Standard Delivery (FREE) Approx. 3-5 Working
                                Days
                              </MenuItem>
                              <MenuItem value="DPD Express (£3.95) 1-2 Working Days.">
                                DPD Express (£3.95) 1-2 Working Days.
                              </MenuItem>
                              <MenuItem value="Hermes Next Day (£8.95) Get it Tomorrow!">
                                Hermes Next Day (£8.95) Get it Tomorrow!
                              </MenuItem>
                            </Select>
                          </Grid>
                        </Grid>
                        <Divider />
                        <br />
                        <Typography variant="h5">
                          <h4 className="strike">
                            {cor.data &&
                              cor.data.map((info) => {
                                if (String(info.prod_id).match(32)) {
                                  return "£" + info.old_price;
                                } else return null;
                              })}
                          </h4>
                          {cor.data &&
                            cor.data.map((info) => {
                              if (String(info.prod_id).match(32)) {
                                return "Price: £" + info.current_price;
                              } else return null;
                            })}
                        </Typography>
                      </CardContent>
                      {stud.data &&
                        stud.data.map((stud, idx) => {
                          if (stud.cust_id === 43 && stud.isLogged === "yes") {
                            return (
                              <CardActions>
                                <Button
                                  variant="contained"
                                  color="primary"
                                  onClick={(e) => setFirst(17)}
                                >
                                  Sign In to add to basket
                                </Button>
                                <Button
                                  variant="contained"
                                  color="secondary"
                                  onClick={(e) => setFirst(18)}
                                >
                                  Register
                                </Button>
                              </CardActions>
                            );
                          } else if (
                            stud.cust_id !== 43 &&
                            stud.isLogged === "yes"
                          ) {
                            return (
                              <CardActions>
                                <Button
                                  variant="contained"
                                  color="primary"
                                  onClick={(e) => saveCustID(6)}
                                >
                                  Add to Basket
                                </Button>
                              </CardActions>
                            );
                          }
                        })}
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={6} md={6}>
                    <Card className={classes.card}>
                      <CardMedia
                        className={classes.cardMedia}
                        image={b7}
                        title="Image title"
                      />
                      <Divider />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {cor.data &&
                            cor.data.map((info) => {
                              if (String(info.prod_id).match(33)) {
                                return info.prod_name;
                              } else return null;
                            })}
                        </Typography>
                        <Divider />
                        <br />
                        <Typography>
                          {cor.data &&
                            cor.data.map((info) => {
                              if (String(info.prod_id).match(33)) {
                                return info.prod_desc;
                              } else return null;
                            })}
                        </Typography>

                        <br />
                        <Divider />
                        <br />
                        <Grid container spacing={3}>
                          <Grid item xs={12} sm={6}>
                            <InputLabel>Select Your Size</InputLabel>
                            <Select
                              value={bt_size7}
                              onChange={(e) => setSize7(e.target.value)}
                              fullWidth
                            >
                              <MenuItem value="36R">36R</MenuItem>
                              <MenuItem value="38R">38R</MenuItem>
                              <MenuItem value="40R">40R</MenuItem>
                              <MenuItem value="42R">42R</MenuItem>
                              <MenuItem value="44R">44R</MenuItem>
                              <MenuItem value="46R">46R</MenuItem>
                              <MenuItem value="48R">48R</MenuItem>
                              <MenuItem value="50R">50R</MenuItem>
                            </Select>
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <InputLabel>Quantity</InputLabel>
                            <TextField
                              required
                              id="ucas"
                              type="number"
                              name="Quantity"
                              inputProps={{
                                min: 1,
                                style: { textAlign: "center" },
                              }}
                              value={bt_quantity7}
                              onChange={(e) => setQuantity7(e.target.value)}
                              fullWidth
                            />
                          </Grid>
                          <Grid item xs={12} sm={12}>
                            <InputLabel>Select Delivery Option</InputLabel>
                            <Select
                              value={bt_delivery7}
                              onChange={(e) => setBt_delivery7(e.target.value)}
                              fullWidth
                            >
                              <MenuItem value="Standard Delivery (FREE) Approx. 3-5 Working Days">
                                Standard Delivery (FREE) Approx. 3-5 Working
                                Days
                              </MenuItem>
                              <MenuItem value="DPD Express (£3.95) 1-2 Working Days.">
                                DPD Express (£3.95) 1-2 Working Days.
                              </MenuItem>
                              <MenuItem value="Hermes Next Day (£8.95) Get it Tomorrow!">
                                Hermes Next Day (£8.95) Get it Tomorrow!
                              </MenuItem>
                            </Select>
                          </Grid>
                        </Grid>
                        <Divider />
                        <br />
                        <Typography variant="h5">
                          <h4 className="strike">
                            {cor.data &&
                              cor.data.map((info) => {
                                if (String(info.prod_id).match(33)) {
                                  return "£" + info.old_price;
                                } else return null;
                              })}
                          </h4>
                          {cor.data &&
                            cor.data.map((info) => {
                              if (String(info.prod_id).match(33)) {
                                return "Price: £" + info.current_price;
                              } else return null;
                            })}
                        </Typography>
                      </CardContent>
                      {stud.data &&
                        stud.data.map((stud, idx) => {
                          if (stud.cust_id === 43 && stud.isLogged === "yes") {
                            return (
                              <CardActions>
                                <Button
                                  variant="contained"
                                  color="primary"
                                  onClick={(e) => setFirst(17)}
                                >
                                  Sign In to add to basket
                                </Button>
                                <Button
                                  variant="contained"
                                  color="secondary"
                                  onClick={(e) => setFirst(18)}
                                >
                                  Register
                                </Button>
                              </CardActions>
                            );
                          } else if (
                            stud.cust_id !== 43 &&
                            stud.isLogged === "yes"
                          ) {
                            return (
                              <CardActions>
                                <Button
                                  variant="contained"
                                  color="primary"
                                  onClick={(e) => saveCustID(7)}
                                >
                                  Add to Basket
                                </Button>
                              </CardActions>
                            );
                          }
                        })}
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={6} md={6}>
                    <Card className={classes.card}>
                      <CardMedia
                        className={classes.cardMedia}
                        image={b8}
                        title="Image title"
                      />
                      <Divider />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {cor.data &&
                            cor.data.map((info) => {
                              if (String(info.prod_id).match(34)) {
                                return info.prod_name;
                              } else return null;
                            })}
                        </Typography>
                        <Divider />
                        <br />
                        <Typography>
                          {cor.data &&
                            cor.data.map((info) => {
                              if (String(info.prod_id).match(34)) {
                                return info.prod_desc;
                              } else return null;
                            })}
                        </Typography>
                        <br />
                        <Divider />
                        <br />
                        <Grid container spacing={3}>
                          <Grid item xs={12} sm={6}>
                            <InputLabel>Select Your Size</InputLabel>
                            <Select
                              value={bt_size8}
                              onChange={(e) => setSize8(e.target.value)}
                              fullWidth
                            >
                              <MenuItem value="36R">36R</MenuItem>
                              <MenuItem value="38R">38R</MenuItem>
                              <MenuItem value="40R">40R</MenuItem>
                              <MenuItem value="42R">42R</MenuItem>
                              <MenuItem value="44R">44R</MenuItem>
                              <MenuItem value="46R">46R</MenuItem>
                              <MenuItem value="48R">48R</MenuItem>
                              <MenuItem value="50R">50R</MenuItem>
                            </Select>
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <InputLabel>Quantity</InputLabel>
                            <TextField
                              required
                              id="ucas"
                              type="number"
                              name="Quantity"
                              inputProps={{
                                min: 1,
                                style: { textAlign: "center" },
                              }}
                              value={bt_quantity8}
                              onChange={(e) => setQuantity8(e.target.value)}
                              fullWidth
                            />
                          </Grid>
                          <Grid item xs={12} sm={12}>
                            <InputLabel>Select Delivery Option</InputLabel>
                            <Select
                              value={bt_delivery8}
                              onChange={(e) => setBt_delivery8(e.target.value)}
                              fullWidth
                            >
                              <MenuItem value="Standard Delivery (FREE) Approx. 3-5 Working Days">
                                Standard Delivery (FREE) Approx. 3-5 Working
                                Days
                              </MenuItem>
                              <MenuItem value="DPD Express (£3.95) 1-2 Working Days.">
                                DPD Express (£3.95) 1-2 Working Days.
                              </MenuItem>
                              <MenuItem value="Hermes Next Day (£8.95) Get it Tomorrow!">
                                Hermes Next Day (£8.95) Get it Tomorrow!
                              </MenuItem>
                            </Select>
                          </Grid>
                        </Grid>
                        <Divider />
                        <br />
                        <Typography variant="h5">
                          <h4 className="strike">
                            {cor.data &&
                              cor.data.map((info) => {
                                if (String(info.prod_id).match(34)) {
                                  return "£" + info.old_price;
                                } else return null;
                              })}
                          </h4>
                          {cor.data &&
                            cor.data.map((info) => {
                              if (String(info.prod_id).match(34)) {
                                return "Price: £" + info.current_price;
                              } else return null;
                            })}
                        </Typography>
                      </CardContent>
                      {stud.data &&
                        stud.data.map((stud, idx) => {
                          if (stud.cust_id === 43 && stud.isLogged === "yes") {
                            return (
                              <CardActions>
                                <Button
                                  variant="contained"
                                  color="primary"
                                  onClick={(e) => setFirst(17)}
                                >
                                  Sign In to add to basket
                                </Button>
                                <Button
                                  variant="contained"
                                  color="secondary"
                                  onClick={(e) => setFirst(18)}
                                >
                                  Register
                                </Button>
                              </CardActions>
                            );
                          } else if (
                            stud.cust_id !== 43 &&
                            stud.isLogged === "yes"
                          ) {
                            return (
                              <CardActions>
                                <Button
                                  variant="contained"
                                  color="primary"
                                  onClick={(e) => saveCustID(8)}
                                >
                                  Add to Basket
                                </Button>
                              </CardActions>
                            );
                          }
                        })}
                    </Card>
                  </Grid>
                </Grid>
              </Container>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Container className={classes.cardGrid} maxWidth="md">
                <Grid container spacing={4} justify="center">
                  <Grid item xs={12} sm={6} md={6}>
                    <Card className={classes.card}>
                      <CardMedia
                        className={classes.cardMedia}
                        image={b9}
                        title="Image title"
                      />
                      <Divider />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {" "}
                          {cor.data &&
                            cor.data.map((info) => {
                              if (String(info.prod_id).match(35)) {
                                return info.prod_name;
                              } else return null;
                            })}
                        </Typography>
                        <Divider />
                        <br />
                        <Typography>
                          {cor.data &&
                            cor.data.map((info) => {
                              if (String(info.prod_id).match(35)) {
                                return info.prod_desc;
                              } else return null;
                            })}
                        </Typography>
                        <br />
                        <Divider />
                        <br />
                        <Grid container spacing={3}>
                          <Grid item xs={12} sm={6}>
                            <InputLabel>Select Your Size</InputLabel>
                            <Select
                              value={bt_size9}
                              onChange={(e) => setSize9(e.target.value)}
                              fullWidth
                            >
                              <MenuItem value="36R">36R</MenuItem>
                              <MenuItem value="38R">38R</MenuItem>
                              <MenuItem value="40R">40R</MenuItem>
                              <MenuItem value="42R">42R</MenuItem>
                              <MenuItem value="44R">44R</MenuItem>
                              <MenuItem value="46R">46R</MenuItem>
                              <MenuItem value="48R">48R</MenuItem>
                              <MenuItem value="50R">50R</MenuItem>
                            </Select>
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <InputLabel>Quantity</InputLabel>
                            <TextField
                              required
                              id="ucas"
                              type="number"
                              name="Quantity"
                              inputProps={{
                                min: 1,
                                style: { textAlign: "center" },
                              }}
                              value={bt_quantity9}
                              onChange={(e) => setQuantity9(e.target.value)}
                              fullWidth
                            />
                          </Grid>
                          <Grid item xs={12} sm={12}>
                            <InputLabel>Select Delivery Option</InputLabel>
                            <Select
                              value={bt_delivery9}
                              onChange={(e) => setBt_delivery9(e.target.value)}
                              fullWidth
                            >
                              <MenuItem value="Standard Delivery (FREE) Approx. 3-5 Working Days">
                                Standard Delivery (FREE) Approx. 3-5 Working
                                Days
                              </MenuItem>
                              <MenuItem value="DPD Express (£3.95) 1-2 Working Days.">
                                DPD Express (£3.95) 1-2 Working Days.
                              </MenuItem>
                              <MenuItem value="Hermes Next Day (£8.95) Get it Tomorrow!">
                                Hermes Next Day (£8.95) Get it Tomorrow!
                              </MenuItem>
                            </Select>
                          </Grid>
                        </Grid>
                        <Divider />
                        <br />
                        <Typography variant="h5">
                          <h4 className="strike">
                            {cor.data &&
                              cor.data.map((info) => {
                                if (String(info.prod_id).match(35)) {
                                  return "£" + info.old_price;
                                } else return null;
                              })}
                          </h4>
                          {cor.data &&
                            cor.data.map((info) => {
                              if (String(info.prod_id).match(35)) {
                                return "Price: £" + info.current_price;
                              } else return null;
                            })}
                        </Typography>
                      </CardContent>
                      {stud.data &&
                        stud.data.map((stud, idx) => {
                          if (stud.cust_id === 43 && stud.isLogged === "yes") {
                            return (
                              <CardActions>
                                <Button
                                  variant="contained"
                                  color="primary"
                                  onClick={(e) => setFirst(17)}
                                >
                                  Sign In to add to basket
                                </Button>
                                <Button
                                  variant="contained"
                                  color="secondary"
                                  onClick={(e) => setFirst(18)}
                                >
                                  Register
                                </Button>
                              </CardActions>
                            );
                          } else if (
                            stud.cust_id !== 43 &&
                            stud.isLogged === "yes"
                          ) {
                            return (
                              <CardActions>
                                <Button
                                  variant="contained"
                                  color="primary"
                                  onClick={(e) => saveCustID(9)}
                                >
                                  Add to Basket
                                </Button>
                              </CardActions>
                            );
                          }
                        })}
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={6} md={6}>
                    <Card className={classes.card}>
                      <CardMedia
                        className={classes.cardMedia}
                        image={b10}
                        title="Image title"
                      />
                      <Divider />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {cor.data &&
                            cor.data.map((info) => {
                              if (String(info.prod_id).match(36)) {
                                return info.prod_name;
                              } else return null;
                            })}
                        </Typography>
                        <Divider />
                        <br />
                        <Typography>
                          {cor.data &&
                            cor.data.map((info) => {
                              if (String(info.prod_id).match(36)) {
                                return info.prod_desc;
                              } else return null;
                            })}
                        </Typography>
                        <br />
                        <Divider />
                        <br />
                        <Grid container spacing={3}>
                          <Grid item xs={12} sm={6}>
                            <InputLabel>Select Your Size</InputLabel>
                            <Select
                              value={bt_size10}
                              onChange={(e) => setSize10(e.target.value)}
                              fullWidth
                            >
                              <MenuItem value="36R">36R</MenuItem>
                              <MenuItem value="38R">38R</MenuItem>
                              <MenuItem value="40R">40R</MenuItem>
                              <MenuItem value="42R">42R</MenuItem>
                              <MenuItem value="44R">44R</MenuItem>
                              <MenuItem value="46R">46R</MenuItem>
                              <MenuItem value="48R">48R</MenuItem>
                              <MenuItem value="50R">50R</MenuItem>
                            </Select>
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <InputLabel>Quantity</InputLabel>
                            <TextField
                              required
                              id="ucas"
                              type="number"
                              name="Quantity"
                              inputProps={{
                                min: 1,
                                style: { textAlign: "center" },
                              }}
                              value={bt_quantity10}
                              onChange={(e) => setQuantity10(e.target.value)}
                              fullWidth
                            />
                          </Grid>
                          <Grid item xs={12} sm={12}>
                            <InputLabel>Select Delivery Option</InputLabel>
                            <Select
                              value={bt_delivery10}
                              onChange={(e) => setBt_delivery10(e.target.value)}
                              fullWidth
                            >
                              <MenuItem value="Standard Delivery (FREE) Approx. 3-5 Working Days">
                                Standard Delivery (FREE) Approx. 3-5 Working
                                Days
                              </MenuItem>
                              <MenuItem value="DPD Express (£3.95) 1-2 Working Days.">
                                DPD Express (£3.95) 1-2 Working Days.
                              </MenuItem>
                              <MenuItem value="Hermes Next Day (£8.95) Get it Tomorrow!">
                                Hermes Next Day (£8.95) Get it Tomorrow!
                              </MenuItem>
                            </Select>
                          </Grid>
                        </Grid>
                        <Divider />
                        <br />
                        <Typography variant="h5">
                          <h4 className="strike">
                            {cor.data &&
                              cor.data.map((info) => {
                                if (String(info.prod_id).match(36)) {
                                  return "£" + info.old_price;
                                } else return null;
                              })}
                          </h4>
                          {cor.data &&
                            cor.data.map((info) => {
                              if (String(info.prod_id).match(36)) {
                                return "Price: £" + info.current_price;
                              } else return null;
                            })}
                        </Typography>
                      </CardContent>
                      {stud.data &&
                        stud.data.map((stud, idx) => {
                          if (stud.cust_id === 43 && stud.isLogged === "yes") {
                            return (
                              <CardActions>
                                <Button
                                  variant="contained"
                                  color="primary"
                                  onClick={(e) => setFirst(17)}
                                >
                                  Sign In to add to basket
                                </Button>
                                <Button
                                  variant="contained"
                                  color="secondary"
                                  onClick={(e) => setFirst(18)}
                                >
                                  Register
                                </Button>
                              </CardActions>
                            );
                          } else if (
                            stud.cust_id !== 43 &&
                            stud.isLogged === "yes"
                          ) {
                            return (
                              <CardActions>
                                <Button
                                  variant="contained"
                                  color="primary"
                                  onClick={(e) => saveCustID(10)}
                                >
                                  Add to Basket
                                </Button>
                              </CardActions>
                            );
                          }
                        })}
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={6} md={6}>
                    <Card className={classes.card}>
                      <CardMedia
                        className={classes.cardMedia}
                        image={b11}
                        title="Image title"
                      />
                      <Divider />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {cor.data &&
                            cor.data.map((info) => {
                              if (String(info.prod_id).match(37)) {
                                return info.prod_name;
                              } else return null;
                            })}
                        </Typography>
                        <Divider />
                        <br />
                        <Typography>
                          {cor.data &&
                            cor.data.map((info) => {
                              if (String(info.prod_id).match(37)) {
                                return info.prod_desc;
                              } else return null;
                            })}
                        </Typography>

                        <br />
                        <Divider />
                        <br />
                        <Grid container spacing={3}>
                          <Grid item xs={12} sm={6}>
                            <InputLabel>Select Your Size</InputLabel>
                            <Select
                              value={bt_size11}
                              onChange={(e) => setSize11(e.target.value)}
                              fullWidth
                            >
                              <MenuItem value="36R">36R</MenuItem>
                              <MenuItem value="38R">38R</MenuItem>
                              <MenuItem value="40R">40R</MenuItem>
                              <MenuItem value="42R">42R</MenuItem>
                              <MenuItem value="44R">44R</MenuItem>
                              <MenuItem value="46R">46R</MenuItem>
                              <MenuItem value="48R">48R</MenuItem>
                              <MenuItem value="50R">50R</MenuItem>
                            </Select>
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <InputLabel>Quantity</InputLabel>
                            <TextField
                              required
                              id="ucas"
                              type="number"
                              name="Quantity"
                              inputProps={{
                                min: 1,
                                style: { textAlign: "center" },
                              }}
                              value={bt_quantity11}
                              onChange={(e) => setQuantity11(e.target.value)}
                              fullWidth
                            />
                          </Grid>
                          <Grid item xs={12} sm={12}>
                            <InputLabel>Select Delivery Option</InputLabel>
                            <Select
                              value={bt_delivery11}
                              onChange={(e) => setBt_delivery11(e.target.value)}
                              fullWidth
                            >
                              <MenuItem value="Standard Delivery (FREE) Approx. 3-5 Working Days">
                                Standard Delivery (FREE) Approx. 3-5 Working
                                Days
                              </MenuItem>
                              <MenuItem value="DPD Express (£3.95) 1-2 Working Days.">
                                DPD Express (£3.95) 1-2 Working Days.
                              </MenuItem>
                              <MenuItem value="Hermes Next Day (£8.95) Get it Tomorrow!">
                                Hermes Next Day (£8.95) Get it Tomorrow!
                              </MenuItem>
                            </Select>
                          </Grid>
                        </Grid>
                        <Divider />
                        <br />
                        <Typography variant="h5">
                          <h4 className="strike">
                            {cor.data &&
                              cor.data.map((info) => {
                                if (String(info.prod_id).match(37)) {
                                  return "£" + info.old_price;
                                } else return null;
                              })}
                          </h4>
                          {cor.data &&
                            cor.data.map((info) => {
                              if (String(info.prod_id).match(37)) {
                                return "Price: £" + info.current_price;
                              } else return null;
                            })}
                        </Typography>
                      </CardContent>
                      {stud.data &&
                        stud.data.map((stud, idx) => {
                          if (stud.cust_id === 43 && stud.isLogged === "yes") {
                            return (
                              <CardActions>
                                <Button
                                  variant="contained"
                                  color="primary"
                                  onClick={(e) => setFirst(17)}
                                >
                                  Sign In to add to basket
                                </Button>
                                <Button
                                  variant="contained"
                                  color="secondary"
                                  onClick={(e) => setFirst(18)}
                                >
                                  Register
                                </Button>
                              </CardActions>
                            );
                          } else if (
                            stud.cust_id !== 43 &&
                            stud.isLogged === "yes"
                          ) {
                            return (
                              <CardActions>
                                <Button
                                  variant="contained"
                                  color="primary"
                                  onClick={(e) => saveCustID(11)}
                                >
                                  Add to Basket
                                </Button>
                              </CardActions>
                            );
                          }
                        })}
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={6} md={6}>
                    <Card className={classes.card}>
                      <CardMedia
                        className={classes.cardMedia}
                        image={b12}
                        title="Image title"
                      />
                      <Divider />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {cor.data &&
                            cor.data.map((info) => {
                              if (String(info.prod_id).match(38)) {
                                return info.prod_name;
                              } else return null;
                            })}
                        </Typography>
                        <Divider />
                        <br />
                        <Typography>
                          {cor.data &&
                            cor.data.map((info) => {
                              if (String(info.prod_id).match(38)) {
                                return info.prod_desc;
                              } else return null;
                            })}
                        </Typography>
                        <br />
                        <Divider />
                        <br />
                        <Grid container spacing={3}>
                          <Grid item xs={12} sm={6}>
                            <InputLabel>Select Your Size</InputLabel>
                            <Select
                              value={bt_size12}
                              onChange={(e) => setSize12(e.target.value)}
                              fullWidth
                            >
                              <MenuItem value="36R">36R</MenuItem>
                              <MenuItem value="38R">38R</MenuItem>
                              <MenuItem value="40R">40R</MenuItem>
                              <MenuItem value="42R">42R</MenuItem>
                              <MenuItem value="44R">44R</MenuItem>
                              <MenuItem value="46R">46R</MenuItem>
                              <MenuItem value="48R">48R</MenuItem>
                              <MenuItem value="50R">50R</MenuItem>
                            </Select>
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <InputLabel>Quantity</InputLabel>
                            <TextField
                              required
                              id="ucas"
                              type="number"
                              name="Quantity"
                              inputProps={{
                                min: 1,
                                style: { textAlign: "center" },
                              }}
                              value={bt_quantity12}
                              onChange={(e) => setQuantity12(e.target.value)}
                              fullWidth
                            />
                          </Grid>
                          <Grid item xs={12} sm={12}>
                            <InputLabel>Select Delivery Option</InputLabel>
                            <Select
                              value={bt_delivery12}
                              onChange={(e) => setBt_delivery12(e.target.value)}
                              fullWidth
                            >
                              <MenuItem value="Standard Delivery (FREE) Approx. 3-5 Working Days">
                                Standard Delivery (FREE) Approx. 3-5 Working
                                Days
                              </MenuItem>
                              <MenuItem value="DPD Express (£3.95) 1-2 Working Days.">
                                DPD Express (£3.95) 1-2 Working Days.
                              </MenuItem>
                              <MenuItem value="Hermes Next Day (£8.95) Get it Tomorrow!">
                                Hermes Next Day (£8.95) Get it Tomorrow!
                              </MenuItem>
                            </Select>
                          </Grid>
                        </Grid>
                        <Divider />
                        <br />
                        <Typography variant="h5">
                          <h4 className="strike">
                            {cor.data &&
                              cor.data.map((info) => {
                                if (String(info.prod_id).match(38)) {
                                  return "£" + info.old_price;
                                } else return null;
                              })}
                          </h4>
                          {cor.data &&
                            cor.data.map((info) => {
                              if (String(info.prod_id).match(38)) {
                                return "Price: £" + info.current_price;
                              } else return null;
                            })}
                        </Typography>
                      </CardContent>
                      {stud.data &&
                        stud.data.map((stud, idx) => {
                          if (stud.cust_id === 43 && stud.isLogged === "yes") {
                            return (
                              <CardActions>
                                <Button
                                  variant="contained"
                                  color="primary"
                                  onClick={(e) => setFirst(17)}
                                >
                                  Sign In to add to basket
                                </Button>
                                <Button
                                  variant="contained"
                                  color="secondary"
                                  onClick={(e) => setFirst(18)}
                                >
                                  Register
                                </Button>
                              </CardActions>
                            );
                          } else if (
                            stud.cust_id !== 43 &&
                            stud.isLogged === "yes"
                          ) {
                            return (
                              <CardActions>
                                <Button
                                  variant="contained"
                                  color="primary"
                                  onClick={(e) => saveCustID(12)}
                                >
                                  Add to Basket
                                </Button>
                              </CardActions>
                            );
                          }
                        })}
                    </Card>
                  </Grid>
                </Grid>
              </Container>
            </TabPanel>
            <TabPanel value={value} index={3}>
              <Container className={classes.cardGrid} maxWidth="md">
                <Grid container spacing={4} justify="center">
                  <Grid item xs={12} sm={6} md={6}>
                    <Card className={classes.card}>
                      <CardMedia
                        className={classes.cardMedia}
                        image={b13}
                        title="Image title"
                      />
                      <Divider />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {" "}
                          {cor.data &&
                            cor.data.map((info) => {
                              if (String(info.prod_id).match(39)) {
                                return info.prod_name;
                              } else return null;
                            })}
                        </Typography>
                        <Divider />
                        <br />
                        <Typography>
                          {cor.data &&
                            cor.data.map((info) => {
                              if (String(info.prod_id).match(39)) {
                                return info.prod_desc;
                              } else return null;
                            })}
                        </Typography>
                        <br />
                        <Divider />
                        <br />
                        <Grid container spacing={3}>
                          <Grid item xs={12} sm={6}>
                            <InputLabel>Select Your Size</InputLabel>
                            <Select
                              value={bt_size13}
                              onChange={(e) => setSize13(e.target.value)}
                              fullWidth
                            >
                              <MenuItem value="36R">36R</MenuItem>
                              <MenuItem value="38R">38R</MenuItem>
                              <MenuItem value="40R">40R</MenuItem>
                              <MenuItem value="42R">42R</MenuItem>
                              <MenuItem value="44R">44R</MenuItem>
                              <MenuItem value="46R">46R</MenuItem>
                              <MenuItem value="48R">48R</MenuItem>
                              <MenuItem value="50R">50R</MenuItem>
                            </Select>
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <InputLabel>Quantity</InputLabel>
                            <TextField
                              required
                              id="ucas"
                              type="number"
                              name="Quantity"
                              inputProps={{
                                min: 1,
                                style: { textAlign: "center" },
                              }}
                              value={bt_quantity13}
                              onChange={(e) => setQuantity13(e.target.value)}
                              fullWidth
                            />
                          </Grid>
                          <Grid item xs={12} sm={12}>
                            <InputLabel>Select Delivery Option</InputLabel>
                            <Select
                              value={bt_delivery13}
                              onChange={(e) => setBt_delivery13(e.target.value)}
                              fullWidth
                            >
                              <MenuItem value="Standard Delivery (FREE) Approx. 3-5 Working Days">
                                Standard Delivery (FREE) Approx. 3-5 Working
                                Days
                              </MenuItem>
                              <MenuItem value="DPD Express (£3.95) 1-2 Working Days.">
                                DPD Express (£3.95) 1-2 Working Days.
                              </MenuItem>
                              <MenuItem value="Hermes Next Day (£8.95) Get it Tomorrow!">
                                Hermes Next Day (£8.95) Get it Tomorrow!
                              </MenuItem>
                            </Select>
                          </Grid>
                        </Grid>
                        <Divider />
                        <br />
                        <Typography variant="h5">
                          <h4 className="strike">
                            {cor.data &&
                              cor.data.map((info) => {
                                if (String(info.prod_id).match(39)) {
                                  return "£" + info.old_price;
                                } else return null;
                              })}
                          </h4>
                          {cor.data &&
                            cor.data.map((info) => {
                              if (String(info.prod_id).match(39)) {
                                return "Price: £" + info.current_price;
                              } else return null;
                            })}
                        </Typography>
                      </CardContent>
                      {stud.data &&
                        stud.data.map((stud, idx) => {
                          if (stud.cust_id === 43 && stud.isLogged === "yes") {
                            return (
                              <CardActions>
                                <Button
                                  variant="contained"
                                  color="primary"
                                  onClick={(e) => setFirst(17)}
                                >
                                  Sign In to add to basket
                                </Button>
                                <Button
                                  variant="contained"
                                  color="secondary"
                                  onClick={(e) => setFirst(18)}
                                >
                                  Register
                                </Button>
                              </CardActions>
                            );
                          } else if (
                            stud.cust_id !== 43 &&
                            stud.isLogged === "yes"
                          ) {
                            return (
                              <CardActions>
                                <Button
                                  variant="contained"
                                  color="primary"
                                  onClick={(e) => saveCustID(13)}
                                >
                                  Add to Basket
                                </Button>
                              </CardActions>
                            );
                          }
                        })}
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={6} md={6}>
                    <Card className={classes.card}>
                      <CardMedia
                        className={classes.cardMedia}
                        image={b14}
                        title="Image title"
                      />
                      <Divider />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {cor.data &&
                            cor.data.map((info) => {
                              if (String(info.prod_id).match(40)) {
                                return info.prod_name;
                              } else return null;
                            })}
                        </Typography>
                        <Divider />
                        <br />
                        <Typography>
                          {cor.data &&
                            cor.data.map((info) => {
                              if (String(info.prod_id).match(40)) {
                                return info.prod_desc;
                              } else return null;
                            })}
                        </Typography>
                        <br />
                        <Divider />
                        <br />
                        <Grid container spacing={3}>
                          <Grid item xs={12} sm={6}>
                            <InputLabel>Select Your Size</InputLabel>
                            <Select
                              value={bt_size14}
                              onChange={(e) => setSize14(e.target.value)}
                              fullWidth
                            >
                              <MenuItem value="36R">36R</MenuItem>
                              <MenuItem value="38R">38R</MenuItem>
                              <MenuItem value="40R">40R</MenuItem>
                              <MenuItem value="42R">42R</MenuItem>
                              <MenuItem value="44R">44R</MenuItem>
                              <MenuItem value="46R">46R</MenuItem>
                              <MenuItem value="48R">48R</MenuItem>
                              <MenuItem value="50R">50R</MenuItem>
                            </Select>
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <InputLabel>Quantity</InputLabel>
                            <TextField
                              required
                              id="ucas"
                              type="number"
                              name="Quantity"
                              inputProps={{
                                min: 1,
                                style: { textAlign: "center" },
                              }}
                              value={bt_quantity14}
                              onChange={(e) => setQuantity14(e.target.value)}
                              fullWidth
                            />
                          </Grid>
                          <Grid item xs={12} sm={12}>
                            <InputLabel>Select Delivery Option</InputLabel>
                            <Select
                              value={bt_delivery14}
                              onChange={(e) => setBt_delivery14(e.target.value)}
                              fullWidth
                            >
                              <MenuItem value="Standard Delivery (FREE) Approx. 3-5 Working Days">
                                Standard Delivery (FREE) Approx. 3-5 Working
                                Days
                              </MenuItem>
                              <MenuItem value="DPD Express (£3.95) 1-2 Working Days.">
                                DPD Express (£3.95) 1-2 Working Days.
                              </MenuItem>
                              <MenuItem value="Hermes Next Day (£8.95) Get it Tomorrow!">
                                Hermes Next Day (£8.95) Get it Tomorrow!
                              </MenuItem>
                            </Select>
                          </Grid>
                        </Grid>
                        <Divider />
                        <br />
                        <Typography variant="h5">
                          <h4 className="strike">
                            {cor.data &&
                              cor.data.map((info) => {
                                if (String(info.prod_id).match(40)) {
                                  return "£" + info.old_price;
                                } else return null;
                              })}
                          </h4>
                          {cor.data &&
                            cor.data.map((info) => {
                              if (String(info.prod_id).match(40)) {
                                return "Price: £" + info.current_price;
                              } else return null;
                            })}
                        </Typography>
                      </CardContent>
                      {stud.data &&
                        stud.data.map((stud, idx) => {
                          if (stud.cust_id === 43 && stud.isLogged === "yes") {
                            return (
                              <CardActions>
                                <Button
                                  variant="contained"
                                  color="primary"
                                  onClick={(e) => setFirst(17)}
                                >
                                  Sign In to add to basket
                                </Button>
                                <Button
                                  variant="contained"
                                  color="secondary"
                                  onClick={(e) => setFirst(18)}
                                >
                                  Register
                                </Button>
                              </CardActions>
                            );
                          } else if (
                            stud.cust_id !== 43 &&
                            stud.isLogged === "yes"
                          ) {
                            return (
                              <CardActions>
                                <Button
                                  variant="contained"
                                  color="primary"
                                  onClick={(e) => saveCustID(14)}
                                >
                                  Add to Basket
                                </Button>
                              </CardActions>
                            );
                          }
                        })}
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={6} md={6}>
                    <Card className={classes.card}>
                      <CardMedia
                        className={classes.cardMedia}
                        image={b15}
                        title="Image title"
                      />
                      <Divider />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {cor.data &&
                            cor.data.map((info) => {
                              if (String(info.prod_id).match(41)) {
                                return info.prod_name;
                              } else return null;
                            })}
                        </Typography>
                        <Divider />
                        <br />
                        <Typography>
                          {cor.data &&
                            cor.data.map((info) => {
                              if (String(info.prod_id).match(41)) {
                                return info.prod_desc;
                              } else return null;
                            })}
                        </Typography>

                        <br />
                        <Divider />
                        <br />
                        <Grid container spacing={3}>
                          <Grid item xs={12} sm={6}>
                            <InputLabel>Select Your Size</InputLabel>
                            <Select
                              value={bt_size15}
                              onChange={(e) => setSize15(e.target.value)}
                              fullWidth
                            >
                              <MenuItem value="36R">36R</MenuItem>
                              <MenuItem value="38R">38R</MenuItem>
                              <MenuItem value="40R">40R</MenuItem>
                              <MenuItem value="42R">42R</MenuItem>
                              <MenuItem value="44R">44R</MenuItem>
                              <MenuItem value="46R">46R</MenuItem>
                              <MenuItem value="48R">48R</MenuItem>
                              <MenuItem value="50R">50R</MenuItem>
                            </Select>
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <InputLabel>Quantity</InputLabel>
                            <TextField
                              required
                              id="ucas"
                              type="number"
                              name="Quantity"
                              inputProps={{
                                min: 1,
                                style: { textAlign: "center" },
                              }}
                              value={bt_quantity15}
                              onChange={(e) => setQuantity15(e.target.value)}
                              fullWidth
                            />
                          </Grid>
                          <Grid item xs={12} sm={12}>
                            <InputLabel>Select Delivery Option</InputLabel>
                            <Select
                              value={bt_delivery15}
                              onChange={(e) => setBt_delivery15(e.target.value)}
                              fullWidth
                            >
                              <MenuItem value="Standard Delivery (FREE) Approx. 3-5 Working Days">
                                Standard Delivery (FREE) Approx. 3-5 Working
                                Days
                              </MenuItem>
                              <MenuItem value="DPD Express (£3.95) 1-2 Working Days.">
                                DPD Express (£3.95) 1-2 Working Days.
                              </MenuItem>
                              <MenuItem value="Hermes Next Day (£8.95) Get it Tomorrow!">
                                Hermes Next Day (£8.95) Get it Tomorrow!
                              </MenuItem>
                            </Select>
                          </Grid>
                        </Grid>
                        <Divider />
                        <br />
                        <Typography variant="h5">
                          <h4 className="strike">
                            {cor.data &&
                              cor.data.map((info) => {
                                if (String(info.prod_id).match(41)) {
                                  return "£" + info.old_price;
                                } else return null;
                              })}
                          </h4>
                          {cor.data &&
                            cor.data.map((info) => {
                              if (String(info.prod_id).match(41)) {
                                return "Price: £" + info.current_price;
                              } else return null;
                            })}
                        </Typography>
                      </CardContent>
                      {stud.data &&
                        stud.data.map((stud, idx) => {
                          if (stud.cust_id === 43 && stud.isLogged === "yes") {
                            return (
                              <CardActions>
                                <Button
                                  variant="contained"
                                  color="primary"
                                  onClick={(e) => setFirst(17)}
                                >
                                  Sign In to add to basket
                                </Button>
                                <Button
                                  variant="contained"
                                  color="secondary"
                                  onClick={(e) => setFirst(18)}
                                >
                                  Register
                                </Button>
                              </CardActions>
                            );
                          } else if (
                            stud.cust_id !== 43 &&
                            stud.isLogged === "yes"
                          ) {
                            return (
                              <CardActions>
                                <Button
                                  variant="contained"
                                  color="primary"
                                  onClick={(e) => saveCustID(15)}
                                >
                                  Add to Basket
                                </Button>
                              </CardActions>
                            );
                          }
                        })}
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={6} md={6}>
                    <Card className={classes.card}>
                      <CardMedia
                        className={classes.cardMedia}
                        image={b16}
                        title="Image title"
                      />
                      <Divider />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {cor.data &&
                            cor.data.map((info) => {
                              if (String(info.prod_id).match(42)) {
                                return info.prod_name;
                              } else return null;
                            })}
                        </Typography>
                        <Divider />
                        <br />
                        <Typography>
                          {cor.data &&
                            cor.data.map((info) => {
                              if (String(info.prod_id).match(42)) {
                                return info.prod_desc;
                              } else return null;
                            })}
                        </Typography>
                        <br />
                        <Divider />
                        <br />
                        <Grid container spacing={3}>
                          <Grid item xs={12} sm={6}>
                            <InputLabel>Select Your Size</InputLabel>
                            <Select
                              value={bt_size16}
                              onChange={(e) => setSize16(e.target.value)}
                              fullWidth
                            >
                              <MenuItem value="36R">36R</MenuItem>
                              <MenuItem value="38R">38R</MenuItem>
                              <MenuItem value="40R">40R</MenuItem>
                              <MenuItem value="42R">42R</MenuItem>
                              <MenuItem value="44R">44R</MenuItem>
                              <MenuItem value="46R">46R</MenuItem>
                              <MenuItem value="48R">48R</MenuItem>
                              <MenuItem value="50R">50R</MenuItem>
                            </Select>
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <InputLabel>Quantity</InputLabel>
                            <TextField
                              required
                              id="ucas"
                              type="number"
                              name="Quantity"
                              inputProps={{
                                min: 1,
                                style: { textAlign: "center" },
                              }}
                              value={bt_quantity16}
                              onChange={(e) => setQuantity16(e.target.value)}
                              fullWidth
                            />
                          </Grid>
                          <Grid item xs={12} sm={12}>
                            <InputLabel>Select Delivery Option</InputLabel>
                            <Select
                              value={bt_delivery16}
                              onChange={(e) => setBt_delivery16(e.target.value)}
                              fullWidth
                            >
                              <MenuItem value="Standard Delivery (FREE) Approx. 3-5 Working Days">
                                Standard Delivery (FREE) Approx. 3-5 Working
                                Days
                              </MenuItem>
                              <MenuItem value="DPD Express (£3.95) 1-2 Working Days.">
                                DPD Express (£3.95) 1-2 Working Days.
                              </MenuItem>
                              <MenuItem value="Hermes Next Day (£8.95) Get it Tomorrow!">
                                Hermes Next Day (£8.95) Get it Tomorrow!
                              </MenuItem>
                            </Select>
                          </Grid>
                        </Grid>
                        <Divider />
                        <br />
                        <Typography variant="h5">
                          <h4 className="strike">
                            {cor.data &&
                              cor.data.map((info) => {
                                if (String(info.prod_id).match(42)) {
                                  return "£" + info.old_price;
                                } else return null;
                              })}
                          </h4>

                          {cor.data &&
                            cor.data.map((info) => {
                              if (String(info.prod_id).match(42)) {
                                return "Price: £" + info.current_price;
                              } else return null;
                            })}
                        </Typography>
                      </CardContent>
                      {stud.data &&
                        stud.data.map((stud, idx) => {
                          if (stud.cust_id === 43 && stud.isLogged === "yes") {
                            return (
                              <CardActions>
                                <Button
                                  variant="contained"
                                  color="primary"
                                  onClick={(e) => setFirst(17)}
                                >
                                  Sign In to add to basket
                                </Button>
                                <Button
                                  variant="contained"
                                  color="secondary"
                                  onClick={(e) => setFirst(18)}
                                >
                                  Register
                                </Button>
                              </CardActions>
                            );
                          } else if (
                            stud.cust_id !== 43 &&
                            stud.isLogged === "yes"
                          ) {
                            return (
                              <CardActions>
                                <Button
                                  variant="contained"
                                  color="primary"
                                  onClick={(e) => saveCustID(16)}
                                >
                                  Add to Basket
                                </Button>
                              </CardActions>
                            );
                          }
                        })}
                    </Card>
                  </Grid>
                </Grid>
              </Container>
            </TabPanel>
          </div>
        </div>
      </div>
      <footer class="footer">
        <CR />
      </footer>
    </main>
  );
}

// exporting the Menswear function
export default Menswear;
