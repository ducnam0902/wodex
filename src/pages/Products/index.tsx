import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import products from "../../constants/stub/products";
import { ProductItemProps } from "src/components/ProductItem";
import Breadcrumb from "src/components/Breadcrumb";
import { Box } from "@mui/material";
import ProductsDetails from "src/components/ProductDetails";

const Products = () => {
  const [currentProduct, setCurrentProduct] = useState<ProductItemProps>({
    name: "",
    image: [""],
    price: 0,
    isHotItem: false,
    discountPercent: 0,
    slug: "",
    type: "",
    categories: "",
  });
  const params = useParams();
  const { slug } = params;
  useEffect(() => {
    const product = products.filter((item) => item.slug === slug);

    setCurrentProduct({ ...product[0] });
  }, [slug]);
  const list = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Shop",
      link: "/wodex/shop",
    },
    {
      title: currentProduct?.type || "",
      link: "/",
    },
    {
      title: currentProduct?.categories || "",
      link: "/",
    },
    {
      title: currentProduct?.name || "",
    },
  ];

  return (
    <Box
      sx={{
        marginLeft: "auto",
        marginRight: "auto",
        maxWidth: "1200px",
        paddingLeft: "24px",
        paddingRight: "24px",
      }}
    >
      <Box sx={{ padding: "15px 15px 0 15px", marginBottom: "25px" }}>
        <Breadcrumb breadcrumbList={list} breadcrumbALign="left" />
      </Box>
      <ProductsDetails {...currentProduct} />
    </Box>
  );
};

export default Products;
