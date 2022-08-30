import Hearding from "../../Images/background.jpg"
import SecondBackground from "../../Images/secondBackground.jpg";
import MainProduct from "../../Images/macallan.jpg";
import SecondProduct12 from "../../Images/macallan12.jpg";
import SecondProduct15 from "../../Images/macallan15.jpg";

import "./home.css"
const Home = () => {
    return (
        <>
            <div className="header">
                <div>
                    <div className="img">
                        <img src={Hearding} alt="" />
                    </div>
                    <div className="HeaderImgOverlay"></div>
                </div>
                <div className="HeaderContent">
                    <h6>
                        <span>Qing's</span> whiskey store</h6>
                </div>
            </div>

            {/* Details Section Start */}
            <div className="details_home container">
                <div className="row">
                    <div className="col-sm-5">
                        <img src={MainProduct} className='img-fluid' alt="" />
                    </div>
                    <div className="col-sm-6">
                        <h6>This is our popular wine</h6>
                        <h5>麥卡倫 <span>雙</span>雪莉桶
                            <span>18 years</span>
                        </h5>
                        <p>
                            果乾。 薑 太妃糖
                            <br />
                            兩種雪莉桶在一款非凡的單一麥芽威士忌中創造出完美的均衡和諧。
                            我們的雙雪莉桶威士忌陳釀於兩種橡木桶，每一個都是精心挑選而出後以 Oloroso 雪莉酒潤味。
                            美國白橡木賦予細緻的香草、柑橘和奶油糖風味； 西班牙紅橡木添加麥卡倫特有的淡淡香料氣息。
                            熟成後，兩種非凡的威士忌相互結合，交融出一款獨一無二的單一麥芽威士忌，散發特別甜香、溫暖的風味與特性。
                            無論純飲或加冰塊皆適宜。

                        </p>
                        <p>
                            麥卡倫雙雪莉桶18 年，帶有鮮豔琥珀蜂蜜色，散發乾果、生薑和太妃糖香氣，其溫潤的橡木辛香也平衡了葡萄乾和蘇丹娜葡萄濃香。
                        </p>

                    </div>
                </div>
            </div>

            {/* Details Second  */}
            {/* <div className="details_home_second">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="box">
                                <h6>To Be youself</h6>
                                <p>
                                    loremdqfweffewffweflorffefwfe
                                    dfewfwefweffwfeffe
                                    efwfewfweffwwfefwwew
                                    fweewfewwewefewwefewfw
                                </p>
                            </div>
                        </div>
                        <div className="col-sm-4 mid">
                            <div className="box">
                                <h6>To Be youself</h6>
                                <p>
                                    loremdqfweffewffweflorffefwfe
                                    dfewfwefweffwfeffe
                                    efwfewfweffwwfefwwew
                                    fweewfewwewefewwefewfw
                                </p>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="box">
                                <h6>To Be youself</h6>
                                <p>
                                    loremdqfweffewffweflorffefwfe
                                    dfewfwefweffwfeffe
                                    efwfewfweffwwfefwwew
                                    fweewfewwewefewwefewfw
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* Details End  */}

            {/* Details Section End */}

            <div className="second_header">
                <div>
                    <div className="img">
                        <img src={SecondBackground} alt="" />
                    </div>
                    <div className="SecondHeaderOve"></div>
                </div>

                <div className="SecondHeaderContent">
                    <h1>Just take it...</h1>
                </div>


            </div>

            {/* Custom section Start */}
            <div className="custom_section container">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="box">
                            {/*  */}
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm-5">
                                        <img src={SecondProduct12} className="img-fluid" alt="" />
                                    </div>
                                    <div className="offset-sm-1 col-sm-6">
                                        <h6>麥卡倫雙雪莉桶12年</h6>
                                        <p>蜂蜜。 柑橘。 薑<br />
                                            Oloroso 雪莉酒潤味的美國紅橡木與西班牙白橡木桶完美融合，創造出這款特色鮮明，風味溫潤，口感和諧的單一麥芽威士忌。 技藝精湛的麥卡倫釀酒團隊以最佳比例的西班牙白橡木雪莉桶與美國紅橡木雪莉桶，以傳統麥卡倫風味中的濃郁果香、雪莉酒與木質辛香料氣息為背景，襯托美國紅橡木細緻迷人的特性，使其成為品酩焦點。</p>
                                    </div>
                                </div>
                            </div>

                            {/*  */}
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="box">
                            {/*  */}
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm-5">
                                        <img src={SecondProduct15} className="img-fluid" alt="" />
                                    </div>
                                    <div className="offset-sm-1 col-sm-6">
                                        <h6>麥卡倫雙雪莉桶15年</h6>
                                        <p>果乾。 香草。 柑橘 <br/>
                                            兩種各具特色的橡木桶在一款非凡的單一買牙威士忌中創造出完美的和諧。 我們的雙雪莉桶威士忌陳釀於兩種橡木桶，每一個都是精心挑選而出後以 Oloroso 雪莉酒潤味。 美國紅橡木賦予細緻的香草、柑橘和奶油糖風味； 歐洲白橡木添加麥卡倫特有的淡淡香料氣息。 熟成 15 年後，兩種非凡的威士忌相互結合，交融出一款獨一無二的單一麥芽威士忌，散發特別甜香、溫暖的風味與特性。 無論純飲或加冰塊皆適宜。</p>
                                    </div>
                                </div>
                            </div>

                            {/*  */}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home;