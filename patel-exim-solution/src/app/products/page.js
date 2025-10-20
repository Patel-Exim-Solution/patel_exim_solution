import HeaderPageTitle from "@/components/HeaderPageTitle";
import { productCategories } from "../json_config";
import Image from "next/image";
import Link from "next/link";

export default function Products() {
    return (
        <div className="products-page-container">
            <HeaderPageTitle title={'Our Products'} parentPage={'Home'} />
                <div className="product-list-grid">
                    {productCategories.map((product) => (
                        <Link key={product.id} href={`/products/${product.name.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`} className={'product-card'}>
                            <Image
                                src={product.imgUrl}
                                alt={product.name}
                                width={product.width}
                                height={product.height}
                                className={'product-page-img product-img'}
                            />
                            <h3 className={'product-name'}>{product.name}</h3>
                        </Link>
                    ))}
                </div>
        </div>
    )
}