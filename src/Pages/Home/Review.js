import React from 'react';

const Review = () => {
    return (
        <div>
            <section class="review" id="review">

                <h1 class="heading"> customer's <span>review</span> </h1>

                <div class="box-container">

                    <div class="box">
                        <img src="images/quote-img.png" alt="" class="quote"/>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nulla sit libero nemo fuga sequi nobis? Necessitatibus aut laborum, nisi quas eaque laudantium consequuntur iste ex aliquam minus vel? Nemo.</p>
                            <img src="images/pic-1.png" class="user" alt=""/>
                                <h3>john deo</h3>
                                <div class="stars">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star-half-alt"></i>
                                </div>
                            </div>

                            <div class="box">
                                <img src="images/quote-img.png" alt="" class="quote" />
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nulla sit libero nemo fuga sequi nobis? Necessitatibus aut laborum, nisi quas eaque laudantium consequuntur iste ex aliquam minus vel? Nemo.</p>
                                <img src="images/pic-2.png" class="user" alt=""/>
                                    <h3>john deo</h3>
                                    <div class="stars">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star-half-alt"></i>
                                    </div>
                            </div>

                            <div class="box">
                                <img src="images/quote-img.png" alt="" class="quote" />
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nulla sit libero nemo fuga sequi nobis? Necessitatibus aut laborum, nisi quas eaque laudantium consequuntur iste ex aliquam minus vel? Nemo.</p>
                                <img src="images/pic-3.png" class="user" alt="" />
                                <h3>john deo</h3>
                                <div class="stars">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star-half-alt"></i>
                                </div>
                            </div>

                    </div>

            </section>
        </div>
    );
};

export default Review;