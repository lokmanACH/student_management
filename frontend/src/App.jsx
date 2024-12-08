import * as React from "react";
import { extendTheme, styled } from "@mui/material/styles";
import PersonIcon from "@mui/icons-material/Person";
import ViewListIcon from "@mui/icons-material/ViewList";
import FilterListIcon from "@mui/icons-material/FilterList";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { PageContainer } from "@toolpad/core/PageContainer";
import Grid from "@mui/material/Grid2";
import Students from "./components/students/students";
import Speciality from "./components/specialty/speciality";
import FinalResult from "./components/finaleResult/finalResult";
import Loading from "./loading";
import Alerts from "./alert";
import { getRequest } from "../API/request";

const NAVIGATION = [
  {
    kind: "header",
    title: "Main items",
  },
  {
    segment: "students",
    title: "Students",
    icon: <PersonIcon />,
  },
  {
    segment: "specialty",
    title: "Specialtys",
    icon: <ViewListIcon />,
  },
  {
    segment: "final-results",
    title: "Final Results",
    icon: <FilterListIcon />,
  },
];

const demoTheme = extendTheme({
  colorSchemes: { light: true, dark: true },
  colorSchemeSelector: "class",
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function useDemoRouter(initialPath) {
  const [pathname, setPathname] = React.useState(initialPath);

  const router = React.useMemo(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path) => setPathname(String(path)),
    };
  }, [pathname]);

  return router;
}

export default function App(props) {
  const { window, changeAlert, changeLoading } = props;
  const [data, setData] = React.useState({});
  const changeData = (dt) => {
    setData(dt);
  };
  React.useEffect(() => {
    const doAsyncFunc = async () => {
      //
      const res = await getRequest(`/student/all`);
      const resSpec = await getRequest(`/speciality/all`);
      if (res.status == 200 && resSpec.status == 200) {
        changeData({
          students: res.result,
          speciality: resSpec.result,
        });
      }
    };

    doAsyncFunc();
  }, [/*data*/]);

  const router = useDemoRouter("/students");
  // Remove this const when copying and pasting into your project.
  const demoWindow = window ? window() : undefined;

  switch (router.pathname) {
    case "/students":
      return (
        <>
          <AppProvider
            navigation={NAVIGATION}
            router={router}
            theme={demoTheme}
            window={demoWindow}
          >
            <DashboardLayout>
              <PageContainer>
                <Students
                  changeAlert={changeAlert}
                  changeLoading={changeLoading}
                  data={data}
                  changeData={changeData}
                />
              </PageContainer>
            </DashboardLayout>
          </AppProvider>
        </>
      );
      break;

    case "/specialty":
      return (
        <>
          <AppProvider
            navigation={NAVIGATION}
            router={router}
            theme={demoTheme}
            window={demoWindow}
          >
            <DashboardLayout>
              <PageContainer>
                <Speciality
                  changeAlert={changeAlert}
                  changeLoading={changeLoading}
                  data={data}
                  changeData={changeData}
                />
              </PageContainer>
            </DashboardLayout>
          </AppProvider>
        </>
      );
      break;

    case "/final-results":
      return (
        <>
          <AppProvider
            navigation={NAVIGATION}
            router={router}
            theme={demoTheme}
            window={demoWindow}
          >
            <DashboardLayout>
              <PageContainer>
                <FinalResult
                  changeAlert={changeAlert}
                  changeLoading={changeLoading}
                  data={data}
                  changeData={changeData}
                />
              </PageContainer>
            </DashboardLayout>
          </AppProvider>
        </>
      );
      break;
  }
}
