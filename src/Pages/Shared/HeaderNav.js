import React from 'react';
import { useCart } from 'react-use-cart';
import logo from "../../images/Logo-top.png";

const HeaderNav = () => {
    const { items, removeItem } = useCart();
    console.log(items);
    return (
        <div>

            <header class="header">

                <a href="/" class="logo">
                    <img src={logo} alt="" />
                    <h1 class="Name">COFFE SHOP</h1>
                </a>

                <nav class="navbar">
                    <a href="#home">home</a>
                    <a href="#about">about</a>
                    <a href="#menu">menu</a>
                    <a href="#products">products</a>
                    <a href="#review">review</a>
                    <a href="#contact">contact</a>
                    <a href="#blogs">blogs</a>
                </nav>

                <div class="icons">
                    <div class="fas fa-search" id="search-btn"></div>
                    <div class="fas fa-shopping-cart" id="cart-btn"></div>
                    <div class="fas fa-bars" id="menu-btn"></div>
                </div>

                <div class="search-form">
                    <input type="search" id="search-box" placeholder="search here..." />
                    <label for="search-box" class="fas fa-search"></label>
                </div>

                <div class="cart-items-container">
                    {
                        items.map(item => <div class="cart-item">
                            <span onClick={()=>{removeItem(item.id)}} class="fas fa-times"></span>
                            <img src={item.image} alt="" />
                            <div class="content">
                                <h3>{item.name}</h3>
                                <div class="price">${item.price}/-</div>
                            </div>
                        </div>
                        )
                    }

                    <a href="#" class="btn">checkout now</a>
                </div>

            </header>
        </div>
    );
};

export default HeaderNav;