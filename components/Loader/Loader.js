import { Box, CircularProgress } from "@mui/material";

const Loader = () => {
  return (
    <Box
      sx={{ height: "90vh", alignItems: "center" }}
      display="flex"
      justifyContent="center"
    >
      <CircularProgress />
    </Box>
  );
};

export default Loader;
