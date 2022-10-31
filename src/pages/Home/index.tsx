import CategoriesList from "src/components/CategoriesList";
import Slide from "src/components/Slide";
// import categoriesList from "src/constants/stub/categories";
import bannerList from "src/constants/stub/banner";
import TitleGroup from "src/components/TitleGroup";
import ProductsList from "src/components/ProductsList";
import { BoxSpacing } from "src/themes/theme";
import NewProduct from "src/components/NewProduct";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCategoriesRequest } from "src/store/categories/categories.action";
import { getCategoriesSelector } from "src/store/categories/categories.selector";
const Home = () => {
  const categoriesList = useSelector(getCategoriesSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategoriesRequest());
  }, []);

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
      <BoxSpacing height="50px" />
      <ProductsList />
      <CategoriesList categoriesList={bannerList} newCollection />
      <BoxSpacing height="90px"></BoxSpacing>
      <TitleGroup
        collection="Our Store"
        mainTitle="New PRODUCTS"
        description="Browse our New collection according the category top interesting products."
      />
      <BoxSpacing height="80px"></BoxSpacing>
      <NewProduct />
      <BoxSpacing height="90px"></BoxSpacing>
    </>
  );
};

export default Home;
