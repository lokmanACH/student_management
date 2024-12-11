import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { deleteRequest } from "../../../API/request";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function Asking({
  handleClose,
  open,
  changeAlert,
  changeLoading,
  data,
  changeData,
  giveMeNew,
}) {
  return (
    <React.Fragment>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Confirmation
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: "absolute",
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Typography gutterBottom>
            Are you sure you want to delete this item? This action cannot be
            undone.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button
            variant="outlined"
            color="error"
            onClick={async () => {
              changeLoading(true);
              const res = await deleteRequest(
                
                data?.url,
                null
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
            Delete
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
}
