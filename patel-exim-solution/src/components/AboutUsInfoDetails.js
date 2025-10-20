"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Button from "./Button";

export default function AboutUsInfoDetails(props) {
    const { isFrom, imgPath = '' } = props || {};
    const router = useRouter();
    const handleExploreMore = () => {
        router.push('/products')
    }
    return (
        <div className="about-us-info-details-section p-l-r-20 p-l-r-40 p-l-r-60 flex items-center">
            <div className="details-section">
                {isFrom === 'home' ? <p className="header-label secondary-text-color">About Us</p> : null}
                <h2 className="title primary-text">Welcome to Patel Exim Solution</h2>
                {isFrom === "home" ? <p className="desc">At Patel Exim Solutions, we are your trusted gateway to sustainable global trade. As "The Earth-Friendly Export Partner", we proudly export eco-conscious products such as <strong>jute goods, organic cotton textiles, and innovative vegan leather accessories</strong>—all crafted with care for both people and the planet.</p> : (
                    <div className="about-us-desc">
                        <p className="desc">
                            At <strong>Patel Exim Solutions</strong>, we believe that global trade can be a force for good. As “The Earth-Friendly Export Partner,” our mission is to connect the world with ethically sourced, eco-conscious products that make a positive impact on people and the planet.
                        </p>
                        <p className="desc">
                            We specialize in exporting high-quality goods such as <strong>jute products, organic cotton textiles, and vegan leather accessories</strong>—crafted by skilled artisans and responsible manufacturers across India. Each product is thoughtfully designed and sustainably produced, ensuring that every shipment reflects our commitment to <strong>transparency, quality, and care for the environment.</strong>
                        </p>
                    </div>
                )}
                {isFrom === "home" ? <Button label="Explore More" onClick={handleExploreMore} isIconDisplay btnClassName="about-action-btn secondary" /> : null}
            </div>
            <div className="img-section">

                <Image className="about-info-img" src={imgPath || '/images/About_us_info.png'} alt="Rolled Carpets" width={470} height={560} />
            </div>
        </div>
    )
}