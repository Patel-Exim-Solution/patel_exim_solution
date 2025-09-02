import Image from "next/image";
import { GoArrowRight } from "react-icons/go";
import Button from "./Button";

export default function AboutUsInfoDetails() {
    return (
        <div className="about-us-info-details-section flex items-center">
            <div className="details-section">
                <p className="header-label secondary-text-color">About Us</p>
                <h2 className="title primary-text">Welcome to Patel Exim Solution</h2>
                <p className="desc">At Patel Exim Solutions, we are your trusted gateway to sustainable global trade. As "The Earth-Friendly Export Partner", we proudly export eco-conscious products such as <strong>jute goods, organic cotton textiles, and innovative vegan leather accessories</strong>—all crafted with care for both people and the planet.</p>
           <Button label="Explore More" isIconDisplay btnClassName="about-action-btn secondary" />
            </div>
            <div className="img-section">

            <Image className="about-info-img" src={'/images/About_us_info.png'} alt="Rolled Carpets" width={470} height={560} />
            </div>
        </div>
    )
}