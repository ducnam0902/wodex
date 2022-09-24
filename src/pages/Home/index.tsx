import CategoriesList from "src/components/CategoriesList";
import Slide from "src/components/Slide";
import categoriesList from "src/constants/stub/categories";
import bannerList from "src/constants/stub/banner";
import TitleGroup from "src/components/TitleGroup";
import ProductsList from "src/components/ProductsList";
import { BoxSpacing } from "src/themes/theme";
const Home = () => {
  return (
    <>
      <Slide />
      <CategoriesList categoriesList={categoriesList} />
      <BoxSpacing height="70px"></BoxSpacing>
      <TitleGroup
        collection="Our Store"
        mainTitle="Top selling products"
        description="You’ll definitely find that you are looking for. Browse our collection according the category top interesting products."
      />
      <BoxSpacing></BoxSpacing>
      <CategoriesList categoriesList={bannerList} newCollection />
      <BoxSpacing height="90px"></BoxSpacing>
      <ProductsList />
      <TitleGroup
        collection="Our Store"
        mainTitle="New PRODUCTS"
        description="Browse our New collection according the category top interesting products."
      />
      <BoxSpacing height="80px"></BoxSpacing>
    </>
  );
};

export default Home;
