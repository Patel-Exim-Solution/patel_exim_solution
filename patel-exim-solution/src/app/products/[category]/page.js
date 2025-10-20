import HeaderPageTitle from "@/components/HeaderPageTitle";
import Image from "next/image";
import { productCategories, productItems } from "../../json_config";

function toSlug(name) {
    return name
        .toLowerCase()
        .replace(/&/g, "and")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
}

export default function CategoryProductsPage({ params }) {
    const { category } = params;

    const matchedCategory = productCategories.find((c) => toSlug(c.name) === category);
    const items = matchedCategory
        ? productItems.filter((p) => p.categoryId === matchedCategory.id)
        : [];

    return (
        <div className="products-page-container">
            <HeaderPageTitle title={matchedCategory ? matchedCategory.name : "Products"} parentPage={'Products'} />
            <div className="product-list-grid">
                {items.map((item) => (
                    <div key={item.id} className={'product-card'}>
                        <Image
                            src={item.imgUrl}
                            alt={item.name}
                            width={item.width}
                            height={item.height}
                            className={'product-page-img product-img'}
                        />
                        <h3 className={'product-name'}>{item.name}</h3>
                    </div>
                ))}
                {items.length === 0 && (
                    <div className={'product-card'}>
                        <h3 className={'product-name'}>No items found for this category.</h3>
                    </div>
                )}
            </div>
        </div>
    );
}


