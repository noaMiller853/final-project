import "../Form.css"
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Grid } from "@mui/material";
import swal from 'sweetalert';
import { APIUser } from "../services/HttpUser";


//נכנסים לכאן עפי כניסה לתלמיד.הרשמה לתלמיד ורק כך מורשים להכנס לעמוד זה
function DetailStudent() {
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit
  } = useForm();
  const watchShowMark = watch("showMark", false); // you can supply default value as second argument
  const watchAllFields = watch(); // when pass nothing as argument, you are watching everything
  // const watchFields = watch(["showMark", "number"]); // you can also target specific fields by their names
  const { addStudentDetails, getAmountBadBehavior } = APIUser();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));

    addStudentDetails(data);

    swal({
      title: "Good job!",
      text: "הפרטים נוספו בהצלחה",
      icon: "success",
      button: "בסדר"
    });

    var num = getAmountBadBehavior(data);
    if(num % 3 == 0){
      
    }
  };


  const [tz, setTz] = useState("");

  // console.log("watchAllFields", watchAllFields);
  // console.log("watchFields", watchFields);

  return (
    <>
      <form dir="rtl" onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2} columns={16}>
          <Grid xs={4}><label>ת.ז. תלמיד:</label></Grid>
          <Grid xs={10}><input type="password" {...register("tz", { pattern: /[0-9]{9}/,required: true, maxLength: 9, minLength: 9 })} color='pink' onChange={e => { setTz(e.target.value) }} /></Grid>
          <Grid xs={14}>{errors.tz && <p className="errorLabel">{"An ID card must be exactly 9 digits long"}</p>}</Grid>
        </Grid>

        <Grid container spacing={2} columns={16}>
          <Grid xs={4}><label>התנהגות:</label></Grid>
          <Grid xs={10}><input {...register("behaviorId", { required: true })} placeholder="בחר מהרשימה:" list="behaviorId" /></Grid>
          <Grid xs={14}>{errors.TZ && <p className='errorLabel'>{"An ID card must be exactly 9 digits long"}</p>}</Grid>
        </Grid>

        <datalist id="behaviorId">
          <option>Good</option>
          <option>Trying</option>
          <option>Standard</option>
          <option>Not Good</option>
        </datalist >

        {/* <Grid container spacing={2} columns={16}>
          <Grid xs={4}>
            <Grid container spacing={2} columns={16} sx={{ marginTop: "5px" }}>
              <Grid xs={7}></Grid>
              <Grid xs={3}><input style={{ marginTop: "48px" }} className="checkbox" type="checkbox" {...register("showMark")} /></Grid>
              <Grid xs={2}><label className="label">ציון?</label></Grid>
            </Grid>
          </Grid>
          <Grid xs={10}>
              <input type="number" disabled={!watchShowMark} placeholder="ציון:" {...register("mark", { min: 50 })} />
          </Grid>
          <Grid xs={14}>{errors.mark && watchShowMark && <p className="errorLabel">{"The number must be greater then 49"}</p>}</Grid>
        </Grid>
 */}




        {/* based on yes selection to display Mark */}
        <input type="submit" className="specialButton" value={"הוספה"} />
      </form>
    </>

  );
}

export default DetailStudent;




