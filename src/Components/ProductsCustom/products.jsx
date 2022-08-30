// import Details from "../../Images/Details.jpg";
import productData from "../../Json/product.json";
import './products.css';
const ProductComponent = () => {

    return (
        <>
            <div className="container productComponent">
                <div className="content">
                    <h3>{productData.productTitle}</h3>
                    <h6>These is  our <span>Products</span></h6>
                    <p>If you like, pleace contact us to buy it </p>
                </div>

                <div className="row">
                    {/* {
                        productData && productData.map(list => {
                            return (
                                <div className="col-md-4" key={list.id}>
                                    {
                                        list.productList && list.productList.map(data => {
                                            return (
                                                <div className="box" key={list.id}>
                                                    <img src={data.image} className="img-fluid" alt="" />
                                                    <div className="content">
                                                        <h5>{data.title}</h5>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            )
                        })
                    } */}

                    <div className="col-md-4">
                        <div className="box">
                            <img src={productData.productList[0].image} className="img-fluid" alt="" />
                            <div className="content">
                                <h5>{productData.productList[0].title}</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="box">
                            <img src={productData.productList[1].image} className="img-fluid" alt="" />
                            <div className="content">
                                <h5>{productData.productList[1].title}</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="box">
                            <img src={productData.productList[2].image} className="img-fluid" alt="" />
                            <div className="content">
                                <h5>{productData.productList[2].title}</h5>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="box">
                            <img src={productData.productList[3].image} className="img-fluid" alt="" />
                            <div className="content">
                                <h5>{productData.productList[3].title}</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="box">
                            <img src={productData.productList[4].image} className="img-fluid" alt="" />
                            <div className="content">
                                <h5>{productData.productList[4].title}</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="box">
                            <img src={productData.productList[5].image} className="img-fluid" alt="" />
                            <div className="content">
                                <h5>{productData.productList[5].title}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductComponent;