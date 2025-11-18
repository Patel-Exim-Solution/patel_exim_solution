"use client";
import Link from "next/link";
import { IoChevronBack } from "react-icons/io5";

export default function BackButton(props){
    const { parentPageLink = ''} = props || {};
    return (
        <Link href={parentPageLink} className="back-to-prev-btn"><IoChevronBack size={16} /> Back</Link>
    )
}