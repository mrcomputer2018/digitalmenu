import Navbar from "../../components/navbar/navbar";
import Product from "../../components/product/product";

function Home() {
    return (
        <>
            <Navbar />

            <div className="container">
                <div>
                    <h1 className="titulo text-center">Nosso Cardápio</h1>

                    <p className="subtitulo text-center">
                        Clique em adiionar apara colocar os produtos na sacola de compras.
                        Se preferir, você pode pedir pelo whatsapp: (11) 99999-9999.
                    </p>
                </div>

                <div className="products">
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </div>
            </div>
           
        </>
    )
}

export default Home;