import React from "react";
import { useForm } from "react-hook-form";
import { Grid } from '@mui/material';
import swal from 'sweetalert';
import { APIUser } from "../services/HttpUser";

function RemoveStudent() {
    const {
        register,
        formState: { errors },
        handleSubmit
    } = useForm();

    const { removeStudent } = APIUser();

    const onSubmit = (data) => {
        alert(JSON.stringify(data));

        removeStudent(data);

        swal({
            title: "Good job!",
            text: "התלמיד נמחק בהצלחה",
            icon: "success",
            button: "בסדר"
        });
    }



    return (
        <>
            <form dir='rtl' onSubmit={handleSubmit(onSubmit)} style={{ textAlign: "left" }}>
                <Grid container spacing={2} columns={16}>
                    <Grid xs={4}><label>ת"ז תלמיד:</label></Grid>
                    <Grid xs={10}><input type="password" {...register("TZ", { pattern: /[0-9]{9}/,required: true, maxLength: 9,minLength:9 })} /></Grid>
                    <Grid xs={14}>{errors.TZ && <p className='errorLabel'>{"An ID card must be exactly 9 digits long"}</p>}</Grid>
                </Grid>
                <input type="submit" className='specialButton' value={"מחיקה"}/>
            </form>


        </>

    );
}


export default RemoveStudent;