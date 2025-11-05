import HeaderPageTitle from "@/components/HeaderPageTitle";
import Image from "next/image";
import { productCategoriesDetails } from "../../json_config";
import Link from "next/link";

export default function CategoryProductsPage({ params }) {
    const { category } = params;
    const categoryDetails = productCategoriesDetails[category];
    const categoryName = categoryDetails[0].categoryName;
    return (
        <div className="products-page-container">
            <HeaderPageTitle title={categoryName || "Products"} parentPageLink={'/products'} parentPage={'Products'} />
            <div className="product-list-grid product-list-grid-category">
                {categoryDetails.map((item) => (
                    <Link key={item.id} href={`/products/${category}/${item?.subCategoryId}`} className={'product-card'}>
                        <div className="product-image-wrapper">
                            <Image
                                src={item.imageUrl}
                                alt={item.name}
                                width={item.width}
                                height={item.height}
                                className={'product-page-img product-img'}
                            />
                            <h3 className={'product-name'}>{item.name}</h3>
                        </div>
                    </Link>
                ))}
                {categoryDetails.length === 0 && (
                    <div className={'product-card'}>
                        <h3 className={'product-name'}>No items found for this category.</h3>
                    </div>
                )}
            </div>
        </div>
    );
}


