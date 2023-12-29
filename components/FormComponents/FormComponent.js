"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import {
  Box,
  Button,
  Grid,
  MenuItem,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { DatePicker } from "@mui/x-date-pickers";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  height: "35%",
  borderRadius: "10px",
  bgcolor: "background.paper",
  boxShadow: 24,
};

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

const FormComponent = () => {
  const [formData, SetFormData] = useState();
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

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // dialog Box

  const [openDialogBox, setDialogBoxOpen] = useState(false);

  const handleDialogBoxOpen = () => {
    setDialogBoxOpen(true);
  };

  const handleDialogBoxClose = () => {
    setDialogBoxOpen(false);
  };

  const handleDialogBoxSubmit = () => {
    setDialogBoxOpen(false);
    handleOpen();
    handleReset();
  };

  const handleReset = () => {
    formik.resetForm();
  };

  return (
    <>
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
              helperText={
                formik.touched.areaToFocus && formik.errors.areaToFocus
              }
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
                  value={formik.values.dateOfBirth}
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
                  value={formik.values.dateOfBirth}
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
                      helperText={
                        formik.touched.endDate && formik.errors.endDate
                      }
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
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
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
                formik.touched.DegreeAwards &&
                Boolean(formik.errors.DegreeAwards)
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
                  color="primary"
                  variant="outlined"
                  type="reset"
                  fullWidth
                  sx={{ maxWidth: "100px" }}
                >
                  cancel
                </Button>
              </Grid>
              <Grid item>
                <Button
                  color="primary"
                  // variant="contained"
                  fullWidth
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

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} textAlign="center">
          <IconButton
            edge="end"
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: 0,
              right: 0,
              marginRight: 2,
              marginTop: 1,
              color: "gray.500",
              "&:hover": {
                color: "gray.700",
              },
            }}
          >
            <CloseIcon />
          </IconButton>
          <Grid
            container
            spacing={2}
            direction="column"
            justifyContent="center"
            alignItems="center"
            height="100%"
          >
            <Grid item sx={12}>
              <CheckCircleRoundedIcon color="success" sx={{ fontSize: 50 }} />
            </Grid>
            <Grid item sx={12}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Save Program
              </Typography>
            </Grid>
            <Grid item sx={12}>
              <Typography id="modal-modal-description">
                Successfully Confirmed your registration{" "}
                <span style={{ color: "#3f51b5" }}>{formData?.schoolName}</span>{" "}
                will contact back to you
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Modal>
      <Dialog
        open={openDialogBox}
        onClose={handleDialogBoxClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Confirmation"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to save this information
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogBoxClose}>Disagree</Button>
          <Button onClick={handleDialogBoxSubmit} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default FormComponent;
