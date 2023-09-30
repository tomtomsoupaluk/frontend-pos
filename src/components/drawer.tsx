import { Drawer, List, ListItem, ListItemButton } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import InventoryIcon from "@mui/icons-material/Inventory";
import ReportIcon from "@mui/icons-material/Report";
import LogoutIcon from "@mui/icons-material/Logout";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";

import { useNavigate } from "react-router-dom";

type Props = {
  setIsAuth: (isAuth: boolean) => void;
};

const listIcons = [
  { path: "/", icon: <HomeIcon /> },
  { path: "/sale", icon: <PointOfSaleIcon /> },
  { path: "/product", icon: <InventoryIcon /> },
  { path: "/user", icon: <PeopleAltIcon /> },
  { path: "/report", icon: <ReportIcon /> },
];

const drawerWidth = 70;

export default function drawer(props: Props) {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    props.setIsAuth(false);
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
      }}
    >
      <List>
        {listIcons.map((data, index) => (
          <ListItem key={index} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: "center",
                px: 2.5,
              }}
              onClick={() => handleNavigate(data.path)}
            >
              {data.icon}
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: "center",
              px: 2.5,
            }}
            onClick={handleLogout}
          >
            <LogoutIcon />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
}
