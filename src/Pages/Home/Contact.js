/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';

const Contact = () => {
    return (
        <div>
            <section class="contact" id="contact">

                <h1 class="heading"> <span>contact</span> us </h1>

                <div class="row">

                    // eslint-disable-next-line jsx-a11y/iframe-has-title
                    <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d56773.80730174624!2d90.38493799118486!3d23.735324206187112!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1661800743420!5m2!1sen!2sbd" allowfullscreen="" loading="lazy"></iframe>

                    <form action="">
                        <h3>get in touch</h3>
                        <div class="inputBox">
                            <span class="fas fa-user"></span>
                            <input type="text" placeholder="name" />
                        </div>
                        <div class="inputBox">
                            <span class="fas fa-envelope"></span>
                            <input type="email" placeholder="email" />
                        </div>
                        <div class="inputBox">
                            <span class="fas fa-phone"></span>
                            <input type="number" placeholder="number" />
                        </div>
                        <input type="submit" value="contact now" class="btn" />
                    </form>

                </div>

            </section>

        </div>
    );
};

export default Contact;