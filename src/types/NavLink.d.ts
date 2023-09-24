import { SvgIconComponent } from "@mui/icons-material";
import { ComponentType, ReactNode } from "react";

export default interface NavLink {
    path: string, // route path 
    label: string, // label to display in the nav
    icon: ReactNode, // icon to display in the nav
    expandedIcon?: ReactNode, // icon to display in the nav when expanded
    isExpander?: boolean, // is this a nav item that expands to show more nav items?
    content?: ReactNode, // content to display in the main section 
};

