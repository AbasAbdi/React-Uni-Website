// DeptWomen.js
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
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import axios from "axios";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import "./App.css";
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
    fontCP: 54,
  },
}));

// DeptWomen function
function DeptWomen() {
  // Using useStyles inside the function component to create classes object
  const classes = useStyles();

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

  // Created Hook Expressions React.useState()

  // Declaring a state variable (cor) and call (setCor)
  const [cor, setCor] = React.useState("");

  // Declaring a state variable (value) and call (setValue)
  const [value, setValue] = React.useState(0);

  // Declaring a state variable (bt_quantity1) and call (setQuantity1)
  const [bt_quantity1, setQuantity1] = React.useState(500);
  // Declaring a state variable (current_price1) and call (setCP1)
  const [current_price1, setCP1] = React.useState(null);

  // Declaring a state variable (bt_quantity2) and call (setQuantity2)
  const [bt_quantity2, setQuantity2] = React.useState(500);
  // Declaring a state variable (current_price2) and call (setCP2)
  const [current_price2, setCP2] = React.useState(null);

  // Declaring a state variable (bt_quantity3) and call (setQuantity3)
  const [bt_quantity3, setQuantity3] = React.useState(500);
  // Declaring a state variable (current_price3) and call (setCP3)
  const [current_price3, setCP3] = React.useState(null);

  // Declaring a state variable (bt_quantity4) and call (setQuantity4)
  const [bt_quantity4, setQuantity4] = React.useState(500);
  // Declaring a state variable (current_price4) and call (setCP4)
  const [current_price4, setCP4] = React.useState(null);

  // Declaring a state variable (bt_quantity5) and call (setQuantity5)
  const [bt_quantity5, setQuantity5] = React.useState(500);
  // Declaring a state variable (current_price5) and call (setCP5)
  const [current_price5, setCP5] = React.useState(null);

  // Declaring a state variable (bt_quantity6) and call (setQuantity6)
  const [bt_quantity6, setQuantity6] = React.useState(500);
  // Declaring a state variable (current_price8) and call (setCP6)
  const [current_price6, setCP6] = React.useState(null);

  // Declaring a state variable (bt_quantity7) and call (setQuantity7)
  const [bt_quantity7, setQuantity7] = React.useState(500);
  // Declaring a state variable (current_price7) and call (setCP7)
  const [current_price7, setCP7] = React.useState(null);

  // Declaring a state variable (bt_quantity8) and call (setQuantity8)
  const [bt_quantity8, setQuantity8] = React.useState(500);
  // Declaring a state variable (current_price8) and call (setCP8)
  const [current_price8, setCP8] = React.useState(null);

  // Declaring a state variable (bt_quantity9) and call (setQuantity9)
  const [bt_quantity9, setQuantity9] = React.useState(500);
  // Declaring a state variable (current_price9) and call (setCP9)
  const [current_price9, setCP9] = React.useState(null);

  // Declaring a state variable (bt_quantity10) and call (setQuantity10)
  const [bt_quantity10, setQuantity10] = React.useState(500);
  // Declaring a state variable (current_price10) and call (setCP10)
  const [current_price10, setCP10] = React.useState(null);

  // Declaring a state variable (bt_quantity11) and call (setQuantity11)
  const [bt_quantity11, setQuantity11] = React.useState(500);
  // Declaring a state variable (current_price11) and call (setCP11)
  const [current_price11, setCP11] = React.useState(null);

  // Declaring a state variable (bt_quantity12) and call (setQuantity12)
  const [bt_quantity12, setQuantity12] = React.useState(500);
  // Declaring a state variable (current_price12) and call (setCP12)
  const [current_price12, setCP12] = React.useState(null);

  // Declaring a state variable (bt_quantity13) and call (setQuantity13)
  const [bt_quantity13, setQuantity13] = React.useState(500);
  // Declaring a state variable (current_price13) and call (setCP13)
  const [current_price13, setCP13] = React.useState(null);

  // Declaring a state variable (bt_quantity14) and call (setQuantity14)
  const [bt_quantity14, setQuantity14] = React.useState(500);
  // Declaring a state variable (current_price14) and call (setCP14)
  const [current_price14, setCP14] = React.useState(null);

  // Declaring a state variable (bt_quantity15) and call (setQuantity15)
  const [bt_quantity15, setQuantity15] = React.useState(500);
  // Declaring a state variable (current_price15) and call (setCP15)
  const [current_price15, setCP15] = React.useState(null);

  // Declaring a state variable (bt_quantity16) and call (setQuantity16)
  const [bt_quantity16, setQuantity16] = React.useState(500);
  // Declaring a state variable (current_price16) and call (setCP16)
  const [current_price16, setCP16] = React.useState(null);

  // Declaring a state variable (first) and call (setFirst)
  const [first, setFirst] = React.useState(0);

  /* Function that returns Axios get method which reads data from the URL,
     then assigns the response to resData variable.  */
  function fetchRecords() {
    axios
      .get("http://localhost:8080/prod")
      .then((response) => {
        // handle success
        var resData = response.data;
        //var data = JSON.stringify(resData);
        setCor(resData);
      })
      .catch((err) => console.log("Error: ", err));
  }

  /* Declaring a variable (handleChange) and assigning it an arrow function such that
     when it's called it utilises the setValue call to set the value state variable to the new value (newValue). It also utilises the setView(1-7) calls to set the view(1-7) state variables to the new value (false)  */
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  /* Declaring a variable and assigning it many values. Each property (b1-b16) has a property value
    and within that value we map through the data in the cor state variable and if the course_id matches 
    the id we're looking for a String containing the information we we're looking for is returned. Otherwise, null is returned. */
  var b = {
    b1:
      cor.data &&
      cor.data.map((info) => {
        if (String(info.prod_id).match(11)) {
          return String(info.prod_img);
        } else return null;
      }),

    b2:
      cor.data &&
      cor.data.map((info) => {
        if (String(info.prod_id).match(12)) {
          return String(info.prod_img);
        } else return null;
      }),

    b3:
      cor.data &&
      cor.data.map((info) => {
        if (String(info.prod_id).match(13)) {
          return String(info.prod_img);
        } else return null;
      }),

    b4:
      cor.data &&
      cor.data.map((info) => {
        if (String(info.prod_id).match(14)) {
          return String(info.prod_img);
        } else return null;
      }),

    b5:
      cor.data &&
      cor.data.map((info) => {
        if (String(info.prod_id).match(15)) {
          return String(info.prod_img);
        } else return null;
      }),

    b6:
      cor.data &&
      cor.data.map((info) => {
        if (String(info.prod_id).match(16)) {
          return String(info.prod_img);
        } else return null;
      }),

    b7:
      cor.data &&
      cor.data.map((info) => {
        if (String(info.prod_id).match(17)) {
          return String(info.prod_img);
        } else return null;
      }),

    b8:
      cor.data &&
      cor.data.map((info) => {
        if (String(info.prod_id).match(18)) {
          return String(info.prod_img);
        } else return null;
      }),

    b9:
      cor.data &&
      cor.data.map((info) => {
        if (String(info.prod_id).match(19)) {
          return String(info.prod_img);
        } else return null;
      }),

    b10:
      cor.data &&
      cor.data.map((info) => {
        if (String(info.prod_id).match(20)) {
          return String(info.prod_img);
        } else return null;
      }),

    b11:
      cor.data &&
      cor.data.map((info) => {
        if (String(info.prod_id).match(21)) {
          return String(info.prod_img);
        } else return null;
      }),

    b12:
      cor.data &&
      cor.data.map((info) => {
        if (String(info.prod_id).match(22)) {
          return String(info.prod_img);
        } else return null;
      }),

    b13:
      cor.data &&
      cor.data.map((info) => {
        if (String(info.prod_id).match(23)) {
          return String(info.prod_img);
        } else return null;
      }),

    b14:
      cor.data &&
      cor.data.map((info) => {
        if (String(info.prod_id).match(24)) {
          return String(info.prod_img);
        } else return null;
      }),

    b15:
      cor.data &&
      cor.data.map((info) => {
        if (String(info.prod_id).match(25)) {
          return String(info.prod_img);
        } else return null;
      }),

    b16:
      cor.data &&
      cor.data.map((info) => {
        if (String(info.prod_id).match(26)) {
          return String(info.prod_img);
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

  // Created Hook Expressions React.useState()
  // Declaring a state variable (prod_img1) and call (setImg1)
  const [prod_img1, setImg1] = React.useState(b.b1);
  // Declaring a state variable (prod_name1) and call (setCN1)
  const [prod_name1, setCN1] = React.useState(b.c1);
  // Declaring a state variable (prod_desc1) and call (setDesc1)
  const [prod_desc1, setDesc1] = React.useState(b.d1);
  // Declaring a state variable (prod_img2) and call (setImg2)
  const [prod_img2, setImg2] = React.useState(b.b2);
  // Declaring a state variable (prod_name2) and call (setCN2)
  const [prod_name2, setCN2] = React.useState(b.c2);
  // Declaring a state variable (prod_desc2) and call (setDesc2)
  const [prod_desc2, setDesc2] = React.useState(b.d2);
  // Declaring a state variable (prod_img3) and call (setImg3)
  const [prod_img3, setImg3] = React.useState(b.b3);
  // Declaring a state variable (prod_name3) and call (setCN3)
  const [prod_name3, setCN3] = React.useState(b.c3);
  // Declaring a state variable (prod_desc3) and call (setDesc3)
  const [prod_desc3, setDesc3] = React.useState(b.d3);
  // Declaring a state variable (prod_img4) and call (setImg4)
  const [prod_img4, setImg4] = React.useState(b.b4);
  // Declaring a state variable (prod_name4) and call (setCN4)
  const [prod_name4, setCN4] = React.useState(b.c4);
  // Declaring a state variable (prod_desc4) and call (setDesc4)
  const [prod_desc4, setDesc4] = React.useState(b.d4);
  // Declaring a state variable (prod_img5) and call (setImg5)
  const [prod_img5, setImg5] = React.useState(b.b5);
  // Declaring a state variable (prod_name5) and call (setCN5)
  const [prod_name5, setCN5] = React.useState(b.c5);
  // Declaring a state variable (prod_desc5) and call (setDesc5)
  const [prod_desc5, setDesc5] = React.useState(b.d5);
  // Declaring a state variable (prod_img6) and call (setImg6)
  const [prod_img6, setImg6] = React.useState(b.b6);
  // Declaring a state variable (prod_name6) and call (setCN6)
  const [prod_name6, setCN6] = React.useState(b.c6);
  // Declaring a state variable (prod_desc6) and call (setDesc6)
  const [prod_desc6, setDesc6] = React.useState(b.d6);
  // Declaring a state variable (prod_img7) and call (setImg7)
  const [prod_img7, setImg7] = React.useState(b.b7);
  // Declaring a state variable (prod_name7) and call (setCN7)
  const [prod_name7, setCN7] = React.useState(b.c7);
  // Declaring a state variable (prod_desc7) and call (setDesc7)
  const [prod_desc7, setDesc7] = React.useState(b.d7);
  // Declaring a state variable (prod_img8) and call (setImg8)
  const [prod_img8, setImg8] = React.useState(b.b8);
  // Declaring a state variable (prod_name8) and call (setCN8)
  const [prod_name8, setCN8] = React.useState(b.c8);
  // Declaring a state variable (prod_desc8) and call (setDesc8)
  const [prod_desc8, setDesc8] = React.useState(b.d8);
  // Declaring a state variable (prod_img9) and call (setImg9)
  const [prod_img9, setImg9] = React.useState(b.b9);
  // Declaring a state variable (prod_name9) and call (setCN9)
  const [prod_name9, setCN9] = React.useState(b.c9);
  // Declaring a state variable (prod_desc9) and call (setDesc9)
  const [prod_desc9, setDesc9] = React.useState(b.d9);
  // Declaring a state variable (prod_img10) and call (setImg10)
  const [prod_img10, setImg10] = React.useState(b.b10);
  // Declaring a state variable (prod_name10) and call (setCN10)
  const [prod_name10, setCN10] = React.useState(b.c10);
  // Declaring a state variable (prod_desc10) and call (setDesc10)
  const [prod_desc10, setDesc10] = React.useState(b.d10);
  // Declaring a state variable (prod_img11) and call (setImg11)
  const [prod_img11, setImg11] = React.useState(b.b11);
  // Declaring a state variable (prod_name11) and call (setCN11)
  const [prod_name11, setCN11] = React.useState(b.c11);
  // Declaring a state variable (prod_desc11) and call (setDesc11)
  const [prod_desc11, setDesc11] = React.useState(b.d11);
  // Declaring a state variable (prod_img12) and call (setImg12)
  const [prod_img12, setImg12] = React.useState(b.b12);
  // Declaring a state variable (prod_name12) and call (setCN12)
  const [prod_name12, setCN12] = React.useState(b.c12);
  // Declaring a state variable (prod_desc12) and call (setDesc12)
  const [prod_desc12, setDesc12] = React.useState(b.d12);
  // Declaring a state variable (prod_img13) and call (setImg13)
  const [prod_img13, setImg13] = React.useState(b.b13);
  // Declaring a state variable (prod_name13) and call (setCN13)
  const [prod_name13, setCN13] = React.useState(b.c13);
  // Declaring a state variable (prod_desc13) and call (setDesc13)
  const [prod_desc13, setDesc13] = React.useState(b.d13);
  // Declaring a state variable (prod_img14) and call (setImg14)
  const [prod_img14, setImg14] = React.useState(b.b14);
  // Declaring a state variable (prod_name14) and call (setCN14)
  const [prod_name14, setCN14] = React.useState(b.c14);
  // Declaring a state variable (prod_desc14) and call (setDesc14)
  const [prod_desc14, setDesc14] = React.useState(b.d14);
  // Declaring a state variable (prod_img15) and call (setImg15)
  const [prod_img15, setImg15] = React.useState(b.b15);
  // Declaring a state variable (prod_name15) and call (setCN15)
  const [prod_name15, setCN15] = React.useState(b.c15);
  // Declaring a state variable (prod_desc15) and call (setDesc15)
  const [prod_desc15, setDesc15] = React.useState(b.d15);
  // Declaring a state variable (prod_img16) and call (setImg16)
  const [prod_img16, setImg16] = React.useState(b.b16);
  // Declaring a state variable (prod_name16) and call (setCN16)
  const [prod_name16, setCN16] = React.useState(b.c16);
  // Declaring a state variable (prod_desc16) and call (setDesc16)
  const [prod_desc16, setDesc16] = React.useState(b.d16);

  var updateProduct1 = once(function () {
    cor.data &&
      cor.data.map((info) => {
        if (String(info.prod_id).match(11)) {
          if (current_price1 !== null && current_price1 !== "") {
            const value = {
              prod_img: prod_img1,
              prod_name: prod_name1,
              prod_desc: prod_desc1,
              prod_quantity: bt_quantity1,
              old_price: info.current_price,
              current_price: current_price1,
            };
            axios
              .put(`http://localhost:8080/saveProduct/${11}`, value)
              .then((response) => {
                // handle success
                var resData = response.data;
                let data = JSON.stringify(resData);
                window.alert("Response recieved from server = " + data);
              });
          } else if (current_price1 === null || current_price1 === "") {
            const value = {
              prod_img: prod_img1,
              prod_name: prod_name1,
              prod_desc: prod_desc1,
              prod_quantity: bt_quantity1,
              old_price: info.old_price,
              current_price: info.current_price,
            };
            axios
              .put(`http://localhost:8080/saveProduct/${11}`, value)
              .then((response) => {
                // handle success
                var resData = response.data;
                let data = JSON.stringify(resData);
                window.alert("Response recieved from server = " + data);
              });
          }
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

  var updateProduct2 = once(function () {
    cor.data &&
      cor.data.map((info) => {
        if (String(info.prod_id).match(12)) {
          if (current_price2 !== null && current_price2 !== "") {
            const value = {
              prod_img: prod_img2,
              prod_name: prod_name2,
              prod_desc: prod_desc2,
              prod_quantity: bt_quantity2,
              old_price: info.current_price,
              current_price: current_price2,
            };
            axios
              .put(`http://localhost:8080/saveProduct/${12}`, value)
              .then((response) => {
                // handle success
                var resData = response.data;
                let data = JSON.stringify(resData);
                window.alert("Response recieved from server = " + data);
              });
          } else if (current_price2 === null || current_price2 === "") {
            const value = {
              prod_img: prod_img2,
              prod_name: prod_name2,
              prod_desc: prod_desc2,
              prod_quantity: bt_quantity2,
              old_price: info.old_price,
              current_price: info.current_price,
            };
            axios
              .put(`http://localhost:8080/saveProduct/${12}`, value)
              .then((response) => {
                // handle success
                var resData = response.data;
                let data = JSON.stringify(resData);
                window.alert("Response recieved from server = " + data);
              });
          }
        }
      });
  });

  var updateProduct3 = once(function () {
    cor.data &&
      cor.data.map((info) => {
        if (String(info.prod_id).match(13)) {
          if (current_price3 !== null && current_price3 !== "") {
            const value = {
              prod_img: prod_img3,
              prod_name: prod_name3,
              prod_desc: prod_desc3,
              prod_quantity: bt_quantity3,
              old_price: info.current_price,
              current_price: current_price3,
            };
            axios
              .put(`http://localhost:8080/saveProduct/${13}`, value)
              .then((response) => {
                // handle success
                var resData = response.data;
                let data = JSON.stringify(resData);
                window.alert("Response recieved from server = " + data);
              });
          } else if (current_price3 === null || current_price3 === "") {
            const value = {
              prod_img: prod_img3,
              prod_name: prod_name3,
              prod_desc: prod_desc3,
              prod_quantity: bt_quantity3,
              old_price: info.old_price,
              current_price: info.current_price,
            };
            axios
              .put(`http://localhost:8080/saveProduct/${13}`, value)
              .then((response) => {
                // handle success
                var resData = response.data;
                let data = JSON.stringify(resData);
                window.alert("Response recieved from server = " + data);
              });
          }
        }
      });
  });

  var updateProduct4 = once(function () {
    cor.data &&
      cor.data.map((info) => {
        if (String(info.prod_id).match(14)) {
          if (current_price4 !== null && current_price4 !== "") {
            const value = {
              prod_img: prod_img4,
              prod_name: prod_name4,
              prod_desc: prod_desc4,
              prod_quantity: bt_quantity4,
              old_price: info.current_price,
              current_price: current_price4,
            };
            axios
              .put(`http://localhost:8080/saveProduct/${14}`, value)
              .then((response) => {
                // handle success
                var resData = response.data;
                let data = JSON.stringify(resData);
                window.alert("Response recieved from server = " + data);
              });
          } else if (current_price4 === null || current_price4 === "") {
            const value = {
              prod_img: prod_img4,
              prod_name: prod_name4,
              prod_desc: prod_desc4,
              prod_quantity: bt_quantity4,
              old_price: info.old_price,
              current_price: info.current_price,
            };
            axios
              .put(`http://localhost:8080/saveProduct/${14}`, value)
              .then((response) => {
                // handle success
                var resData = response.data;
                let data = JSON.stringify(resData);
                window.alert("Response recieved from server = " + data);
              });
          }
        }
      });
  });

  var updateProduct5 = once(function () {
    cor.data &&
      cor.data.map((info) => {
        if (String(info.prod_id).match(15)) {
          if (current_price5 !== null && current_price5 !== "") {
            const value = {
              prod_img: prod_img5,
              prod_name: prod_name5,
              prod_desc: prod_desc5,
              prod_quantity: bt_quantity5,
              old_price: info.current_price,
              current_price: current_price5,
            };
            axios
              .put(`http://localhost:8080/saveProduct/${15}`, value)
              .then((response) => {
                // handle success
                var resData = response.data;
                let data = JSON.stringify(resData);
                window.alert("Response recieved from server = " + data);
              });
          } else if (current_price5 === null || current_price5 === "") {
            const value = {
              prod_img: prod_img5,
              prod_name: prod_name5,
              prod_desc: prod_desc5,
              prod_quantity: bt_quantity5,
              old_price: info.old_price,
              current_price: info.current_price,
            };
            axios
              .put(`http://localhost:8080/saveProduct/${15}`, value)
              .then((response) => {
                // handle success
                var resData = response.data;
                let data = JSON.stringify(resData);
                window.alert("Response recieved from server = " + data);
              });
          }
        }
      });
  });

  var updateProduct6 = once(function () {
    cor.data &&
      cor.data.map((info) => {
        if (String(info.prod_id).match(16)) {
          if (current_price6 !== null && current_price6 !== "") {
            const value = {
              prod_img: prod_img6,
              prod_name: prod_name6,
              prod_desc: prod_desc6,
              prod_quantity: bt_quantity6,
              old_price: info.current_price,
              current_price: current_price6,
            };
            axios
              .put(`http://localhost:8080/saveProduct/${16}`, value)
              .then((response) => {
                // handle success
                var resData = response.data;
                let data = JSON.stringify(resData);
                window.alert("Response recieved from server = " + data);
              });
          } else if (current_price6 === null || current_price6 === "") {
            const value = {
              prod_img: prod_img6,
              prod_name: prod_name6,
              prod_desc: prod_desc6,
              prod_quantity: bt_quantity6,
              old_price: info.old_price,
              current_price: info.current_price,
            };
            axios
              .put(`http://localhost:8080/saveProduct/${16}`, value)
              .then((response) => {
                // handle success
                var resData = response.data;
                let data = JSON.stringify(resData);
                window.alert("Response recieved from server = " + data);
              });
          }
        }
      });
  });

  var updateProduct7 = once(function () {
    cor.data &&
      cor.data.map((info) => {
        if (String(info.prod_id).match(17)) {
          if (current_price7 !== null && current_price7 !== "") {
            const value = {
              prod_img: prod_img7,
              prod_name: prod_name7,
              prod_desc: prod_desc7,
              prod_quantity: bt_quantity7,
              old_price: info.current_price,
              current_price: current_price7,
            };
            axios
              .put(`http://localhost:8080/saveProduct/${17}`, value)
              .then((response) => {
                // handle success
                var resData = response.data;
                let data = JSON.stringify(resData);
                window.alert("Response recieved from server = " + data);
              });
          } else if (current_price7 === null || current_price7 === "") {
            const value = {
              prod_img: prod_img7,
              prod_name: prod_name7,
              prod_desc: prod_desc7,
              prod_quantity: bt_quantity7,
              old_price: info.old_price,
              current_price: info.current_price,
            };
            axios
              .put(`http://localhost:8080/saveProduct/${17}`, value)
              .then((response) => {
                // handle success
                var resData = response.data;
                let data = JSON.stringify(resData);
                window.alert("Response recieved from server = " + data);
              });
          }
        }
      });
  });

  var updateProduct8 = once(function () {
    cor.data &&
      cor.data.map((info) => {
        if (String(info.prod_id).match(18)) {
          if (current_price8 !== null && current_price8 !== "") {
            const value = {
              prod_img: prod_img8,
              prod_name: prod_name8,
              prod_desc: prod_desc8,
              prod_quantity: bt_quantity8,
              old_price: info.current_price,
              current_price: current_price8,
            };
            axios
              .put(`http://localhost:8080/saveProduct/${18}`, value)
              .then((response) => {
                // handle success
                var resData = response.data;
                let data = JSON.stringify(resData);
                window.alert("Response recieved from server = " + data);
              });
          } else if (current_price8 === null || current_price8 === "") {
            const value = {
              prod_img: prod_img8,
              prod_name: prod_name8,
              prod_desc: prod_desc8,
              prod_quantity: bt_quantity8,
              old_price: info.old_price,
              current_price: info.current_price,
            };
            axios
              .put(`http://localhost:8080/saveProduct/${18}`, value)
              .then((response) => {
                // handle success
                var resData = response.data;
                let data = JSON.stringify(resData);
                window.alert("Response recieved from server = " + data);
              });
          }
        }
      });
  });

  var updateProduct9 = once(function () {
    cor.data &&
      cor.data.map((info) => {
        if (String(info.prod_id).match(19)) {
          if (current_price9 !== null && current_price9 !== "") {
            const value = {
              prod_img: prod_img9,
              prod_name: prod_name9,
              prod_desc: prod_desc9,
              prod_quantity: bt_quantity9,
              old_price: info.current_price,
              current_price: current_price9,
            };
            axios
              .put(`http://localhost:8080/saveProduct/${19}`, value)
              .then((response) => {
                // handle success
                var resData = response.data;
                let data = JSON.stringify(resData);
                window.alert("Response recieved from server = " + data);
              });
          } else if (current_price9 === null || current_price9 === "") {
            const value = {
              prod_img: prod_img9,
              prod_name: prod_name9,
              prod_desc: prod_desc9,
              prod_quantity: bt_quantity9,
              old_price: info.old_price,
              current_price: info.current_price,
            };
            axios
              .put(`http://localhost:8080/saveProduct/${19}`, value)
              .then((response) => {
                // handle success
                var resData = response.data;
                let data = JSON.stringify(resData);
                window.alert("Response recieved from server = " + data);
              });
          }
        }
      });
  });

  var updateProduct10 = once(function () {
    cor.data &&
      cor.data.map((info) => {
        if (String(info.prod_id).match(20)) {
          if (current_price10 !== null && current_price10 !== "") {
            const value = {
              prod_img: prod_img10,
              prod_name: prod_name10,
              prod_desc: prod_desc10,
              prod_quantity: bt_quantity10,
              old_price: info.current_price,
              current_price: current_price10,
            };
            axios
              .put(`http://localhost:8080/saveProduct/${20}`, value)
              .then((response) => {
                // handle success
                var resData = response.data;
                let data = JSON.stringify(resData);
                window.alert("Response recieved from server = " + data);
              });
          } else if (current_price10 === null || current_price10 === "") {
            const value = {
              prod_img: prod_img10,
              prod_name: prod_name10,
              prod_desc: prod_desc10,
              prod_quantity: bt_quantity10,
              old_price: info.old_price,
              current_price: info.current_price,
            };
            axios
              .put(`http://localhost:8080/saveProduct/${20}`, value)
              .then((response) => {
                // handle success
                var resData = response.data;
                let data = JSON.stringify(resData);
                window.alert("Response recieved from server = " + data);
              });
          }
        }
      });
  });

  var updateProduct11 = once(function () {
    cor.data &&
      cor.data.map((info) => {
        if (String(info.prod_id).match(21)) {
          if (current_price11 !== null && current_price11 !== "") {
            const value = {
              prod_img: prod_img11,
              prod_name: prod_name11,
              prod_desc: prod_desc11,
              prod_quantity: bt_quantity11,
              old_price: info.current_price,
              current_price: current_price11,
            };
            axios
              .put(`http://localhost:8080/saveProduct/${21}`, value)
              .then((response) => {
                // handle success
                var resData = response.data;
                let data = JSON.stringify(resData);
                window.alert("Response recieved from server = " + data);
              });
          } else if (current_price11 === null || current_price11 === "") {
            const value = {
              prod_img: prod_img11,
              prod_name: prod_name11,
              prod_desc: prod_desc11,
              prod_quantity: bt_quantity11,
              old_price: info.old_price,
              current_price: info.current_price,
            };
            axios
              .put(`http://localhost:8080/saveProduct/${21}`, value)
              .then((response) => {
                // handle success
                var resData = response.data;
                let data = JSON.stringify(resData);
                window.alert("Response recieved from server = " + data);
              });
          }
        }
      });
  });

  var updateProduct12 = once(function () {
    cor.data &&
      cor.data.map((info) => {
        if (String(info.prod_id).match(22)) {
          if (current_price12 !== null && current_price12 !== "") {
            const value = {
              prod_img: prod_img12,
              prod_name: prod_name12,
              prod_desc: prod_desc12,
              prod_quantity: bt_quantity12,
              old_price: info.current_price,
              current_price: current_price12,
            };
            axios
              .put(`http://localhost:8080/saveProduct/${22}`, value)
              .then((response) => {
                // handle success
                var resData = response.data;
                let data = JSON.stringify(resData);
                window.alert("Response recieved from server = " + data);
              });
          } else if (current_price12 === null || current_price12 === "") {
            const value = {
              prod_img: prod_img12,
              prod_name: prod_name12,
              prod_desc: prod_desc12,
              prod_quantity: bt_quantity12,
              old_price: info.old_price,
              current_price: info.current_price,
            };
            axios
              .put(`http://localhost:8080/saveProduct/${22}`, value)
              .then((response) => {
                // handle success
                var resData = response.data;
                let data = JSON.stringify(resData);
                window.alert("Response recieved from server = " + data);
              });
          }
        }
      });
  });

  var updateProduct13 = once(function () {
    cor.data &&
      cor.data.map((info) => {
        if (String(info.prod_id).match(23)) {
          if (current_price13 !== null && current_price13 !== "") {
            const value = {
              prod_img: prod_img13,
              prod_name: prod_name13,
              prod_desc: prod_desc13,
              prod_quantity: bt_quantity13,
              old_price: info.current_price,
              current_price: current_price13,
            };
            axios
              .put(`http://localhost:8080/saveProduct/${23}`, value)
              .then((response) => {
                // handle success
                var resData = response.data;
                let data = JSON.stringify(resData);
                window.alert("Response recieved from server = " + data);
              });
          } else if (current_price13 === null || current_price13 === "") {
            const value = {
              prod_img: prod_img13,
              prod_name: prod_name13,
              prod_desc: prod_desc13,
              prod_quantity: bt_quantity13,
              old_price: info.old_price,
              current_price: info.current_price,
            };
            axios
              .put(`http://localhost:8080/saveProduct/${23}`, value)
              .then((response) => {
                // handle success
                var resData = response.data;
                let data = JSON.stringify(resData);
                window.alert("Response recieved from server = " + data);
              });
          }
        }
      });
  });

  var updateProduct14 = once(function () {
    cor.data &&
      cor.data.map((info) => {
        if (String(info.prod_id).match(24)) {
          if (current_price14 !== null && current_price14 !== "") {
            const value = {
              prod_img: prod_img14,
              prod_name: prod_name14,
              prod_desc: prod_desc14,
              prod_quantity: bt_quantity14,
              old_price: info.current_price,
              current_price: current_price14,
            };
            axios
              .put(`http://localhost:8080/saveProduct/${24}`, value)
              .then((response) => {
                // handle success
                var resData = response.data;
                let data = JSON.stringify(resData);
                window.alert("Response recieved from server = " + data);
              });
          } else if (current_price14 === null || current_price14 === "") {
            const value = {
              prod_img: prod_img14,
              prod_name: prod_name14,
              prod_desc: prod_desc14,
              prod_quantity: bt_quantity14,
              old_price: info.old_price,
              current_price: info.current_price,
            };
            axios
              .put(`http://localhost:8080/saveProduct/${24}`, value)
              .then((response) => {
                // handle success
                var resData = response.data;
                let data = JSON.stringify(resData);
                window.alert("Response recieved from server = " + data);
              });
          }
        }
      });
  });

  var updateProduct15 = once(function () {
    cor.data &&
      cor.data.map((info) => {
        if (String(info.prod_id).match(25)) {
          if (current_price15 !== null && current_price15 !== "") {
            const value = {
              prod_img: prod_img15,
              prod_name: prod_name15,
              prod_desc: prod_desc15,
              prod_quantity: bt_quantity15,
              old_price: info.current_price,
              current_price: current_price15,
            };
            axios
              .put(`http://localhost:8080/saveProduct/${25}`, value)
              .then((response) => {
                // handle success
                var resData = response.data;
                let data = JSON.stringify(resData);
                window.alert("Response recieved from server = " + data);
              });
          } else if (current_price15 === null || current_price15 === "") {
            const value = {
              prod_img: prod_img15,
              prod_name: prod_name15,
              prod_desc: prod_desc15,
              prod_quantity: bt_quantity15,
              old_price: info.old_price,
              current_price: info.current_price,
            };
            axios
              .put(`http://localhost:8080/saveProduct/${25}`, value)
              .then((response) => {
                // handle success
                var resData = response.data;
                let data = JSON.stringify(resData);
                window.alert("Response recieved from server = " + data);
              });
          }
        }
      });
  });

  var updateProduct16 = once(function () {
    cor.data &&
      cor.data.map((info) => {
        if (String(info.prod_id).match(26)) {
          if (current_price16 !== null && current_price16 !== "") {
            const value = {
              prod_img: prod_img16,
              prod_name: prod_name16,
              prod_desc: prod_desc16,
              prod_quantity: bt_quantity16,
              old_price: info.current_price,
              current_price: current_price16,
            };
            axios
              .put(`http://localhost:8080/saveProduct/${26}`, value)
              .then((response) => {
                // handle success
                var resData = response.data;
                let data = JSON.stringify(resData);
                window.alert("Response recieved from server = " + data);
              });
          } else if (current_price16 === null || current_price16 === "") {
            const value = {
              prod_img: prod_img16,
              prod_name: prod_name16,
              prod_desc: prod_desc16,
              prod_quantity: bt_quantity16,
              old_price: info.old_price,
              current_price: info.current_price,
            };
            axios
              .put(`http://localhost:8080/saveProduct/${26}`, value)
              .then((response) => {
                // handle success
                var resData = response.data;
                let data = JSON.stringify(resData);
                window.alert("Response recieved from server = " + data);
              });
          }
        }
      });
  });

  /* Nested if statements that take the value of the "first" variable we declared earlier 
   as a conditional argument . */
  if (first === 1) {
    updateProduct1();

    setFirst(0);
  } else if (first === 2) {
    updateProduct2();

    setFirst(0);
  } else if (first === 3) {
    updateProduct3();

    setFirst(0);
  } else if (first === 4) {
    updateProduct4();

    setFirst(0);
  } else if (first === 5) {
    updateProduct5();

    setFirst(0);
  } else if (first === 6) {
    updateProduct6();

    setFirst(0);
  } else if (first === 7) {
    updateProduct7();

    setFirst(0);
  } else if (first === 8) {
    updateProduct8();

    setFirst(0);
  } else if (first === 9) {
    updateProduct9();

    setFirst(0);
  } else if (first === 10) {
    updateProduct10();

    setFirst(0);
  } else if (first === 11) {
    updateProduct11();

    setFirst(0);
  } else if (first === 12) {
    updateProduct12();

    setFirst(0);
  } else if (first === 13) {
    updateProduct13();

    setFirst(0);
  } else if (first === 14) {
    updateProduct14();

    setFirst(0);
  } else if (first === 15) {
    updateProduct15();

    setFirst(0);
  } else if (first === 16) {
    updateProduct16();

    setFirst(0);
  }

  // Return for the DeptWomen function
  /* It begins by calling fetchRecords() who's function we already described. It then fills out the information to be displayed to the user, which it does by utilising 
  the values contained within the props that it recieved from the SignIn component. Underneath each bit of information displayed to the user about the course, 
  there is a TextField/TextareaAutosize material ui components that allows the user to input new information for that particular section of the course. Whenever changes 
  are made to these components, it is saved by using the Hook Expressions we declared previously. When the "Update" button is clicked it calls 
  one of the handle update functions we created earlier, which goes on to store the changes to the server by updating the information that was there previously. 
  Finally, the CR component is rendered to act as the footer for this section. */
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
                      <TextField
                        label="Image Url"
                        placeholder={b1}
                        value={prod_img1}
                        onChange={(e) => setImg1(e.target.value)}
                        fullWidth
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {cor.data &&
                            cor.data.map((info) => {
                              if (String(info.prod_id).match(11)) {
                                return info.prod_name;
                              } else return null;
                            })}
                        </Typography>
                        <Divider />
                        <Grid item xs={12}>
                          {cor.data &&
                            cor.data.map((info) => {
                              if (String(info.prod_id).match(11)) {
                                return (
                                  <TextField
                                    label="Product Name"
                                    placeholder={info.prod_name}
                                    value={prod_name1}
                                    onChange={(e) => setCN1(e.target.value)}
                                    fullWidth
                                  />
                                );
                              } else return null;
                            })}
                        </Grid>
                        <br />
                        <Typography>
                          {cor.data &&
                            cor.data.map((info) => {
                              if (String(info.prod_id).match(11)) {
                                return info.prod_desc;
                              } else return null;
                            })}
                        </Typography>
                        <br />
                        <Divider />
                        <br />
                        <Grid item xs={40}>
                          {cor.data &&
                            cor.data.map((info) => {
                              if (String(info.prod_id).match(11)) {
                                return (
                                  <div>
                                    <label for="rules" id="ruleslabel">
                                      Change Product Description:
                                    </label>
                                    <TextareaAutosize
                                      cols="2"
                                      rowsMax={300}
                                      rowsMin={5}
                                      aria-label="maximum height"
                                      id="rules"
                                      placeholder={info.prod_desc}
                                      value={prod_desc1}
                                      onChange={(e) => setDesc1(e.target.value)}
                                      fullWidth
                                    />
                                  </div>
                                );
                              } else return null;
                            })}
                        </Grid>

                        <br />
                        <Grid container spacing={3}>
                          <Grid item xs={12} sm={6}>
                            <Typography variant="p1">
                              {cor.data &&
                                cor.data.map((info) => {
                                  if (String(info.prod_id).match(11)) {
                                    return "Old Price: £" + info.old_price;
                                  } else return null;
                                })}
                            </Typography>
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <Typography variant="p1">
                              {cor.data &&
                                cor.data.map((info) => {
                                  if (String(info.prod_id).match(11)) {
                                    return (
                                      "Current Price: £" + info.current_price
                                    );
                                  } else return null;
                                })}
                            </Typography>
                          </Grid>
                        </Grid>

                        <br />
                        <Grid container spacing={3}>
                          <Grid item xs={12} sm={6}>
                            <InputLabel>Set Price £</InputLabel>
                            <TextField
                              required
                              type="number"
                              name="Price"
                              inputProps={{
                                min: 1,
                                style: { textAlign: "center" },
                              }}
                              value={current_price1}
                              onChange={(e) => setCP1(e.target.value)}
                              fullWidth
                            />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <InputLabel>Set Quantity In Stock</InputLabel>
                            <TextField
                              required
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
                        </Grid>
                      </CardContent>

                      <CardActions>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={(e) => setFirst(1)}
                        >
                          Update
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={6} md={6}>
                    <Card className={classes.card}>
                      <CardMedia
                        className={classes.cardMedia}
                        image={b2}
                        title="Image title"
                      />
                      <TextField
                        label="Image Url"
                        placeholder={b2}
                        value={prod_img2}
                        onChange={(e) => setImg2(e.target.value)}
                        fullWidth
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {cor.data &&
                            cor.data.map((info) => {
                              if (String(info.prod_id).match(12)) {
                                return info.prod_name;
                              } else return null;
                            })}
                        </Typography>
                        <Divider />
                        <Grid item xs={12}>
                          {cor.data &&
                            cor.data.map((info) => {
                              if (String(info.prod_id).match(12)) {
                                return (
                                  <TextField
                                    label="Product Name"
                                    placeholder={info.prod_name}
                                    value={prod_name2}
                                    onChange={(e) => setCN2(e.target.value)}
                                    fullWidth
                                  />
                                );
                              } else return null;
                            })}
                        </Grid>
                        <br />
                        <Typography>
                          {cor.data &&
                            cor.data.map((info) => {
                              if (String(info.prod_id).match(12)) {
                                return info.prod_desc;
                              } else return null;
                            })}
                        </Typography>
                        <br />
                        <Divider />
                        <br />
                        <Grid item xs={40}>
                          {cor.data &&
                            cor.data.map((info) => {
                              if (String(info.prod_id).match(12)) {
                                return (
                                  <div>
                                    <label for="rules" id="ruleslabel">
                                      Change Product Description:
                                    </label>
                                    <TextareaAutosize
                                      cols="2"
                                      rowsMax={300}
                                      rowsMin={5}
                                      aria-label="maximum height"
                                      id="rules"
                                      placeholder={info.prod_desc}
                                      value={prod_desc2}
                                      onChange={(e) => setDesc2(e.target.value)}
                                      fullWidth
                                    />
                                  </div>
                                );
                              } else return null;
                            })}
                        </Grid>

                        <br />
                        <Grid container spacing={3}>
                          <Grid item xs={12} sm={6}>
                            <Typography variant="p1">
                              {cor.data &&
                                cor.data.map((info) => {
                                  if (String(info.prod_id).match(12)) {
                                    return "Old Price: £" + info.old_price;
                                  } else return null;
                                })}
                            </Typography>
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <Typography variant="p1">
                              {cor.data &&
                                cor.data.map((info) => {
                                  if (String(info.prod_id).match(12)) {
                                    return (
                                      "Current Price: £" + info.current_price
                                    );
                                  } else return null;
                                })}
                            </Typography>
                          </Grid>
                        </Grid>

                        <br />
                        <Grid container spacing={3}>
                          <Grid item xs={12} sm={6}>
                            <InputLabel>Set Price £</InputLabel>
                            <TextField
                              required
                              type="number"
                              name="Price"
                              inputProps={{
                                min: 1,
                                style: { textAlign: "center" },
                              }}
                              value={current_price2}
                              onChange={(e) => setCP2(e.target.value)}
                              fullWidth
                            />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <InputLabel>Set Quantity In Stock</InputLabel>
                            <TextField
                              required
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
                        </Grid>
                      </CardContent>

                      <CardActions>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={(e) => setFirst(2)}
                        >
                          Update
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={6} md={6}>
                    <Card className={classes.card}>
                      <CardMedia
                        className={classes.cardMedia}
                        image={b3}
                        title="Image title"
                      />
                      <TextField
                        label="Image Url"
                        placeholder={b3}
                        value={prod_img3}
                        onChange={(e) => setImg3(e.target.value)}
                        fullWidth
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {cor.data &&
                            cor.data.map((info) => {
                              if (String(info.prod_id).match(13)) {
                                return info.prod_name;
                              } else return null;
                            })}
                        </Typography>
                        <Divider />
                        <Grid item xs={12}>
                          {cor.data &&
                            cor.data.map((info) => {
                              if (String(info.prod_id).match(13)) {
                                return (
                                  <TextField
                                    label="Product Name"
                                    placeholder={info.prod_name}
                                    value={prod_name3}
                                    onChange={(e) => setCN3(e.target.value)}
                                    fullWidth
                                  />
                                );
                              } else return null;
                            })}
                        </Grid>
                        <br />
                        <Typography>
                          {cor.data &&
                            cor.data.map((info) => {
                              if (String(info.prod_id).match(13)) {
                                return info.prod_desc;
                              } else return null;
                            })}
                        </Typography>
                        <br />
                        <Divider />
                        <br />
                        <Grid item xs={40}>
                          {cor.data &&
                            cor.data.map((info) => {
                              if (String(info.prod_id).match(13)) {
                                return (
                                  <div>
                                    <label for="rules" id="ruleslabel">
                                      Change Product Description:
                                    </label>
                                    <TextareaAutosize
                                      cols="2"
                                      rowsMax={300}
                                      rowsMin={5}
                                      aria-label="maximum height"
                                      id="rules"
                                      placeholder={info.prod_desc}
                                      value={prod_desc3}
                                      onChange={(e) => setDesc3(e.target.value)}
                                      fullWidth
                                    />
                                  </div>
                                );
                              } else return null;
                            })}
                        </Grid>

                        <br />
                        <Grid container spacing={3}>
                          <Grid item xs={12} sm={6}>
                            <Typography variant="p1">
                              {cor.data &&
                                cor.data.map((info) => {
                                  if (String(info.prod_id).match(13)) {
                                    return "Old Price: £" + info.old_price;
                                  } else return null;
                                })}
                            </Typography>
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <Typography variant="p1">
                              {cor.data &&
                                cor.data.map((info) => {
                                  if (String(info.prod_id).match(13)) {
                                    return (
                                      "Current Price: £" + info.current_price
                                    );
                                  } else return null;
                                })}
                            </Typography>
                          </Grid>
                        </Grid>

                        <br />
                        <Grid container spacing={3}>
                          <Grid item xs={12} sm={6}>
                            <InputLabel>Set Price £</InputLabel>
                            <TextField
                              required
                              type="number"
                              name="Price"
                              inputProps={{
                                min: 1,
                                style: { textAlign: "center" },
                              }}
                              value={current_price3}
                              onChange={(e) => setCP3(e.target.value)}
                              fullWidth
                            />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <InputLabel>Set Quantity In Stock</InputLabel>
                            <TextField
                              required
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
                        </Grid>
                      </CardContent>

                      <CardActions>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={(e) => setFirst(3)}
                        >
                          Update
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={6} md={6}>
                    <Card className={classes.card}>
                      <CardMedia
                        className={classes.cardMedia}
                        image={b4}
                        title="Image title"
                      />
                      <TextField
                        label="Image Url"
                        placeholder={b4}
                        value={prod_img4}
                        onChange={(e) => setImg4(e.target.value)}
                        fullWidth
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {cor.data &&
                            cor.data.map((info) => {
                              if (String(info.prod_id).match(14)) {
                                return info.prod_name;
                              } else return null;
                            })}
                        </Typography>
                        <Divider />
                        <Grid item xs={12}>
                          {cor.data &&
                            cor.data.map((info) => {
                              if (String(info.prod_id).match(14)) {
                                return (
                                  <TextField
                                    label="Product Name"
                                    placeholder={info.prod_name}
                                    value={prod_name4}
                                    onChange={(e) => setCN4(e.target.value)}
                                    fullWidth
                                  />
                                );
                              } else return null;
                            })}
                        </Grid>
                        <br />
                        <Typography>
                          {cor.data &&
                            cor.data.map((info) => {
                              if (String(info.prod_id).match(14)) {
                                return info.prod_desc;
                              } else return null;
                            })}
                        </Typography>
                        <br />
                        <Divider />
                        <br />
                        <Grid item xs={40}>
                          {cor.data &&
                            cor.data.map((info) => {
                              if (String(info.prod_id).match(14)) {
                                return (
                                  <div>
                                    <label for="rules" id="ruleslabel">
                                      Change Product Description:
                                    </label>
                                    <TextareaAutosize
                                      cols="2"
                                      rowsMax={300}
                                      rowsMin={5}
                                      aria-label="maximum height"
                                      id="rules"
                                      placeholder={info.prod_desc}
                                      value={prod_desc4}
                                      onChange={(e) => setDesc4(e.target.value)}
                                      fullWidth
                                    />
                                  </div>
                                );
                              } else return null;
                            })}
                        </Grid>

                        <br />
                        <Grid container spacing={3}>
                          <Grid item xs={12} sm={6}>
                            <Typography variant="p1">
                              {cor.data &&
                                cor.data.map((info) => {
                                  if (String(info.prod_id).match(14)) {
                                    return "Old Price: £" + info.old_price;
                                  } else return null;
                                })}
                            </Typography>
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <Typography variant="p1">
                              {cor.data &&
                                cor.data.map((info) => {
                                  if (String(info.prod_id).match(14)) {
                                    return (
                                      "Current Price: £" + info.current_price
                                    );
                                  } else return null;
                                })}
                            </Typography>
                          </Grid>
                        </Grid>

                        <br />
                        <Grid container spacing={3}>
                          <Grid item xs={12} sm={6}>
                            <InputLabel>Set Price £</InputLabel>
                            <TextField
                              required
                              type="number"
                              name="Price"
                              inputProps={{
                                min: 1,
                                style: { textAlign: "center" },
                              }}
                              value={current_price4}
                              onChange={(e) => setCP4(e.target.value)}
                              fullWidth
                            />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <InputLabel>Set Quantity In Stock</InputLabel>
                            <TextField
                              required
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
                        </Grid>
                      </CardContent>

                      <CardActions>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={(e) => setFirst(4)}
                        >
                          Update
                        </Button>
                      </CardActions>
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
                      <TextField
                        label="Image Url"
                        placeholder={b5}
                        value={prod_img5}
                        onChange={(e) => setImg5(e.target.value)}
                        fullWidth
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {cor.data &&
                            cor.data.map((info) => {
                              if (String(info.prod_id).match(15)) {
                                return info.prod_name;
                              } else return null;
                            })}
                        </Typography>
                        <Divider />
                        <Grid item xs={12}>
                          {cor.data &&
                            cor.data.map((info) => {
                              if (String(info.prod_id).match(15)) {
                                return (
                                  <TextField
                                    label="Product Name"
                                    placeholder={info.prod_name}
                                    value={prod_name5}
                                    onChange={(e) => setCN5(e.target.value)}
                                    fullWidth
                                  />
                                );
                              } else return null;
                            })}
                        </Grid>
                        <br />
                        <Typography>
                          {cor.data &&
                            cor.data.map((info) => {
                              if (String(info.prod_id).match(15)) {
                                return info.prod_desc;
                              } else return null;
                            })}
                        </Typography>
                        <br />
                        <Divider />
                        <br />
                        <Grid item xs={40}>
                          {cor.data &&
                            cor.data.map((info) => {
                              if (String(info.prod_id).match(15)) {
                                return (
                                  <div>
                                    <label for="rules" id="ruleslabel">
                                      Change Product Description:
                                    </label>
                                    <TextareaAutosize
                                      cols="2"
                                      rowsMax={300}
                                      rowsMin={5}
                                      aria-label="maximum height"
                                      id="rules"
                                      placeholder={info.prod_desc}
                                      value={prod_desc5}
                                      onChange={(e) => setDesc5(e.target.value)}
                                      fullWidth
                                    />
                                  </div>
                                );
                              } else return null;
                            })}
                        </Grid>

                        <br />
                        <Grid container spacing={3}>
                          <Grid item xs={12} sm={6}>
                            <Typography variant="p1">
                              {cor.data &&
                                cor.data.map((info) => {
                                  if (String(info.prod_id).match(15)) {
                                    return "Old Price: £" + info.old_price;
                                  } else return null;
                                })}
                            </Typography>
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <Typography variant="p1">
                              {cor.data &&
                                cor.data.map((info) => {
                                  if (String(info.prod_id).match(15)) {
                                    return (
                                      "Current Price: £" + info.current_price
                                    );
                                  } else return null;
                                })}
                            </Typography>
                          </Grid>
                        </Grid>

                        <br />
                        <Grid container spacing={3}>
                          <Grid item xs={12} sm={6}>
                            <InputLabel>Set Price £</InputLabel>
                            <TextField
                              required
                              type="number"
                              name="Price"
                              inputProps={{
                                min: 1,
                                style: { textAlign: "center" },
                              }}
                              value={current_price5}
                              onChange={(e) => setCP5(e.target.value)}
                              fullWidth
                            />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <InputLabel>Set Quantity In Stock</InputLabel>
                            <TextField
                              required
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
                        </Grid>
                      </CardContent>

                      <CardActions>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={(e) => setFirst(5)}
                        >
                          Update
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={6} md={6}>
                    <Card className={classes.card}>
                      <CardMedia
                        className={classes.cardMedia}
                        image={b6}
                        title="Image title"
                      />
                      <TextField
                        label="Image Url"
                        placeholder={b6}
                        value={prod_img6}
                        onChange={(e) => setImg6(e.target.value)}
                        fullWidth
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {cor.data &&
                            cor.data.map((info) => {
                              if (String(info.prod_id).match(16)) {
                                return info.prod_name;
                              } else return null;
                            })}
                        </Typography>
                        <Divider />
                        <Grid item xs={12}>
                          {cor.data &&
                            cor.data.map((info) => {
                              if (String(info.prod_id).match(16)) {
                                return (
                                  <TextField
                                    label="Product Name"
                                    placeholder={info.prod_name}
                                    value={prod_name6}
                                    onChange={(e) => setCN6(e.target.value)}
                                    fullWidth
                                  />
                                );
                              } else return null;
                            })}
                        </Grid>
                        <br />
                        <Typography>
                          {cor.data &&
                            cor.data.map((info) => {
                              if (String(info.prod_id).match(16)) {
                                return info.prod_desc;
                              } else return null;
                            })}
                        </Typography>
                        <br />
                        <Divider />
                        <br />
                        <Grid item xs={40}>
                          {cor.data &&
                            cor.data.map((info) => {
                              if (String(info.prod_id).match(16)) {
                                return (
                                  <div>
                                    <label for="rules" id="ruleslabel">
                                      Change Product Description:
                                    </label>
                                    <TextareaAutosize
                                      cols="2"
                                      rowsMax={300}
                                      rowsMin={5}
                                      aria-label="maximum height"
                                      id="rules"
                                      placeholder={info.prod_desc}
                                      value={prod_desc6}
                                      onChange={(e) => setDesc6(e.target.value)}
                                      fullWidth
                                    />
                                  </div>
                                );
                              } else return null;
                            })}
                        </Grid>

                        <br />
                        <Grid container spacing={3}>
                          <Grid item xs={12} sm={6}>
                            <Typography variant="p1">
                              {cor.data &&
                                cor.data.map((info) => {
                                  if (String(info.prod_id).match(16)) {
                                    return "Old Price: £" + info.old_price;
                                  } else return null;
                                })}
                            </Typography>
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <Typography variant="p1">
                              {cor.data &&
                                cor.data.map((info) => {
                                  if (String(info.prod_id).match(16)) {
                                    return (
                                      "Current Price: £" + info.current_price
                                    );
                                  } else return null;
                                })}
                            </Typography>
                          </Grid>
                        </Grid>

                        <br />
                        <Grid container spacing={3}>
                          <Grid item xs={12} sm={6}>
                            <InputLabel>Set Price £</InputLabel>
                            <TextField
                              required
                              type="number"
                              name="Price"
                              inputProps={{
                                min: 1,
                                style: { textAlign: "center" },
                              }}
                              value={current_price6}
                              onChange={(e) => setCP6(e.target.value)}
                              fullWidth
                            />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <InputLabel>Set Quantity In Stock</InputLabel>
                            <TextField
                              required
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
                        </Grid>
                      </CardContent>

                      <CardActions>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={(e) => setFirst(6)}
                        >
                          Update
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={6} md={6}>
                    <Card className={classes.card}>
                      <CardMedia
                        className={classes.cardMedia}
                        image={b7}
                        title="Image title"
                      />
                      <TextField
                        label="Image Url"
                        placeholder={b7}
                        value={prod_img7}
                        onChange={(e) => setImg7(e.target.value)}
                        fullWidth
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {cor.data &&
                            cor.data.map((info) => {
                              if (String(info.prod_id).match(17)) {
                                return info.prod_name;
                              } else return null;
                            })}
                        </Typography>
                        <Divider />
                        <Grid item xs={12}>
                          {cor.data &&
                            cor.data.map((info) => {
                              if (String(info.prod_id).match(17)) {
                                return (
                                  <TextField
                                    label="Product Name"
                                    placeholder={info.prod_name}
                                    value={prod_name7}
                                    onChange={(e) => setCN7(e.target.value)}
                                    fullWidth
                                  />
                                );
                              } else return null;
                            })}
                        </Grid>
                        <br />
                        <Typography>
                          {cor.data &&
                            cor.data.map((info) => {
                              if (String(info.prod_id).match(17)) {
                                return info.prod_desc;
                              } else return null;
                            })}
                        </Typography>
                        <br />
                        <Divider />
                        <br />
                        <Grid item xs={40}>
                          {cor.data &&
                            cor.data.map((info) => {
                              if (String(info.prod_id).match(17)) {
                                return (
                                  <div>
                                    <label for="rules" id="ruleslabel">
                                      Change Product Description:
                                    </label>
                                    <TextareaAutosize
                                      cols="2"
                                      rowsMax={300}
                                      rowsMin={5}
                                      aria-label="maximum height"
                                      id="rules"
                                      placeholder={info.prod_desc}
                                      value={prod_desc7}
                                      onChange={(e) => setDesc7(e.target.value)}
                                      fullWidth
                                    />
                                  </div>
                                );
                              } else return null;
                            })}
                        </Grid>

                        <br />
                        <Grid container spacing={3}>
                          <Grid item xs={12} sm={6}>
                            <Typography variant="p1">
                              {cor.data &&
                                cor.data.map((info) => {
                                  if (String(info.prod_id).match(17)) {
                                    return "Old Price: £" + info.old_price;
                                  } else return null;
                                })}
                            </Typography>
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <Typography variant="p1">
                              {cor.data &&
                                cor.data.map((info) => {
                                  if (String(info.prod_id).match(17)) {
                                    return (
                                      "Current Price: £" + info.current_price
                                    );
                                  } else return null;
                                })}
                            </Typography>
                          </Grid>
                        </Grid>

                        <br />
                        <Grid container spacing={3}>
                          <Grid item xs={12} sm={6}>
                            <InputLabel>Set Price £</InputLabel>
                            <TextField
                              required
                              type="number"
                              name="Price"
                              inputProps={{
                                min: 1,
                                style: { textAlign: "center" },
                              }}
                              value={current_price7}
                              onChange={(e) => setCP7(e.target.value)}
                              fullWidth
                            />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <InputLabel>Set Quantity In Stock</InputLabel>
                            <TextField
                              required
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
                        </Grid>
                      </CardContent>

                      <CardActions>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={(e) => setFirst(7)}
                        >
                          Update
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={6} md={6}>
                    <Card className={classes.card}>
                      <CardMedia
                        className={classes.cardMedia}
                        image={b8}
                        title="Image title"
                      />
                      <TextField
                        label="Image Url"
                        placeholder={b8}
                        value={prod_img8}
                        onChange={(e) => setImg8(e.target.value)}
                        fullWidth
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {cor.data &&
                            cor.data.map((info) => {
                              if (String(info.prod_id).match(18)) {
                                return info.prod_name;
                              } else return null;
                            })}
                        </Typography>
                        <Divider />
                        <Grid item xs={12}>
                          {cor.data &&
                            cor.data.map((info) => {
                              if (String(info.prod_id).match(18)) {
                                return (
                                  <TextField
                                    label="Product Name"
                                    placeholder={info.prod_name}
                                    value={prod_name8}
                                    onChange={(e) => setCN8(e.target.value)}
                                    fullWidth
                                  />
                                );
                              } else return null;
                            })}
                        </Grid>
                        <br />
                        <Typography>
                          {cor.data &&
                            cor.data.map((info) => {
                              if (String(info.prod_id).match(18)) {
                                return info.prod_desc;
                              } else return null;
                            })}
                        </Typography>
                        <br />
                        <Divider />
                        <br />
                        <Grid item xs={40}>
                          {cor.data &&
                            cor.data.map((info) => {
                              if (String(info.prod_id).match(18)) {
                                return (
                                  <div>
                                    <label for="rules" id="ruleslabel">
                                      Change Product Description:
                                    </label>
                                    <TextareaAutosize
                                      cols="2"
                                      rowsMax={300}
                                      rowsMin={5}
                                      aria-label="maximum height"
                                      id="rules"
                                      placeholder={info.prod_desc}
                                      value={prod_desc8}
                                      onChange={(e) => setDesc8(e.target.value)}
                                      fullWidth
                                    />
                                  </div>
                                );
                              } else return null;
                            })}
                        </Grid>

                        <br />
                        <Grid container spacing={3}>
                          <Grid item xs={12} sm={6}>
                            <Typography variant="p1">
                              {cor.data &&
                                cor.data.map((info) => {
                                  if (String(info.prod_id).match(18)) {
                                    return "Old Price: £" + info.old_price;
                                  } else return null;
                                })}
                            </Typography>
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <Typography variant="p1">
                              {cor.data &&
                                cor.data.map((info) => {
                                  if (String(info.prod_id).match(18)) {
                                    return (
                                      "Current Price: £" + info.current_price
                                    );
                                  } else return null;
                                })}
                            </Typography>
                          </Grid>
                        </Grid>

                        <br />
                        <Grid container spacing={3}>
                          <Grid item xs={12} sm={6}>
                            <InputLabel>Set Price £</InputLabel>
                            <TextField
                              required
                              type="number"
                              name="Price"
                              inputProps={{
                                min: 1,
                                style: { textAlign: "center" },
                              }}
                              value={current_price8}
                              onChange={(e) => setCP8(e.target.value)}
                              fullWidth
                            />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <InputLabel>Set Quantity In Stock</InputLabel>
                            <TextField
                              required
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
                        </Grid>
                      </CardContent>

                      <CardActions>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={(e) => setFirst(8)}
                        >
                          Update
                        </Button>
                      </CardActions>
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
                      <TextField
                        label="Image Url"
                        placeholder={b9}
                        value={prod_img9}
                        onChange={(e) => setImg9(e.target.value)}
                        fullWidth
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {cor.data &&
                            cor.data.map((info) => {
                              if (String(info.prod_id).match(19)) {
                                return info.prod_name;
                              } else return null;
                            })}
                        </Typography>
                        <Divider />
                        <Grid item xs={12}>
                          {cor.data &&
                            cor.data.map((info) => {
                              if (String(info.prod_id).match(19)) {
                                return (
                                  <TextField
                                    label="Product Name"
                                    placeholder={info.prod_name}
                                    value={prod_name9}
                                    onChange={(e) => setCN9(e.target.value)}
                                    fullWidth
                                  />
                                );
                              } else return null;
                            })}
                        </Grid>
                        <br />
                        <Typography>
                          {cor.data &&
                            cor.data.map((info) => {
                              if (String(info.prod_id).match(19)) {
                                return info.prod_desc;
                              } else return null;
                            })}
                        </Typography>
                        <br />
                        <Divider />
                        <br />
                        <Grid item xs={40}>
                          {cor.data &&
                            cor.data.map((info) => {
                              if (String(info.prod_id).match(19)) {
                                return (
                                  <div>
                                    <label for="rules" id="ruleslabel">
                                      Change Product Description:
                                    </label>
                                    <TextareaAutosize
                                      cols="2"
                                      rowsMax={300}
                                      rowsMin={5}
                                      aria-label="maximum height"
                                      id="rules"
                                      placeholder={info.prod_desc}
                                      value={prod_desc9}
                                      onChange={(e) => setDesc9(e.target.value)}
                                      fullWidth
                                    />
                                  </div>
                                );
                              } else return null;
                            })}
                        </Grid>

                        <br />
                        <Grid container spacing={3}>
                          <Grid item xs={12} sm={6}>
                            <Typography variant="p1">
                              {cor.data &&
                                cor.data.map((info) => {
                                  if (String(info.prod_id).match(19)) {
                                    return "Old Price: £" + info.old_price;
                                  } else return null;
                                })}
                            </Typography>
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <Typography variant="p1">
                              {cor.data &&
                                cor.data.map((info) => {
                                  if (String(info.prod_id).match(19)) {
                                    return (
                                      "Current Price: £" + info.current_price
                                    );
                                  } else return null;
                                })}
                            </Typography>
                          </Grid>
                        </Grid>

                        <br />
                        <Grid container spacing={3}>
                          <Grid item xs={12} sm={6}>
                            <InputLabel>Set Price £</InputLabel>
                            <TextField
                              required
                              type="number"
                              name="Price"
                              inputProps={{
                                min: 1,
                                style: { textAlign: "center" },
                              }}
                              value={current_price9}
                              onChange={(e) => setCP9(e.target.value)}
                              fullWidth
                            />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <InputLabel>Set Quantity In Stock</InputLabel>
                            <TextField
                              required
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
                        </Grid>
                      </CardContent>

                      <CardActions>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={(e) => setFirst(9)}
                        >
                          Update
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={6} md={6}>
                    <Card className={classes.card}>
                      <CardMedia
                        className={classes.cardMedia}
                        image={b10}
                        title="Image title"
                      />
                      <TextField
                        label="Image Url"
                        placeholder={b10}
                        value={prod_img10}
                        onChange={(e) => setImg10(e.target.value)}
                        fullWidth
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {cor.data &&
                            cor.data.map((info) => {
                              if (String(info.prod_id).match(20)) {
                                return info.prod_name;
                              } else return null;
                            })}
                        </Typography>
                        <Divider />
                        <Grid item xs={12}>
                          {cor.data &&
                            cor.data.map((info) => {
                              if (String(info.prod_id).match(20)) {
                                return (
                                  <TextField
                                    label="Product Name"
                                    placeholder={info.prod_name}
                                    value={prod_name10}
                                    onChange={(e) => setCN10(e.target.value)}
                                    fullWidth
                                  />
                                );
                              } else return null;
                            })}
                        </Grid>
                        <br />
                        <Typography>
                          {cor.data &&
                            cor.data.map((info) => {
                              if (String(info.prod_id).match(20)) {
                                return info.prod_desc;
                              } else return null;
                            })}
                        </Typography>
                        <br />
                        <Divider />
                        <br />
                        <Grid item xs={40}>
                          {cor.data &&
                            cor.data.map((info) => {
                              if (String(info.prod_id).match(20)) {
                                return (
                                  <div>
                                    <label for="rules" id="ruleslabel">
                                      Change Product Description:
                                    </label>
                                    <TextareaAutosize
                                      cols="2"
                                      rowsMax={300}
                                      rowsMin={5}
                                      aria-label="maximum height"
                                      id="rules"
                                      placeholder={info.prod_desc}
                                      value={prod_desc10}
                                      onChange={(e) =>
                                        setDesc10(e.target.value)
                                      }
                                      fullWidth
                                    />
                                  </div>
                                );
                              } else return null;
                            })}
                        </Grid>

                        <br />
                        <Grid container spacing={3}>
                          <Grid item xs={12} sm={6}>
                            <Typography variant="p1">
                              {cor.data &&
                                cor.data.map((info) => {
                                  if (String(info.prod_id).match(20)) {
                                    return "Old Price: £" + info.old_price;
                                  } else return null;
                                })}
                            </Typography>
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <Typography variant="p1">
                              {cor.data &&
                                cor.data.map((info) => {
                                  if (String(info.prod_id).match(20)) {
                                    return (
                                      "Current Price: £" + info.current_price
                                    );
                                  } else return null;
                                })}
                            </Typography>
                          </Grid>
                        </Grid>

                        <br />
                        <Grid container spacing={3}>
                          <Grid item xs={12} sm={6}>
                            <InputLabel>Set Price £</InputLabel>
                            <TextField
                              required
                              type="number"
                              name="Price"
                              inputProps={{
                                min: 1,
                                style: { textAlign: "center" },
                              }}
                              value={current_price10}
                              onChange={(e) => setCP10(e.target.value)}
                              fullWidth
                            />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <InputLabel>Set Quantity In Stock</InputLabel>
                            <TextField
                              required
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
                        </Grid>
                      </CardContent>

                      <CardActions>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={(e) => setFirst(10)}
                        >
                          Update
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={6} md={6}>
                    <Card className={classes.card}>
                      <CardMedia
                        className={classes.cardMedia}
                        image={b11}
                        title="Image title"
                      />
                      <TextField
                        label="Image Url"
                        placeholder={b11}
                        value={prod_img11}
                        onChange={(e) => setImg11(e.target.value)}
                        fullWidth
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {cor.data &&
                            cor.data.map((info) => {
                              if (String(info.prod_id).match(21)) {
                                return info.prod_name;
                              } else return null;
                            })}
                        </Typography>
                        <Divider />
                        <Grid item xs={12}>
                          {cor.data &&
                            cor.data.map((info) => {
                              if (String(info.prod_id).match(21)) {
                                return (
                                  <TextField
                                    label="Product Name"
                                    placeholder={info.prod_name}
                                    value={prod_name11}
                                    onChange={(e) => setCN11(e.target.value)}
                                    fullWidth
                                  />
                                );
                              } else return null;
                            })}
                        </Grid>
                        <br />
                        <Typography>
                          {cor.data &&
                            cor.data.map((info) => {
                              if (String(info.prod_id).match(21)) {
                                return info.prod_desc;
                              } else return null;
                            })}
                        </Typography>
                        <br />
                        <Divider />
                        <br />
                        <Grid item xs={40}>
                          {cor.data &&
                            cor.data.map((info) => {
                              if (String(info.prod_id).match(21)) {
                                return (
                                  <div>
                                    <label for="rules" id="ruleslabel">
                                      Change Product Description:
                                    </label>
                                    <TextareaAutosize
                                      cols="2"
                                      rowsMax={300}
                                      rowsMin={5}
                                      aria-label="maximum height"
                                      id="rules"
                                      placeholder={info.prod_desc}
                                      value={prod_desc11}
                                      onChange={(e) =>
                                        setDesc11(e.target.value)
                                      }
                                      fullWidth
                                    />
                                  </div>
                                );
                              } else return null;
                            })}
                        </Grid>

                        <br />
                        <Grid container spacing={3}>
                          <Grid item xs={12} sm={6}>
                            <Typography variant="p1">
                              {cor.data &&
                                cor.data.map((info) => {
                                  if (String(info.prod_id).match(21)) {
                                    return "Old Price: £" + info.old_price;
                                  } else return null;
                                })}
                            </Typography>
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <Typography variant="p1">
                              {cor.data &&
                                cor.data.map((info) => {
                                  if (String(info.prod_id).match(21)) {
                                    return (
                                      "Current Price: £" + info.current_price
                                    );
                                  } else return null;
                                })}
                            </Typography>
                          </Grid>
                        </Grid>

                        <br />
                        <Grid container spacing={3}>
                          <Grid item xs={12} sm={6}>
                            <InputLabel>Set Price £</InputLabel>
                            <TextField
                              required
                              type="number"
                              name="Price"
                              inputProps={{
                                min: 1,
                                style: { textAlign: "center" },
                              }}
                              value={current_price11}
                              onChange={(e) => setCP11(e.target.value)}
                              fullWidth
                            />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <InputLabel>Set Quantity In Stock</InputLabel>
                            <TextField
                              required
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
                        </Grid>
                      </CardContent>

                      <CardActions>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={(e) => setFirst(11)}
                        >
                          Update
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={6} md={6}>
                    <Card className={classes.card}>
                      <CardMedia
                        className={classes.cardMedia}
                        image={b12}
                        title="Image title"
                      />
                      <TextField
                        label="Image Url"
                        placeholder={b12}
                        value={prod_img12}
                        onChange={(e) => setImg12(e.target.value)}
                        fullWidth
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {cor.data &&
                            cor.data.map((info) => {
                              if (String(info.prod_id).match(22)) {
                                return info.prod_name;
                              } else return null;
                            })}
                        </Typography>
                        <Divider />
                        <Grid item xs={12}>
                          {cor.data &&
                            cor.data.map((info) => {
                              if (String(info.prod_id).match(22)) {
                                return (
                                  <TextField
                                    label="Product Name"
                                    placeholder={info.prod_name}
                                    value={prod_name12}
                                    onChange={(e) => setCN12(e.target.value)}
                                    fullWidth
                                  />
                                );
                              } else return null;
                            })}
                        </Grid>
                        <br />
                        <Typography>
                          {cor.data &&
                            cor.data.map((info) => {
                              if (String(info.prod_id).match(22)) {
                                return info.prod_desc;
                              } else return null;
                            })}
                        </Typography>
                        <br />
                        <Divider />
                        <br />
                        <Grid item xs={40}>
                          {cor.data &&
                            cor.data.map((info) => {
                              if (String(info.prod_id).match(22)) {
                                return (
                                  <div>
                                    <label for="rules" id="ruleslabel">
                                      Change Product Description:
                                    </label>
                                    <TextareaAutosize
                                      cols="2"
                                      rowsMax={300}
                                      rowsMin={5}
                                      aria-label="maximum height"
                                      id="rules"
                                      placeholder={info.prod_desc}
                                      value={prod_desc12}
                                      onChange={(e) =>
                                        setDesc12(e.target.value)
                                      }
                                      fullWidth
                                    />
                                  </div>
                                );
                              } else return null;
                            })}
                        </Grid>

                        <br />
                        <Grid container spacing={3}>
                          <Grid item xs={12} sm={6}>
                            <Typography variant="p1">
                              {cor.data &&
                                cor.data.map((info) => {
                                  if (String(info.prod_id).match(22)) {
                                    return "Old Price: £" + info.old_price;
                                  } else return null;
                                })}
                            </Typography>
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <Typography variant="p1">
                              {cor.data &&
                                cor.data.map((info) => {
                                  if (String(info.prod_id).match(22)) {
                                    return (
                                      "Current Price: £" + info.current_price
                                    );
                                  } else return null;
                                })}
                            </Typography>
                          </Grid>
                        </Grid>

                        <br />
                        <Grid container spacing={3}>
                          <Grid item xs={12} sm={6}>
                            <InputLabel>Set Price £</InputLabel>
                            <TextField
                              required
                              type="number"
                              name="Price"
                              inputProps={{
                                min: 1,
                                style: { textAlign: "center" },
                              }}
                              value={current_price12}
                              onChange={(e) => setCP12(e.target.value)}
                              fullWidth
                            />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <InputLabel>Set Quantity In Stock</InputLabel>
                            <TextField
                              required
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
                        </Grid>
                      </CardContent>

                      <CardActions>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={(e) => setFirst(12)}
                        >
                          Update
                        </Button>
                      </CardActions>
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
                      <TextField
                        label="Image Url"
                        placeholder={b13}
                        value={prod_img13}
                        onChange={(e) => setImg13(e.target.value)}
                        fullWidth
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {cor.data &&
                            cor.data.map((info) => {
                              if (String(info.prod_id).match(23)) {
                                return info.prod_name;
                              } else return null;
                            })}
                        </Typography>
                        <Divider />
                        <Grid item xs={12}>
                          {cor.data &&
                            cor.data.map((info) => {
                              if (String(info.prod_id).match(23)) {
                                return (
                                  <TextField
                                    label="Product Name"
                                    placeholder={info.prod_name}
                                    value={prod_name13}
                                    onChange={(e) => setCN13(e.target.value)}
                                    fullWidth
                                  />
                                );
                              } else return null;
                            })}
                        </Grid>
                        <br />
                        <Typography>
                          {cor.data &&
                            cor.data.map((info) => {
                              if (String(info.prod_id).match(23)) {
                                return info.prod_desc;
                              } else return null;
                            })}
                        </Typography>
                        <br />
                        <Divider />
                        <br />
                        <Grid item xs={40}>
                          {cor.data &&
                            cor.data.map((info) => {
                              if (String(info.prod_id).match(23)) {
                                return (
                                  <div>
                                    <label for="rules" id="ruleslabel">
                                      Change Product Description:
                                    </label>
                                    <TextareaAutosize
                                      cols="2"
                                      rowsMax={300}
                                      rowsMin={5}
                                      aria-label="maximum height"
                                      id="rules"
                                      placeholder={info.prod_desc}
                                      value={prod_desc13}
                                      onChange={(e) =>
                                        setDesc13(e.target.value)
                                      }
                                      fullWidth
                                    />
                                  </div>
                                );
                              } else return null;
                            })}
                        </Grid>

                        <br />
                        <Grid container spacing={3}>
                          <Grid item xs={12} sm={6}>
                            <Typography variant="p1">
                              {cor.data &&
                                cor.data.map((info) => {
                                  if (String(info.prod_id).match(23)) {
                                    return "Old Price: £" + info.old_price;
                                  } else return null;
                                })}
                            </Typography>
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <Typography variant="p1">
                              {cor.data &&
                                cor.data.map((info) => {
                                  if (String(info.prod_id).match(23)) {
                                    return (
                                      "Current Price: £" + info.current_price
                                    );
                                  } else return null;
                                })}
                            </Typography>
                          </Grid>
                        </Grid>

                        <br />
                        <Grid container spacing={3}>
                          <Grid item xs={12} sm={6}>
                            <InputLabel>Set Price £</InputLabel>
                            <TextField
                              required
                              type="number"
                              name="Price"
                              inputProps={{
                                min: 1,
                                style: { textAlign: "center" },
                              }}
                              value={current_price13}
                              onChange={(e) => setCP13(e.target.value)}
                              fullWidth
                            />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <InputLabel>Set Quantity In Stock</InputLabel>
                            <TextField
                              required
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
                        </Grid>
                      </CardContent>

                      <CardActions>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={(e) => setFirst(13)}
                        >
                          Update
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={6} md={6}>
                    <Card className={classes.card}>
                      <CardMedia
                        className={classes.cardMedia}
                        image={b14}
                        title="Image title"
                      />
                      <TextField
                        label="Image Url"
                        placeholder={b14}
                        value={prod_img14}
                        onChange={(e) => setImg14(e.target.value)}
                        fullWidth
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {cor.data &&
                            cor.data.map((info) => {
                              if (String(info.prod_id).match(24)) {
                                return info.prod_name;
                              } else return null;
                            })}
                        </Typography>
                        <Divider />
                        <Grid item xs={12}>
                          {cor.data &&
                            cor.data.map((info) => {
                              if (String(info.prod_id).match(24)) {
                                return (
                                  <TextField
                                    label="Product Name"
                                    placeholder={info.prod_name}
                                    value={prod_name14}
                                    onChange={(e) => setCN14(e.target.value)}
                                    fullWidth
                                  />
                                );
                              } else return null;
                            })}
                        </Grid>
                        <br />
                        <Typography>
                          {cor.data &&
                            cor.data.map((info) => {
                              if (String(info.prod_id).match(24)) {
                                return info.prod_desc;
                              } else return null;
                            })}
                        </Typography>
                        <br />
                        <Divider />
                        <br />
                        <Grid item xs={40}>
                          {cor.data &&
                            cor.data.map((info) => {
                              if (String(info.prod_id).match(24)) {
                                return (
                                  <div>
                                    <label for="rules" id="ruleslabel">
                                      Change Product Description:
                                    </label>
                                    <TextareaAutosize
                                      cols="2"
                                      rowsMax={300}
                                      rowsMin={5}
                                      aria-label="maximum height"
                                      id="rules"
                                      placeholder={info.prod_desc}
                                      value={prod_desc14}
                                      onChange={(e) =>
                                        setDesc14(e.target.value)
                                      }
                                      fullWidth
                                    />
                                  </div>
                                );
                              } else return null;
                            })}
                        </Grid>

                        <br />
                        <Grid container spacing={3}>
                          <Grid item xs={12} sm={6}>
                            <Typography variant="p1">
                              {cor.data &&
                                cor.data.map((info) => {
                                  if (String(info.prod_id).match(24)) {
                                    return "Old Price: £" + info.old_price;
                                  } else return null;
                                })}
                            </Typography>
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <Typography variant="p1">
                              {cor.data &&
                                cor.data.map((info) => {
                                  if (String(info.prod_id).match(24)) {
                                    return (
                                      "Current Price: £" + info.current_price
                                    );
                                  } else return null;
                                })}
                            </Typography>
                          </Grid>
                        </Grid>

                        <br />
                        <Grid container spacing={3}>
                          <Grid item xs={12} sm={6}>
                            <InputLabel>Set Price £</InputLabel>
                            <TextField
                              required
                              type="number"
                              name="Price"
                              inputProps={{
                                min: 1,
                                style: { textAlign: "center" },
                              }}
                              value={current_price14}
                              onChange={(e) => setCP14(e.target.value)}
                              fullWidth
                            />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <InputLabel>Set Quantity In Stock</InputLabel>
                            <TextField
                              required
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
                        </Grid>
                      </CardContent>

                      <CardActions>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={(e) => setFirst(14)}
                        >
                          Update
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={6} md={6}>
                    <Card className={classes.card}>
                      <CardMedia
                        className={classes.cardMedia}
                        image={b15}
                        title="Image title"
                      />
                      <TextField
                        label="Image Url"
                        placeholder={b15}
                        value={prod_img15}
                        onChange={(e) => setImg15(e.target.value)}
                        fullWidth
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {cor.data &&
                            cor.data.map((info) => {
                              if (String(info.prod_id).match(25)) {
                                return info.prod_name;
                              } else return null;
                            })}
                        </Typography>
                        <Divider />
                        <Grid item xs={12}>
                          {cor.data &&
                            cor.data.map((info) => {
                              if (String(info.prod_id).match(25)) {
                                return (
                                  <TextField
                                    label="Product Name"
                                    placeholder={info.prod_name}
                                    value={prod_name15}
                                    onChange={(e) => setCN15(e.target.value)}
                                    fullWidth
                                  />
                                );
                              } else return null;
                            })}
                        </Grid>
                        <br />
                        <Typography>
                          {cor.data &&
                            cor.data.map((info) => {
                              if (String(info.prod_id).match(25)) {
                                return info.prod_desc;
                              } else return null;
                            })}
                        </Typography>
                        <br />
                        <Divider />
                        <br />
                        <Grid item xs={40}>
                          {cor.data &&
                            cor.data.map((info) => {
                              if (String(info.prod_id).match(25)) {
                                return (
                                  <div>
                                    <label for="rules" id="ruleslabel">
                                      Change Product Description:
                                    </label>
                                    <TextareaAutosize
                                      cols="2"
                                      rowsMax={300}
                                      rowsMin={5}
                                      aria-label="maximum height"
                                      id="rules"
                                      placeholder={info.prod_desc}
                                      value={prod_desc15}
                                      onChange={(e) =>
                                        setDesc15(e.target.value)
                                      }
                                      fullWidth
                                    />
                                  </div>
                                );
                              } else return null;
                            })}
                        </Grid>

                        <br />
                        <Grid container spacing={3}>
                          <Grid item xs={12} sm={6}>
                            <Typography variant="p1">
                              {cor.data &&
                                cor.data.map((info) => {
                                  if (String(info.prod_id).match(25)) {
                                    return "Old Price: £" + info.old_price;
                                  } else return null;
                                })}
                            </Typography>
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <Typography variant="p1">
                              {cor.data &&
                                cor.data.map((info) => {
                                  if (String(info.prod_id).match(25)) {
                                    return (
                                      "Current Price: £" + info.current_price
                                    );
                                  } else return null;
                                })}
                            </Typography>
                          </Grid>
                        </Grid>

                        <br />
                        <Grid container spacing={3}>
                          <Grid item xs={12} sm={6}>
                            <InputLabel>Set Price £</InputLabel>
                            <TextField
                              required
                              type="number"
                              name="Price"
                              inputProps={{
                                min: 1,
                                style: { textAlign: "center" },
                              }}
                              value={current_price15}
                              onChange={(e) => setCP15(e.target.value)}
                              fullWidth
                            />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <InputLabel>Set Quantity In Stock</InputLabel>
                            <TextField
                              required
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
                        </Grid>
                      </CardContent>

                      <CardActions>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={(e) => setFirst(15)}
                        >
                          Update
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={6} md={6}>
                    <Card className={classes.card}>
                      <CardMedia
                        className={classes.cardMedia}
                        image={b16}
                        title="Image title"
                      />
                      <TextField
                        label="Image Url"
                        placeholder={b16}
                        value={prod_img16}
                        onChange={(e) => setImg16(e.target.value)}
                        fullWidth
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {cor.data &&
                            cor.data.map((info) => {
                              if (String(info.prod_id).match(26)) {
                                return info.prod_name;
                              } else return null;
                            })}
                        </Typography>
                        <Divider />
                        <Grid item xs={12}>
                          {cor.data &&
                            cor.data.map((info) => {
                              if (String(info.prod_id).match(26)) {
                                return (
                                  <TextField
                                    label="Product Name"
                                    placeholder={info.prod_name}
                                    value={prod_name16}
                                    onChange={(e) => setCN16(e.target.value)}
                                    fullWidth
                                  />
                                );
                              } else return null;
                            })}
                        </Grid>
                        <br />
                        <Typography>
                          {cor.data &&
                            cor.data.map((info) => {
                              if (String(info.prod_id).match(26)) {
                                return info.prod_desc;
                              } else return null;
                            })}
                        </Typography>
                        <br />
                        <Divider />
                        <br />
                        <Grid item xs={40}>
                          {cor.data &&
                            cor.data.map((info) => {
                              if (String(info.prod_id).match(26)) {
                                return (
                                  <div>
                                    <label for="rules" id="ruleslabel">
                                      Change Product Description:
                                    </label>
                                    <TextareaAutosize
                                      cols="2"
                                      rowsMax={300}
                                      rowsMin={5}
                                      aria-label="maximum height"
                                      id="rules"
                                      placeholder={info.prod_desc}
                                      value={prod_desc16}
                                      onChange={(e) =>
                                        setDesc16(e.target.value)
                                      }
                                      fullWidth
                                    />
                                  </div>
                                );
                              } else return null;
                            })}
                        </Grid>

                        <br />
                        <Grid container spacing={3}>
                          <Grid item xs={12} sm={6}>
                            <Typography variant="p1">
                              {cor.data &&
                                cor.data.map((info) => {
                                  if (String(info.prod_id).match(26)) {
                                    return "Old Price: £" + info.old_price;
                                  } else return null;
                                })}
                            </Typography>
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <Typography variant="p1">
                              {cor.data &&
                                cor.data.map((info) => {
                                  if (String(info.prod_id).match(26)) {
                                    return (
                                      "Current Price: £" + info.current_price
                                    );
                                  } else return null;
                                })}
                            </Typography>
                          </Grid>
                        </Grid>

                        <br />
                        <Grid container spacing={3}>
                          <Grid item xs={12} sm={6}>
                            <InputLabel>Set Price £</InputLabel>
                            <TextField
                              required
                              type="number"
                              name="Price"
                              inputProps={{
                                min: 1,
                                style: { textAlign: "center" },
                              }}
                              value={current_price16}
                              onChange={(e) => setCP16(e.target.value)}
                              fullWidth
                            />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <InputLabel>Set Quantity In Stock</InputLabel>
                            <TextField
                              required
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
                        </Grid>
                      </CardContent>

                      <CardActions>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={(e) => setFirst(16)}
                        >
                          Update
                        </Button>
                      </CardActions>
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

// exporting the DeptWomen function
export default DeptWomen;
