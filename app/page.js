"use client";
import { useSelector } from "react-redux";
import CardList from "@/components/CardList/CardList";
import { Typography } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const Home = () => {
  const { isLoading, institutionsContent = [] } = useSelector(
    (state) => state.institutions
  );

  return (
    <>
      {institutionsContent &&
      Array.isArray(institutionsContent) &&
      institutionsContent.length > 0 ? (
        <CardList
          institutionsContent={institutionsContent}
          isLoading={isLoading}
        />
      ) : (
        <Typography variant="h4" gutterBottom textAlign="center" marginTop={20}>
          click show cards to fetch cards
        </Typography>
      )}
    </>
  );
};

export default Home;
