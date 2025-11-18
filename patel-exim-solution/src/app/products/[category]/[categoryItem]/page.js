'use client';
import HeaderPageTitle from "@/components/HeaderPageTitle";
import Image from "next/image";
import { productSubCategoriesDetails } from "../../../json_config";
import BackButton from "@/components/BackButton";

export default function CategoryItemsPage({ params }) {
    const { category, categoryItem } = params;
    console.log(category, categoryItem);
    const categoryItemDetails = productSubCategoriesDetails[categoryItem];
    const subCategoryName = categoryItemDetails.subCategoryName;
    return (
        <div className="products-page-container">
            <HeaderPageTitle title={subCategoryName || "Products"} parentPage={categoryItemDetails.categoryName} parentPageLink={`/products/${category}`} />
            <div className="category-item-details-container">
                <BackButton parentPageLink={`/products/${category}`} />
                <p className="category-item-description">{categoryItemDetails.description}</p>
                <div className="features-list-container">
                    <div className="features-list-items">
                    {categoryItemDetails.features.map((feature) => (
                        <div className="feature-item">
                            <p className="feature-key">{feature.key}</p>
                            <p className="feature-value">{feature.value}</p>
                        </div>
                    ))}
                    </div>
                </div>
                <div className="why-choose-this-product-container">
                    <h3 className="why-choose-this-product-title">Why Choose This Product</h3>
                    <p className="why-choose-this-product-description">{categoryItemDetails.whyChooseThisProduct}</p>
                </div>
                <div className="category-item-list-container">
                    <h3 className="category-item-list-title">Category Items</h3>
                    <div className="category-item-list-items">
                        {categoryItemDetails.items.map((item) => (
                            <p className="category-item-list-item">{item}</p>
                        ))}
                    </div>
                </div>
                <div className="category-item-image-container">
                    {categoryItemDetails.images.map((image) => (
                        <Image key={image.imageId} src={image.imageUrl} alt={`${categoryItemDetails.subCategoryName} image ${image.imageId}`} width={categoryItemDetails.imageWidth} height={categoryItemDetails.imageHeight} className="category-item-image" />
                    ))}
                </div>
            </div>
        </div>
    );
}


