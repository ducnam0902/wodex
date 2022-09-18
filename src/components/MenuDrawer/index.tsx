import { Stack, Drawer, Typography, Box, IconButton } from "@mui/material";
import { HomeIcon, NavLinkBase } from "src/components/MenuDrawer/styles";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
const MenuDrawer = () => {
  const [isShowDrawer, setIsShowDrawer] = useState<boolean>(false);
  return (
    <Box>
      {isShowDrawer ? (
        <CloseIcon fontSize="small" />
      ) : (
        <MenuIcon
          fontSize="small"
          sx={{ display: { md: "none" } }}
          onClick={() => setIsShowDrawer(true)}
        />
      )}

      <Drawer
        anchor="left"
        open={isShowDrawer}
        onClose={() => setIsShowDrawer(false)}
        sx={{}}
      >
        <Stack
          direction="column"
          sx={{ width: "250px", backgroundColor: "#333", height: "100%" }}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            sx={{ backgroundColor: "#222", opacity: 0.8 }}
          >
            <Typography
              variant="h6"
              sx={{
                lineHeight: 1,
                color: "#ffffff",
                textTransform: "uppercase",
                fontWeight: "500",
                padding: "16px 15px 15px 15px",
                letterSpacing: "0.125rem",
              }}
            >
              Menu
            </Typography>
            <IconButton
              sx={{ color: "white" }}
              onClick={() => setIsShowDrawer(false)}
            >
              <CloseIcon fontSize="medium" />
            </IconButton>
          </Stack>
          <NavLinkBase to="/" end>
            <HomeIcon />
            Home
          </NavLinkBase>
          <NavLinkBase to="/wodex/shop">Shop</NavLinkBase>
          <NavLinkBase to="/wodex/blog">Blog</NavLinkBase>
          <NavLinkBase to="/wodex/about-us">About Us</NavLinkBase>
          <NavLinkBase to="/wodex/contact">Contact</NavLinkBase>
        </Stack>
      </Drawer>
    </Box>
  );
};

export default MenuDrawer;
