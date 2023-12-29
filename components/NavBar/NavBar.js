"use client";
import { getInstitutions } from "@/redux/features/data-slice";
import {
  AppBar,
  Box,
  Button,
  CircularProgress,
  Divider,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import MoreIcon from "@mui/icons-material/MoreVert";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useState } from "react";

const progressBar = () => {
  console.log("progessss");
  return <CircularProgress color="inherit" size={28} />;
};

const NavBar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.institutions);

  let checkParams = pathname === "/";
  let buttonLabel = !checkParams ? "Cards Page" : "Show Cards";

  const navButton = () => {
    if (checkParams) {
      dispatch(getInstitutions());
    } else {
      router.push("/", { scroll: false });
    }
  };

  const drawer = (
    <Box sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
    </Box>
  );

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  const mobileMenuId = "primary-search-account-menu-mobile";

  const openMobileMenuClose = () => {
    setMobileMoreAnchorEl(!mobileMoreAnchorEl);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

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
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Grid
            sx={{ flexGrow: 1, display: { md: "flex", xs: "none" } }}
            container
            alignItems="end"
            spacing={2}
          >
            <Grid item xs={2}>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                GoEducate
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <Grid
                container
                justifyContent="center"
                alignItems="end"
                spacing={2}
                // marginTop={}
              >
                <Button variant="text" color="inherit" href="/">
                  Home
                </Button>
                <Button variant="text" color="inherit">
                  About
                </Button>
                <Button variant="text" color="inherit" href="/form">
                  Contact us
                </Button>
              </Grid>
            </Grid>
            <Grid item xs={2}>
              <Grid container justifyContent="end">
                <Button
                  sx={{ height: "40px", maxWidth: "140px" }}
                  disable={isLoading.toString()}
                  onClick={navButton}
                  variant="outlined"
                  color="inherit"
                >
                  {isLoading ? progressBar() : buttonLabel}
                </Button>
              </Grid>
            </Grid>
          </Grid>

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
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
