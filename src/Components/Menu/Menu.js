// import Button from "@restart/ui/esm/Button";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Card, Container } from "react-bootstrap";
import useCart from "../../context/useCart";
import useCategories from "../../hooks/useCategories";
import { addToDb } from "../../utilities/fakedb";
import "./Menu.css";
const Menu = () => {
  const{categorys}=useCategories();
  const { selectedFood } = useCart();
  return (
    <Container>
      <div className=" text-center">
        <span className="title" style={{ position: 'relative', top: '80px', fontSize: '120px' }}>Specialities</span>
        <h1 className="fw-bolder">Our Menu
        </h1>
      </div>
      <div className="row">
        {categorys.map((category) => (
          <Display key={category.idCategory} category={category}
            selectedFood={selectedFood}
          ></Display>
        ))}
      </div>
    </Container>
  );
};
function Display(props) {
  const { strCategory, strCategoryThumb, idCategory } = props.category;
  const { selectedFood, category } = props;
  const handleAddToCart = () => {
    addToDb(strCategory)
    selectedFood(category);
  }
  return (
    <div className="col-12 col-md-12 col-lg-6 d-flex">
      <Card>
        <div className="row">
          <div className="col-5">
            <Card.Img src={strCategoryThumb} />
          </div>
          <div className="col-5">
            <Card.Body>
              <Card.Title>{strCategory}</Card.Title>
              <Card.Text>
                Meat, Potatoes, Rice,
                <br /> Tomatoe
              </Card.Text>
              <button onClick={() => handleAddToCart(idCategory)} className="btn btn-design">Order now</button>
            </Card.Body>
          </div>
          <div className="col-2 pt-4 fw-bold fs-5 text-danger">
            <strong>#29</strong>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Menu;