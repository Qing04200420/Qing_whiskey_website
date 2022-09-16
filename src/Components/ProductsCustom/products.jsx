// import Details from "../../Images/Details.jpg";
import { useEffect, useState } from "react";
import { datas } from "../../Json/product";
import update from 'immutability-helper';

import './products.css';

function Whiskey({ data, remove }) {
    return (
        <div className="col-md-4 col-sm-6">
            <div className="box">
                <img src={data.image} className="img-fluid" alt="" />
                <div className="content">
                    <h4>{data.title}</h4>
                </div>
                <div className="price">
                    {/* <h5>{data.is_discount ? "有折扣" : ""}</h5> */}
                    {!data.is_discount && <h5>原價: {data.price}</h5>}
                    {data.is_discount && <h5> 優惠中 <span className="red">{data.discount * 100}</span> 折: {parseInt(data.price * data.discount)}{" "} 元</h5>}
                    <button onClick={remove}>remove</button>
                </div>
            </div>
        </div>
    );
}

const ProductComponent = () => {
    const productTitle = "產品區";
    const [keyword, setKeyword] = useState("");
    const [rawData, setRawData] = useState(datas);
    const [filterData, setFilterData] = useState([]);
    useEffect(() => {
        setFilterData(rawData.filter(whiskey => whiskey.title.toLowerCase().includes(keyword.toLowerCase())))
    }, [keyword, rawData])

    return (
        <>
            <div className="container productComponent">
                <div className="content">
                    <h3>{productTitle}</h3>
                    <h6>These is  our <span>Products</span></h6>
                    <p>If you like, pleace contact us to buy it </p>
                    {keyword && <p>Search for: {keyword}</p>}
                    <input type="text"
                        value={keyword}
                        onChange={event => setKeyword(event.target.value)} />
                </div>
                <div className="toggle ">
                    {rawData.map((data, dataId) => {
                        return (
                            <span key={data.id} className="dataId mx-2">
                                <span className="col-md-4">{data.id}
                                    <input type="checkbox" className="inputId"
                                        checked={data.is_discount}
                                        onChange={(e) => {
                                            setRawData(update(
                                                rawData, {
                                                [dataId]: { $toggle: ['is_discount'] }
                                            }
                                            ))
                                        }} />
                                </span>
                            </span>
                        )
                    })}
                </div>
                <div className="row">
                    {
                        filterData.map(data => (
                            <Whiskey key={data.id} data={data}
                                remove={() => {
                                    let index = rawData.findIndex(item => item.id === data.id);
                                    setRawData(update(rawData, { $splice: [[index, 1]] }));
                                    console.log(rawData);
                                }} />
                        ))
                    }
                </div>
            </div>
        </>
    );
}

export default ProductComponent;