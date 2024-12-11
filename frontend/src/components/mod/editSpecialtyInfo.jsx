import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { putRequest } from "../../../API/request";

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

export default function EditSpecialtyInfo({
  open,
  handleClose,
  changeAlert,
  changeLoading,
  data,
  changeData,
  giveMeNew,
}) {
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
              onClick={async () => {
                changeLoading(true);
                const res = await putRequest(
                  `/speciality/${data?.specID ?? null}/update`,
                  {
                    nomSpec: dataSet.specialityName,
                    nbrPlaces: Number(dataSet.specialityPlaceNumber),
                  }
                );
                if (res.status == 200) {
                  changeAlert(true, "success");
                } else {
                  changeAlert(true, "filled");
                }

                changeLoading(false);
                giveMeNew();
                handleClose();
              }}
            >
              edit
            </Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}
