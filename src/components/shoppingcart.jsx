import React, { Component } from "react";
import Product from "./product";
// import data from "src/data";
class ShoppingCart extends Component {

  render() {
    return (
        <React.Fragment>
          <h1 className="text-center m-5">Shopping Cart</h1>
          {this.props.items.map((product) => (
              <Product
                  key={product.id}
                  product={product}
                  onDelete={this.props.onDelete}
                  onIncrement={this.props.onIncrement}
              ></Product>
          ))}
          <button onClick={this.props.onReset}
                  className="btn btn-secondary btn-sm position-relative top-0 start-50 translate-middle-x m-3">
            Reset
          </button>
        </React.Fragment>
    );
  }
}

ShoppingCart.propTypes = {};

export default ShoppingCart;
