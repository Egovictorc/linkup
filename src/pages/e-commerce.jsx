import React, { useEffect, useState } from 'react'
import axios from "axios";

import Layout from '../components/Layout';
import Gallery from '../sections/e-commerce/Gallery';

import data from "../assets/data.json"


// const fetchProducts = async () => {

//     const response = await axios.get("/assets/data.json");
//     const { products } = await response.data;

//     console.log("products ", products)
//     return await products;
// }
// const fetchProducts = async () => {

//     const response = await fetch("/assets/data.json");
//     const { products } = await response.json();

//     console.log("products ", products)
//     return await products;
// }


const ECommerce = () => {
    // const [products, setProducts] = useState([]);

    // useEffect(() => {

    //     // fetchProducts()
    //     setProducts(fetchProducts());
    //     // setRenderCount(count => count + 1)
    // }, [])

    const products = data.products;
    return (
        <Layout>
            <Gallery images={products} />
        </Layout>
    )
}

export default ECommerce;