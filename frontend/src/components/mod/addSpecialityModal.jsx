import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Divider } from "@mui/material";
import BadgeIcon from "@mui/icons-material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function AddSpecialityModal({ open, handleClose }) {
  const [dataSet, setData] = React.useState({});
  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={{ "& > :not(style)": { m: 1 } }}>
            <FormControl variant="standard">
              <InputLabel htmlFor="input-with-icon-adornment">
                Speciality Name
              </InputLabel>
              <Input
                id="input-with-icon-adornment"
                onChange={(e) => {
                  dataSet.specialityName = e.target.value;
                  setData(dataSet);
                }}
              />
            </FormControl>

            <FormControl variant="standard">
              <InputLabel htmlFor="input-with-icon-adornment">
                Place Number
              </InputLabel>
              <Input
                id="input-with-icon-adornment"
                type="number"
                onChange={(e) => {
                  dataSet.specialityPlaceNumber = e.target.value;
                  setData(dataSet);
                }}
              />
            </FormControl>
          </Box>

          <Stack direction="row" spacing={2}>
            <Button color="error" onClick={handleClose}>
              Cancel
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                console.log(dataSet);
              }}
            >
              submit
            </Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}