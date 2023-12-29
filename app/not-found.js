import { Box, Icon, Typography } from "@mui/material";
import SickIcon from "@mui/icons-material/Sick";

const EmptyPage = () => {
  return (
    <Box
      sx={{ width: "100%", height: "100vh" }}
      marginTop="50px"
      textAlign="center"
    >
      <Icon fontSize="large">
        <SickIcon fontSize="large" />
      </Icon>
      <Typography variant="h6" gutterBottom>
        No values
      </Typography>
    </Box>
  );
};

export default EmptyPage;
