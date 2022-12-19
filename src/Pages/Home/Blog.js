import React from 'react';

const Blog = () => {
    return (
        <div>
            <section class="blogs" id="blogs">

                <h1 class="heading"> our <span>blogs</span> </h1>

                <div class="box-container">

                    <div class="box">
                        <div class="image">
                            <img src="images/blog-1.jpeg" alt=""/>
                        </div>
                        <div class="content">
                            <a href="#" class="title">tasty and refreshing coffee</a>
                            <span>by admin / 21st may, 2021</span>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, dicta.</p>
                            <a href="#" class="btn">read more</a>
                        </div>
                    </div>

                    <div class="box">
                        <div class="image">
                            <img src="images/blog-2.jpeg" alt=""/>
                        </div>
                        <div class="content">
                            <a href="#" class="title">tasty and refreshing coffee</a>
                            <span>by admin / 21st may, 2021</span>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, dicta.</p>
                            <a href="#" class="btn">read more</a>
                        </div>
                    </div>

                    <div class="box">
                        <div class="image">
                            <img src="images/blog-3.jpeg" alt=""/>
                        </div>
                        <div class="content">
                            <a href="#" class="title">tasty and refreshing coffee</a>
                            <span>by admin / 21st may, 2021</span>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, dicta.</p>
                            <a href="#" class="btn">read more</a>
                        </div>
                    </div>

                </div>

            </section>
        </div>
    );
};

export default Blog;