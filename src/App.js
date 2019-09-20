import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Product from './components/Product';
import ProductList from './components/ProductList';
import Default from './components/Default';
import Details from './components/Details';
import Cart from './components/Cart';
import Login from './components/Login';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route path="/login" component={Login} />
          <Route component={Default} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
