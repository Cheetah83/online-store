import { useParams } from "react-router";
import { useGetProductByIdQuery, useGetProductByNameQuery } from "../slices/productsApi";


const ProductDetail = () => {
  const { id } = useParams();
  const { 
    data,
    error, 
    isLoading 
  } = useGetProductByIdQuery(id);
  console.log(data);
  console.log(id)
  return (
      <>
        <div className="products">
          {
            <div key={id} className="product">
              <h1>brand</h1>
              <h3>name</h3>
              <img src="{image}" alt="" />
              <div className="details">
                <span className="price">$"price"</span>
                <p>"desc"</p>
              </div>
              <button type="button" className="btn btn-outline-primary">Buy</button>
            </div>
          }
        </div>
    </>
  )
}

export default ProductDetail