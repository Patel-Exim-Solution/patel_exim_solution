import { GoArrowRight } from "react-icons/go";

export default function Button(props) {
    const { label, btnClassName, isIconDisplay } = props;
    return <button type='button' className={`flex items-center action-btn ${btnClassName}`}>{label} {isIconDisplay ? <GoArrowRight size={20} /> : null}</button>
}