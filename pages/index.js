import React from 'react';
import Image from 'next/image';

import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';


import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import amber from '@material-ui/core/colors/amber';
import blueGrey from '@material-ui/core/colors/blueGrey';
import Grid from '@material-ui/core/Grid';

import ProTip from '../components/ProTip';
import Link from '../components/Link';
import Copyright from '../components/Copyright';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  layer1: {
    width: "100vw",
    height: "10vh",
    display: 'flex',
    flexDirection: 'column',
    justify: 'center',
    alignItems: 'center',
  },
  layer2: {
    width: "100vw",
    height: "50vh",
    backgroundImage: `url(${"/back-img.png"})`,
    display: 'flex',
    flexDirection: 'column',
    justify: 'center',
    alignItems: 'center',
    paddingTop: '8vh'
  },
  layer3: {
    width: "100vw",
    height: "35vh",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


export default function Index() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="fixed">
      <CssBaseline />

      <div className={classes.paper}>
        <form className={classes.form} noValidate>

          <Grid container spacing={2}>
            <div className={classes.layer1}>
              <Grid item xs={12}>
                <Grid container direction="row"
                  justify="space-between" alignItems="center" alignContent="center"
                  style={{ padding: "1px 10px" }}>
                  <Grid item>
                    <img
                      alt='esqueca.me'
                      src='/logo.png'
                      style={{ height: "6vh", paddingRight: '1vw' }}
                    />
                  </Grid>
                  <Grid item>
                    <img
                      alt='esqueca.me'
                      src='/esqueca-me.png'
                      style={{ height: "6vh", paddingLeft: '1vw' }}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </div>
            <div className={classes.layer2}>
              <img
                alt='esqueca.me'
                src='/anger-face.png'
                style={{ height: "40vh" }}
              />
            </div>
            <div className={classes.layer3}>

            </div>
          </Grid>

        </form>
      </div>

    </ Container>
  );
}





const colorWhite = blueGrey[50];
const colorAmber = amber[500];
const colorDarkGrey = blueGrey[900];

const styles = {
  paperWrapper: {
    margin: 0,
    padding: 0,
    width: '100vw',
    height: '100vh',
    backgroundImage: `url(${"/back-img.svg"})`
  },
};

export function IndexOLD() {
  return (
    <Paper style={styles.paperWrapper}>


      <Container maxWidth="sm">
        <Grid container direction="column">
          <Box
            width="100%" height="4rem"
            marginTop="3rem" marginBottom="4rem">
            <Grid item xs={12}>
              <Grid container direction="row"
                justify="space-between" alignItems="center" alignContent="center"
                style={{ padding: "14px 10px" }}>
                <Grid item>
                  <Typography component="h1" variant="h5"
                    style={{ color: colorAmber, fontSize: 40, fontWeight: 900 }}>
                    esqueca.me
                </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Container>

      <Container maxWidth="sm">
        <Image
          alt="esqueca.me"
          src="/anger-face.svg"
          layout="responsive"
          width={700}
          height={475}
          margin={100}
        />
      </Container>







      {/* <Container maxWidth="sm">
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            esqueca.me
            </Typography>
          <Link href="/about" color="secondary">
            Go to the about page
            </Link>
          <ProTip />
          <Copyright />
        </Box>
      </Container> */}

    </Paper >
  );
}
