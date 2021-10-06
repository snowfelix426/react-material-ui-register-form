import React from "react";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import RegisterSide from "../components/RegisterSide";
import BgImage from "../assets/images/background.jpg";

const useStyles = makeStyles((theme) => ({
  sideBox: {
    width: "100%",
    backgroundImage: `url(${BgImage})`,
    backgroundSize: "cover",
    height: "50vh",
    [theme.breakpoints.up("md")]: {
      height: "100%",
      minHeight: "100vh",
    },
  },
  container: {
    display: "grid",
    [theme.breakpoints.up("md")]: {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
  },
}));

const RegisterPage = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Box className={classes.sideBox} />
      <RegisterSide />
    </Box>
  );
};

export default RegisterPage;
