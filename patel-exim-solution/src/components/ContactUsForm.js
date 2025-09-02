"use client";

import { addressInfo } from "@/app/json_config";
import Button from "./Button";

// import Image from "next/image";

export default function ContactUsForm() {

    return (
        <section className={'contact-us-section'}>
            <h2 className={'section-title'}>Contact Us</h2>
            <p className={'section-subtitle'}>Ready to start your sustainable journey with us?</p>

            <div className="contact-form-container">
                <div className="get-in-touch-details">
                    <h2 className={'primary-text title'}>Get In Touch</h2>
                    {addressInfo?.map(detail => (
                        <div className="info-details-box">
                            <div className="info-icon">{detail.icon}</div>
                            <div className="info-desc">
                                <p className="desc-label">
                                    {detail.label}
                                </p>
                                <p className="desc-val">
                                    {detail.value}
                                </p>
                            </div>
                        </div>
                    ))
                    }
                </div>
                <div className="form-fields-group">
                    <div className="input-fields">
                    <input type="text" name="name" value='' className="form-field name-field" placeholder="Your Name" />
                    <input type="email" name="email" value='' className="form-field email-field" placeholder="Your Email Address" />
                    <textarea name="message" rows={4} value='' placeholder="Your Message" className="form-field textarea-field" />
                    </div>
                    <Button label="Send Message" btnClassName="form-submit-btn primary" />
                </div>
            </div>
        </section>
    );
}
