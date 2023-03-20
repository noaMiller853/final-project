import React from "react";
import { useForm } from "react-hook-form";
import { Grid } from '@mui/material';
import swal from 'sweetalert';
import { APIUser } from "../services/HttpUser";

function RegisterTeacher() {
  const {
    register,

    formState: { errors },
    handleSubmit
  } = useForm();

  const {addTeacher} = APIUser();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));

    addTeacher(data);

      swal({
        title: "Good job!",
        text: "המורה נוסף בהצלחה",
        icon: "success",
        button: "בסדר"
      });
  }



  return (
    <>
      <form dir='rtl' onSubmit={handleSubmit(onSubmit)} style={{ textAlign: "left" }}>
        <Grid container spacing={2} columns={16}>
          <Grid xs={4}><label>תעודת זהות:</label></Grid>
          <Grid xs={10}><input type="password" {...register("TZ", {pattern: /[0-9]{9}/, required: true, maxLength: 9 ,minLength:9})} /></Grid>
          <Grid xs={14}>{errors.TZ && <p className='errorLabel'>{"An ID card must be exactly 9 digits long"}</p>}</Grid>
        </Grid>
        <Grid container spacing={2} columns={16}>
          <Grid xs={4}><label>שם:</label></Grid>
          <Grid xs={10}><input
            type="text"
            {...register("name", { required: true, minLength: 2 })}
          />
          </Grid>
          <Grid xs={14}>{errors.name && (
            <p className='errorLabel'>{"The Name Field is Required "}</p>
          )}</Grid>
        </Grid>

        <Grid container spacing={2} columns={16}>
          <Grid xs={4}><label>כתובת:</label></Grid>
          <Grid xs={10}><input
            type="text"
            {...register("address", { required: true, maxLength: 50 })}
          /></Grid>
        </Grid>

        <Grid container spacing={2} columns={16}>
          <Grid xs={4}><label>כתובת מייל:</label></Grid>
          <Grid xs={10}><input
            type="mail"
            {...register("mail", { required: true, maxLength: 50 })}
          /></Grid>
          <Grid xs={14}>{errors.mail && (
            <p  className='errorLabel'>{"The mail Field is Required and must be > 10 characters"}</p>
          )}</Grid>
        </Grid>


        <Grid container spacing={2} columns={16}>
          <Grid xs={4}><label>מספר טלפון:</label></Grid>
          <Grid xs={10}><input
            type="number"
            {...register("tel", { required: true, maxLength: 10, minLength: 10 })}
          /></Grid>
          <Grid xs={14}>{errors.tel && (
            <p  className='errorLabel'>{"The telephone Field is Required and must be = 10 characters"}</p>
          )}</Grid>
        </Grid>

        <input type="submit" className='specialButton' value={"הוספה"} />
      </form>


    </>

  );
}


export default RegisterTeacher;