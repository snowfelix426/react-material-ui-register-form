import React from "react";
import { Box, Button, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import RegisterForm from "./RegisterForm";
import Logo from "../assets/icons/logo.svg";

const useStyles = makeStyles((theme) => ({
  sideContainer: {
    padding: "20px",
    [theme.breakpoints.up("md")]: {
      padding: "16px 32px",
    },
  },
  formContainer: {
    padding: "16px 0",
    [theme.breakpoints.up("md")]: {
      paddingTop: "32px",
    },
    [theme.breakpoints.up("lg")]: {
      width: "80%",
      margin: "0 auto",
      maxWidth: "400px",
    },
  },
  formTitle: {
    color: "#2B3649",
    textAlign: "center",
    marginBottom: "1em",
  },
}));

const RegisterSide = () => {
  const classes = useStyles();

  return (
    <Box className={classes.sideContainer}>
      <Grid container justifyContent="space-between" alignItems="center">
        <img src={Logo} alt="logo" />

        <Button variant="outlined" color="primary">
          How it works
        </Button>
      </Grid>

      <Box className={classes.formContainer}>
        <h1 className={classes.formTitle}>Welcome</h1>
        <RegisterForm />
      </Box>
    </Box>
  );
};

export default RegisterSide;
