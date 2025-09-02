"use client";
import { whyChoose } from "@/app/json_config";

export default function ChooseUs() {
  return (
    <section className={'choose-us-section'}>
      <h2 className={'section-title'}>Why Choose Patel Exim Solution</h2>
      <p className={'section-subtitle'}>Handcrafted by skilled artisans, our products reflect sustainability, quality, and care
      </p>

      <div className={'why-choose-grid'}>
        {whyChoose.map((item) => (
          <div key={item.id} className={'info-card'}>
            <div className={'icon-wrapper'}>
              {item.icon}
            </div>
            <h3 className={'info-title primary-text'}>{item.title}</h3>
            <p className={'info-desc'}>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
