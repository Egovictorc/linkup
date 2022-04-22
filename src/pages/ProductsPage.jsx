import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { useNavigate } from 'react-router-dom';

import productsData from '../data.json';
import { Col, Container, Row } from 'react-bootstrap';

const fetchProducts = async () => {
  // faek store api
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    const productData = await response.json();
    return productData;
  } catch (error) {
    console.log('error response', error.response);
    console.log('error message', error.message);
    console.log('error status', error.status);
  }
};

function ProductsPage() {
  const [products, setProducts] = useState(productsData.products);
  // const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log('product Data ', products);

  const navigate = useNavigate();

  // console.log('routes ', routes);

  // useEffect(() => {
  //   setLoading(true);
  //   setProducts(fetchProducts());
  //   setLoading(false);
  //   return () => {
  //     setProducts([]);
  //   };
  // }, []);

  if (loading) {
    return <p>Fetching data...</p>;
  }

  const handleProduct = (id) => {
    navigate(`/products/${id}`);
  };

  return (
    <Layout>
      <h1 className="text-center my-3"> Our Products</h1>
      <Container>
        <Row style={{}} className="mb-4">
          {products.length > 0
            ? products.map((product) => (
                <Col
                  className="col-12 col-sm-6 col-lg-4"
                  class="card"
                  key={product.id}
                >
                  <div style={{ width: '150px', height: '250px' }}>
                    <img
                      src={product.image}
                      class="card-img-top"
                      alt={product.title}
                      style={{ width: '150px', height: '250px' }}
                    />
                  </div>
                  <div class="card-body">
                    <h5 class="card-title">{product.title} </h5>
                    <p
                      class="card-text"
                      style={{
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      }}
                    >
                      {product.description}
                    </p>
                    <button
                      class="btn btn-primary"
                      onClick={() => handleProduct(product.id)}
                    >
                      More
                    </button>
                  </div>
                </Col>
              ))
            : null}
        </Row>
      </Container>
    </Layout>
  );
}

export default ProductsPage;
