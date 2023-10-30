import CalendarMonthIcon from "@mui/icons-material/CalendarMonth"
import MapIcon from "@mui/icons-material/Map"
import PeopleIcon from "@mui/icons-material/People"
import PersonIcon from "@mui/icons-material/Person"
import SettingsIcon from "@mui/icons-material/Settings"
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft"
import ChevronRightIcon from "@mui/icons-material/ChevronRight"
import NavLink from "@/types/NavLink"

export const TopNavLinks: NavLink[] = [
  {
    path: "/",
    label: "Plans",
    icon: <CalendarMonthIcon />,
    content: <h1>Plans</h1>,
  },
  {
    path: "/",
    label: "Map",
    icon: <MapIcon />,
    content: <h1>Map</h1>,
  },
  {
    path: "/friends",
    label: "Friends",
    icon: <PeopleIcon />,
    content: <h1>Friends</h1>,
  },
  {
    path: "/profile",
    label: "Profile",
    icon: <PersonIcon />,
    content: <h1>Profile</h1>,
  },
]

export const BottomNavLinks: NavLink[] = [
  {
    path: "/settings",
    label: "Settings",
    icon: <SettingsIcon />,
    content: <h1>Settings</h1>,
  },
  {
    path: "/",
    label: "Close",
    icon: <ChevronRightIcon />,
    expandedIcon: <ChevronLeftIcon />,
    isExpander: true,
  },
]
