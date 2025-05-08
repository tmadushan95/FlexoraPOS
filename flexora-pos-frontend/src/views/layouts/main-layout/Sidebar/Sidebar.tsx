import GlobalStyles from "@mui/joy/GlobalStyles";
import Box from "@mui/joy/Box";
import Divider from "@mui/joy/Divider";
import IconButton from "@mui/joy/IconButton";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemButton, { listItemButtonClasses } from "@mui/joy/ListItemButton";
import ListItemContent from "@mui/joy/ListItemContent";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import SupportRoundedIcon from "@mui/icons-material/SupportRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import { useState } from "react";
import { SidebarLeft, SidebarRight } from "iconsax-react";
import { useNavigate } from "react-router-dom";

// ============================================================================================================================================ //
// ============================================ VIEWS - LAYOUTS - MAIN_LAYOUT - SIDEBAR ======================================================= //
// ============================================================================================================================================ //

const Sidebar = () => {
  const [openSidebarNavigation, setOpenSidebarNavigation] = useState(true);

  const navigate = useNavigate();

  const showHideSidebarNavigation = () => {
    setOpenSidebarNavigation(!openSidebarNavigation);
  };

  const navigateTo = (path: string) => {
    navigate(`/${path}`);
  };

  return (
    <>
      <Sheet
        className="Sidebar"
        sx={{
          position: { xs: "fixed", md: "sticky" },
          transform: {
            xs: "translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1)))",
            md: "none",
          },
          transition: "transform 0.4s, width 0.4s",
          zIndex: 10000,
          height: "100dvh",
          width: `${openSidebarNavigation ? "var(--Sidebar-width)" : "70px"}`,
          top: 0,
          p: 2,
          flexShrink: 0,
          display: "flex",
          flexDirection: "column",
          gap: 2,
          borderRight: "1px solid",
          borderColor: "divider",
        }}
      >
        <GlobalStyles
          styles={(theme) => ({
            ":root": {
              "--Sidebar-width": "220px",
              [theme.breakpoints.up("lg")]: {
                "--Sidebar-width": "240px",
              },
            },
          })}
        />

        <Box
          className="Sidebar-overlay"
          sx={{
            position: "fixed",
            zIndex: 9998,
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            opacity: "var(--SideNavigation-slideIn)",
            backgroundColor: "var(--joy-palette-background-backdrop)",
            transition: "opacity 0.4s",
            transform: {
              xs: "translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1) + var(--SideNavigation-slideIn, 0) * var(--Sidebar-width, 0px)))",
              lg: "translateX(-100%)",
            },
          }}
        />

        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          height={"10px"}
        >
          {openSidebarNavigation && (
            <>
              <Typography level="title-sm">FLEXPRA-POS</Typography>
              <IconButton
                variant="soft"
                color="primary"
                size="sm"
                onClick={showHideSidebarNavigation}
              >
                <SidebarLeft color="#636B74" variant="Bold" size={"1.125rem"} />
              </IconButton>
            </>
          )}

          {!openSidebarNavigation && (
            <IconButton
              onClick={showHideSidebarNavigation}
              variant="plain"
              color="neutral"
              size="sm"
              sx={{ marginRight: "auto" }}
            >
              <SidebarRight color="#636B74" variant="Bold" size={"1.125rem"} />
            </IconButton>
          )}
        </Box>
        <Divider />

        <Box
          sx={{
            minHeight: 0,
            overflow: "hidden auto",
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            [`& .${listItemButtonClasses.root}`]: {
              gap: 1.5,
            },
          }}
        >
          <List
            size="sm"
            sx={{
              gap: 1,
              "--List-nestedInsetStart": "30px",
              "--ListItem-radius": (theme) => theme.vars.radius.sm,
            }}
          >
            <ListItem>
              <ListItemButton onClick={() => navigateTo("")}>
                <HomeRoundedIcon />
                <ListItemContent>
                  <Typography level="title-sm">Dashboard</Typography>
                </ListItemContent>
              </ListItemButton>
            </ListItem>

            <ListItem>
              <ListItemButton onClick={() => navigateTo("Product")}>
                <DashboardRoundedIcon />
                <ListItemContent>
                  <Typography level="title-sm">Product</Typography>
                </ListItemContent>
              </ListItemButton>
            </ListItem>
          </List>
          <List
            size="sm"
            sx={{
              mt: "auto",
              flexGrow: 0,
              "--ListItem-radius": (theme) => theme.vars.radius.sm,
              "--List-gap": "8px",
              mb: 2,
            }}
          >
            <ListItem>
              <ListItemButton>
                <SupportRoundedIcon />
                Support
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>
                <SettingsRoundedIcon />
                Settings
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
        <Divider />

        {/* <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
          <Avatar
            variant="outlined"
            size="sm"
            ///src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286"
          />
          {openSidebarNavigation && (
            <>
              <Box sx={{ minWidth: 0, flex: 1 }}>
                <Typography level="title-sm">Test</Typography>
                <Typography level="body-xs">test@test.com</Typography>
              </Box>
              <IconButton size="sm" variant="plain" color="neutral">
                <LogoutRoundedIcon />
              </IconButton>
            </>
          )}
        </Box> */}
      </Sheet>
    </>
  );
};

export default Sidebar;
