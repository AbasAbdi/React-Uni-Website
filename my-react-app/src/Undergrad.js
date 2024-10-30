// Undergrad.js
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
import CourseInfo from "./CourseInfo";
import CR from "./CR";
import axios from "axios";

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
}));

// Undergrad function
function Undergrad() {
  // Using useStyles inside the function component to create classes object
  const classes = useStyles();

  // Created Hook Expressions React.useState()
  // Declaring a state variable (vis) and call (setVis)
  const [vis, setVis] = React.useState("");
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

  /* Nested if statements that take the value of the "vis" variable we declared earlier 
   as a conditional argument and returns the CourseInfo component with different 
   values assigned to it's "id" prop depending on the value of the "vis" variable. */
  if (vis === "cs") {
    return <CourseInfo id={50} />;
  } else if (vis === "ce") {
    return <CourseInfo id={60} />;
  } else if (vis === "bs") {
    return <CourseInfo id={70} />;
  } else if (vis === "bms") {
    return <CourseInfo id={80} />;
  }

  /* Declaring a variable and assigning it many values. Each property (b1-d4) has a property value
    and within that value we map through the data in the cor state variable and if the course_id matches 
    the id we're looking for a String containing the information we we're looking for is returned. Otherwise, null is returned. */
  var b = {
    b1:
      cor.data &&
      cor.data.map((info) => {
        if (String(info.course_id).match(50)) {
          return String(info.course_img);
        } else return null;
      }),
    b2:
      cor.data &&
      cor.data.map((info) => {
        if (String(info.course_id).match(60)) {
          return String(info.course_img);
        } else return null;
      }),
    b3:
      cor.data &&
      cor.data.map((info) => {
        if (String(info.course_id).match(70)) {
          return String(info.course_img);
        } else return null;
      }),
    b4:
      cor.data &&
      cor.data.map((info) => {
        if (String(info.course_id).match(80)) {
          return String(info.course_img);
        } else return null;
      }),
  };

  /* Declaring variables (b1-d4) and assigning them the values of the object we created earlier (b.b1 - b.d4). 
    However, as some of the strings being returned contain commas "," we use .replace to get rid of them by replacing this char with "". */
  var b1 = String(b.b1).replace(/,/g, "");
  var b2 = String(b.b2).replace(/,/g, "");
  var b3 = String(b.b3).replace(/,/g, "");
  var b4 = String(b.b4).replace(/,/g, "");

  // Return for the Undergrad function
  /* It begins by calling fetchRecords who's function we already described. It then fills out the information to be displayed to the user, which it does by essentially 
    mapping through the information contained within the databases "courses" table, filtering by course_id, and returning the relevant information for each section.
    Each card contains a button that when pressed uses the setVis call to alter the value of the state variable (vis). This then feeds into the nested if statements 
    we mentioned earlier which conditionally renders the CourseInfo component with different sets of information depending on the value of the state variable (vis). 
    Finally, the CR component is rendered to act as the footer for this section.*/
  return (
    <main>
      {fetchRecords()}
      <div className={classes.heroContent}>
        <div className={classes.heroButtons}>
          <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4} justify="center">
              <Grid item xs={12} sm={6} md={6}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={b1}
                    title="Image title"
                  />

                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {cor.data &&
                        cor.data.map((info) => {
                          if (String(info.course_id).match(50)) {
                            return info.course_name;
                          } else return null;
                        })}
                    </Typography>
                    <Typography>
                      {cor.data &&
                        cor.data.map((info) => {
                          if (String(info.course_id).match(50)) {
                            return info.course_desc;
                          } else return null;
                        })}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => setVis("cs")}
                    >
                      View Course
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
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {cor.data &&
                        cor.data.map((info) => {
                          if (String(info.course_id).match(60)) {
                            return info.course_name;
                          } else return null;
                        })}
                    </Typography>
                    <Typography>
                      {cor.data &&
                        cor.data.map((info) => {
                          if (String(info.course_id).match(60)) {
                            return info.course_desc;
                          } else return null;
                        })}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => setVis("ce")}
                    >
                      View Course
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
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {cor.data &&
                        cor.data.map((info) => {
                          if (String(info.course_id).match(70)) {
                            return info.course_name;
                          } else return null;
                        })}
                    </Typography>
                    <Typography>
                      {cor.data &&
                        cor.data.map((info) => {
                          if (String(info.course_id).match(70)) {
                            return info.course_desc;
                          } else return null;
                        })}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => setVis("bs")}
                    >
                      View Course
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
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {cor.data &&
                        cor.data.map((info) => {
                          if (String(info.course_id).match(80)) {
                            return info.course_name;
                          } else return null;
                        })}
                    </Typography>
                    <Typography>
                      {cor.data &&
                        cor.data.map((info) => {
                          if (String(info.course_id).match(80)) {
                            return info.course_desc;
                          } else return null;
                        })}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => setVis("bms")}
                    >
                      View Course
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

// exporting the Undergrad function
export default Undergrad;
