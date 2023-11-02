import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



import logo from "../Img/pizzaria-tropitallia.png"
import carrinho from "../Img/shopping_cart_FILL0_wght400_GRAD0_opsz24 (1).png"


import img_carrossel_01 from "../Img/food_facebook_cover_06.jpg"

import img1 from "../Img/pizza_portuguesa.jpeg"
import img2 from "../Img/_6c748948-4e96-457e-b7dd-30d07bc51962.jpeg"
import img3 from "../Img/_f508a11b-bad9.jpeg"
import img4 from "../Img/mista-111.jpeg"

function Pagina01() {
    const products = [
        { id: 1, name: 'Portuguesa', price: 'R$ 19.99', image: img1 },
        { id: 2, name: 'Calabresa', price: 'R$ 29.99', image: img2 },
        { id: 3, name: 'Musalera', price: 'R$ 39.99', image: img3 },
        { id: 4, name: 'Pizza Mista', price: 'R$ 39.99', image: img4 },
        { id: 5, name: 'Produto 3', price: 'R$ 39.99', image: img4 },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
    };

    return (
        <div className="meu-componente">
            <header>
                <img src={logo} className='logo' ></img>
                <div id="aa">
                    <nav>
                        <a href="">
                            <p>INICIO</p>
                        </a>
                        <a href="">
                            <p>CONTATOS</p>
                        </a>
                        <a href="">
                            <p>SOBRE</p>
                        </a>
                        <a>
                            <img src={carrinho} className="carrinho" ></img>
                        </a>
                    </nav>
                </div>
            </header>

            <div className="carrossel">

                <Carousel>

                    <div>
                        <img src={img_carrossel_01} alt="erro 404" />
                    </div>
                    <div>
                        <img src="image2.jpg" alt="erro 404" />

                    </div>
                    <div>
                        <img src="image3.jpg" alt="erro 404" />
                    </div>
                </Carousel>

            </div>
            <div className="product-carousel-container">

                <div className="borda-informacoes">
                    <h2>Pizzas em Destaque</h2>
                </div>
                <Slider {...settings}>
                    {products.map(product => (
                        <div key={product.id} className="product-item">
                            <div className="container-item">
                                <img src={product.image} alt={product.name} />
                                <h3>{product.name}</h3>
                                <p>{product.price}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            <footer></footer>

        </div>
    );
}
export default Pagina01