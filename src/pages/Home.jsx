import { useLoaderData } from "react-router-dom";
import ProductCard from "../components/ProductCard/ProductCard";
function Home() {
  const { products = [] } = useLoaderData();
  return (
    <>
      <h1>Products</h1>
      <ul>
        {products.map((item, index) => (
          <ProductCard key={index} image={item.image} title={item.title} />
        ))}
      </ul>
    </>
  );
}
export default Home;

export const loaderProducts = async () => {
  const response = await fetch("https://fakestoreapi.com/products");

  const data = await response.json();

  return { products: data };
};
