import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
import { useGetAllProductsQuery } from "../features/productApi";

const Products = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    console.log('add to cart');
  };

  return (
    <div className="product-container">
      { isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>An error occured</p>
      ) : (
        <>
          <h2>New Arrivals</h2>
          <div className="products">
            {data?.map((product) => (
              <div key={product.id} className="product">
                <h3>{product.title}</h3>
                <img src={product.img} alt={product.title} />
                <div className="details">
                  <span>{product.desc}</span>
                </div>
                <span className="price">${product.price}</span>
                <button onClick={() => handleAddToCart(product)}>
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default Products