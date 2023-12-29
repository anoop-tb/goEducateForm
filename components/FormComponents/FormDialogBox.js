import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

const FormDialogBox = ({
  openDialogBox,
  handleDialogBoxClose,
  handleDialogBoxSubmit,
}) => {
  return (
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
  );
};

export default FormDialogBox;
