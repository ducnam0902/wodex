import BannerBreadcrumbs from "src/components/BannerBreadcrumbs";
import blog from "src/assets/image/blog.jpg";
const Blog = () => {
  return (
    <>
      <BannerBreadcrumbs image={blog} height="auto" title="Blog" />
    </>
  );
};

export default Blog;
