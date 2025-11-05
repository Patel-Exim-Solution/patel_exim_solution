import Link from "next/link";

export default function HeaderPageTitle(props){
    const {title, parentPage, parentPageLink = ''} = props || {};
    return (
        <div className="header-page-title-container">
            <div className="title-details-box">
            <h1 className="page-title">{title}</h1>
            <p className="page-breadcrume-detail">
                
            <Link href={parentPageLink}>{parentPage}</Link>
             {` > ${title}`}
                </p>
            </div>
        </div>
    )
}