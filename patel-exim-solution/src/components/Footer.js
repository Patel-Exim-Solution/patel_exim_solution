import Image from "next/image";
import { socialIconsList, footerQuickLinks, footerTopProducts, addressInfo } from "@/app/json_config";
import Link from "next/link";


export default function Footer() {
    return (
        <div className="footer-section">
            <div className="footer-desc-container">
            <div className="footer-part-1">
                <Image src="/LOGO.png" alt="Company Logo"
                    width={130}
                    height={130} />
                <p className="brand-desc-info">
                    Patel Exim Solutions in eco-conscious exports—from jute and organic cotton to vegan leather accessories—crafted with care for people and the planet.
                </p>
                <div className="social-icon-links">
                    {socialIconsList.map((item, index) => (
                        <span key={index} className="social-icon-item"><a target="_blank" href={item.url}>{item.icon}</a></span>
                    ))}
                </div>
            </div>
            <div className="footer-part-2">
                <h3 className="footer-column-header primary-text">
                    Quick Links
                </h3>
                <ul className="footer-links">
                    {footerQuickLinks?.map((link, index) => (
                        <li key={index} className="footer-link-item">
                            <Link href={`/${link.value}`} className="link-item hover:text-[#005F00] primary-text-color" >{link.label}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="footer-part-3">
                <h3 className="footer-column-header primary-text">
                    Our Top Products
                </h3>
                <ul className="footer-links">
                    {footerTopProducts?.map((link, index) => (
                        <li key={index} className="footer-link-item">
                            <Link href={`/${link.value}`} className="link-item hover:text-[#005F00] primary-text-color" >{link.label}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="footer-part-4">
                <h3 className="footer-column-header primary-text">
                    Contact Us
                </h3>
                <ul className="footer-links">
                    {addressInfo?.map((link, index) => (
                        <li key={index} className="footer-address-item">
                            <span className="address-icon">
                                {link.icon}
                            </span>
                            <p className="address-value">{link.value}</p>
                        </li>
                    ))}
                </ul>
                {/* <Image className="brand-scanner-img" src="/images/brand_scanner.png" alt="Company Scanner"
                    width={120}
                    height={120} /> */}
            </div>
            </div>
            <hr className="footer-bottom-line" />
            <p className="footer-copy-right-text">© 2025 Patel Exim Solutions. All rights reserved.</p>
        </div>
    )
}