import CategoriesList from "src/components/CategoriesList";
import Slide from "src/components/Slide";
import categoriesList from "src/constants/stub/categories";
import bannerList from "src/constants/stub/banner";
const Home = () => {
  return (
    <>
      <Slide />
      <CategoriesList categoriesList={categoriesList} />
      <CategoriesList categoriesList={bannerList} />
    </>
  );
};

export default Home;
