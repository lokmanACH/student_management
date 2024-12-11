import * as React from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import AddStudentModal from "../mod/addStudentModal";
import AddSpecialityModal from "../mod/addSpecialityModal";

export default function AddSpeciality({
  changeAlert,
  changeLoading,
  data,
  changeData,
  giveMeNew,
}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Button
        component="label"
        role={undefined}
        variant="contained"
        tabIndex={-1}
        startIcon={<AddIcon />}
        onClick={handleOpen}
      >
        Add New Speciality
      </Button>
      <AddSpecialityModal
        open={open}
        handleClose={handleClose}
        changeAlert={changeAlert}
        changeLoading={changeLoading}
        data={data}
        changeData={changeData}
        giveMeNew={giveMeNew}
      />
    </>
  );
}
