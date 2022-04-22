import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { useParams } from 'react-router-dom';

import productData from '../data.json';
import { Col, Container, Row } from 'react-bootstrap';

const fetchProduct = async (id) => {
  // faek store api
  try {
    const response = await fetch(`https://fakestoreapi.com/product/${id}`);
    const productData = await response.json();
    console.log(productData);
    return productData;
  } catch (error) {
    console.log('error response', error.response);
    console.log('error message', error.message);
    console.log('error status', error.status);
  }
};

function ProductPage() {
  // const [product, setproduct] = useState([]);
  const [loading, setLoading] = useState(false);
  // console.log('product Data ', product);
  // const routes = useRoutes();
  const params = useParams();
  const [product, setProduct] = useState({
    id: 1,
    title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
    price: 109.95,
    description:
      'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
    category: "men's clothing",
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    rating: {
      rate: 3.9,
      count: 120,
    },
  });

  console.log('products ', product);
  // console.log('routes ', routes);

  useEffect(() => {
    const prod = productData.products.find(
      (product) => product.id == params.id
    );
    setProduct(prod);
  }, []);
  // useEffect(() => {
  //   setLoading(true);
  //   setProduct(fetchProduct());
  //   setLoading(false);
  //   return () => {
  //     setProduct({});
  //   };
  // }, []);

  if (loading) {
    return <p>Fetching data...</p>;
  }

  const handleProduct = (id) => {};

  return (
    <Layout>
      <h1 className="text-center my-3"> {product.title} </h1>
      <Container>
        <Row style={{}} className="mb-4">
          <Col className="col-12 col-sm-6" className="card">
            {' '}
            <div style={{ width: '150px', height: '250px' }}>
              <img
                src={product.image}
                className="card-img-top"
                alt={product.title}
                style={{ width: '150px', height: '250px' }}
              />
            </div>
          </Col>
          <Col className="col-12 col-sm-6 card">
            <div className="card-body">
              <h5 className="card-title">{product.title} </h5>
              <p
                className="card-text"
                style={{
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {product.description}
              </p>
              <button
                className="btn btn-primary"
                onClick={() => handleProduct(product.id)}
              >
                Add To Cart
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

export default ProductPage;
