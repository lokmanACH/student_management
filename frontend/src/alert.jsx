import "./alert.css";
import * as React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const Alerts = (prop) => {
  const changeAlert = prop.changeAlert;
  const alert = prop.alert;

  const finsh = () => {
    setTimeout(() => {
      changeAlert(null, null);
    }, 2000);
  };

  switch (alert.type) {
    // about success
    case "success":
      finsh();
      return (
        <div className="alertContainer">
          <Stack sx={{ width: "100%" }} spacing={2}>
            <Alert variant="filled" severity="success">
              This is a filled success Alert.
            </Alert>
          </Stack>
        </div>
      );
      break;

    case "success_login":
      finsh();
      return (
        <div className="alertContainer">
          <Stack sx={{ width: "100%" }} spacing={2}>
            <Alert variant="filled" severity="success">
              Login successful! Welcome back!
            </Alert>
          </Stack>
        </div>
      );
      break;

    // about filled
    case "filled":
      finsh();
      return (
        <div className="alertContainer">
          <Stack sx={{ width: "100%" }} spacing={2}>
            <Alert variant="filled" severity="error">
              Oops! Something went wrong on the server. Please try again later.
            </Alert>
          </Stack>
        </div>
      );
      break;

    case "filled_login":
      finsh();
      return (
        <div className="alertContainer">
          <Stack sx={{ width: "100%" }} spacing={2}>
            <Alert variant="filled" severity="error">
              Invalid username or password. Please try again.
            </Alert>
          </Stack>
        </div>
      );
      break;

    // about warning
    case "warning":
      finsh();
      return (
        <div className="alertContainer">
          <Stack sx={{ width: "100%" }} spacing={2}>
            <Alert variant="filled" severity="warning">
              This is a missing values Alert.
            </Alert>
          </Stack>
        </div>
      );
      break;

    // about info
    case "info":
      finsh();
      return (
        <div className="alertContainer">
          <Stack sx={{ width: "100%" }} spacing={2}>
            <Alert variant="filled" severity="info">
              Please try your request again.
            </Alert>
          </Stack>
        </div>
      );
      break;
  }
};

export default Alerts;
