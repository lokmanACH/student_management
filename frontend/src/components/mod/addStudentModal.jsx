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

const currencies = [
  {
    value: "gl",
    label: "GL",
  },
  {
    value: "ti",
    label: "TI",
  },
  {
    value: "sci",
    label: "SCI",
  },
  {
    value: "si",
    label: "SI",
  },
];

export default function AddStudentModal({ open, handleClose }) {
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
                First Name
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
                Last Name
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
                  label="1st Semester Mark"
                  variant="standard"
                  type="number"
                  inputProps={{ min: 0, max: 20, step: 1 }}
                  sx={{ width: "200px" }}
                />

                <TextField
                  id="input-with-sx"
                  label="2nd Semester Mark"
                  variant="standard"
                  type="number"
                  inputProps={{ min: 0, max: 20, step: 1 }}
                  sx={{ width: "200px" }}
                />

                <TextField
                  id="input-with-sx"
                  label="3rd Semester Mark"
                  variant="standard"
                  type="number"
                  inputProps={{ min: 0, max: 20, step: 1 }}
                  sx={{ width: "200px" }}
                />

                <TextField
                  id="input-with-sx"
                  label="4th Semester Mark"
                  variant="standard"
                  type="number"
                  inputProps={{ min: 0, max: 20, step: 1 }}
                  sx={{ width: "200px" }}
                />
              </div>
            </Box>

            <Divider sx={{ my: 2, borderBottomWidth: 3, marginBottom: 3 }} />

            <Box
              component="form"
              sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
              noValidate
              autoComplete="off"
            >
              <div>
                <TextField
                  id="standard-select-specialty"
                  select
                  label="Select 1st specialty"
                  defaultValue="EUR"
                  helperText="Please select your specialty"
                  variant="standard"
                >
                  {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>

                <TextField
                  id="standard-select-specialty"
                  select
                  label="Select 2nd specialty"
                  defaultValue="EUR"
                  helperText="Please select your specialty"
                  variant="standard"
                >
                  {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>

                <TextField
                  id="standard-select-specialty"
                  select
                  label="Select 3rd specialty"
                  defaultValue="EUR"
                  helperText="Please select your specialty"
                  variant="standard"
                >
                  {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>

                <TextField
                  id="standard-select-specialty"
                  select
                  label="Select 4th specialty"
                  defaultValue="EUR"
                  helperText="Please select your specialty"
                  variant="standard"
                >
                  {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </div>
            </Box>
          </Box>

          <Stack direction="row" spacing={2}>
            <Button color="error" onClick={handleClose}>Cancel</Button>
            <Button variant="contained" color="primary">
              submit
            </Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}
