import * as React from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import AddStudentModal from "../mod/addStudentModal";

export default function AddStudent() {
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
        Add New Student
      </Button>
      <AddStudentModal open={open} handleClose={handleClose} />
    </>
  );
}
