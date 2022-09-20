import { Box, Typography } from "@mui/material";
import { ShopLink, ImageBanner, ShopButton } from "./styles";
type CategoriesItemProps = {
  image: string;
  title: string;
  accessory?: string;
};

const CategoriesItem = ({ image, title, accessory }: CategoriesItemProps) => {
  return (
    <Box sx={{ padding: "10px", position: "relative" }}>
      <ImageBanner
        alt={title}
        src={image}
        variant="square"
        sx={{ width: "100%", height: "auto" }}
      />
      {accessory ? (
        <Box
          sx={{
            paddingLeft: "20px",
            position: "absolute",
            top: "30%",
            left: "10%",
          }}
        >
          <Typography
            variant="h6"
            sx={{ fontWeight: 500, fontSize: { sm: "13px" } }}
          >
            {accessory}
          </Typography>
          <Typography
            variant="h3"
            sx={{
              lineHeight: { sm: "20px", lg: "39px" },
              fontSize: { sm: "16px", lg: "24px" },
              paddingTop: "5px",
              paddingBottom: { sm: "5px", lg: "10px" },
            }}
          >
            {title}
          </Typography>
          <ShopButton>Shop Now</ShopButton>
        </Box>
      ) : (
        <Box
          sx={{ paddingLeft: "20px", position: "absolute", bottom: "10%", left: 0 }}
        >
          <Typography variant="h3" sx={{ lineHeight: "41px", fontWeight: 500 }}>
            {title}
          </Typography>
          <ShopLink to="/wodex/shop">Shop Now</ShopLink>
        </Box>
      )}
    </Box>
  );
};

export default CategoriesItem;
