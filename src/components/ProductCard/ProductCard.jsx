import "./index.scss";
function ProductCard(props) {
  const { image, title } = props;

  return (
    <div className="container">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <button>go to details</button>
    </div>
  );
}

export default ProductCard;
