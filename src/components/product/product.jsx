import Button from "../button/button";

import "./product.css";
import foto from "../../assets/hamburguer.png";
import bagBlack from "../../assets/bag-black.png";

function Product() {
    return (
        <>
            <div className="product-box text-center">
                <img src={ foto } alt="imagem de um hamburger" />

                <div>
                    <h2 className="title-box">Spicy Burger</h2>

                    <p className="product-description">
                        Hamburger de 250g, queijo, bacon, pimenta jalapeño, alface e tomate.
                    </p>

                    <p className="product-price">R$18,90</p>
                </div>
                
                <div>
                    <Button estilo='btn btn-cart'>
                        <img className="icon" src={ bagBlack } alt="imagem de carrinho" />
                        Adicionar
                    </Button>
                </div>
            
            </div>
        </>
    )
}

export default Product;