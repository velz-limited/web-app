"use client";
import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Settings } from "@mui/icons-material";
import { BottomNavLinks, TopNavLinks } from "@/constants/NavLinks";
import NavLink from "@/types/NavLink";
import App from "next/app";
import { darkColors } from "@/theme";
import { Select } from "@mui/material";

const drawerWidth = 200;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MiniDrawer() {
  const [open, setOpen] = React.useState(false);
  const [selectedNav, setSelectedNav] = React.useState<NavLink>(TopNavLinks[0]);

  const toggleDrawer = () => {
    setOpen(!open)
  };

  const navLinkItem = (navLink: NavLink, index: number, onClick?: React.MouseEventHandler<HTMLDivElement>) => {
    return <ListItem key={navLink.label} disablePadding sx={{ display: "block" }}>
      <ListItemButton
        sx={{
          minHeight: 48,
          justifyContent: open ? "initial" : "center",
          px: 2.5,
        }}
        onClick={onClick == undefined? () => {
          setSelectedNav(navLink);
        } : onClick}
      >
        <ListItemIcon
          sx={{
            borderRadius: "15px",
            color: navLink === selectedNav? 
            darkColors.icon.selectedForeground: 
            darkColors.icon.normalForeground,
            padding: 1,
            backgroundColor:navLink === selectedNav? 
            darkColors.icon.selectedBackground:
            darkColors.icon.normalBackground,
            minWidth: 0,
            mr: open ? 3 : "auto",
            justifyContent: "center",
          }}
        >
          {navLink.expandedIcon === undefined ? navLink.icon: (open ? navLink.expandedIcon : navLink.icon)}
        </ListItemIcon>
        <ListItemText primary={navLink.label} sx={{ opacity: open ? 1 : 0 }} />
      </ListItemButton>
    </ListItem>;
  };

  return (
    <Box sx={{ display: "flex", overflow: "auto" }}>
      {/* <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Persistent drawer
          </Typography>
        </Toolbar>
      </AppBar> */}
      <Drawer
      PaperProps={{sx: { paddingTop: 0, paddingBottom: 0, margin: "10px", marginTop: "20px",
      height: "calc(100vh - 34px)",
      borderRadius: "15px",}}}
        // anchor="left"
        // sx={{
        //   width: drawerWidth,
        //   flexShrink: 0,
        //   '& .MuiDrawer-paper': {
        //     height: "calc(100vh - 64px)",
        //   },
        // }}
        variant="permanent"
        open={open}
      >
        {/* <DrawerHeader/> */}
        <List >
          {TopNavLinks.map((navLink, index) =>
            navLinkItem(navLink, index)
          )}
        </List>
        <Divider sx={{ flexGrow: 1 }} />
        <List>
          {BottomNavLinks.map((navLink, index) => (
            navLinkItem(navLink, index, navLink.isExpander ? toggleDrawer : undefined)
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {selectedNav.content}
      </Box>
    </Box>
  );
}
