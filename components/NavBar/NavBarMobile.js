import {
  Button,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import MoreIcon from "@mui/icons-material/MoreVert";

const NavBarMobile = ({
  mobileMoreAnchorEl,
  isMobileMenuOpen,
  handleMobileMenuClose,
  handleMobileMenuOpen,
}) => {
  const mobileMenuId = "primary-search-account-menu-mobile";

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <Button variant="text" href="/">
          Home
        </Button>
      </MenuItem>
      <MenuItem>
        <Button variant="text">About </Button>
      </MenuItem>
      <MenuItem>
        <Button variant="text" href="/form">
          Contact us
        </Button>
      </MenuItem>
    </Menu>
  );
  return (
    <>
      <Grid
        sx={{ display: { xs: "flex", md: "none" } }}
        container
        alignItems="center"
        justifyContent="end"
        spacing={12}
      >
        <Grid item xs={6}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            GoEducate
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Grid container justifyContent="end">
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
      {renderMobileMenu}
    </>
  );
};

export default NavBarMobile;
