import React from 'react';
import { useCart } from 'react-use-cart';

const Menu = () => {
    const { addItem } = useCart();
    const coffeeArray = [
        {
            id: "menu-1",
            name: "tasty and healty",
            price: 25.99,
            oldPrice: 30.99,
            image: "https://www.pngmart.com/files/21/Coffee-Cup-PNG-Isolated-Photos.png"

        },
        {
            id: "menu-2",
            name: "tasty and healty",
            price: 15.99,
            oldPrice: 20.99,
            image: "https://www.nicepng.com/png/detail/832-8324008_black-coffee-png-free-pic-coffee-splash.png"

        },
        {
            id: "menu-3",
            name: "tasty and healty",
            price: 15.99,
            oldPrice: 20.99,
            image: "https://www.pngmart.com/files/21/Coffee-Cup-PNG-Isolated-Photos.png"

        },
        {
            id: "menu-4",
            name: "tasty and healty",
            price: 15.99,
            oldPrice: 20.99,
            image: "https://www.pngmart.com/files/21/Coffee-Cup-PNG-Isolated-Photos.png"

        },
        {
            id: "menu-5",
            name: "tasty and healty",
            price: 15.99,
            oldPrice: 20.99,
            image: "https://www.pngmart.com/files/21/Coffee-Cup-PNG-Isolated-Photos.png"

        },
        {
            id: "menu-6",
            name: "tasty and healty",
            price: 15.99,
            oldPrice: 20.99,
            image: "https://www.pngmart.com/files/21/Coffee-Cup-PNG-Isolated-Photos.png"

        },
        {
            id: "menu-7",
            name: "tasty and healty",
            price: 15.99,
            oldPrice: 20.99,
            image: "https://www.pngmart.com/files/21/Coffee-Cup-PNG-Isolated-Photos.png"

        },
        {
            id: "menu-8",
            name: "tasty and healty",
            price: 15.99,
            oldPrice: 20.99,
            image: "https://www.pngmart.com/files/21/Coffee-Cup-PNG-Isolated-Photos.png"

        },
        {
            id: "menu-9",
            name: "tasty and healty",
            price: 15.99,
            oldPrice: 20.99,
            image: "https://www.pngmart.com/files/21/Coffee-Cup-PNG-Isolated-Photos.png"

        },
        {
            id: "menu-10",
            name: "tasty and healty",
            price: 15.99,
            oldPrice: 20.99,
            image: "https://www.pngmart.com/files/21/Coffee-Cup-PNG-Isolated-Photos.png"

        },

    ]
    return (
        <div>
            <section class="menu" id="menu">

                <h1 class="heading"> our <span>menu</span> </h1>

                <div class="box-container">

                    {coffeeArray.map((coffee) => <div class="box">
                        <img src={coffee.image} alt="" />
                        <h3>{coffee.name}</h3>
                        <div class="price"> ৳{coffee.price} <span>{coffee.oldPrice}</span></div>
                        <button onClick={() =>
                            addItem({ ...coffee, id: coffee.id, })
                        } class="btn">add to cart</button>
                    </div>)}



                </div>

            </section>
        </div>
    );
};

export default Menu;