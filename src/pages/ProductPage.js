import React, { useState, useEffect } from 'react'

const fetchProducts = async () => {
  // faek store api
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const productData = await response.json();
    return productData;
  } catch (error) {
    console.log("error response", error.response)
    console.log("error message", error.message)
    console.log("error status", error.status)
  }

}

function ProductPage() {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  console.log("product Data ", products);


  useEffect(() => {
    setLoading(true);
    setProducts(fetchProducts());
    setLoading(false)
    return () => {
      setProducts([])
    }
  }, [])

  if (loading) {
    return <p>Fetching data...</p>
  }
  return (
    <div>

      {
        products.length > 0 ? products.map((product) => (
          <div class="card" style={{ width: "18rem" }} key={product.id}>
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        ))
        : null
      }
    </div>
  )
}


export default ProductPage