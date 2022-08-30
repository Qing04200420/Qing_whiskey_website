import './about.css';
import Hearding from "../../Images/aboutBackground.jpg"
import Details from "../../Images/aboutImage.jpg"

const AboutPage = () => {
    return (
        <>
            {/* Header */}
            <div className='AboutHeader'>
                <div>
                    <img src={Hearding} className="img-fluid" alt="" />
                    <div className='Overlay'></div>
                </div>
            </div>

            {/* about main section Start */}

            <div className='about_main container'>
                <div className='row'>
                    <div className='col-sm-6'>
                        <img src={Details} className="img-fluid" alt="" />
                    </div>
                    <div className='offset-sm-1 col-sm-5'>
                        <h5>決定性特色</h5>
                        <h6>精湛的製桶及釀酒工藝</h6>
                        <p> 麥卡倫之所以享有如此卓絕的名聲，原因之一就是我們聞名於世的非凡橡木桶。 這些橡木桶從挑選採購、製作、烘烤到潤桶都經過我們的橡木桶大師團隊嚴格把關， 以符合釀酒團隊要求的規格。 在麥卡倫，每一款威士忌的品質主要取決於其熟成橡木桶的品質，同時也受到以水、酵母和大麥蒸餾而成的「新酒」品質影響。 麥卡倫威士忌最終的風味和特性高達 80% 以上都受木桶品質左右，木桶是確保我們的單一麥芽威士忌能擁有所需品質和風格的最主要因素。

                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutPage;