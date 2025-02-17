import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

import { Redirect } from 'react-router'
import { sessionHelper } from '../helpers/session'
import { nanoAPI } from '../nanoAPI'
import Link from './general/link'

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
  signup: {
    marginTop: theme.spacing.unit,
  },
});

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = { redirectToReferrer: false, rememberMe: false };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleRemember() {
    this.setState({ rememberMe: !this.state.rememberMe })
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const me = this;

    data.append('remember_me', this.state.rememberMe);

    nanoAPI.login(data)
    .then(function(json) {
      sessionHelper.login(me.state.rememberMe);
      me.setState({ redirectToReferrer: true });
    })
    .catch(function(error) {
      alert('login failed!\n' + error.message);
    });
  }

  render() {
    const { classes } = this.props;
    if(this.state.redirectToReferrer) return <Redirect to="/" />;
    return (
      <main className={classes.main}>
        <CssBaseline />
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} onSubmit={this.handleSubmit}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">Email Address</InputLabel>
              <Input id="email" name="email" autoComplete="email" autoFocus />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input name="password" type="password" id="password" autoComplete="current-password" />
            </FormControl>
            <FormControlLabel
              control={
                <Checkbox
                  value="remember"
                  color="primary"
                  onChange={e => {
                    e.preventDefault();
                    this.handleRemember();
                  }} />
              }
              label="Remember me"
            />
            <Button
              fullWidth
              type="submit"
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign in
            </Button>
            <Button
              fullWidth
              variant="contained"
              className={classes.signup}
            >
              <Link to='/register'>
                Sign up
              </Link>
            </Button>
          </form>
        </Paper>
      </main>
    );
  }
}

SignIn.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignIn);
