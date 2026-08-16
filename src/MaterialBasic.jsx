import { Home, Info } from "@mui/icons-material";
import {
  Box,
  Button,
  Drawer,
  iconButtonClasses,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useState } from "react";

const menu = [
  { title: "ホーム", href: "home.html", icon: Home },
  { title: "会社概要", href: "company.html", icon: Info },
];

export default function MaterialBasic() {
  const [show, setShow] = useState(false);
  const handleDraw = () => setShow(!show);

  return (
    <>
      <Button onClick={handleDraw}>ドロワー</Button>
      <Drawer anchor="left" open={show}>
        <Box sx={{ height: "100vh" }} onClick={handleDraw}>
          <List>
            {menu.map((obj) => {
              const Icon = obj.icon;
              return (
                <ListItem key={obj.title}>
                  <ListItemButton href={obj.href}>
                    <ListItemIcon>
                      <Icon />
                    </ListItemIcon>
                    <ListItemText primary={obj.title} />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
