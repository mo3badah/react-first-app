import React, { Component } from "react";
import {Link, NavLink} from "react-router-dom";
// import PropTypes from "prop-types";
// import { logDOM } from "@testing-library/react";

class Product extends Component {
  state = {};
  getClasses() {
    return this.props.product.count === 0
      ? "badge bg-warning m-2"
      : "badge bg-primary m-2";
  }
  render() {
      const {product,onDelete,onIncrement} = this.props;
      const {id,count,name} = product
      return (
      <div className="d-flex justify-content-between mx-5 container mt-2 row border border-primary rounded-4 p-2">
        <h3 className="col-6">
            <NavLink
                style={({ isActive }) => ({
                    color: isActive ? "red" : "green",
                })}
                key={id}
                to={`/products/${id}`}>
                {name}
            </NavLink>
        </h3>
        {/*        <span>
          {product.names.length === 0 && <h4>No Names</h4>}
          <ul className="d-flex flex-row">
            {product.names.map((name) => (
              <li className="mx-3" key={name}>
                {name}
              </li>
            ))}
          </ul>
        </span>*/}
        <span className={`${this.getClasses()} col`}>
          {count}
        </span>
        <span className="col">
          <button
            onClick={() => onIncrement(product)}
            className="btn btn-primary btn-sm"
          >
            +
          </button>
        </span>
        <span
            key={`delete${id}`}
            style={{cursor: "pointer"}}
          className="col"
          onClick={() => onDelete(product)}
            onMouseEnter={event => event.target.style.color= "red"}
            onMouseLeave={event => event.target.style.color="black"}
        >
          <i className="fa-solid fa-trash m-2"></i>
        </span>
      </div>
    );
  }
  /// second solution of bind this
  // incrementHandler = (num) => this.setState({ count: count + num });
  /// first solution of bind this
  // constructor() {
  //     super();
  //     this.clickHandler = this.clickHandler.bind(this);
  // }
  //   clickHandler() {
  //     console.log(this);
  //   }
}

Product.propTypes = {};

export default Product;
