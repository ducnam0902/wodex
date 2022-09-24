import { Paper, Avatar, Typography, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
type imageSlideProps = {
  image: string;
  vacationTitle: string;
  collectionName: string;
  description: string;
  textPosition: string;
};

const ImageSlide = ({
  image,
  vacationTitle,
  collectionName,
  description,
  textPosition,
}: imageSlideProps) => {
  const navigate = useNavigate();

  const handleNavigateToShop = () => {
    navigate("/wodex/shop");
  };
  return (
    <Paper sx={{ position: "relative" }}>
      <Avatar
        alt="wodex"
        src={image}
        variant="square"
        sx={{
          width: "100%",
          height: "auto",
          objectFit: "contain",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: { sm: "25%", md: "30%" },
          [textPosition]: { sm: "5%", md: "15%" },
          textAlign: "center",
          display: { xs: "none", sm: "block" },
        }}
      >
        <Typography
          sx={{
            lineHeight: "15px",
            color: "#45bf55",
            fontSize: "13px",
            fontWeight: 700,
            marginBottom: "20px",
          }}
        >
          {vacationTitle}
        </Typography>
        <Typography
          sx={{
            lineHeight: "50px",
            color: "#24201f",
            fontSize: "42px",
            fontWeight: 700,
            maxWidth: "400px",
          }}
        >
          {collectionName}
        </Typography>
        <Typography
          sx={{
            lineHeight: "18px",
            color: "#1a1a1a",
            fontSize: "13px",
            fontWeight: 700,
            marginTop: "1rem",
            marginBottom: "1rem",
          }}
        >
          {description}
        </Typography>
        <Button
          sx={{
            lineHeight: 1,
            backgroundColor: "#45bf55",
            fontSize: "13px",
            fontWeight: 400,
            color: "#ffffff",
            padding: "15px 25px",
            borderRadius: "0",
          }}
          onClick={handleNavigateToShop}
        >
          Shop Now
        </Button>
      </Box>
    </Paper>
  );
};

export default ImageSlide;
