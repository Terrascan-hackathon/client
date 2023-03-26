import { getBase64Image } from "../../utils/base64";
import PropTypes from "prop-types";
import { useState } from "react";
import SnackNotify from "../../components/snackbar/SnackNotify";
import { Box, ButtonBase, Typography } from "@mui/material";
import { Upload } from "@mui/icons-material";

const InputPhoto = (props) => {

const { name, photo, setPhoto, disabled } = props;
const [error, setError] = useState("");

const createCoverPhoto = async (photo) => {
  const base64 = await getBase64Image(photo)
    .then((res) => {
      return res;
    })
    .catch((err) => console.log(err));
  photo.size < 40000
    ? setPhoto(base64) && setError("")
    : setError("File size too large. -> max 40 KB");
};

return (
  <>
  <Box component='img' sx={{ width:'200px', height: '120px',m: 4, width: 300}} alt={'post-preview'} src={`${photo}`} />
    <input
      disabled={disabled}
      type={"file"}
      name={`${name}-button-input`}
      accept="image/*"
      id={`${name}-button-input`}
      style={{ display: "none", height: 0, width: 0 }}
      onChange={(e) => createCoverPhoto(e.target.files[0])}
    />
    <ButtonBase disabled={disabled}>
      <label
        htmlFor={`${name}-button-input`}
        style={{ height: "100%", width: "100%", cursor: "pointer" }}
      >
        <Upload />
        <Typography paddingLeft={1}>
          {photo ? "Change photo" : "Add photo"}
        </Typography>
      </label>
    </ButtonBase>
    <SnackNotify
      open={error.length > 0}
      message={"File size too large. (max 40KB)"}
      onClose={() => setError("")}
      autoHide={"2000"}
      isError={true}
    >
      {error}
    </SnackNotify>
  </>
);
};

InputPhoto.defaultProps = {
photo: "",
setPhoto: () => undefined,
disabled: false,
};

InputPhoto.propTypes = {
    name: PropTypes.string.isRequired,
    photo: PropTypes.string,
    setPhoto: PropTypes.func,
    disabled: PropTypes.bool,
}

export default InputPhoto;