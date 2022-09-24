import { Stack, Grid } from "@mui/material";
import ProductItem from "src/components/ProductItem";
import products from "../../constants/stub/products";
const ProductsList = () => {
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      sx={{
        marginTop: "10px",
        paddingLeft: "15px",
        paddingRight: "15px",
        marginLeft: "auto",
        marginRight: "auto",
        maxWidth: "1200px",
      }}
    >
      <Grid container>
        {products.map((item, index) => (
          <ProductItem key={index} {...item} />
        ))}
      </Grid>
    </Stack>
  );
};

export default ProductsList;
