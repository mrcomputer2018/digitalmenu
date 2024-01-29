import "./product.css";

function Product() {
    return (
        <>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Product Name</h5>
                    <p className="card-text">Product Description</p>
                    <a href="#" className="btn btn-primary">Add to Cart</a>
                </div>
            </div>
        </>
    )
}

export default Product;