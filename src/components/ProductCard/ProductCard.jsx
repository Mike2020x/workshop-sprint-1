import { useLoaderData } from "react-router-dom";
import "./index.scss";

const ProductCard = () => {
  const { product } = useLoaderData();

  return (
    <div className="product-card-container">
      <div className="container">
        <div className="up">
          {" "}
          <h2>{product.title}</h2>
          <img src={product.image} alt={product.title} />
          <p>{product.description}</p>
        </div>
        <div className="down">
          <p>
            <strong>Price:</strong> ${product.price}
          </p>
          <p>
            <strong>Category:</strong> {product.category}
          </p>
          <p>
            <strong>Rating:</strong> {product.rating.rate}
          </p>
          <p>
            <strong>Count:</strong> {product.rating.count}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

export const loaderProduct = async ({ params }) => {
  const { id } = params;
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data = await response.json();

  return { product: data };
};
