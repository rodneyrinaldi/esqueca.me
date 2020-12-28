import React from 'react';
import Image from 'next/image';

import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

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
                      src='/esqueca-me.png'
                      style={{ height: "6vh" }}
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
              <Box my={4}>
                <Typography variant="h4" component="h1" gutterBottom
                  style={{ display: 'flex', justifyContent: 'center', fontSize: '48px' }}>
                  cansado de spam?
                </Typography>

                <Typography variant="h4" component="h1" gutterBottom
                  style={{ display: 'flex', textAlign: 'center' }}>
                  cancelamento de recebimentos indevidos e mensagens não autorizadas
                </Typography>

                <Button variant="contained" color="primary" component={Link} naked href="/about"
                  style={{ display: 'flex', justifyContent: 'center', marginTop: '2vh', fontSize: '30px' }}>
                  MAIS INFORMAÇÕES
                </Button>

                <Copyright />
              </Box>
            </div>
          </Grid>

        </form>
      </div>

    </ Container>
  );
}
