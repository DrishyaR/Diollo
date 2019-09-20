import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import Cart from '../shop.png';
import styled from 'styled-components';
import '../App.css';
import {ButtonContainer} from './Button';
import sell from '../icons/sell.png';
import notifications from '../icons/notifications.png';
import settings from '../icons/settings.png';
import offers from '../icons/offers.png';

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
        <Link to='/'>
          <img src={logo} alt="store" className="navbar-brand" />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">Products</Link>
          </li>
          <li>
            <Link to="/login" className="nav-link">Login</Link>
          </li>
          <li class="dropdown">
              <a href="javascript:void(0)" class="dropbtn nav-link">More</a>
              <div class="dropdown-content">
                <a href="#">
                  Sell/Rent
                  <img src={sell} alt="store" className="navbar-brand" />
                </a>
                <a href="#">
                  Offers
                  <img src={offers} alt="store" className="navbar-brand" />
                </a>
                <a href="#">
                  Notifications
                  <img src={notifications} alt="store" className="navbar-brand" />
                </a>
                <a href="#">
                  Settings
                  <img src={settings} alt="store" className="navbar-brand" />
                </a>
              </div>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <span className="mr-2">
              <img src={Cart} alt="store" className="navbar-brand" />
            </span>
            My Cart
          </ButtonContainer>
        </Link>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
background: var(--darkRed);
.nav-link {
  color: var(--white) !important;
  font-size: 1.3rem;
  text-transform: capitalize;
  transition: all 0.2s ease-in-out;
  &:hover {
    background: var(--lightRed);
    background-radius: 0.5rem;
    color: var(--darkRed) !important;
  }
}
`
