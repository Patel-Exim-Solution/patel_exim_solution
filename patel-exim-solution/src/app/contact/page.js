"use client";
import ContactUsForm from "@/components/ContactUsForm";
import HeaderPageTitle from "@/components/HeaderPageTitle";
import MyMap from "@/components/MyMap";

export default function Contact(){
    return (
        <div className="contact-page-container">
            <HeaderPageTitle title={'Contact Us'} parentPage={'Home'} />
            <ContactUsForm />
            <MyMap />
        </div>
    )
}