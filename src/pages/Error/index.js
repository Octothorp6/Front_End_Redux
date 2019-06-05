import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Paper, Typography, withStyles, Button } from '@material-ui/core';
import classnames from 'classnames';

import logo from '../../assets/ethernode_logo_black.svg';

const Error = ({ classes }) => (
  <Grid container className={classes.container}>
    <div className={classes.logotype}>
      <img className={classes.logotypeIcon} src={logo} alt="logo" />
    </div>
    <Paper classes={{ root: classes.paperRoot }}>
      <Typography variant="h1" color="primary" className={classnames(classes.textRow, classes.errorCode)}>404</Typography>
      <Typography variant="h5" color="primary" className={classes.textRow}>Oops. Looks like the page you're looking for doesn't exist.</Typography>
      <Typography variant="h6" color="textSecondary" className={classnames(classes.textRow, classes.safetyText)}>Return to the HomePage to try again.</Typography>
      <Button variant="contained" color="primary" component={Link} to="/" size="large" className={classes.backButton}>Back to Home</Button>
    </Paper>
  </Grid>
);

const styles = theme => ({
  container: {
    height: '100vh',
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "gray",
    position: 'absolute',
    top: 0,
    left: 0,
  },
  logotype: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing.unit * 12,
    [theme.breakpoints.down("sm")]: {
      display: 'none',
    }
  },
  logotypeIcon: {
    width: 250,
    marginRight: theme.spacing.unit * 2,
  },
  paperRoot: {
    boxShadow: theme.customShadows.widgetDark,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: theme.spacing.unit * 8,
    paddingBottom: theme.spacing.unit * 8,
    paddingLeft: theme.spacing.unit * 6,
    paddingRight: theme.spacing.unit * 6,
    maxWidth: 404,
  },
  textRow: {
    marginBottom: theme.spacing.unit * 10,
    textAlign: 'center',
  },
  errorCode: {
    fontSize: 148,
    fontWeight: 600,
  },
  safetyText: {
    fontWeight: 300,
    color: theme.palette.text.hint,
  },
  backButton: {
    boxShadow: theme.customShadows.widget,
    textTransform: 'none',
    fontSize: 22,
  }
});

export default withStyles(styles, { withTheme: true })(Error);