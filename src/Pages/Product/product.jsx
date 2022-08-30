import Hearding from "../../Images/productImage.jpg";
import './product.css';
import { ProductComponent } from "../../Components";
const ProductPage = () => {
    return (
        <>
            <div className='AboutHeader'>
                <div>
                    <img src={Hearding} className="img-fluid" alt="" />
                    <div className='Overlay'></div>
                </div>
            </div>
            <ProductComponent/>
        </>
    )
}

export default ProductPage;