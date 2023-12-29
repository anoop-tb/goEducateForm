import { Grid } from "@mui/material";
import CardContainer from "../CardContainer/CardContainer";
import Loader from "../Loader/Loader";

const CardList = ({ isLoading, institutionsContent }) => {
  return (
    <>
      {!isLoading ? (
        <Grid
          container
          spacing={3}
          padding={1}
          justifyContent="center"
          alignContent="center"
        >
          {institutionsContent?.map((cardContent) => {
            return (
              <CardContainer key={cardContent?.id} cardContent={cardContent} />
            );
          })}
        </Grid>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default CardList;
