import dynamic from "next/dynamic";
import ContactUsForm from "@/components/ContactUsForm";
import HeaderPageTitle from "@/components/HeaderPageTitle";

// Dynamically import MyMap with SSR disabled to avoid window is not defined error
const MyMap = dynamic(() => import("@/components/MyMap"), {
    ssr: false,
});

export default function Contact(){
    return (
        <div className="contact-page-container">
            <HeaderPageTitle title={'Contact Us'} parentPage={'Home'} />
            <ContactUsForm />
            <MyMap />
        </div>
    )
}