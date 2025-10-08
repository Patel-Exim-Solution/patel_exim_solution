"use client";

import { useState } from "react";
import { addressInfo } from "@/app/json_config";
import toast from "react-hot-toast";
import Button from "./Button";

// import Image from "next/image";

export default function ContactUsForm(props) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [loading, setLoading] = useState(false)
    const { isFrom } = props || {};

    // ✅ Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // ✅ Handle form submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        try {
        console.log('llaod')
            const res = await fetch("/api/send", {
                method: 'POST',
                headers: { "Content-Type": 'application/json' },
                body: JSON.stringify(formData),
            })

            const data = await res.json();
            console.log("Form submitted:", data);

            if (data.success) {
                toast.success('Message sent successfully!')
                setLoading(false);
                setFormData({ name: "", email: "", message: "" });
            } else {
                setLoading(false);
                toast.error(data.error || 'Failed to send message. try again.')
            }
        } catch (err) {
            setLoading(false);
            toast.error('Something went wrong. Please try again.')
        }
    };

    return (
        <section className={'contact-us-section p-l-r-40 p-l-r-60'}>
            {isFrom === 'home' ? (
                <>
                    <h2 className={'section-title'}>Contact Us</h2>
                    <p className={'section-subtitle'}>Ready to start your sustainable journey with us?</p>
                </>
            ) : null}

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

                <form className="contact-form-container" onSubmit={handleSubmit}>
                    <div className="form-fields-group">
                        <div className="input-fields">
                            <input type="text" name="name"
                                value={formData.name}
                                onChange={handleChange} className="form-field name-field" placeholder="Your Name" />
                            <input type="email"
                                value={formData.email}
                                onChange={handleChange} name="email" className="form-field email-field" placeholder="Your Email Address" />
                            <textarea name="message"
                                value={formData.message}
                                onChange={handleChange} rows={4} placeholder="Your Message" className="form-field textarea-field" />
                        </div>
                        <Button type="submit" loadingMessage='sending...' disabled={loading} loading={loading} label="Send Message" btnClassName="form-submit-btn primary" isPrimary={true} />
                    </div>

                </form>
            </div>
        </section>
    );
}
