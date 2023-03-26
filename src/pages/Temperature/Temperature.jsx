import React, { useEffect } from "react";
import FormSelector from "../../components/form-selector/FormSelector";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";

const Temperature = () => {
  const images = useSelector((state) => state?.dataState?.data);

  return (
    <div>
      <FormSelector />
      {images && images.country ? (
        <>
          <Box
            component={"img"}
            alt={"alert-cover"}
            src={`data:image/png;base64, ${images?.country}`}
            sx={{ width: "50%", p: 1 }}
          />
          <Box
            component={"img"}
            alt={"alert-cover"}
            src={`data:image/png;base64, ${images?.temperature}`}
            sx={{ width: "50%", p: 1 }}
          />
        </>
      ) : null}
    </div>
  );
};

export default Temperature;
