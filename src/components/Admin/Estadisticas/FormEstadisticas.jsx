import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { KeyboardDateTimePicker } from "@material-ui/pickers";
import { useForm } from "react-hook-form";
import { format } from "date-fns";
import Swal from "sweetalert2";

export const FormEstadisticas = ({ dates, setDates }) => {
  const { register, errors, handleSubmit } = useForm();
  const handleDateChange = (data, property) => {
    setDates({
      ...dates,
      [property]: data,
    });
  };
  const onSubmit = (_, e) => {
    e.preventDefault();
    const startDate = format(dates.startDate, "yyyy-MM-dd HH:mm:ss");
    const endDate = format(dates.endDate, "yyyy-MM-dd HH:mm:ss");
    if (startDate > endDate) {
      Swal.fire(
        "Error",
        "La fecha de inicio no puede ser mayor a la fecha de fin, por favor verifique.",
        "error"
      );
    }
    console.log(startDate);
    console.log(endDate);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item>
          <KeyboardDateTimePicker
            color="secondary"
            inputVariant="outlined"
            ampm={false}
            name="startDate"
            label="Fecha de Inicio"
            value={dates.startDate}
            onChange={(e) => {
              handleDateChange(e, "startDate");
            }}
            format="yyyy/MM/dd HH:mm"
            invalidDateMessage="Formato de fecha Invalido"
            allowKeyboardControl={true}
            inputRef={register({
              required: { value: true, message: "Fecha de Inicio requerida" },
            })}
          />
          <Typography
            variant="body1"
            display="block"
            color="error"
            gutterBottom
          >
            {errors?.startDate?.message}
          </Typography>
        </Grid>
        <Grid item>
          <KeyboardDateTimePicker
            color="secondary"
            inputVariant="outlined"
            ampm={false}
            name="endDate"
            label="Fecha de Fin"
            value={dates.endDate}
            onChange={(e) => {
              handleDateChange(e, "endDate");
            }}
            format="yyyy/MM/dd HH:mm"
            invalidDateMessage="Formato de fecha Invalido"
            allowKeyboardControl={true}
            inputRef={register({
              required: { value: true, message: "Fecha de Fin requerida" },
            })}
          />
          <Typography
            variant="body1"
            display="block"
            color="error"
            gutterBottom
          >
            {errors?.endDate?.message}
          </Typography>
        </Grid>
      </Grid>
      <button type="submit">Guardar</button>
    </form>
  );
};
