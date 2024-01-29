import Navbar from "../../components/navbar/navbar";
import Product from "../../components/product/product";
import Title from "../../components/title/title";

function Home() {
    const titulo = "Nosso Cardápio";
    const subtitulo = "Clique em adiionar apara colocar os produtos na sacola de compras. Se preferir, você pode pedir pelo whatsapp: (11) 99999-9999.";

    return (
        <>
            <Navbar />

            <div className="container">
                <div>
                    <Title titulo={ titulo } subtitulo={ subtitulo } />
                </div>

                <div className="products text-center">
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