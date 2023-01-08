export default function Testimonials(){
    return(
        <div className="section-4">
            <h1>Testimonials</h1>
            <div className="testimonial-grid">
                <article className="testimonial">
                    <img  src="./img/image-daniel.jpg" alt="daniel clifford" />
                    <h2 className="name">Daniel Clifford</h2>
                    <p>
                        "I recently purchased a pair of sneakers from your e-commerce website and I am extremely satisfied with my purchase. 
                        The shoes are exactly as described, arrived on time, and the ordering process was smooth and easy. I will definitely 
                        be shopping with you again in the future."
                    </p>
                </article>

                <article className="testimonial">
                    <img  src="./img/image-jonathan.jpg" alt="Jonathan Walters" />
                    <h2 className="name">Jonathan Walters</h2>
                    <p>
                        "I am so impressed with the selection of sneakers available on your e-commerce website.
                        I was able to find a pair that I had been searching for everywhere, 
                        and at a great price. The checkout process was simple and the shoes arrived quickly. 
                        I am very happy with my purchase and will be recommending your website to my friends."
                    </p>
                </article>

                <article className="testimonial">
                    <img className="border-primary-400" src="./img/image-patrick.jpg" alt="Patrick Abrams" />
                    <h2 className="name">Patrick Abrams</h2>
                    <p>
                        "As a sneaker collector, I am always on the lookout for new and unique styles. 
                        Your e-commerce website has exceeded my expectations in terms of the variety of options available. 
                        The quality of the sneakers I received was top-notch, and the customer service was excellent. 
                        I will definitely be returning to your website for all of my sneaker purchases in the future."
                    </p>
                </article>

                <article className="testimonial">
                    <img className="border-primary-400" src="./img/image-jeanette.jpg" alt="Jeanette Harmon" />
                    <h2 className="name">Jeanette Harmon</h2>
                    <p>
                        "I was pleasantly surprised by the level of customer service I received from this e-commerce website.
                        I had a question about my order and the staff was very helpful and responsive. The sneakers I purchased 
                        are comfortable and stylish, and I'm glad I found this website."
                    </p>
                </article>
            </div>
        </div>
    );
}