import BannerBreadcrumbs from "src/components/BannerBreadcrumbs";
import shopTitle from "src/assets/image/shopTitle.jpg";
const Shop = () => {
  return (
    <>
      <BannerBreadcrumbs
        image={shopTitle}
        height="auto"
        title="Shop"
        breadcrumbList={[
          {
            title: "Home",
            link: "/",
          },
          {
            title: "Product",
          },
        ]}
        breadcrumbALign="center"
      />
    </>
  );
};

export default Shop;
