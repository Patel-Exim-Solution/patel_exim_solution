"use client";
import Image from "next/image";
import { productsData } from "@/app/json_config";
import Button from "./Button";

export default function ProductsSection() {
  return (
    <section className={'product-section'}>
      <h2 className={'section-title'}>Our Products</h2>
      <p className={'section-subtitle'}>Handcrafted by skilled artisans, our products reflect sustainability, quality, and care.</p>

      <div className={'product-list-grid'}>
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
      <Button label="View All Collections" isIconDisplay btnClassName="product-action-btn secondary" />
    </section>
  );
}
