import { Container, Toolbar, Avatar, Stack, Box, Badge } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import wodex from "../../assets/image/logo.png";
import {
  NavLinkBase,
  HomeIcon,
  BoxIcon,
  BoxWrapper,
} from "src/components/Header/styles";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import MenuDrawer from "src/components/MenuDrawer";
import { VscArrowUp } from "react-icons/vsc";
import { useEffect, useState } from "react";
const Header = () => {
  const [isShowScrollToTop, setIsShowScrollToTop] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setIsShowScrollToTop(true);
    } else if (scrolled <= 300) {
      setIsShowScrollToTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#000000" }}>
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{
            height: { xs: "62px", md: "92px" },
            lineHeight: { xs: "62px", md: "92px" },
          }}
        >
          <NavLinkBase to="/" end>
            <Avatar
              alt="wodex"
              src={wodex}
              variant="square"
              sx={{ height: "22px", width: "120px" }}
            />
          </NavLinkBase>
          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "right", md: "space-between" },
              width: "100%",
            }}
          >
            <Stack
              direction="row"
              sx={{ marginLeft: "40px", display: { xs: "none", md: "block" } }}
            >
              <NavLinkBase to="/" end>
                <HomeIcon />
                Home
              </NavLinkBase>
              <NavLinkBase to="/wodex/shop">Shop</NavLinkBase>
              <NavLinkBase to="/wodex/blog">Blog</NavLinkBase>
              <NavLinkBase to="/wodex/about-us">About Us</NavLinkBase>
              <NavLinkBase to="/wodex/contact">Contact</NavLinkBase>
            </Stack>
            <Stack direction="row" alignItems="baseline">
              <BoxIcon>
                <SearchIcon fontSize="small" />
              </BoxIcon>
              <Badge
                badgeContent={4}
                color="warning"
                sx={{ cursor: "pointer", marginLeft: "8px", marginRight: "8px" }}
              >
                <ShoppingCartOutlinedIcon fontSize="small" />
              </Badge>
              <BoxIcon>
                <PersonOutlineOutlinedIcon fontSize="small" />
              </BoxIcon>
              <MenuDrawer />
            </Stack>
          </Box>
        </Toolbar>
      </Container>
      {isShowScrollToTop && (
        <BoxWrapper onClick={scrollToTop}>
          <VscArrowUp />
        </BoxWrapper>
      )}
    </AppBar>
  );
};

export default Header;
