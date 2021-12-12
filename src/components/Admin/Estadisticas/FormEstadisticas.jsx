import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { KeyboardDateTimePicker } from "@material-ui/pickers";
import { useForm } from "react-hook-form";
import { format } from "date-fns";
import Swal from "sweetalert2";
import { getStatistics } from "../../../api/statistics";
import { Button } from "@material-ui/core";

export const FormEstadisticas = ({ dates, setDates, setStatistics }) => {
  const { register, errors, handleSubmit } = useForm();
  const handleDateChange = (data, property) => {
    setDates({
      ...dates,
      [property]: data,
    });
  };
  const onSubmit = async (_, e) => {
    e.preventDefault();
    const startDate = format(dates.startDate, "yyyy-MM-dd HH:mm:ss");
    const endDate = format(dates.endDate, "yyyy-MM-dd HH:mm:ss");
    if (startDate > endDate) {
      Swal.fire(
        "Error",
        "La fecha de inicio no puede ser mayor a la fecha de fin, por favor verifique.",
        "error"
      );
    } else {
      const response = await getStatistics(startDate, endDate);
      setStatistics(response.data);
      console.log(response);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
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
        <Grid item>
          <Button
            type="submit"
            fullWidth={true}
            size="large"
            variant="contained"
            color="primary"
            style={{ marginBottom: "1rem" }}
          >
            Generar estadísticas
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
