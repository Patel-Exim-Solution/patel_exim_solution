import AboutUsInfoDetails from "@/components/AboutUsInfoDetails";
import Button from "@/components/Button";
import ChooseUs from "@/components/ChooseUsSection";
import HeaderPageTitle from "@/components/HeaderPageTitle";

export default function About(){
    return (
        <div className="about-page-container">
            <HeaderPageTitle title={'About Us'} parentPage={'Home'} />
            <AboutUsInfoDetails imgPath="/images/products/curtains_list.png" />
            <ChooseUs headerTitle="What Sets Us Apart" />
            <div className="section-container">
                <h3 className="title primary-text">
                Build a Sustainable Future Together
                </h3>
                <p className="main-desc">
                Whether you're sourcing for ethical retail, green gifting, or conscious lifestyle brands, Patel Exim Solutions is here to support your vision with integrity, consistency, and a greener promise.
                </p>
                <p className="sub-desc">
                Together, let's build a more sustainable and responsible global marketplace—one shipment at a time.
                </p>
                <div className="action-btn-group">
                <Button label="Get In Touch"  btnClassName="get-in-touch-action-btn primary" />
                <Button label="View Our Product"  btnClassName="view-product-action-btn secondary" />
                </div>
            </div>
        </div>
    )
}