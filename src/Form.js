import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import  FormControl  from "@mui/material/FormControl";

import React, { useState, useRef } from "react";

export function Form({ onSubmit }) {
  const [panelDimention, setPanelDimention] = useState({
    panelWidth: "",
    panelHeight: ''
  });

  const [roofDimention, setRoofDimention] = useState({
    roofWidth: '',
    roofHeight: ''
  });

  const [spacingDimention, setSpacingDimention] = useState({
    columnSpacing: '',
    rowSpacing: '',
    edgeSpacing: ''
  });




  // Handle submit
  const handleSubmit = event => {
    event.preventDefault();

    // return the updated values to Create
    onSubmit(panelDimention,roofDimention,spacingDimention);
  }

  return (
    <>
      <Paper style={{ padding: 16, margin: 16 }}>
        <Grid container spacing={1}>
      

          <Grid item xs={6} sm={6}>
            <TextField
              name="panelWidth"
              label="Panel Width"
              value={panelDimention.panelWidth}
              onChange={(event) =>
                setPanelDimention({
                  ...panelDimention,
                  [event.target.name]: event.target.value,
                })
              }
            />
          </Grid>
          <Grid item xs={6} sm={6}>
            <TextField
              name="panelHeight"
              label="Panel Height"
              value={panelDimention.panelHeight}
              onChange={(event) =>
                setPanelDimention({
                  ...panelDimention,
                  [event.target.name]: event.target.value,
                })
              }
            />
          </Grid>

          <Grid item xs={6} sm={6}>
            <TextField
              name="roofWidth"
              label="Roof Width"
              value={roofDimention.roofWidth}
              onChange={(event) =>
                setRoofDimention({
                  ...roofDimention,
                  [event.target.name]: event.target.value,
                })
              }
            />
            </Grid>
            <Grid item xs={6} sm={6}>
            <TextField
              name="roofHeight"
              label="Roof Hight"
              value={roofDimention.roofHeight}
              onChange={(event) =>
                setRoofDimention({
                  ...roofDimention,
                  [event.target.name]: event.target.value,
                })
              }
            />
            </Grid>

            <Grid item xs={6} sm={6}>
            <TextField
              name="columnSpacing"
              label="Column Spacing"
              value={spacingDimention.columnSpacing}
              onChange={(event) =>
                setSpacingDimention({
                  ...spacingDimention,
                  [event.target.name]: event.target.value,
                })
              }
            />
            </Grid>
            <Grid item xs={6} sm={6}>
            <TextField
              name="rowSpacing"
              label="Row Spacing"
              value={spacingDimention.rowSpacing}
              onChange={(event) =>
                setSpacingDimention({
                  ...spacingDimention,
                  [event.target.name]: event.target.value,
                })
              }
            />
            </Grid>
            <Grid item xs={6} sm={6}>
            <TextField
              name="edgeSpacing"
              label="Edge Spacing"
              value={spacingDimention.edgeSpacing}
              onChange={(event) =>
                setSpacingDimention({
                  ...spacingDimention,
                  [event.target.name]: event.target.value,
                })
              }
            />
            </Grid>

          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" onSubmit={handleSubmit} >
              Submit
            </Button>

          </Grid>
       
        </Grid>
      </Paper>

     
      {/* 
error={Boolean(errors.value2)}
  helperText={errors.value2} */}
    </>
  );
}
