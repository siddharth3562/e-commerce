import React, { useState, useEffect } from "react";
import image1 from "../assets/img1.webp"
import image2 from "../assets/img2.jpg"
import image3 from "../assets/img3.webp"
import Footer from "./Footer";

import axios from "axios";

const Home = () => {
  const [product, setProduct] = useState([]);
  const [add, setAdd] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  useEffect(() => {
    axios
      .get('https://apiecommerce.pythonanywhere.com/api/product/')
      .then((response) => setProduct(response.data))
      .catch((error) => console.log(error));
  }, []);

  const view_p = (products) => {
    setAdd(true);
    setCurrentProduct(products);
  };

  return (
    <>
      <div id="demo" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="0"
            class="active"
          ></button>
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="1"
          ></button>
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="2"
          ></button>
        </div>

        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={image1} alt="Los Angeles" class="d-block w-100" style={{ height: '500px', objectFit: 'cover' }} />
          </div>
          <div class="carousel-item">
            <img src={image2} alt="Chicago" class="d-block w-100" />
          </div>
          <div class="carousel-item">
            <img src={image3} alt="New York" class="d-block w-100" />
          </div>
        </div>

        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#demo"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon"></span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#demo"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon"></span>
        </button>
      </div>

      <div className="container mt-3">
        {/* {() => editTask(task)} */}
        <div className="row" id="a1">
          {product.map((pro) => (
            <div className="col-lg-3 col-md-3 col-sm-6" key={pro.id}>
              <div className="card" onClick={() => view_p(pro)}>
                <img
                  className="card-img-top img-fluid"
                  src={pro.image}
                  alt="product image"
                />
                <div className="card-body">
                  <h4 className="card-little">{pro.p_name}</h4>
                  <h6 className="card-text">{pro.price}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
        {add ?(
          <ViewProduct
          currentProduct={currentProduct}
          />
        ):console.log('view product   ')}
      </div>
      <Footer/>

    </>
  );
};

const ViewProduct=(currentproducts)=>{
  const [product,setProduct]=useState(currentproducts)
  document.getElementById('a1').style.display='none'
  return(
    <>
    <div className="container">
      <div className="row g-4">
        <div className="col-lg-6 d-flex justify-content-center">
          <img src={product.currentProduct.image} alt="" className="img-fluid col-lg-12 w-75"/>
        </div>
        <div className="desc col-lg-6">
          <h2>{product.currentProduct.p_name}</h2>
          <p>{product.currentProduct.description}</p>
          {/*console.log(product.currentProduct)*/}
          <p>${product.currentProduct.price}</p>
          <div className="row">
            <button className="btn btn-warning col-lg-10">Add to cart</button>
            <button className="btn btn-success col-lg-10 mt-1">Buy now</button>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Home;
