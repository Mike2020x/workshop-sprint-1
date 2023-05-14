import { useLoaderData } from "react-router-dom";
import ProductCards from "../components/ProductsCards/ProductsCards";
function Home() {
  const { products = [] } = useLoaderData();
  return (
    <>
      <h1>Products</h1>
      <div className="productlist">
        {products.map((item, index) => (
          <ProductCards
            key={index}
            image={item.image}
            title={item.title}
            id={item.id}
          />
        ))}
      </div>
    </>
  );
}
export default Home;

export const loaderProducts = async () => {
  const response = await fetch("https://fakestoreapi.com/products");

  const data = await response.json();

  return { products: data };
};
