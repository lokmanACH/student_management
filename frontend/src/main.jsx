import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Loading from "./loading.jsx";
import Alerts from "./alert.jsx";

function RootComponent() {
  // for loadin
  const [loading, setLoading] = useState(false);
  const changeLoading = (status) => {
    setLoading(status);
  };

  // for alert
  const [alert, setAlert] = useState({ status: false, type: "success" });
  const changeAlert = (status, type) => {
    setAlert({ status: status, type: type });
  };

  return (
    <StrictMode>
      {loading && <Loading />}
      {alert.status && <Alerts alert={alert} changeAlert={changeAlert} />}
      <App changeAlert={changeAlert} changeLoading={changeLoading} />
    </StrictMode>
  );
}

createRoot(document.getElementById("root")).render(<RootComponent />);
