import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { useRouter } from "next/navigation";

const CardContainer = ({ cardContent }) => {
  const router = useRouter();

  return (
    <Grid item xs={11} sm={6} md={3} lg={3} xl={3}>
      <Card>
        <CardActionArea
          onClick={() =>
            router.push(`InstitutionPage/${cardContent.id}`, { scroll: false })
          }
        >
          <CardMedia
            component="img"
            height="140"
            image="https://res.cloudinary.com/goeducate-inc/image/upload/q_auto/defaultCard_xdoa5p.png"
            alt="Go Educate Logo"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              noWrap
              sx={{ textOverflow: "ellipsis", whiteSpace: "nowrap" }}
            >
              {cardContent.title}
            </Typography>
            <Typography
              sx={{ fontSize: "15px", textAlign: "left" }}
              color="text.secondary"
            >
              Hosted By: Cambridge University
            </Typography>
            <Typography
              sx={{ fontSize: "15px", textAlign: "left" }}
              color="text.secondary"
            >
              <LocationOnIcon sx={{ fontSize: "15px" }} /> Anekal, California
            </Typography>
            <Typography
              sx={{ fontSize: "15px", textAlign: "left" }}
              color="text.secondary"
            >
              <AccessTimeIcon sx={{ fontSize: "15px" }} /> 2:02 PM
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              noWrap
              sx={{ textOverflow: "ellipsis", whiteSpace: "nowrap" }}
            >
              {cardContent.body}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default CardContainer;
