import Navbar from "../../components/navbar/navbar";
import Title from "../../components/title/title";

function History(){
    const titulo = "Histórico de Pedidos";
    const subtitulo = "Veja aqui os pedidos já realizados";
    
    return (
        <>
            <Navbar />

            <div className="container">
                <div>
                    <Title titulo={ titulo } subtitulo={ subtitulo } />
                </div>

                <div>
                    Lista de pedidos
                </div>
            </div>
        </>
    )
}

export default History;