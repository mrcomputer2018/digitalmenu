import Button from "../button/button";

import "./navbar.css";
import logo from "../../assets/logo.png"
import bag from "../../assets/bag.png"

function Navbar() {
    return (
        <div className="navbar-container">
            <img className="logo" src={ logo } alt="imagem do logotipo" />

            <div className="navabr-menu">
                <a href="#">Historico</a>

                <Button>
                    <img className="icon" src={ bag } alt="imagem de uma sacola" />
                    Sacola
                </Button>
            </div>
        </div>

    )
}

export default Navbar;