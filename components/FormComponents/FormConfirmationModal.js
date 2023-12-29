import { Box, Grid, IconButton, Modal, Typography } from "@mui/material";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import CloseIcon from "@mui/icons-material/Close";

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

const FormConfirmationModal = ({
  openConfirmationModal,
  handleModalClose,
  schoolName,
}) => {
  return (
    <Modal
      open={openConfirmationModal}
      onClose={handleModalClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style} textAlign="center">
        <IconButton
          edge="end"
          onClick={handleModalClose}
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
              <span style={{ color: "#3f51b5" }}>{schoolName}</span> will
              contact back to you
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
};

export default FormConfirmationModal;
