import Navbar from "../../components/navbar/navbar";
import Title from "../../components/title/title";

function Checkout() {
    const titulo = "Finalizar Pedido";
    const subtitulo = "Revise os itens do seu pedido e clique em finalizar";

    return (
        <d>
            <Navbar />

            <div className="container">
                <div>
                     <Title titulo={ titulo } subtitulo={ subtitulo } />
                </div>
            </div>
        </d>
    );
}

export default Checkout;