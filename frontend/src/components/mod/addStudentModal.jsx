import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import { Divider } from "@mui/material";
import BadgeIcon from "@mui/icons-material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { postRequest } from "../../../API/request";

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

export default function AddStudentModal({
  open,
  handleClose,
  changeAlert,
  changeLoading,
  data,
  changeData,
  giveMeNew
}) {
  const [dataSet, setData] = React.useState({});
  const currencies =
    data?.speciality?.map((spec) => ({
      value: spec.numSpec,
      label: spec?.nomSpec?.toUpperCase() ?? null,
    })) || [];

  return (
    <div>
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
                Student UID
              </InputLabel>
              <Input
                id="input-with-icon-adornment"
                type="number"
                startAdornment={
                  <InputAdornment position="start">
                    <BadgeIcon />
                  </InputAdornment>
                }
                required
                onChange={(e) => {
                  dataSet.uid = e.target.value;
                  setData(dataSet);
                }}
              />
            </FormControl>
          </Box>
          <Box sx={{ "& > :not(style)": { m: 1 } }}>
            <FormControl variant="standard">
              <InputLabel htmlFor="input-with-icon-adornment">
                First Name
              </InputLabel>
              <Input
                id="input-with-icon-adornment"
                required
                onChange={(e) => {
                  dataSet.firstName = e.target.value;
                  setData(dataSet);
                }}
              />
            </FormControl>

            <FormControl variant="standard">
              <InputLabel htmlFor="input-with-icon-adornment">
                Last Name
              </InputLabel>
              <Input
                id="input-with-icon-adornment"
                onChange={(e) => {
                  dataSet.lastName = e.target.value;
                  setData(dataSet);
                }}
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
                  onChange={(e) => {
                    dataSet.firstMark = e.target.value;
                    setData(dataSet);
                  }}
                />

                <TextField
                  id="input-with-sx"
                  label="2nd Semester Mark"
                  variant="standard"
                  type="number"
                  inputProps={{ min: 0, max: 20, step: 1 }}
                  sx={{ width: "200px" }}
                  onChange={(e) => {
                    dataSet.secondMark = e.target.value;
                    setData(dataSet);
                  }}
                />

                <TextField
                  id="input-with-sx"
                  label="3rd Semester Mark"
                  variant="standard"
                  type="number"
                  inputProps={{ min: 0, max: 20, step: 1 }}
                  sx={{ width: "200px" }}
                  onChange={(e) => {
                    dataSet.thirdMark = e.target.value;
                    setData(dataSet);
                  }}
                />

                <TextField
                  id="input-with-sx"
                  label="4th Semester Mark"
                  variant="standard"
                  type="number"
                  inputProps={{ min: 0, max: 20, step: 1 }}
                  sx={{ width: "200px" }}
                  onChange={(e) => {
                    dataSet.fourthMark = e.target.value;
                    setData(dataSet);
                  }}
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
                  onChange={(e) => {
                    dataSet.firstChoice = e.target.value;
                    setData(dataSet);
                  }}
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
                  onChange={(e) => {
                    dataSet.secondChoice = e.target.value;
                    setData(dataSet);
                  }}
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
                  onChange={(e) => {
                    dataSet.thirdChoice = e.target.value;
                    setData(dataSet);
                  }}
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
                  onChange={(e) => {
                    dataSet.fourthChoice = e.target.value;
                    setData(dataSet);
                  }}
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
            <Button color="error" onClick={handleClose}>
              Cancel
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={async () => {
                changeLoading(true);
                try {
                  if (
                    dataSet.uid &&
                    dataSet.firstName &&
                    dataSet.lastName &&
                    dataSet.firstMark &&
                    dataSet.secondMark &&
                    dataSet.thirdMark &&
                    dataSet.fourthMark &&
                    dataSet.firstChoice &&
                    dataSet.secondChoice &&
                    dataSet.thirdChoice &&
                    dataSet.fourthChoice &&
                    dataSet.firstChoice !== dataSet.secondChoice &&
                    dataSet.firstChoice !== dataSet.thirdChoice &&
                    dataSet.firstChoice !== dataSet.fourthChoice &&
                    dataSet.secondChoice !== dataSet.thirdChoice &&
                    dataSet.secondChoice !== dataSet.fourthChoice &&
                    dataSet.thirdChoice !== dataSet.fourthChoice
                  ) {
                    const res = await postRequest("/student/add", {
                      numE: dataSet.uid,
                      nom: dataSet.firstName,
                      prenom: dataSet.lastName,
                      moyS1: dataSet.firstMark,
                      moyS2: dataSet.secondMark,
                      moyS3: dataSet.thirdMark,
                      moyS4: dataSet.fourthMark,
                    });

                    if (res.status == 200) {
                      changeAlert(true, "success");
                      await postRequest("/choice/addAll", [
                        {
                          numE: dataSet.uid,
                          numSpec: Number(dataSet.firstChoice),
                          ordreChoix: 1,
                        },
                        {
                          numE: dataSet.uid,
                          numSpec: Number(dataSet.secondChoice),
                          ordreChoix: 2,
                        },
                        {
                          numE: dataSet.uid,
                          numSpec: Number(dataSet.thirdChoice),
                          ordreChoix: 3,
                        },
                        {
                          numE: dataSet.uid,
                          numSpec: Number(dataSet.fourthChoice),
                          ordreChoix: 4,
                        },
                      ]);
                    } else {
                      changeAlert(true, "filled");
                    }
                  } else {
                    changeAlert(true, "warning");
                  }
                  giveMeNew()
                } catch (err) {
                  console.log(err);
                }
                handleClose();
                changeLoading(false);
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
