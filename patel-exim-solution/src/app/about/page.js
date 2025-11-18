"use client";
import { useRouter } from "next/navigation";
import AboutUsInfoDetails from "@/components/AboutUsInfoDetails";
import Button from "@/components/Button";
import ChooseUs from "@/components/ChooseUsSection";
import HeaderPageTitle from "@/components/HeaderPageTitle";

export default function About(){
    const router = useRouter();

    const handleGetInTouch = () => {
        router.push('/contact');
    }
    const handleProductPage = () => {
        router.push('/products')
    }
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
                <Button label="Get In Touch"  btnClassName="get-in-touch-action-btn primary" onClick={handleGetInTouch} />
                <Button label="View Our Product"  btnClassName="view-product-action-btn secondary" onClick={handleProductPage} />
                </div>
            </div>
            <div className="why-we-exist-container">
                    <h3 className="why-we-exist-title">Why we exist</h3>
                    <p className="why-we-exist-description">
                    The world produces over 300 million tons of plastic every year — nearly equivalent to the weight of the entire human population. A major contributor to this crisis? Single-use plastic packaging.
                    </p>
                    <p className="why-we-exist-description">
                    At PATEL EXIM SOLUTIONS, we refuse to stand by. We exist to fight plastic pollution, empower communities, and inspire a shift toward a greener tomorrow.
                    Our Jute bags aren't just products — they're solutions. </p>
                    <p className="why-we-exist-description">Each one is a pledge to protect forests, clean oceans, and support ethical labor. Every stitch carries the hopes of a cleaner, fairer, and more beautiful world.</p>
                </div>
        </div>
    )
}