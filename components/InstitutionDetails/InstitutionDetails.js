import { Box, Typography } from "@mui/material";

const InstitutionDetails = ({ description, title }) => {
  return (
    <Box
      sx={{ width: "100%", height: "100vh" }}
      marginTop="50px"
      textAlign="center"
    >
      <Typography variant="h3" gutterBottom>
        Title
      </Typography>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Typography variant="h4" gutterBottom>
        Details
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        {description}
      </Typography>
    </Box>
  );
};

export default InstitutionDetails;
