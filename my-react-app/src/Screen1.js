// Screen1.js
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
import Undergrad from "./Undergrad";
import Postgrad from "./Postgrad";
import CR from "./CR";

// Declaring the useStyles react hook.
const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
  },
  heroButtons: {
    marginTop: theme.spacing(2),
  },
  cardGrid: {
    paddingTop: theme.spacing(3),
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

// Screen1 function
function Screen1() {
  // Using useStyles inside the function component to create classes object
  const classes = useStyles();

  // Created Hook Expressions React.useState()
  // Declaring a state variable (state) and call (setState)
  const [state, setState] = React.useState("home");

  /* Nested if statements that take the value of the "state" variable we declared earlier 
   as a conditional argument and returns the Undergrad component or the Postgrad component 
   depending on the value of the "state" variable. */
  if (state === "undergrad") {
    return <Undergrad />;
  } else if (state === "postgrad") {
    return <Postgrad />;
  }

  // Return for the Screen1 function
  /* It renders material ui's Typography component containing the title and secondary information that will be displayed to the user. 
  Then it shows two cards containing information on two sets of courses (undergraduate or postgraduate) that the user can browse through. 
  Each card contains a buttonthat will either conditionally render the Undergrad or Postgrad component depending on which courses the user is interested in. 
  Finally, the CR component is rendered to act as the footer for this section. */
  return (
    <main>
      <div className={classes.heroContent}>
        <Container className={classes.cardGrid} maxWidth="md">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Study with us
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            We deliver an outstanding learning experience that equips our
            students for future success. Study with us and you'll be challenged
            and supported, so that you can achieve great things.
          </Typography>
          <div className={classes.heroButtons}>
            <Grid container spacing={4} justify="center">
              <Grid item xs={12} sm={6} md={6}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://1.bp.blogspot.com/-RbRxSeSgUkg/XZ3yOaBbcRI/AAAAAAAAPEU/j4MkVY-wEN8-rKE_GMOPs25bigeHzvptACLcBGAsYHQ/s1600/undergraduates.jpg"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Undergraduate courses
                    </Typography>
                    <Typography>
                      Browse our range of undergraduate courses.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => setState("undergrad")}
                    >
                      Undergraduate courses
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://www.uwl.ac.uk/sites/uwl/files/styles/event_overview_xxl_1x/public/2019-03/postgraduate-student.jpg?h=3e16b80a&itok=3jf0X2rx"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Postgraduate courses
                    </Typography>
                    <Typography>Find your postgraduate course.</Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => setState("postgrad")}
                    >
                      Postgraduate courses
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
      <CR />
    </main>
  );
}

// exporting the Screen1 function
export default Screen1;
