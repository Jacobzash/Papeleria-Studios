import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";

import { makeStyles } from "@material-ui/core/styles";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

import { Notification } from "../Others/Notification";

import { useForm } from "react-hook-form";
import { signInApi } from "../../api/auth";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function FormLogin() {
  const classes = useStyles();
  const [formValues, setFormValues] = useState({
    correo: "",
    password: "",
  });
  const [showPassword, setshowPassword] = useState(false);
  const [alert, setAlert] = useState({
    open: false,
    message: "",
    variant: "",
  });

  const { register, handleSubmit, errors } = useForm();

  const handleClickShowPassword = () => {
    setshowPassword(!showPassword);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const onSubmit = async (_, e) => {
    e.preventDefault();
    const response = await signInApi(formValues);
    if (!response.ok) {
      setAlert({
        open: true,
        message: response.msg,
        variant: "error",
      });
    } else if (response.ok) {
      localStorage.setItem("token", response.token);
      setAlert({
        ...alert,
        open: true,
        message: response.msg,
        variant: "success",
      });
      window.location.href = "/admin";
    }
  };

  return (
    <Container component="div" maxWidth="sm">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Inicia sesión
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
          <TextField
            name="correo"
            autoComplete="email"
            autoFocus
            color="secondary"
            fullWidth
            label="Correo"
            margin="normal"
            onChange={handleChange}
            defaultValue={formValues.correo}
            variant="outlined"
            inputRef={register({
              required: { value: true, message: "El correo es requerido" },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "El correo no es válido",
              },
            })}
          />
          <Typography
            variant="body1"
            display="block"
            color="error"
            gutterBottom
          >
            {errors?.correo?.message}
          </Typography>
          <TextField
            color="secondary"
            fullWidth
            label="Contraseña"
            margin="normal"
            onChange={handleChange}
            defaultValue={formValues.password}
            name="password"
            variant="outlined"
            type={showPassword ? "text" : "password"}
            inputRef={register({
              required: { value: true, message: "La contraseña es requerido" },
            })}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Typography
            variant="body1"
            display="block"
            color="error"
            gutterBottom
          >
            {errors?.password?.message}
          </Typography>
          <FormControlLabel
            control={<Checkbox value="remember" color="secondary" />}
            label="Recordarme"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
          >
            Iniciar sesión
          </Button>
        </form>
        <Notification
          open={alert.open}
          message={alert.message}
          variant={alert.variant}
          setOpen={setAlert}
        />
      </div>
    </Container>
  );
}
