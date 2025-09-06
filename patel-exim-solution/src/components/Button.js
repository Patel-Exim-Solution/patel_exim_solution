import { GoArrowRight } from "react-icons/go";
import { RiLoader4Fill } from "react-icons/ri";

export default function Button(props) {
    const { label, btnClassName, isIconDisplay, onClick, type = "button", disabled = false, loading = false, loadingMessage = '', isPrimary = false } = props;
    return <button type={type} disabled={disabled} onClick={onClick} className={`flex items-center action-btn ${btnClassName} ${disabled? 'disable-btn' : ''}`}>
        {loading ? <>
            <RiLoader4Fill size={20} color={isPrimary ? "#ffffff" : '#22223B'} />
            {loadingMessage}
        </> :
            (
                <>
                    {label} {isIconDisplay ? <GoArrowRight size={20} /> : null}
                </>
            )
        }
    </button>
}