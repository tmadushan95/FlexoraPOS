import { CssVarsProvider } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";
import Box from "@mui/joy/Box";

import Sidebar from "../../layouts/main-layout/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

// ================================================================================================================================================ //
// ==========================================================|| VIEWS - LAYOUTS - MAINLAYOUT ||==================================================== //
// ================================================================================================================================================ //

const MainLayout = () => {
  return (
    <CssVarsProvider disableTransitionOnChange>
      <CssBaseline />
      <Box sx={{ display: "flex", height: "100dvh", overflow: "hidden" }}>
        <Sidebar />
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#f9f9f9",
            m: 2,
            overflow: "hidden", // prevents layout scrollbars
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </CssVarsProvider>
  );
};

export default MainLayout;
