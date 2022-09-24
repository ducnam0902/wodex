import { Box, Typography, Grid, Stack } from "@mui/material";
import { FaRegEye, FaRegHeart, FaShoppingCart } from "react-icons/fa";
import {
  ProductLink,
  BackgroundImage,
  LinkBase,
  GroupIcon,
  MainTitle,
  MainTitleWrapper,
} from "./style";

type ProductItemProps = {
  name: string;
  image: Array<string>;
  price: number;
  isHotItem?: boolean;
  discountPercent?: number;
};

const ProductItem = ({
  name,
  image,
  price,
  isHotItem,
  discountPercent,
}: ProductItemProps) => {
  return (
    <Grid
      item
      sx={{ textAlign: "center", marginBottom: "30px" }}
      xs={12}
      sm={6}
      lg={3}
    >
      <LinkBase to="/">
        <BackgroundImage image={image[0]} imageHover={image[1]}>
          {isHotItem && (
            <MainTitleWrapper component="span">
              <MainTitle variant="h6">Hot</MainTitle>
            </MainTitleWrapper>
          )}
          {!!discountPercent && (
            <MainTitleWrapper
              component="span"
              isHotItem={isHotItem && !!discountPercent}
            >
              <MainTitle variant="h6">- {discountPercent}%</MainTitle>
            </MainTitleWrapper>
          )}
          <Stack
            direction="column"
            sx={{ position: "absolute", bottom: "10%", right: 0 }}
          >
            <GroupIcon>
              <Box>
                <FaRegEye />
              </Box>
            </GroupIcon>
            <GroupIcon>
              <Box>
                <FaRegHeart />
              </Box>
            </GroupIcon>
            <GroupIcon>
              <Box>
                <FaShoppingCart />
              </Box>
            </GroupIcon>
          </Stack>
        </BackgroundImage>
      </LinkBase>
      <ProductLink to="/">{name}</ProductLink>
      <Typography
        variant="h6"
        sx={{ fontSize: "14px", lineHeight: 2, color: "#22222b" }}
      >
        ${price}
      </Typography>
    </Grid>
  );
};

export default ProductItem;
