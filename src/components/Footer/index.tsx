import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import { NavLinkBase, NavLinkIcon } from "src/components/Footer/styles";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { Box, Container } from "@mui/system";
const Footer = () => {
  return (
    <Box
      sx={{
        borderTop: "1px solid #e2e2e2",
        backgroundColor: "#f7f7f7",
        color: "#0a0a0a",
        height: { sm: "106px" },
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container>
        <Grid container>
          <Grid
            item
            xs={12}
            sm={4}
            sx={{
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            <List sx={{ marginTop: { xs: "20px", sm: "0" } }}>
              <NavLinkBase to="/wodex/blog">Blog</NavLinkBase>
              <NavLinkBase to="/">Wishlist</NavLinkBase>
              <NavLinkBase to="/">My Account</NavLinkBase>
            </List>
          </Grid>
          <Grid
            item
            xs={12}
            sm={4}
            sx={{ textAlign: { xs: "center", sm: "center" } }}
          >
            <Typography
              variant="h6"
              align="center"
              sx={{ paddingTop: "8px", paddingBottom: "8px", color: "#0a0a0a" }}
            >
              © 2022 Wodex all right reserved
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={4}
            sx={{
              textAlign: { xs: "center", sm: "right" },
              paddingTop: "8px",
              paddingBottom: "8px",
            }}
          >
            <NavLinkIcon to="/">
              <FaFacebookF />
            </NavLinkIcon>
            <NavLinkIcon to="/">
              <FaTwitter />
            </NavLinkIcon>
            <NavLinkIcon to="/">
              <FaInstagram />
            </NavLinkIcon>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
