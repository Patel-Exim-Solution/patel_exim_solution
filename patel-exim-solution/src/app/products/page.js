import HeaderPageTitle from "@/components/HeaderPageTitle";
import { productsData } from "../json_config";
import Image from "next/image";

export default function Products() {
    return (
        <div className="products-page-container">
            <HeaderPageTitle title={'Our Products'} parentPage={'Home'} />
                <div className="product-list-grid">
                    {productsData.map((product) => (
                        <div key={product.id} className={'product-card'}>
                            <Image
                                src={product.imgUrl}
                                alt={product.name}
                                width={product.width}
                                height={product.height}
                                className={'product-img'}
                            />
                            <h3 className={'product-name'}>{product.name}</h3>
                        </div>
                    ))}
                </div>
        </div>
    )
}