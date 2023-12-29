"use client";
import NavBar from "@/components/NavBar/NavBar";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const SetupDatePicker = ({ children }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <NavBar />
      {children}
    </LocalizationProvider>
  );
};

export default SetupDatePicker;
