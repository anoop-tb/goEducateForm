import { getInstitutions } from "@/redux/features/data-slice";
import { Button, CircularProgress, Grid, Typography } from "@mui/material";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

const progressBar = () => {
  return <CircularProgress color="inherit" size={28} />;
};

const NavBarDesktop = () => {
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
  return (
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
        <Grid container justifyContent="center" alignItems="end" spacing={2}>
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
  );
};

export default NavBarDesktop;
