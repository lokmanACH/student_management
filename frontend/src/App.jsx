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

const Skeleton = styled("div")(({ theme, height }) => ({
  backgroundColor: theme.palette.action.hover,
  borderRadius: theme.shape.borderRadius,
  height,
  content: '" "',
}));

export default function App(props) {
  const { window } = props;

  const router = useDemoRouter("/students");
  // Remove this const when copying and pasting into your project.
  const demoWindow = window ? window() : undefined;

  switch (router.pathname) {
    case "/students":
      return (
        <AppProvider
          navigation={NAVIGATION}
          router={router}
          theme={demoTheme}
          window={demoWindow}
        >
          <DashboardLayout>
            <PageContainer>
              <Students />
            </PageContainer>
          </DashboardLayout>
        </AppProvider>
      );
      break;

    case "/specialty":
            return (
              <AppProvider
                navigation={NAVIGATION}
                router={router}
                theme={demoTheme}
                window={demoWindow}
              >
                <DashboardLayout>
                  <PageContainer>
                    <Students />
                  </PageContainer>
                </DashboardLayout>
              </AppProvider>
            );
      break;

    case "/final-results":
            return (
              <AppProvider
                navigation={NAVIGATION}
                router={router}
                theme={demoTheme}
                window={demoWindow}
              >
                <DashboardLayout>
                  <PageContainer>
                    <Students />
                  </PageContainer>
                </DashboardLayout>
              </AppProvider>
            );
      break;
  }
  // return (
  //   <AppProvider
  //     navigation={NAVIGATION}
  //     router={router}
  //     theme={demoTheme}
  //     window={demoWindow}
  //   >
  //     <DashboardLayout>
  //       <PageContainer>
  //         <h1>i don't know</h1>
  //       </PageContainer>
  //     </DashboardLayout>
  //   </AppProvider>
  // );
}
