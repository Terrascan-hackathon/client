import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { MenuItem } from "@mui/material";
import { useDispatch } from "react-redux";
import { getData } from "../../store/actions/modelActions";

const FormSelector = () => {
  const [date, setDate] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [type, setType] = React.useState("");
  const dispatch = useDispatch();

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getData(location));
  };

  const names = ["Temperature", "Wind", "Humidity"];

  return (
    /* ------------------------ TIME SELECTOR COMPONENT ------------------------ */
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
        height: "100%",
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="date"
        variant="outlined"
        type="date"
        onChange={(e) => setDate(e.target.value)}
        value={date}
      />
      <TextField
        id="location"
        label="Location"
        variant="outlined"
        type="text"
        onChange={(e) => setLocation(e.target.value)}
        value={location}
      />

      <Button variant="contained" onClick={(e) => handleSubmit(e)}>
        SUBMIT{" "}
      </Button>
    </Box>
  );
};

export default FormSelector;
