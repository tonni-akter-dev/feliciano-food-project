import Button from "@restart/ui/esm/Button";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Card, Container } from "react-bootstrap";
import "./Menu.css";

const Menu = () => {
  const [categorys, setCategorys] = useState([]);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => res.json())
      .then((data) => setCategorys(data.categories));
  }, []);
  return (
    <Container>
      <div className=" text-center">
            <span className="title" style={{ position: 'relative', top: '80px', fontSize: '120px' }}>Specialities</span>
                <h1 className="fw-bolder">Our Menu
</h1>
            </div>
      <div className="row">
        {categorys.map((category) => (
          <Display key={category.idCategory} category={category}></Display>
        ))}
      </div>
    </Container>
  );
};

function Display(props) {
  const { strCategory, strCategoryThumb } = props.category;
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
             <button className="btn btn-design">Order now</button>
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