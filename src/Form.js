import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import React, { useState,useRef } from "react";

export function Form({ onSubmit }) {

  const [panelDimention, setPanelDimention] = useState({
    panelWidth: '',
    panelHeight: '',
  });

  const [roofDimention, setRoofDimention] = useState({
    roofWidth: '',
    roofHeight: '',
  });

  const [spacingDimention, setSpacingDimention] = useState({
    columnSpacing: '',
    rowSpacing: '',
    edgeSpacing: '',
  });
  // Handle submit
  function handleSubmit(event) {
    event.preventDefault();

    // return the updated values to Create
    onSubmit(panelDimention
    );
  };

  return (
    <>
    <Paper style={{padding: 16, margin: 16}}>
    <Grid container spacing={1}>
  <Grid item xs={6}sm={6}>
      <TextField
  name="panelWidth"
  label="Panel Width"
  value={panelDimention.panelWidth}
  onChange={(event) => setPanelDimention({...panelDimention, 
  [event.target.name]: event.target.value})}
/>
</Grid>
<Grid item xs={6}sm={6}>
<TextField
  name="panelHeight"
  label="Panel Height"
  value={panelDimention.panelHeight}
  onChange={(event) => setPanelDimention({...panelDimention, 
  [event.target.name]: event.target.value})}
/>
</Grid>
<Grid item xs={12}>
<Button
  variant="contained"
  color="primary"
  onClick={handleSubmit}
>
  Submit
</Button>
</Grid>

</Grid>
</Paper>


    </>
  );
}