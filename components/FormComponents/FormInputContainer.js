"use client";
import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Button, Grid, MenuItem, TextField, Typography } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";

const validationSchema = yup.object({
  schoolName: yup
    .string("Enter your school name")
    .required("School name is required"),
  areaToFocus: yup
    .string("Enter the area to focus/major")
    .required("area to focus/major is required"),
  gpa: yup.string("Enter the GPA").required("GPA is required"),
  startDate: yup.date().required("Start Date is required"),
  startDate: yup.date().required("End Date is required"),
  DegreeAwards: yup
    .string("Enter the Degree/Awards")
    .required("Degree/Awards is required"),
  skillsLearned: yup.string("Enter the skills").required("skills  is required"),
  comments: yup.string("Enter the comments").required("Comment is required"),
});

const FormInputContainer = ({
  handleDialogBoxOpen,
  SetFormData,
  resetForm,
  setResetForm,
}) => {
  const formik = useFormik({
    initialValues: {
      schoolName: "",
      areaToFocus: "",
      startDate: null,
      endDate: null,
      gpa: "",
      DegreeAwards: "",
      skillsLearned: "",
      comments: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
      handleDialogBoxOpen();
      SetFormData(values);
    },
  });

  const handleReset = () => {
    formik.resetForm();
    formik.setFieldValue("startDate", null);
    formik.setFieldValue("endDate", null);
    setResetForm(false);
  };

  useEffect(() => {
    if (resetForm) handleReset();
  }, [resetForm]);

  return (
    <form onSubmit={formik.handleSubmit} onReset={handleReset}>
      <Grid
        marginTop={4}
        container
        justifyContent="center"
        padding={7}
        spacing={2}
      >
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="schoolName"
            name="schoolName"
            label="School Name"
            value={formik.values.schoolName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.schoolName && Boolean(formik.errors.schoolName)
            }
            helperText={formik.touched.schoolName && formik.errors.schoolName}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="areaToFocus"
            name="areaToFocus"
            label="Area To Focus/Major"
            value={formik.values.areaToFocus}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.areaToFocus && Boolean(formik.errors.areaToFocus)
            }
            helperText={formik.touched.areaToFocus && formik.errors.areaToFocus}
          />
        </Grid>
        <Grid item xs={12}>
          <Grid container justifyContent="start">
            <Typography>Time Period</Typography>
          </Grid>
        </Grid>
        <Grid item>
          <Grid
            container
            display="flex"
            // justifyContent="space-between"
            spacing={3}
          >
            <Grid item sx={6}>
              <DatePicker
                label="Start Date"
                value={formik.values.startDate}
                onChange={(date) => formik.setFieldValue("startDate", date)}
                onBlur={formik.handleBlur}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    fullWidth
                    id="startDate"
                    name="startDate"
                    error={
                      formik.touched.startDate &&
                      Boolean(formik.errors.startDate)
                    }
                    helperText={
                      formik.touched.startDate && formik.errors.startDate
                    }
                  />
                )}
              />
            </Grid>

            <Grid item sx={6}>
              <DatePicker
                label="End Date"
                value={formik.values.endDate}
                onChange={(date) => formik.setFieldValue("endDate", date)}
                onBlur={formik.handleBlur}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    fullWidth
                    id="endDate"
                    name="endDate"
                    error={
                      formik.touched.endDate && Boolean(formik.errors.endDate)
                    }
                    helperText={formik.touched.endDate && formik.errors.endDate}
                  />
                )}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="gpa"
            name="gpa"
            label="GPA"
            value={formik.values.gpa}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.gpa && Boolean(formik.errors.gpa)}
            helperText={formik.touched.gpa && formik.errors.gpa}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            select
            label="Skills Learned"
            name="skillsLearned"
            id="skillsLearned"
            value={formik.values.skillsLearned}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.skillsLearned &&
              Boolean(formik.errors.skillsLearned)
            }
            helperText={
              formik.touched.skillsLearned && formik.errors.skillsLearned
            }
          >
            <MenuItem value={10}>React</MenuItem>
            <MenuItem value={20}>Java</MenuItem>
            <MenuItem value={30}>Python</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            select
            label="Degree/Awards"
            name="DegreeAwards"
            id="DegreeAwards"
            value={formik.values.DegreeAwards}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.DegreeAwards && Boolean(formik.errors.DegreeAwards)
            }
            helperText={
              formik.touched.DegreeAwards && formik.errors.DegreeAwards
            }
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            sx={{ height: "100px" }}
            id="comments"
            name="comments"
            label="Comments"
            multiline
            rows={3}
            value={formik.values.comments}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.comments && Boolean(formik.errors.comments)}
            helperText={formik.touched.comments && formik.errors.comments}
          />
        </Grid>
        <Grid item xs={12}>
          <Grid
            container
            direction="row"
            marginTop={5}
            justifyContent="center"
            sx={{
              display: "flex",
              "& > *": {
                m: 1,
              },
            }}
          >
            <Grid item>
              <Button
                color="error"
                variant="outlined"
                type="reset"
                fullWidth
                sx={{ maxWidth: "100px" }}
              >
                Reset
              </Button>
            </Grid>
            <Grid item>
              <Button
                color="primary"
                fullWidth
                variant="outlined"
                type="submit"
                sx={{ maxWidth: "100px" }}
              >
                add
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
};

export default FormInputContainer;
