// Pdepartment.js
// Importing the necessary files
import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import CR from "./CR";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

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
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  textarea: {
    width: "100%",
  },
}));

// Pdepartment function
function Pdepartment() {
  // Using useStyles inside the function component to create classes object
  const classes = useStyles();

  // Declaring a state variable (cor) and call (setCor)
  const [cor, setCor] = React.useState("");

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

  /* Declaring a variable and assigning it many values. Each property (b1-d4) has a property value
    and within that value we map through the data in the cor state variable and if the course_id matches 
    the id we're looking for a String containing the information we we're looking for is returned. Otherwise, null is returned. */
  var b = {
    b1:
      cor.data &&
      cor.data.map((info) => {
        if (String(info.course_id).match(90)) {
          return String(info.course_img);
        } else return null;
      }),
    b2:
      cor.data &&
      cor.data.map((info) => {
        if (String(info.course_id).match(100)) {
          return String(info.course_img);
        } else return null;
      }),
    b3:
      cor.data &&
      cor.data.map((info) => {
        if (String(info.course_id).match(110)) {
          return String(info.course_img);
        } else return null;
      }),
    b4:
      cor.data &&
      cor.data.map((info) => {
        if (String(info.course_id).match(120)) {
          return String(info.course_img);
        } else return null;
      }),
    c1:
      cor.data &&
      cor.data.map((info) => {
        if (String(info.course_id).match(90)) {
          return String(info.course_name);
        } else return null;
      }),
    c2:
      cor.data &&
      cor.data.map((info) => {
        if (String(info.course_id).match(100)) {
          return String(info.course_name);
        } else return null;
      }),
    c3:
      cor.data &&
      cor.data.map((info) => {
        if (String(info.course_id).match(110)) {
          return String(info.course_name);
        } else return null;
      }),
    c4:
      cor.data &&
      cor.data.map((info) => {
        if (String(info.course_id).match(120)) {
          return String(info.course_name);
        } else return null;
      }),
    d1:
      cor.data &&
      cor.data.map((info) => {
        if (String(info.course_id).match(90)) {
          return String(info.course_desc);
        } else return null;
      }),
    d2:
      cor.data &&
      cor.data.map((info) => {
        if (String(info.course_id).match(100)) {
          return String(info.course_desc);
        } else return null;
      }),
    d3:
      cor.data &&
      cor.data.map((info) => {
        if (String(info.course_id).match(110)) {
          return String(info.course_desc);
        } else return null;
      }),
    d4:
      cor.data &&
      cor.data.map((info) => {
        if (String(info.course_id).match(120)) {
          return String(info.course_desc);
        } else return null;
      }),
  };

  /* Declaring variables (b1-d4) and assigning them the values of the object we created earlier (b.b1 - b.d4). 
    However, as some of the strings being returned contain commas "," we use .replace to get rid of them by replacing this char with "". */
  var b1 = String(b.b1).replace(/,/g, "");
  var b2 = String(b.b2).replace(/,/g, "");
  var b3 = String(b.b3).replace(/,/g, "");
  var b4 = String(b.b4).replace(/,/g, "");
  var c1 = String(b.c1).replace(/,/g, "");
  var c2 = String(b.c2).replace(/,/g, "");
  var c3 = String(b.c3).replace(/,/g, "");
  var c4 = String(b.c4).replace(/,/g, "");
  var d1 = String(b.d1).replace(/,/g, "");
  var d2 = String(b.d2).replace(/,/g, "");
  var d3 = String(b.d3).replace(/,/g, "");
  var d4 = String(b.d4).replace(/,/g, "");

  // Created Hook Expressions React.useState()
  // Declaring a state variable (course_img1) and call (setImg1)
  const [course_img1, setImg1] = React.useState(b.b1);
  // Declaring a state variable (course_name1) and call (setCN1)
  const [course_name1, setCN1] = React.useState(b.c1);
  // Declaring a state variable (course_desc1) and call (setDesc1)
  const [course_desc1, setDesc1] = React.useState(b.d1);
  // Declaring a state variable (course_img2) and call (setImg2)
  const [course_img2, setImg2] = React.useState(b.b2);
  // Declaring a state variable (course_name2) and call (setCN2)
  const [course_name2, setCN2] = React.useState(b.c2);
  // Declaring a state variable (course_desc2) and call (setDesc2)
  const [course_desc2, setDesc2] = React.useState(b.d2);
  // Declaring a state variable (course_img3) and call (setImg3)
  const [course_img3, setImg3] = React.useState(b.b3);
  // Declaring a state variable (course_name3) and call (setCN3)
  const [course_name3, setCN3] = React.useState(b.c3);
  // Declaring a state variable (course_desc3) and call (setDesc3)
  const [course_desc3, setDesc3] = React.useState(b.d3);
  // Declaring a state variable (course_img4) and call (setImg4)
  const [course_img4, setImg4] = React.useState(b.b4);
  // Declaring a state variable (course_name4) and call (setCN4)
  const [course_name4, setCN4] = React.useState(b.c4);
  // Declaring a state variable (course_desc4) and call (setDesc4)
  const [course_desc4, setDesc4] = React.useState(b.d4);

  /* Function that declares and assignes values to a "value" object and returns Axios PUT method. 
    The first parameter reads data from the URL, and the second parameter is the value object we mentioned earlier. 
    Then the response data recieved is assigned to a "resData" variable we declated. A let "data" variable is declared and we
    assign it a string using JSON.stringify() method to convert the JavaScript object to a JSON string .
    Finally window.alert() method displays the data recieved from the server to the user.*/
  function handleUpdate1() {
    const value = {
      course_img: course_img1,
      course_name: course_name1,
      course_desc: course_desc1,
    };

    axios
      .put(`http://localhost:8080/updateCourse/${90}`, value)
      .then((response) => {
        // handle success
        var resData = response.data;
        let data = JSON.stringify(resData);
        window.alert("Response recieved from server = " + data);
      });
  }

  /* Function that declares and assignes values to a "value" object and returns Axios PUT method. 
    The first parameter reads data from the URL, and the second parameter is the value object we mentioned earlier. 
    Then the response data recieved is assigned to a "resData" variable we declated. A let "data" variable is declared and we
    assign it a string using JSON.stringify() method to convert the JavaScript object to a JSON string .
    Finally window.alert() method displays the data recieved from the server to the user.*/
  function handleUpdate2() {
    const value = {
      course_img: course_img2,
      course_name: course_name2,
      course_desc: course_desc2,
    };

    axios
      .put(`http://localhost:8080/updateCourse/${100}`, value)
      .then((response) => {
        // handle success
        var resData = response.data;
        let data = JSON.stringify(resData);
        window.alert("Response recieved from server = " + data);
      });
  }

  /* Function that declares and assignes values to a "value" object and returns Axios PUT method. 
    The first parameter reads data from the URL, and the second parameter is the value object we mentioned earlier. 
    Then the response data recieved is assigned to a "resData" variable we declated. A let "data" variable is declared and we
    assign it a string using JSON.stringify() method to convert the JavaScript object to a JSON string .
    Finally window.alert() method displays the data recieved from the server to the user.*/
  function handleUpdate3() {
    const value = {
      course_img: course_img3,
      course_name: course_name3,
      course_desc: course_desc3,
    };

    axios
      .put(`http://localhost:8080/updateCourse/${110}`, value)
      .then((response) => {
        // handle success
        var resData = response.data;
        let data = JSON.stringify(resData);
        window.alert("Response recieved from server = " + data);
      });
  }

  /* Function that declares and assignes values to a "value" object and returns Axios PUT method. 
    The first parameter reads data from the URL, and the second parameter is the value object we mentioned earlier. 
    Then the response data recieved is assigned to a "resData" variable we declated. A let "data" variable is declared and we
    assign it a string using JSON.stringify() method to convert the JavaScript object to a JSON string .
    Finally window.alert() method displays the data recieved from the server to the user.*/
  function handleUpdate4() {
    const value = {
      course_img: course_img4,
      course_name: course_name4,
      course_desc: course_desc4,
    };

    axios
      .put(`http://localhost:8080/updateCourse/${120}`, value)
      .then((response) => {
        // handle success
        var resData = response.data;
        let data = JSON.stringify(resData);
        window.alert("Response recieved from server = " + data);
      });
  }

  // Return for the Pdepartment function
  /* It begins by calling fetchRecords() who's function we already described. It then fills out the information to be displayed to the user, which it does by utilising 
  the values contained within the props that it recieved from the SignIn component. Underneath each bit of information displayed to the user about the course, 
  there is a TextField/TextareaAutosize material ui components that allows the user to input new information for that particular section of the course. Whenever changes 
  are made to these components, it is saved by using the Hook Expressions we declared previously. When the "Update this section" button is clicked it calls 
  one of the handle update functions we created earlier, which goes on to store the changes to the server by updating the information that was there previously. 
  Finally, the CR component is rendered to act as the footer for this section. */
  return (
    <main>
      {fetchRecords()}
      <div className={classes.heroContent}>
        <div className={classes.heroButtons}>
          <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4} justify="center">
              <Grid item xs={12} sm={6} md={6}>
                <Card className={classes.card}>
                  <CardMedia className={classes.cardMedia} image={b1} />
                  <CardContent className={classes.cardContent}>
                    <Grid item xs={12}>
                      <TextField
                        label="Image Url"
                        placeholder={b1}
                        value={course_img1}
                        onChange={(e) => setImg1(e.target.value)}
                        fullWidth
                      />
                    </Grid>
                    <br />
                    <Typography gutterBottom variant="h5" component="h2">
                      {c1}
                    </Typography>
                    <Grid item xs={12}>
                      <TextField
                        label="Course Name"
                        placeholder={c1}
                        value={course_name1}
                        onChange={(e) => setCN1(e.target.value)}
                        fullWidth
                      />
                    </Grid>
                    <br />
                    <Typography>{d1}</Typography>
                    <br />
                    <Grid item xs={40}>
                      <TextareaAutosize
                        rowsMax={300}
                        rowsMin={5}
                        aria-label="maximum height"
                        placeholder={d1}
                        value={course_desc1}
                        className={classes.textarea}
                        onChange={(e) => setDesc1(e.target.value)}
                        fullWidth
                      />
                    </Grid>
                  </CardContent>
                  <CardActions>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleUpdate1}
                    >
                      Update this section
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <Card className={classes.card}>
                  <CardMedia className={classes.cardMedia} image={b2} />
                  <CardContent className={classes.cardContent}>
                    <Grid item xs={12}>
                      <TextField
                        label="Image Url"
                        placeholder={b2}
                        value={course_img2}
                        onChange={(e) => setImg2(e.target.value)}
                        fullWidth
                      />
                    </Grid>
                    <br />
                    <Typography gutterBottom variant="h5" component="h2">
                      {c2}
                    </Typography>
                    <Grid item xs={12}>
                      <TextField
                        label="Course Name"
                        placeholder={c2}
                        value={course_name2}
                        onChange={(e) => setCN2(e.target.value)}
                        fullWidth
                      />
                    </Grid>
                    <br />
                    <Typography>{d2}</Typography> <br />
                    <Grid item xs={40}>
                      <TextareaAutosize
                        rowsMax={300}
                        rowsMin={5}
                        aria-label="maximum height"
                        placeholder={d2}
                        value={course_desc2}
                        className={classes.textarea}
                        onChange={(e) => setDesc2(e.target.value)}
                        fullWidth
                      />
                    </Grid>
                  </CardContent>
                  <CardActions>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleUpdate2}
                    >
                      Update this section
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <Card className={classes.card}>
                  <CardMedia className={classes.cardMedia} image={b3} />

                  <CardContent className={classes.cardContent}>
                    <Grid item xs={12}>
                      <TextField
                        label="Image Url"
                        placeholder={b3}
                        value={course_img3}
                        onChange={(e) => setImg3(e.target.value)}
                        fullWidth
                      />
                    </Grid>
                    <br />
                    <Typography gutterBottom variant="h5" component="h2">
                      {c3}
                    </Typography>
                    <Grid item xs={12}>
                      <TextField
                        label="Course Name"
                        placeholder={c3}
                        value={course_name3}
                        onChange={(e) => setCN3(e.target.value)}
                        fullWidth
                      />
                    </Grid>
                    <br />

                    <Typography>{d3}</Typography>
                    <br />
                    <Grid item xs={40}>
                      <TextareaAutosize
                        rowsMax={300}
                        rowsMin={5}
                        aria-label="maximum height"
                        placeholder={d3}
                        value={course_desc3}
                        className={classes.textarea}
                        onChange={(e) => setDesc3(e.target.value)}
                        fullWidth
                      />
                    </Grid>
                  </CardContent>
                  <CardActions>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleUpdate3}
                    >
                      Update this section
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <Card className={classes.card}>
                  <CardMedia className={classes.cardMedia} image={b4} />
                  <CardContent className={classes.cardContent}>
                    <Grid item xs={12}>
                      <TextField
                        label="Image Url"
                        placeholder={b4}
                        value={course_img4}
                        onChange={(e) => setImg4(e.target.value)}
                        fullWidth
                      />
                    </Grid>
                    <br />

                    <Typography gutterBottom variant="h5" component="h2">
                      {c4}
                    </Typography>
                    <Grid item xs={12}>
                      <TextField
                        label="Course Name"
                        placeholder={c4}
                        value={course_name4}
                        onChange={(e) => setCN4(e.target.value)}
                        fullWidth
                      />
                    </Grid>
                    <br />
                    <Typography>{d4}</Typography>

                    <br />
                    <Grid item xs={40}>
                      <TextareaAutosize
                        rowsMax={300}
                        rowsMin={5}
                        aria-label="maximum height"
                        placeholder={d4}
                        value={course_desc4}
                        className={classes.textarea}
                        onChange={(e) => setDesc4(e.target.value)}
                        fullWidth
                      />
                    </Grid>
                  </CardContent>
                  <CardActions>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleUpdate4}
                    >
                      Update this section
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </div>
      </div>
      <CR />
    </main>
  );
}

// exporting the Pdepartment function
export default Pdepartment;
