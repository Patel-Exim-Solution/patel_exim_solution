import HeaderPageTitle from "@/components/HeaderPageTitle";
import { productDataList } from "../json_config";
import Image from "next/image";
import Link from "next/link";

export default function Products() {
    const productCategories = productDataList[0].categories;
    return (
        <div className="products-page-container">
            <HeaderPageTitle title={'Our Products'} parentPage={'Home'} />
            <div className="product-list-grid">
                {productCategories.map((product) => (
                    <Link key={product.id} href={`/products/${product?.categoryId}`} className={'product-card'}>
                        <div className="product-image-wrapper">
                            <Image
                                src={product.imageUrl}
                                alt={product.name}
                                width={product.width}
                                height={product.height}
                                className={'product-page-img product-img'}
                            />
                            <h3 className={'product-name'}>{product.name}</h3>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}