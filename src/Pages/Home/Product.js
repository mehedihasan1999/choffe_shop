import React from 'react';
import { useCart } from 'react-use-cart';
const products = [
    {
        id: 1,
        name: "tasty and healty",
        price: 25.99,
        oldPrice: 20.99,
        image: "https://www.pngmart.com/files/21/Coffee-Cup-PNG-Isolated-Photos.png"


    },
    {
        id: 2,
        name: "tasty and healty",
        price: 15.99,
        oldPrice: 20.99,
        image: "https://www.pngmart.com/files/21/Coffee-Cup-PNG-Isolated-Photos.png"


    },
    {
        id: 3,
        name: "tasty and healty",
        price: 15.99,
        oldPrice: 20.99,
        image: "https://www.pngmart.com/files/21/Coffee-Cup-PNG-Isolated-Photos.png"


    },
    {
        id: 4,
        name: "tasty and healty",
        price: 15.99,
        oldPrice: 20.99,
        image: "https://www.pngmart.com/files/21/Coffee-Cup-PNG-Isolated-Photos.png"


    },
    {
        id: 5,
        name: "tasty and healty",
        price: 15.99,
        oldPrice: 20.99,
        image: "https://www.pngmart.com/files/21/Coffee-Cup-PNG-Isolated-Photos.png"


    },
    {
        id: 6,
        name: "tasty and healty",
        price: 15.99,
        oldPrice: 20.99,
        image: "https://www.pngmart.com/files/21/Coffee-Cup-PNG-Isolated-Photos.png"


    }
]

const Product = () => {
    const { addItem } = useCart()
    return (
        <div>
            <section class="products" id="products">

                <h1 class="heading"> our <span>products</span> </h1>

                <div class="box-container">

                    {
                        products.map((product) => <div class="box">
                            <div class="icons">
                                <a onClick={() => addItem({ ...product, id: product.id })} class="fas fa-shopping-cart"></a>
                                <a href="#" class="fas fa-heart"></a>
                                <a href="#" class="fas fa-eye"></a>
                            </div>
                            <div class="image">
                                <img src={product.image} alt="" />
                            </div>
                            <div class="content">
                                <h3>{product.name}</h3>
                                <div class="stars">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star-half-alt"></i>
                                </div>
                                <div class="price"> ৳ {product.price} <span> ৳ {product.oldPrice}</span></div>
                            </div>
                        </div>)
                    }



                </div>

            </section>
        </div>
    );
};

export default Product;