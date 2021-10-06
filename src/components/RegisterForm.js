import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button, MenuItem, Select, TextField } from "@material-ui/core";
import { useForm, Controller } from "react-hook-form";

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    display: "grid",
    gridGap: theme.spacing(3),
  },
  oneColContainer: {
    display: "grid",
  },
  twoColsContainer: {
    display: "grid",
    gridGap: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
  },
}));

const RegisterForm = () => {
  const classes = useStyles();

  const defaultValues = {
    select: "",
    input: "",
  };

  const { handleSubmit, reset, watch, control, register } = useForm({
    defaultValues,
  });
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box className={classes.gridContainer}>
        <Box className={classes.twoColsContainer}>
          <Controller
            name="firstName"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                label="First Name"
                variant="outlined"
                value={value}
                onChange={onChange}
                error={!!error}
                helperText={error ? error.message : null}
                InputLabelProps={{ shrink: true }}
              />
            )}
            rules={{ required: "First name required" }}
          />

          <Controller
            name="lastName"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                label="Last Name"
                variant="outlined"
                value={value}
                onChange={onChange}
                error={!!error}
                helperText={error ? error.message : null}
                InputLabelProps={{ shrink: true }}
              />
            )}
            rules={{ required: "Last name required" }}
          />
        </Box>

        <Box className={classes.oneColContainer}>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                label="Email"
                variant="outlined"
                value={value}
                onChange={onChange}
                error={!!error}
                helperText={error ? error.message : null}
                type="email"
                InputLabelProps={{ shrink: true }}
              />
            )}
            rules={{ required: "Email required" }}
          />
        </Box>

        <Box className={classes.oneColContainer}>
          <Controller
            name="streetAddress"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                label="Street Address"
                variant="outlined"
                value={value}
                onChange={onChange}
                error={!!error}
                helperText={error ? error.message : null}
                InputLabelProps={{ shrink: true }}
              />
            )}
            rules={{ required: "First name required" }}
          />
        </Box>

        <Box className={classes.twoColsContainer}>
          <Controller
            name="city"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                label="City"
                variant="outlined"
                value={value}
                onChange={onChange}
                error={!!error}
                helperText={error ? error.message : null}
                InputLabelProps={{ shrink: true }}
              />
            )}
            rules={{ required: "City required" }}
          />

          <Controller
            control={control}
            name="state"
            render={({ field: { onChange, value } }) => (
              <Select size="small" variant="outlined">
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Tennessee</MenuItem>
                <MenuItem value={20}>Alaska</MenuItem>
                <MenuItem value={30}>Texas</MenuItem>
              </Select>
            )}
          />
        </Box>

        <Box className={classes.oneColContainer}>
          <Controller
            name="zipCode"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                label="ZIP / Postal"
                variant="outlined"
                value={value}
                onChange={onChange}
                error={!!error}
                helperText={error ? error.message : null}
                InputLabelProps={{ shrink: true }}
              />
            )}
            rules={{ required: "First name required" }}
          />
        </Box>

        <Box className={classes.oneColContainer}>
          <Controller
            name="phone"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                label="Phone number"
                variant="outlined"
                value={value}
                type="tel"
                onChange={onChange}
                error={!!error}
                helperText={error ? error.message : null}
                InputLabelProps={{ shrink: true }}
              />
            )}
            rules={{ required: "First name required" }}
          />
        </Box>

        <Box className={classes.oneColContainer}>
          <Controller
            name="birth"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                label="Date of birth"
                variant="outlined"
                value={value}
                type="date"
                onChange={onChange}
                error={!!error}
                helperText={error ? error.message : null}
                InputLabelProps={{ shrink: true }}
              />
            )}
            rules={{ required: "First name required" }}
          />
        </Box>

        <Box className={classes.oneColContainer}>
          <Box className={classes.oneColContainer}>
            <Button
              size="large"
              color="primary"
              variant="contained"
              type="submit"
            >
              Get my free samples
            </Button>
          </Box>
        </Box>
      </Box>
    </form>
  );
};

export default RegisterForm;
