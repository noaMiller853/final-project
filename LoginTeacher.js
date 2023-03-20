import './Form.css';
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { APIUser } from '../services/HttpUser';
import { Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom'

const Login = (props) => {
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit
  } = useForm();


  const navigate = useNavigate()
  // const watchAllFields = watch(); // when pass nothing as argument, you are watching everything
  const { login } = APIUser();
  const onSubmit = (data) => {
    login(data.tz, data.password, false);
    if (props.changeState)
      props.changeState("initial");
    navigate('/Home', { state: { isManager: false } });
  };

  // console.log("watchAllFields", watchAllFields);

  return (


    <>
      <form dir='rtl' onSubmit={handleSubmit(onSubmit)}>

        <Grid display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={1} sx={{
          '& label': {
            textAlign: "center !important",
            marginTop: "18px"
          },
          '& .inputLogin': {
            marginTop: "10px !important"
          }
        }}>

          <Grid gridColumn="span 12">
            <label>תעודת זהות:</label>
            <input className="inputLogin"   {...register("tz", { pattern: /[0-9]{9}/,required: true, maxLength: 9, minLength: 9 })} dir='rtl' type="password" color='pink' placeholder="הקלד תעודת זהות"  />
            {errors.tz && <p className='errorLabel'>{"An ID card must be exactly 9 digits long"}</p>}

            <label>סיסמה:</label>
            <input className="inputLogin"   {...register("password", { required: true })} dir='rtl' type="text" placeholder="הקלד סיסמה"  />
            {errors.password && <p className='errorLabel'>{"required"}</p>}

            <input type="submit" className='specialButton' style={{marginTop: '45px !important' }}  value={"כניסה"}/>

          </Grid>
        </Grid>
      </form>
    </>

  );
}

export default Login;





