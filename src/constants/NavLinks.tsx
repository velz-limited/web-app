import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MapIcon from '@mui/icons-material/Map';
import PeopleIcon from '@mui/icons-material/People';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import  NavLink  from '@/types/NavLink';

export const TopNavLinks: NavLink [] = [
    {
        path: "/",
        label: "Plans",
        icon: <CalendarMonthIcon />
    },
    {
        path: "/",
        label: "Map",
        icon: <MapIcon />
    },
    {
        path: "/",
        label: "Friends",
        icon: <PeopleIcon />
    },
    {
        path: "/",
        label: "Profile",
        icon: <PersonIcon />
    },

];

export const BottomNavLinks: NavLink [] = [
    {
        path: "/",
        label: "Settings",
        icon: <SettingsIcon />,
    },
    {
        path: "/",
        label: "Close",
        icon: <ChevronRightIcon />,
        expandedIcon: <ChevronLeftIcon />,
        isExpander: true,
    }
];