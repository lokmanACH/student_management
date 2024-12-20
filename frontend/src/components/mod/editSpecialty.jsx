import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
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

export default function EditSpecialty({
  open,
  handleClose,
  changeAlert,
  changeLoading,
  giveMeNew,
  data,
}) {
  const [dataSet, setData] = React.useState({});
  const currencies =
    data?.speciality?.map((spec) => ({
      value: spec.numSpec,
      label: spec?.nomSpec?.toUpperCase() ?? null,
    })) || [];
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
                  label="Change specialty"
                  defaultValue="EUR"
                  helperText="Please select your specialty"
                  variant="standard"
                  onChange={(e) => {
                    dataSet.newChoice = e.target.value;
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
                const foundItem = data.oldChoix?.find(
                  (spec) => spec.numSpec === dataSet?.newChoice
                );

                if (foundItem && foundItem.numSpec != data.numSpec) {
                  // switching the orders
                  const obj = [
                    {
                      numE: data?.uid,
                      numSpec: dataSet?.newChoice,
                      ordreChoix: data?.ordreChoix,
                    },
                    {
                      numE: data?.uid,
                      numSpec: data?.numSpec,
                      ordreChoix: foundItem?.ordreChoix,
                    },
                  ];

                  const res = await putRequest(`/choice/updateAll`, obj);

                  if (res.status == 200) {
                    changeAlert(true, "success");
                  } else {
                    changeAlert(true, "filled");
                  }
                } else {
                  changeAlert(true, "success");
                }
                handleClose();
                giveMeNew();
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
