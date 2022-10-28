import { Box, Typography } from "@mui/material";
import ImageLayout from "src/components/ImageLayout";
import { ProductItemProps } from "src/components/ProductItem";
import Quantity from "src/components/Quantity";
const ProductsDetails = ({
  name,
  image,
  price,
  isHotItem,
  discountPercent,
  slug,
  type,
  categories,
}: ProductItemProps) => {
  return (
    <Box
      sx={{
        paddingLeft: "15px",
        paddingRight: "15px",
        display: "flex",
        marginBottom: "54px",
      }}
    >
      <ImageLayout imageList={image} />
      <Box sx={{ padding: "0 15px" }}>
        <Typography
          variant="h3"
          sx={{
            fontSize: "36px",
            lineHeight: "59px",
            color: "#22222b",
            fontWeight: "500",
          }}
        >
          {name}
        </Typography>
        <Typography
          variant="h6"
          sx={{
            lineHeight: "28px",
            color: "#7f7f82",
            marginBottom: "16px",
          }}
        >
          Pellentesque habitant morbi tristique senectus et netus et malesuada fames
          ac turpis egestas. Rounded, open toe. Decorative cut-out pattern. Thin,
          covered heel. Laced closure. Heel height 11 cm. Made of Synthetic.
          Synthetic insole. Rubber outsole.
        </Typography>
        <Typography
          variant="h1"
          sx={{
            marginTop: "47px",
            marginBottom: "15px",
            fontSize: "36px",
            lineHeight: "28px",
          }}
        >
          $ {price}
        </Typography>
        {/* Form */}
        {/* Color  */}
        {/* Size  clear */}
        {/* Quantity */}
        {/* Button Add to cart */}
        <Quantity />
        <Box
          sx={{
            marginTop: "28px",
          }}
        >
          <Box
            sx={{
              paddingTop: "14px",
              paddingRight: "14px",
              borderTop: "1px solid #ebebeb",
            }}
          >
            <Typography variant="h6" sx={{ lineHeight: "28px", color: "#7f7f82" }}>
              Category: {categories}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductsDetails;
