"use client";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa6";
import { testimonialListData } from "@/app/json_config";

export default function TestimonialLIst() {
    const renderStar = (rating) => {
        const fullStar = <FaStar color="#EAD21E" />;
        const halfStar = <FaRegStarHalfStroke color="#EAD21E" />;
        const emptyStar = <FaRegStar />;

        const stars = [];

        for (let i = 1; i <= 5; i++) {
            if (rating >= i) {
                stars.push(<span key={i}>{fullStar}</span>); // full star
            } else if (rating >= i - 0.5) {
                stars.push(<span key={i}>{halfStar}</span>); // half star
            } else {
                stars.push(<span key={i}>{emptyStar}</span>); // empty star
            }
        }

        return <div style={{ display: "flex", gap: "4px" }}>{stars}</div>;
    }
    return (
        <section className={'testimonial-section p-l-r-20 p-l-r-40 p-l-r-60'}>
            <h2 className={'section-title'}>Why Customers Trust Patel Exim Solutions</h2>
            <p className={'section-subtitle'}>Hear how our handcrafted, sustainable products make a difference.</p>

            <div class="testimonial-grid">
                {testimonialListData?.map((testimonial) => (
                <div class="testimonial-card">
                    <div className="card-profile">
                        <Image src={testimonial.user_img} width={60}
                            height={60} alt="Megan" class="user-img" />
                        <div className="profile-info-section">
                            <h3 className="tistimonial-user-name">Megan</h3>
                            <div class="stars">{renderStar(2.5)}</div>
                        </div>
                    </div>
                    <p className="testimonial-desc">“This cup is fantastic! It is so well insulated. I live in the desert, and it keeps my cold drinks cold in the heat.”</p>
                </div>
                ))}
            </div>
        </section>
    );
}
