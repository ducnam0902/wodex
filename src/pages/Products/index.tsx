import { useParams } from "react-router-dom";

const Products = () => {
  const params = useParams();
  console.log(params.name);
  return <div>Products</div>;
};

export default Products;
