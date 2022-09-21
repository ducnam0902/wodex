import CategoriesList from "src/components/CategoriesList";
import Slide from "src/components/Slide";
import categoriesList from "src/constants/stub/categories";
import bannerList from "src/constants/stub/banner";
import TitleGroup from "src/components/TitleGroup";
import { Box } from "@mui/material";
const Home = () => {
  return (
    <>
      <Slide />
      <CategoriesList categoriesList={categoriesList} />
      <Box sx={{ padding: "10px", height: "70px", width: "100%" }}></Box>
      <TitleGroup
        collection="Our Store"
        mainTitle="Top selling products"
        description="You’ll definitely find that you are looking for. Browse our collection according the category top interesting products."
      />
      <Box sx={{ padding: "10px", height: "50px", width: "100%" }}></Box>
      <CategoriesList categoriesList={bannerList} />
      <Box sx={{ padding: "10px", height: "90px", width: "100%" }}></Box>
      <TitleGroup
        collection="Our Store"
        mainTitle="New PRODUCTS"
        description="Browse our New collection according the category top interesting products."
      />
      <Box sx={{ padding: "10px", height: "80px", width: "100%" }}></Box>
    </>
  );
};

export default Home;
