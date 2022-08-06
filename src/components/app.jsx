import React, { Component } from "react";
// import PropTypes from "prop-types";
import { Route, Routes } from "react-router-dom";

import items from "../data.json";

import Navbar from "./navbar";
import Home from "./home";
import Contact from "./contact";
import About from "./about";
import ShoppingCart from "./shoppingcart";
import ProductDetails from "./productDetails";
import Products from "./products";
import NotFound from "./notFound";
import Edit from "./edit";

class App extends Component {
  state = {
    items,
  };

  deleteHandler = (product) => {
    // clone and edit
    const items = this.state.items.filter((p) => product.id !== p.id);
    // set state
    this.setState({ items });
  };

  resetHandler = () => {
    // clone
    let items = [...this.state.items];
    // edit
    items = items.map((p) => {
      p.count = 0;
      return p;
    });
    // set state
    this.setState({ items });
  };
  editHandler = (product, name, count) => {
    // clone
    let items = [...this.state.items];
    const index = items.indexOf(product);
    items[index] = { ...items[index] };
    // edit
    items[index].name = name;
    items[index].count = count;
    // set state
    this.setState({ items: items });
  };

  getInvoice = (number) => {
    return this.state.items.find((invoice) => invoice.id === number);
  };

  incrementHandler = (product) => {
    // clone
    let items = [...this.state.items];
    const index = items.indexOf(product);
    items[index] = { ...items[index] };
    // edit
    items[index].count++;
    // set state
    this.setState({ items: items });
  };
  render() {
    return (
      <React.Fragment>
        <Navbar
          itemsCount={this.state.items.filter((p) => p.count > 0).length}
        />
        <main className="container">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route
              path="/cart"
              element={
                <ShoppingCart
                  items={this.state.items}
                  onDelete={this.deleteHandler}
                  onReset={this.resetHandler}
                  onIncrement={this.incrementHandler}
                />
              }
            />
            <Route path="/contact" element={<Contact />} />
            <Route path="/" element={<Home />} />
            <Route path="/products">
              <Route index element={<Products items={this.state.items} />} />
              <Route path=":id">
                <Route
                  index
                  element={<ProductDetails getInvoice={this.getInvoice} />}
                />
              </Route>
              <Route
                path="edit/:id"
                element={<Edit getInvoice={this.getInvoice}
                               editHandler={this.editHandler}
                />}
              />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </React.Fragment>
    );
  }
}

App.propTypes = {};

export default App;
