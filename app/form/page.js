"use client";
import FormComponent from "@/components/FormComponents/FormComponent";
import { Box, Grid } from "@mui/material";
import Paper from "@mui/material/Paper";

const FormPage = () => {
  return (
    <Grid
      container
      padding={1}
      justifyContent="center"
      alignItems="center"
      height="90vh"
      width="100%"
    >
      <Grid item sx={{ maxWidth: "600px" }}>
        <Paper elevation={3}>
          <FormComponent />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default FormPage;
