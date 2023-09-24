"use client";
import * as React from "react";
import { styled, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { BottomNavLinks, TopNavLinks } from "@/constants/NavLinks";
import NavLink from "@/types/NavLink";
import { darkColors } from "@/theme";

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

// TODO: ask on if we chose routing when button clicked or change component
export default function SideBar() {
  const [open, setOpen] = React.useState(false);
  const [selectedNav, setSelectedNav] = React.useState<NavLink>(TopNavLinks[0]);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const navLinkItem = (
    navLink: NavLink,
    index: number,
    onClick?: React.MouseEventHandler<HTMLDivElement>
  ) => {
    return (
      <ListItem key={navLink.label} disablePadding sx={{ display: "block" }}>
        <ListItemButton
          sx={{
            minHeight: 48,
            justifyContent: open ? "initial" : "center",
            px: 2.5,
          }}
          onClick={
            onClick == undefined
              ? () => {
                  setSelectedNav(navLink);
                }
              : onClick
          }
        >
          <ListItemIcon
            sx={{
              borderRadius: "15px",
              color:
                navLink === selectedNav
                  ? darkColors.icon.selectedForeground
                  : darkColors.icon.normalForeground,
              padding: 1,
              backgroundColor:
                navLink === selectedNav
                  ? darkColors.icon.selectedBackground
                  : darkColors.icon.normalBackground,
              minWidth: 0,
              mr: open ? 3 : "auto",
              justifyContent: "center",
            }}
          >
            {navLink.expandedIcon === undefined
              ? navLink.icon
              : open
              ? navLink.expandedIcon
              : navLink.icon}
          </ListItemIcon>
          <ListItemText
            primary={navLink.label}
            sx={{ opacity: open ? 1 : 0 }}
          />
        </ListItemButton>
      </ListItem>
    );
  };

  return (
    <Box sx={{ display: "flex", overflow: "auto" }}>
      <Drawer
        PaperProps={{
          sx: {
            paddingTop: 0,
            paddingBottom: 0,
            margin: "10px",
            marginTop: "20px",
            height: "calc(100vh - 34px)",
            borderRadius: "15px",
          },
        }}
        variant="permanent"
        open={open}
      >
        <List>
          {TopNavLinks.map((navLink, index) => navLinkItem(navLink, index))}
        </List>
        <Divider sx={{ flexGrow: 1 }} />
        <List>
          {BottomNavLinks.map((navLink, index) =>
            navLinkItem(
              navLink,
              index,
              navLink.isExpander ? toggleDrawer : undefined
            )
          )}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {selectedNav.content}
      </Box>
    </Box>
  );
}