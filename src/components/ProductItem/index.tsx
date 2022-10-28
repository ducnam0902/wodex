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

export type ProductItemProps = {
  name?: string;
  image: string[];
  price?: number;
  isHotItem?: boolean;
  discountPercent?: number;
  slug?: string;
  type?: string;
  categories?: string;
};

const ProductItem = ({
  name,
  image,
  price,
  isHotItem,
  discountPercent,
  slug,
}: ProductItemProps) => {
  return (
    <Grid
      item
      sx={{
        textAlign: "center",
        marginBottom: "30px",
        paddingLeft: "15px",
        paddingRight: "15px",
      }}
      xs={12}
      sm={6}
      lg={3}
    >
      <LinkBase to={`/wodex/shop/${slug}`}>
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
      <ProductLink to={`/wodex/shop/${slug}`}>{name}</ProductLink>
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
