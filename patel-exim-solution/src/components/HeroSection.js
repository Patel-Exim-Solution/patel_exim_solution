"use client";
import { useRouter } from 'next/navigation';
import { SwiperSlide, Swiper } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import "swiper/css";
import "swiper/css/autoplay";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";
import { heroSectionDetails } from "@/app/json_config";

export default function HeroSection() {
    const router = useRouter();

    const handleExploreBtn = () => {
        router.push('/products');
    }
    return (
        <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            className="hero-swiper"
        >
            {heroSectionDetails?.map((heroItem, index) => (
                <SwiperSlide key={index}>
                    <div className={`hero-section hero-${index+1}`} key={index} >
                        <div className="detail-box  m-auto flex">

                            <div className="left-container">
                                <h2 className="hero-title primary-text">{heroItem?.title}</h2>
                                <p className="hero-description secondary-text">{heroItem?.description}</p>
                                <Image className="left-img" src={heroItem?.img1?.url} alt="Rolled Carpets" width={heroItem.img1.width} height={heroItem.img2.height}
                                />
                            </div>

                            <div className="right-container">
                                <Image src={heroItem?.img2?.url} alt="Rolled Carpets" width={heroItem?.img2?.width} height={heroItem?.img2?.height}
                                />
                                <p className="hero-action-button flex items-center gap-[10]" onClick={handleExploreBtn} >{heroItem?.buttonText} <GoArrowRight size={20} /></p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}