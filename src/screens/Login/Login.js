import React, { Component } from "react";
import Header from "../../commons/header/Header";
import "./Login.css";
import {
  Button,
  Card,
  CardContent,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  Typography,
} from "@material-ui/core";

const styles = {
  loginBox: {
    padding: "15px",
    position: "relative",
    top: "10px",
    left: "35%",
    width: "30%",
  },
  loginText: {
    fontSize: 20,
  },
};

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      usernameRequired: "dispNone",
      password: "",
      passwordRequired: "dispNone",
      incorrectUsernamePassword: "dispNone",
      loggedIn: sessionStorage.getItem("access-token") == null ? false : true,
    };
  }

  loginHoverHandler = (e) => {
    e.target.style.cursor = "pointer";
  };

  inputUsernameHandler = (e) => {
    this.setState({ username: e.target.value });
  };

  inputPasswordHandler = (e) => {
    this.setState({ password: e.target.value });
  };

  loginClickHandler = () => {
    this.setState({ incorrectUsernamePassword: "dispNone" });
    this.state.username.trim() === ""
      ? this.setState({ usernameRequired: "dispBlock" })
      : this.setState({ usernameRequired: "dispNone" });
    this.state.password.trim() === ""
      ? this.setState({ passwordRequired: "dispBlock" })
      : this.setState({ passwordRequired: "dispNone" });

    if (
      this.state.username.trim() === "" ||
      this.state.password.trim() === ""
    ) {
      return;
    }

    if (
      this.state.username.trim() === "user" &&
      this.state.password.trim() === "password"
    ) {
      sessionStorage.setItem(
        "access-token",
        "IGQVJYWVJJSVVRQ0VLdE1tRHNhakpSc000SXBvZA01mY3BmVWJ0NDFYdzF4SzJ2TDl1T1cyZAkFUZAW1rMkY5aXJtSEM0eWpmenhidE5lR1c5ZA2J0OHhEVXFYT0t5Q2Y4TTNwMExxMUU2ekE3ODczWlRvbnpmaUZAvaGdWRERN"
      );
      this.setState({ loggedIn: true });
    } else {
      this.setState({ incorrectUsernamePassword: "dispBlock" });
    }
  };
  render() {
    return (
      <div>
        <Header />
        <Card style={styles.loginBox}>
          <CardContent>
            <Typography style={styles.loginText}>LOGIN</Typography>
            <br />
            <FormControl required style={{ width: "100%" }}>
              <InputLabel htmlFor="username"> Username </InputLabel>
              <Input
                id="username"
                type="text"
                username={this.state.username}
                onChange={this.inputUsernameHandler}
              />
              <FormHelperText className={this.state.usernameRequired}>
                <span className="red">required</span>
              </FormHelperText>
            </FormControl>
            <br /><br />
            <FormControl required style={{ width: "100%" }}>
              <InputLabel>Password</InputLabel>
              <Input
                id="password"
                type="password"
                password={this.state.password}
                onChange={this.inputPasswordHandler}
              />
              <FormHelperText className={this.state.passwordRequired}>
                <span className="red">required</span>
              </FormHelperText>
            </FormControl>
            <br />
            <br />
            <div className={this.state.incorrectUsernamePassword}>
              <span className="red"> Incorrect username and/or password </span>
            </div>
            <br />
            <Button
              variant="contained"
              color="primary"
              onMouseOver={this.loginHoverHandler}
              onClick={this.loginClickHandler}
            >
              LOGIN
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }
}