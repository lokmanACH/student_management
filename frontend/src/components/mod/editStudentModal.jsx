import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import BadgeIcon from "@mui/icons-material/Badge";
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



export default function EditStudentModal({ open, handleClose }) {
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
                New First Name
              </InputLabel>
              <Input
                id="input-with-icon-adornment"
                startAdornment={
                  <InputAdornment position="start">
                    <BadgeIcon />
                  </InputAdornment>
                }
              />
            </FormControl>

            <FormControl variant="standard">
              <InputLabel htmlFor="input-with-icon-adornment">
                New Last Name
              </InputLabel>
              <Input
                id="input-with-icon-adornment"
                startAdornment={
                  <InputAdornment position="start">
                    <BadgeIcon />
                  </InputAdornment>
                }
              />
            </FormControl>

            <Box
              component="form"
              sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
              noValidate
              autoComplete="off"
            >
              <div>
                <TextField
                  id="input-with-sx"
                  label="New 1st Semester Mark"
                  variant="standard"
                  type="number"
                  inputProps={{ min: 0, max: 20, step: 1 }}
                  sx={{ width: "200px" }}
                />

                <TextField
                  id="input-with-sx"
                  label="New 2nd Semester Mark"
                  variant="standard"
                  type="number"
                  inputProps={{ min: 0, max: 20, step: 1 }}
                  sx={{ width: "200px" }}
                />

                <TextField
                  id="input-with-sx"
                  label="New 3rd Semester Mark"
                  variant="standard"
                  type="number"
                  inputProps={{ min: 0, max: 20, step: 1 }}
                  sx={{ width: "200px" }}
                />

                <TextField
                  id="input-with-sx"
                  label="New 4th Semester Mark"
                  variant="standard"
                  type="number"
                  inputProps={{ min: 0, max: 20, step: 1 }}
                  sx={{ width: "200px" }}
                />
              </div>
            </Box>
          </Box>

          <Stack direction="row" spacing={2}>
            <Button color="error" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="contained" color="primary">
              edit
            </Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}
