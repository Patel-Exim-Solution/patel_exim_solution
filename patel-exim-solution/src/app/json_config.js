
import { PiPlantFill } from "react-icons/pi";
import { FaHands } from "react-icons/fa6";
import { FaAward } from "react-icons/fa6";
import { IoEarthSharp } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { HiPhone } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { BsWhatsapp } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

export const heroSectionDetails = [
  // {
  //     title: 'Natural Comfort for Every Corner',
  //     description: 'Add warmth to your home with handcrafted jute carpets and breathable bed sheets.',
  //     buttonText: 'Explore Home Linen & Décor',
  //     img1:{
  //         url:'/images/carpet_hero_image.png',
  //         width: 342,
  //         height: 342,
  //     } ,
  //     img2:{
  //         url:'/images/second_carpet_hero_image.png',
  //         width: 320,
  //         height: 475,
  //     } ,
  //     bgColor: '#A7C1A8',
  // },
  // {
  //     title: 'Write, Work & Organize — Naturally',
  //     description: 'Discover handmade jute office accessories — from laptop sleeves to notebook covers.',
  //     buttonText: 'Discover the Collection',
  //     img1:{
  //         url:'/images/office_decore.png',
  //         width: 306,
  //         height: 306,
  //     } ,
  //     img2:{
  //         url:'/images/second_purse_cover.png',
  //         width: 336,
  //         height: 450,
  //     } ,
  //     bgColor: '#D5DBDB',
  // },
  {
    title: 'Natural Storage Solutions for Every Space',
    description: 'Organize your home beautifully with eco-friendly jute baskets, organizers, and inserts',
    buttonText: 'Explore Storage Collection',
    img1: {
      url: '/images/basket_storage.png',
      width: 302,
      height: 302,
    },
    img2: {
      url: '/images/second_kitchen_basket_storage.png',
      width: 321,
      height: 460,
    },
    bgColor: '#D5DBDB',
  }
]

export const productsLandingPageData = [
  {
    id: 1,
    name: "Storage Basket",
    imgUrl: "/images/products/Storage_basket.png",
    width: 288,
    height: 380,
  },
  {
    id: 2,
    name: "Pillow Cover",
    imgUrl: "/images/products/Pillow_cover.png",
    width: 288,
    height: 380,
  },
  {
    id: 3,
    name: "Table Mat",
    imgUrl: "/images/products/rug.png",
    width: 288,
    height: 380,
  },
  {
    id: 4,
    name: "Curtain",
    imgUrl: "/images/products/purse.png",
    width: 288,
    height: 380,
  },
]

export const productCategories = [
  {
    id: 1,
    name: "Apparel",
    imgUrl: "/images/products/Apparel.jpg",
    width: 288,
    height: 380,
  },
  {
    id: 2,
    name: "Bags",
    imgUrl: "/images/products/bags.jpeg",
    width: 288,
    height: 380,
  },
  {
    id: 3,
    name: "Febric",
    imgUrl: "/images/products/fabric.jpeg",
    width: 288,
    height: 380,
  },
  {
    id: 4,
    name: "Home Decore",
    imgUrl: "/images/products/Home_decore.jpeg",
    width: 288,
    height: 380,
  },
  {
    id: 5,
    name: "Home Textile",
    imgUrl: "/images/products/textile.jpeg",
    width: 288,
    height: 380,
  },
  {
    id: 6,
    name: "Stationery",
    imgUrl: "/images/products/Stationary.jpeg",
    width: 288,
    height: 380,
  },
  {
    id: 7,
    name: "Storage",
    imgUrl: "/images/products/storage.jpeg",
    width: 288,
    height: 380,
  }
]


export const whyChoose = [
  {
    id: 1,
    title: "Eco-Friendly",
    description: "100% sustainable and biodegradable materials",
    icon: <PiPlantFill size={40} color="#005F00" />
  },
  {
    id: 2,
    title: "Handcrafted",
    description: "Skilled artisans create each product with care",
    icon: <FaHands size={40} color="#005F00" />
  },
  {
    id: 3,
    title: "Premium Quality",
    description: "International quality standards and certifications",
    icon: <FaAward size={40} color="#005F00" />
  },
  {
    id: 4,
    title: "Global Reach",
    description: "Trusted export partner worldwide",
    icon: <IoEarthSharp size={40} color="#005F00" />
  }
]

export const testimonialListData = [
  {
    user_name: 'Megan',
    rating: 3,
    user_img: '/images/testimonial_user/user1.png',
    description: 'Joining Mate community is the best thing I have ever done. The projects I worked on gave me the experience I needed in content marketing.',
  },
  {
    user_name: 'Jerry Tang',
    rating: 3,
    user_img: '/images/testimonial_user/user2.png',
    description: 'I love the color. It’s even better in person. I love that Iron Flask gives you multiple lids as well. It’s sturdy.',
  },
  {
    user_name: 'Will John',
    rating: 4,
    user_img: '/images/testimonial_user/user3.png',
    description: 'This cup is fantastic! It is so well insulated. I live in the desert, and it keeps my cold drinks cold in the heat.',
  },
  {
    user_name: 'David K.',
    rating: 5,
    user_img: '/images/testimonial_user/user4.png',
    description: 'I love the color. It’s even better in person. I love that Iron Flask gives you multiple lids as well. It’s sturdy. It kept my cold beverages colder for way longer than I had expected it to.',
  },
  {
    user_name: 'Tim Spartan',
    rating: 4,
    user_img: '/images/testimonial_user/user5.png',
    description: 'I absolutely love this cup. I’ve bought several different brands and there’s always something I end up not liking about them. This one checks all of the boxes.',
  },
  {
    user_name: 'Adam Stone',
    rating: 3,
    user_img: '/images/testimonial_user/user6.png',
    description: 'I absolutely love this cup. I’ve bought several different brands and there’s always something...',
  }
]

export const addressInfo = [
  {
    icon: <FaLocationDot size={24} color="#005F00" />,
    label: 'Address',
    value: '123 Export Street, Industrial Area, Bangladesh',
  },
  {
    icon: <HiPhone size={24} color="#005F00" />,
    label: 'Phone',
    value: '+91 945 257 5869',
  },
  {
    icon: <MdEmail size={24} color="#005F00" />,
    label: 'Email',
    value: 'abc@xyz.com',
  }
]


export const socialIconsList = [
  {
    name: 'instagram',
    icon: <FaInstagram size={20} color="#005f00" />,
  },
  {
    name: 'facebook',
    icon: <FaFacebookF size={20} color="#005f00" />,
  },
  {
    name: 'whatsapp',
    icon: <BsWhatsapp size={20} color="#005f00" />,
  },
  {
    name: 'linkedin',
    icon: <FaLinkedinIn size={20} color="#005f00" />,
  }
]

export const footerQuickLinks = [
  { label: 'About Us', value: 'about' },
  { label: 'Contact Us', value: 'contact' },
  { label: 'Certificates', value: 'certificates' },
  { label: 'Our Products', value: 'products' },
  { label: 'Privacy Policy', value: 'privacy_policy' },
  { label: 'Term & conditions', value: 'term_conditions' }
];

export const footerTopProducts = [
  { label: 'Bags', value: 'bags' },
  { label: 'Rugs', value: 'rugs' },
  { label: 'Storage Basket', value: 'storage_basket' },
  { label: 'Office Storage', value: 'office_storage' },
  { label: 'Covers', value: 'covers' }
];

export const productItems = [
  // Apparel (1–8)
  {
    id: 1,
    categoryId: 1,
    name: "Organic Cotton T-Shirt",
    imgUrl: "/images/products/Apparel/1.jpg",
    width: 288,
    height: 380,
  },
  {
    id: 2,
    categoryId: 1,
    name: "Cotton Nightwear",
    imgUrl: "/images/products/Apparel/2.jpg",
    width: 288,
    height: 380,
  },

  // Bags (9–16)
  {
    id: 3,
    categoryId: 2,
    name: "Jute File Bag",
    imgUrl: "/images/products/Bags/1.jpg",
    width: 288,
    height: 380,
  },
  {
    id: 4,
    categoryId: 2,
    name: "Jute Shopping Bags",
    imgUrl: "/images/products/Bags/2.jpg",
    width: 288,
    height: 380,
  },
  {
    id: 5,
    categoryId: 2,
    name: "Jute Grocery Bags",
    imgUrl: "/images/products/Bags/3.jpg",
    width: 288,
    height: 380,
  },
  {
    id: 6,
    categoryId: 2,
    name: "Jute Basket Style Shopping Bags",
    imgUrl: "/images/products/Bags/4.jpg",
    width: 288,
    height: 380,
  },
  {
    id: 7,
    categoryId: 2,
    name: "Jute Laptop Bags",
    imgUrl: "/images/products/Bags/13.jpg",
    width: 288,
    height: 380,
  },
  {
    id: 14,
    categoryId: 2,
    name: "Handcrafted Jute Purse",
    imgUrl: "/images/products/Bags/6.jpg",
    width: 288,
    height: 380,
  },
  {
    id: 15,
    categoryId: 2,
    name: "Jute Lunch Bags",
    imgUrl: "/images/products/Bags/8.jpg",
    width: 288,
    height: 380,
  },
  {
    id: 16,
    categoryId: 2,
    name: "Jute Beach Bags",
    imgUrl: "/images/products/Bags/9.jpg",
    width: 288,
    height: 380,
  },
  {
    id: 17,
    categoryId: 2,
    name: "Jute Travel Bags / Duffel Bags",
    imgUrl: "/images/products/Bags/5.jpg",
    width: 288,
    height: 380,
  },
  {
    id: 18,
    categoryId: 2,
    name: "Jute Pouches",
    imgUrl: "/images/products/Bags/11.jpg",
    width: 288,
    height: 380,
  },
  {
    id: 19,
    categoryId: 2,
    name: "Jute Handbags",
    imgUrl: "/images/products/Bags/7.jpg",
    width: 288,
    height: 380,
  },

  // Home Decor (17–24)
  {
    id: 20,
    categoryId: 4,
    name: "Jute Rug",
    imgUrl: "/images/products/Home_Decore/2.jpg",
    width: 288,
    height: 380,
  },
  {
    id: 20,
    categoryId: 4,
    name: "Printed Jute Floor Mats",
    imgUrl: "/images/products/Home_Decore/5.jpg",
    width: 288,
    height: 380,
  },
  {
    id: 21,
    categoryId: 4,
    name: "Jute Planters / Hanging Planters",
    imgUrl: "/images/products/Home_Decore/6.jpg",
    width: 288,
    height: 380,
  },
  {
    id: 22,
    categoryId: 4,
    name: "Jute Mirror Frames",
    imgUrl: "/images/products/Home_Decore/7.jpg",
    width: 288,
    height: 380,
  },
  {
    id: 23,
    categoryId: 4,
    name: "Jute Coasters & Table Mats",
    imgUrl: "/images/products/Home_Decore/8.jpg",
    width: 288,
    height: 380,
  },
  //febric
  {
    id: 24,
    categoryId: 3,
    name: "Plain Jute Fabric",
    imgUrl: "/images/products/febric/1.jpg",
    width: 288,
    height: 380,
  },
  {
    id: 25,
    categoryId: 3,
    name: "Printed Jute Fabric",
    imgUrl: "/images/products/febric/2.jpg",
    width: 288,
    height: 380,
  },
  {
    id: 26,
    categoryId: 3,
    name: "Jute-Cotton Blended Fabric",
    imgUrl: "/images/products/febric/3.jpg",
    width: 288,
    height: 380,
  },

  // Textile (25–32)
  {
    id: 27,
    categoryId: 5,
    name: "Bed Sheets",
    imgUrl: "/images/products/Home_textile/1.jpg",
    width: 288,
    height: 380,
  },
  {
    id: 28,
    categoryId: 5,
    name: "Duvet Covers",
    imgUrl: "/images/products/Home_textile/2.jpg",
    width: 288,
    height: 380,
  },
  {
    id: 29,
    categoryId: 5,
    name: "Pillowcases",
    imgUrl: "/images/products/Home_textile/3.jpg",
    width: 288,
    height: 380,
  },
  {
    id: 30,
    categoryId: 5,
    name: "Cushion Covers",
    imgUrl: "/images/products/Home_textile/4.jpg",
    width: 288,
    height: 380,
  },
  {
    id: 31,
    categoryId: 5,
    name: "Curtains",
    imgUrl: "/images/products/Home_textile/5.jpg",
    width: 288,
    height: 380,
  },
  {
    id: 32,
    categoryId: 5,
    name: "Tablecloths",
    imgUrl: "/images/products/Home_textile/6.jpg",
    width: 288,
    height: 380,
  },
  {
    id: 33,
    categoryId: 5,
    name: "Napkins",
    imgUrl: "/images/products/Home_textile/7.jpg",
    width: 288,
    height: 380,
  },
  {
    id: 34,
    categoryId: 5,
    name: "Table Runners",
    imgUrl: "/images/products/Home_textile/8.jpg",
    width: 288,
    height: 380,
  },
  {
    id: 35,
    categoryId: 5,
    name: "Table Runners",
    imgUrl: "/images/products/Home_textile/8.jpg",
    width: 288,
    height: 380,
  },
  {
    id: 36,
    categoryId: 5,
    name: "Oven Mitts",
    imgUrl: "/images/products/Home_textile/9.jpg",
    width: 288,
    height: 380,
  },


  // Stationary
  {
    id: 37,
    categoryId: 6,
    name: "Jute Folders",
    imgUrl: "/images/products/stationary/1.jpg",
    width: 288,
    height: 380,
  },
  {
    id: 38,
    categoryId: 6,
    name: "Jute Pencil Cases",
    imgUrl: "/images/products/stationary/4.png",
    width: 288,
    height: 380,
  },
  {
    id: 39,
    categoryId: 6,
    name: "Jute Diary Covers",
    imgUrl: "/images/products/stationary/5.png",
    width: 288,
    height: 380,
  },
  // storage
  {
    id: 40,
    categoryId: 7,
    name: "Jute Hanging Organizers",
    imgUrl: "/images/products/storage/5.png",
    width: 288,
    height: 380,
  },
  {
    id: 41,
    categoryId: 7,
    name: "Jute Storage Bins",
    imgUrl: "/images/products/storage/1.jpg",
    width: 288,
    height: 380,
  },
  {
    id: 42,
    categoryId: 7,
    name: "Jute Clothe Bags",
    imgUrl: "/images/products/storage/2.jpg",
    width: 288,
    height: 380,
  },
];

export const productSubCategoriesDetails = {
  "shopping-carry-bags": {
    id: 1_11_1,
    subCategoryName: "Shopping & Carry Bags",
    subCategoryId: "shopping-carry-bags",
    categoryName: "Jute Bags",
    imageWidth: 288,
    imageHeight: 380,
    images: [
      {
        imageId: 1,
        imageUrl: "/product_assets/1_1/1_1_1/new2.jpg",
      },
      {
        imageId: 2,
        imageUrl: "/product_assets/1_1/1_1_1/new4.jpg",
      },
      {
        imageId: 3,
        imageUrl: "/product_assets/1_1/1_1_1/new5.jpg",
      },
      {
        imageId: 4,
        imageUrl: "/product_assets/1_1/1_1_1/new7.jpg",
      },
      {
        imageId: 5,
        imageUrl: "/product_assets/1_1/1_1_1/new8.jpg",
      },
      {
        imageId: 6,
        imageUrl: "/product_assets/1_1/1_1_1/new22.jpg",
      },
      {
        imageId: 7,
        imageUrl: "/product_assets/1_1/1_1_1/new23.jpg",
      },
      {
        imageId: 8,
        imageUrl: "/product_assets/1_1/1_1_1/new30.jpg",
      },
      {
        imageId: 9,
        imageUrl: "/product_assets/1_1/1_1_1/new31.jpg",
      },
      {
        imageId: 10,
        imageUrl: "/product_assets/1_1/1_1_1/new107.jpeg",
      },
    ],
    items: [
      "Plain jute shopping bags (flat)",
      "Box-bottom / gusseted jute shopping bags",
      "Foldable jute shopping bags",
      "Laminated jute shopping bags (inner lamination)",
      "Jute grocery / market bags",
      "Jute supermarket bags",
      "Jute reusable produce bags (small mesh/see-through variants)",
      "Jute mesh vegetable/fruit bags",
      "Jute string/net shopping bags",
      "Box-style jute totes with cardboard base",
      "Jute shopper with zip closure",
      "Jute shopper with inner cotton lining",
      "Jute shopper with zipper & internal pocket",
      "Jute shopper with PVC lining",
      "Jute shopper with leather or PU handles"
    ],
    description: 'Our Plain Jute Shopping Bags (Flat) are simple, eco-friendly, and versatile bags designed for everyday use. With a flat base and lightweight design, these bags are easy to carry and store. Perfect for shopping, gifting, promotional use, or as a sustainable alternative to plastic bags.',
    whyChooseThisProduct: 'These bags are a practical and stylish solution for eco-conscious consumers. Their minimal design and durable jute material make them perfect for repeated use while promoting a sustainable lifestyle.',
    features: [
      {
        key: 'Material',
        value: '100% natural jute for strength and durability'
      },
      {
        key: 'Design',
        value: 'Flat base, lightweight and foldable for easy storage'
      },
      {
        key: 'Handles',
        value: 'Strong and comfortable cotton or jute handles'
      },
      {
        key: 'Closure',
        value: 'Open-top or optional drawstring/zipper closure'
      },
      {
        key: 'Sizes & Colors',
        value: 'Available in multiple sizes and natural/plain colors'
      },
      {
        key: 'Customization',
        value: 'Can be printed or branded with logos for corporate gifts, events, or retail use'
      },
      {
        key: 'Reusable & Eco-Friendly',
        value: 'Sustainable choice for everyday shopping and storage'
      },
      {
        key: 'Versatile Use',
        value: 'Ideal for groceries, gifting, events, and promotional purposes'
      }
    ]
  },
  "tote-fashion-bags": {
    id: 1_11_1,
    subCategoryName: "Tote & Fashion Bags",
    subCategoryId: "tote-fashion-bags",
    categoryName: "Jute Bags",
    imageWidth: 288,
    imageHeight: 380,
    images: [
      {
        imageId: 1,
        imageUrl: "/product_assets/1_1/1_1_2/new3.jpg",
      },
      {
        imageId: 2,
        imageUrl: "/product_assets/1_1/1_1_2/new6.jpg",
      },
      {
        imageId: 3,
        imageUrl: "/product_assets/1_1/1_1_2/new12.jpg",
      },
      {
        imageId: 4,
        imageUrl: "/product_assets/1_1/1_1_2/new26.jpg",
      },
    ],
    items: [
      "Classic jute tote bags (plain)",
      "Printed/graphic jute tote bags",
      "Designer/embellished jute tote bags",
      "Jute canvas blend tote bags (jute + cotton)",
      "Jute beach bags",
      "Jute fashion totes with embroidery",
      "Jute shopper with rope handles",
      "Jute crossbody tote (small)",
      "Jute sling bags",
      "Jute hobo bags",
      "Jute shoulder bags",
      "Jute messenger bags",
      "Jute bucket bags",
      "Jute clutch bags / pouches",
      "Jute wristlets",
      "Jute mini-totes / vanity totes",
      "Jute laptop & tablet totes (padded)",
      "Jute camera bags",
      "Jute backpacks / rucksacks (fashion)",
      "Jute drawstring fashion pouches"
    ],
    description: 'Our Plain Jute Shopping Bags (Flat) are simple, eco-friendly, and versatile bags designed for everyday use. With a flat base and lightweight design, these bags are easy to carry and store. Perfect for shopping, gifting, promotional use, or as a sustainable alternative to plastic bags.',
    whyChooseThisProduct: 'These bags are a practical and stylish solution for eco-conscious consumers. Their minimal design and durable jute material make them perfect for repeated use while promoting a sustainable lifestyle.',
    features: [
      {
        key: 'Material',
        value: '100% natural jute for strength and durability'
      },
      {
        key: 'Design',
        value: 'Flat base, lightweight and foldable for easy storage'
      },
      {
        key: 'Handles',
        value: 'Strong and comfortable cotton or jute handles'
      },
      {
        key: 'Closure',
        value: 'Open-top or optional drawstring/zipper closure'
      },
      {
        key: 'Sizes & Colors',
        value: 'Available in multiple sizes and natural/plain colors'
      },
      {
        key: 'Customization',
        value: 'Can be printed or branded with logos for corporate gifts, events, or retail use'
      },
      {
        key: 'Reusable & Eco-Friendly',
        value: 'Sustainable choice for everyday shopping and storage'
      },
      {
        key: 'Versatile Use',
        value: 'Ideal for groceries, gifting, events, and promotional purposes'
      }
    ]
  },
  "promotional-branding-bags": {
    id: 1_11_3,
    subCategoryName: "Promotional & Branding Jute Bags",
    subCategoryId: "promotional-branding-bags",
    categoryName: "Jute Bags",
    imageWidth: 288,
    imageHeight: 380,
    images: [
      { imageId: 1, imageUrl: "/product_assets/1_1/1_1_3/Jute_Bag_with_Zip.jpg" },
      { imageId: 2, imageUrl: "/product_assets/1_1/1_1_3/new19.jpg" },
      { imageId: 3, imageUrl: "/product_assets/1_1/1_1_3/new20.jpg" },
      { imageId: 4, imageUrl: "/product_assets/1_1/1_1_3/new36.jpg" },
    ],
    items: [
      "Custom logo printed jute bags (single/multi colour)",
      "Conference / exhibition jute bags",
      "Corporate gifting jute bags",
      "Trade show jute folders with handles",
      "Branded jute promotional totes with straps",
      "Jute merchandise bags (branded)",
      "Promotional jute envelope bags"
    ],
    description:
      "Promotional and branding jute bags are the perfect eco-friendly alternative for businesses looking to make a lasting impression. Made from 100% natural jute fiber, these bags combine durability, sustainability, and style — making them ideal for corporate giveaways, trade shows, retail packaging, or brand promotions. Each bag can be customized with your company logo, slogan, or design, offering a natural yet professional look that promotes your brand responsibly.",
    whyChooseThisProduct:
      "Reusable, sustainable, and plastic-free — helping your brand go green while making a positive environmental impact.",
    features: [
      { key: "Material", value: "100% natural, biodegradable, and reusable jute" },
      { key: "Designs", value: "Available in various shapes — flat, gusseted, or box-bottom styles" },
      { key: "Customization", value: "High-quality screen or digital printing for logos and designs" },
      { key: "Handles", value: "Comfortable jute or cotton handles for easy carrying" },
      { key: "Closure Options", value: "Open-top, zipper, or Velcro closure as per requirement" },
      { key: "Colors", value: "Available in natural, dyed, or laminated finishes with custom color options" },
      { key: "Applications", value: "Ideal for promotional events, exhibitions, retail branding, and eco-friendly packaging" },
      { key: "Eco-Benefits", value: "Reusable, sustainable, and plastic-free — helping your brand go green" }
    ]
  },
  "gift-event-specialty-bags": {
    id: 1_11_4,
    subCategoryName: "Gift, Event & Specialty Jute Bags",
    subCategoryId: "gift-event-specialty-bags",
    categoryName: "Jute Bags",
    imageWidth: 288,
    imageHeight: 380,
    images: [
      { imageId: 1, imageUrl: "/product_assets/1_1/1_1_4/new11.jpg" },
      { imageId: 2, imageUrl: "/product_assets/1_1/1_1_4/new28.jpg" },
      { imageId: 3, imageUrl: "/product_assets/1_1/1_1_4/new29.jpg" },
      { imageId: 4, imageUrl: "/product_assets/1_1/1_1_4/new32.jpg" },
      { imageId: 5, imageUrl: "/product_assets/1_1/1_1_4/new34.jpg" },
      { imageId: 6, imageUrl: "/product_assets/1_1/1_1_4/new35.jpg" },
      { imageId: 7, imageUrl: "/product_assets/1_1/1_1_4/new37.jpg" },
      { imageId: 8, imageUrl: "/product_assets/1_1/1_1_4/new39.jpg" },
      { imageId: 9, imageUrl: "/product_assets/1_1/1_1_4/new41.jpg" },
    ],
    items: [
      "Jute wine bottle gift bags (1/2/3 bottle)",
      "Jute gift pouches (drawstring)",
      "Jute gift boxes / gift wraps",
      "Jute wedding favor bags / return gift bags",
      "Jute festival / seasonal gift bags",
      "Jute hamper bags",
      "Jute cosmetic gift pouches",
      "Jute jewellery pouches",
      "Jute candle gift pouches",
      "Jute chocolate / confectionery bags"
    ],
    description:
      "Gift, Event & Specialty Jute Bags are designed to make every occasion extra special — combining elegance with eco-conscious craftsmanship. Made from premium natural jute, these bags are ideal for weddings, parties, corporate gifting, festive packaging, or luxury hampers. Their rustic charm and customizable designs make them a stylish and sustainable choice for thoughtful gifting.",
    whyChooseThisProduct:
      "Reusable, biodegradable, and plastic-free — these bags reflect your care for both style and sustainability.",
    features: [
      { key: "Material", value: "100% natural, eco-friendly jute with optional inner lamination" },
      { key: "Designs", value: "Available in flat, gusseted, and box-shaped styles for different gift sizes" },
      { key: "Customization", value: "Can be printed, embroidered, or accessorized with ribbons, tags, or lace" },
      { key: "Handles", value: "Soft cotton or jute handles for a premium look and easy carrying" },
      { key: "Closure Options", value: "Drawstring, button, zipper, or flap closures to match the occasion" },
      { key: "Colors", value: "Offered in natural tones, festive shades, or custom color combinations" },
      { key: "Applications", value: "Perfect for gifting, weddings, events, festivals, and boutique packaging" },
      { key: "Eco-Benefits", value: "Reusable, biodegradable, and plastic-free — these bags reflect your care for both style and sustainability" }
    ]
  }
}

export const productCategoriesDetails = {
  "jute-bags": [
    {
      id: 1_11,
      name: "Shopping & Carry Bags",
      categoryName: "Jute Bags",
      imageUrl: "/product_assets/1_1/Foldable_jute_shopping_bags.jpg",
      width: 288,
      height: 380,
      subCategoryId: 'shopping-carry-bags',
      items: [
        "Plain jute shopping bags (flat)",
        "Box-bottom / gusseted jute shopping bags",
        "Foldable jute shopping bags",
        "Laminated jute shopping bags (inner lamination)",
        "Jute grocery / market bags",
        "Jute supermarket bags",
        "Jute reusable produce bags (small mesh/see-through variants)",
        "Jute mesh vegetable/fruit bags",
        "Jute string/net shopping bags",
        "Box-style jute totes with cardboard base",
        "Jute shopper with zip closure",
        "Jute shopper with inner cotton lining",
        "Jute shopper with zipper & internal pocket",
        "Jute shopper with PVC lining",
        "Jute shopper with leather or PU handles"
      ],
    },
    {
      id: 1_12,
      name: "Tote & Fashion Bags",
      imageUrl: "/product_assets/1_1/new9.jpg",
      width: 288,
      height: 380,
      categoryName: "Jute Bags",
      subCategoryId: 'tote-fashion-bags',
      items: [
        "Classic jute tote bags (plain)",
        "Printed/graphic jute tote bags",
        "Designer/embellished jute tote bags",
        "Jute canvas blend tote bags (jute + cotton)",
        "Jute beach bags",
        "Jute fashion totes with embroidery",
        "Jute shopper with rope handles",
        "Jute crossbody tote (small)",
        "Jute sling bags",
        "Jute hobo bags",
        "Jute shoulder bags",
        "Jute messenger bags",
        "Jute bucket bags",
        "Jute clutch bags / pouches",
        "Jute wristlets",
        "Jute mini-totes / vanity totes",
        "Jute laptop & tablet totes (padded)",
        "Jute camera bags",
        "Jute backpacks / rucksacks (fashion)",
        "Jute drawstring fashion pouches"
      ],
    },
    {
      id: 1_13,
      name: "Promotional & Branding Bags",
      imageUrl: "/product_assets/1_1/new24.jpg",
      width: 288,
      height: 380,
      categoryName: "Jute Bags",
      subCategoryId: 'promotional-branding-bags',
      items: [
        "Custom logo printed jute bags (single/multi colour)",
        "Conference / exhibition jute bags",
        "Corporate gifting jute bags",
        "Trade show jute folders with handles",
        "Branded jute promotional totes with straps",
        "Jute merchandise bags (branded)",
        "Promotional jute envelope bags"
      ],
    },
    {
      id: 1_14,
      name: "Gift, Event & Specialty Bags",
      imageUrl: "/product_assets/1_1/new38.jpg",
      width: 288,
      height: 380,
      categoryName: "Jute Bags",
      subCategoryId: 'gift-event-specialty-bags',
      items: [
        "Jute wine bottle gift bags (1/2/3 bottle)",
        "Jute gift pouches (drawstring)",
        "Jute gift boxes / gift wraps",
        "Jute wedding favor bags / return gift bags",
        "Jute festival / seasonal gift bags",
        "Jute hamper bags",
        "Jute cosmetic gift pouches",
        "Jute jewellery pouches",
        "Jute candle gift pouches",
        "Jute chocolate / confectionery bags"
      ],
    }
  ],
}

export const productDataList = [
  {
    id: 1,
    name: "Jute Products",
    description: "A comprehensive range of eco-friendly and sustainable jute-based products designed for everyday use, gifting, décor, and industrial purposes.",
    categories: [
      {
        id: 1.1,
        name: "Jute Bags",
        imageUrl: "/product_assets/new1.jpg",
        width: 288,
        height: 380,
        categoryId: 'jute-bags',
        description: "Durable and stylish bags crafted from natural jute fibers, suitable for shopping, travel, gifting, and promotions.",
        subcategories: [
          {
            id: 1.11,
            name: "Shopping & Carry Bags",
            imageUrl: "/product_assets/Foldable_jute_shopping_bags.jpg",
            items: [
              "Plain jute shopping bags (flat)",
              "Box-bottom / gusseted jute shopping bags",
              "Foldable jute shopping bags",
              "Laminated jute shopping bags (inner lamination)",
              "Jute grocery / market bags",
              "Jute supermarket bags",
              "Jute reusable produce bags (small mesh/see-through variants)",
              "Jute mesh vegetable/fruit bags",
              "Jute string/net shopping bags",
              "Box-style jute totes with cardboard base",
              "Jute shopper with zip closure",
              "Jute shopper with inner cotton lining",
              "Jute shopper with zipper & internal pocket",
              "Jute shopper with PVC lining",
              "Jute shopper with leather or PU handles"
            ],
            description: "Eco-friendly, reusable bags ideal for everyday shopping and carrying needs."
          },
          {
            id: 1.12,
            name: "Tote & Fashion Bags",
            imageUrl: "/product_assets/new9.jpg",
            items: [
              "Classic jute tote bags (plain)",
              "Printed/graphic jute tote bags",
              "Designer/embellished jute tote bags",
              "Jute canvas blend tote bags (jute + cotton)",
              "Jute beach bags",
              "Jute fashion totes with embroidery",
              "Jute shopper with rope handles",
              "Jute crossbody tote (small)",
              "Jute sling bags",
              "Jute hobo bags",
              "Jute shoulder bags",
              "Jute messenger bags",
              "Jute bucket bags",
              "Jute clutch bags / pouches",
              "Jute wristlets",
              "Jute mini-totes / vanity totes",
              "Jute laptop & tablet totes (padded)",
              "Jute camera bags",
              "Jute backpacks / rucksacks (fashion)",
              "Jute drawstring fashion pouches"
            ],
            description: "Stylish and functional jute fashion accessories, combining sustainability with design."
          },
          {
            id: 1.13,
            name: "Promotional & Branding Bags",
            imageUrl: "/product_assets/new24.jpg",
            items: [
              "Custom logo printed jute bags (single/multi colour)",
              "Conference / exhibition jute bags",
              "Corporate gifting jute bags",
              "Trade show jute folders with handles",
              "Branded jute promotional totes with straps",
              "Jute merchandise bags (branded)",
              "Promotional jute envelope bags"
            ],
            description: "Customizable jute bags for branding, marketing, and corporate use."
          },
          {
            id: 1.14,
            name: "Gift, Event & Specialty Bags",
            imageUrl: "/product_assets/new38.jpg",
            items: [
              "Jute wine bottle gift bags (1/2/3 bottle)",
              "Jute gift pouches (drawstring)",
              "Jute gift boxes / gift wraps",
              "Jute wedding favor bags / return gift bags",
              "Jute festival / seasonal gift bags",
              "Jute hamper bags",
              "Jute cosmetic gift pouches",
              "Jute jewellery pouches",
              "Jute candle gift pouches",
              "Jute chocolate / confectionery bags"
            ],
            description: "Attractive jute bags and pouches for gifting, events, and festive occasions."
          }
        ]
      },
      {
        id: 1.2,
        name: "Home Décor / Utility",
        description: "Stylish and sustainable jute home décor items and daily utility products.",
        imageUrl: "/product_assets/new47.jpg",
        categoryId: 'home-decore-utility',
        width: 288,
        height: 380,
        subcategories: [
          {
            id: 1.21,
            name: "Home & Décor Products",
            items: [
              "Jute cushion covers",
              "Jute rugs / floor mats",
              "Jute doormats",
              "Jute area rugs (woven)",
              "Jute runners (table runners)",
              "Jute table mats / placemats",
              "Jute coasters",
              "Jute wall hangings / tapestries",
              "Jute wall art / framed jute panels",
              "Jute lamp shades",
              "Jute pouffes / ottomans",
              "Jute baskets / storage baskets",
              "Jute laundry bags / hampers",
              "Jute plant holders / hanging planters",
              "Jute hanging organizers / pocket organizers",
              "Jute curtains / drapes (panel)",
              "Jute cushion bolsters",
              "Jute bed runners",
              "Jute bed headboard covers (decor)",
              "Jute photo album covers",
              "Jute drawer organizers"
            ],
            description: "Decorative and practical jute products to enhance eco-friendly living spaces."
          },
          {
            id: 1.22,
            name: "Kitchen & Dining",
            items: [
              "Jute tablecloths (full table)",
              "Jute napkins / serviettes",
              "Jute aprons",
              "Jute oven mitts / pot holders (with lining)",
              "Jute cutlery pouches",
              "Jute reusable grocery bags",
              "Jute utensil holders",
              "Jute bread baskets",
              "Jute coiled placemats (woven rope style)"
            ],
            description: "Natural jute kitchen and dining accessories for an elegant, rustic look."
          },
          {
            id: 1.23,
            name: "Storage, Organizers & Utility",
            items: [
              "Jute storage bins (round/square)",
              "Jute stacking storage boxes",
              "Jute toy storage bags",
              "Jute shoe bags / shoe organizers",
              "Jute closet organizers",
              "Jute travel organizers / packing cubes",
              "Jute cable/cord pouches",
              "Jute document/folio organizers",
              "Jute drawer liners",
              "Jute hanging wardrobe organizers"
            ],
            description: "Functional and durable jute storage solutions for home and travel."
          }
        ]
      },
      {
        id: 1.3,
        name: "Office & Industrial Utilities",
        description: "Eco-conscious jute-based office essentials and industrial materials.",
        imageUrl: "/product_assets/new98.jpeg",
        categoryId: 'office-industrial-utilities',
        width: 288,
        height: 380,
        subcategories: [
          {
            id: 1.31,
            name: "Office & Stationery",
            items: [
              "Jute laptop sleeves / cases",
              "Jute document folders",
              "Jute conference folders / portfolio",
              "Jute file organizers",
              "Jute notebook covers",
              "Jute envelopes / mailing bags",
              "Jute stationery pouches",
              "Jute diary covers",
              "Jute office tote bags"
            ],
            description: "Sustainable stationery and office accessories crafted from natural jute."
          }
        ]
      },
      {
        id: 1.4,
        name: "Packaging & Industrial Use",
        description: "Strong and biodegradable jute materials for packaging and industrial applications.",
        imageUrl: "/product_assets/new108.jpeg",
        width: 288,
        height: 380,
        categoryId: 'packaging-industrial-use',
        subcategories: [
          {
            id: 1.41,
            name: "Packaging & Industrial Use",
            items: [
              "Jute sacks / bags (natural burlap sacks)",
              "Jute grain / rice sacks",
              "Jute coffee bean bags / burlap hessian sacks",
              "Jute tea packaging bags",
              "Jute packaging rolls",
              "Jute pallet covers",
              "Jute wrap for fragile items",
              "Jute industrial woven fabric rolls",
              "Jute gunny bags (traditional)"
            ],
            description: "High-strength jute packaging and wrapping materials for agricultural and industrial sectors."
          }
        ]
      },
      {
        id: 1.5,
        name: "Agricultural Use",
        description: "Natural jute products designed for sustainable agriculture and horticulture.",
        imageUrl: "/product_assets/new122.jpeg",
        width: 288,
        height: 380,
        categoryId: 'agricultural-use',
        subcategories: [
          {
            id: 1.51,
            name: "Agricultural & Horticultural Products",
            items: [
              "Jute plant pot coverings",
              "Jute tree guards / sapling protectors",
              "Jute erosion control mats / geo-textiles",
              "Jute crop cover sheets",
              "Jute seed storage bags",
              "Jute woven sacks for fertilizer/seed",
              "Jute mulch mats",
              "Jute grow bags / planter bags"
            ],
            description: "Eco-friendly jute solutions for soil conservation, crop care, and plant growth."
          }
        ]
      },
      {
        id: 1.6,
        name: "Giftware & Promotional Items",
        description: "Creative and customizable jute products for gifting, crafts, and promotions.",
        imageUrl: "/product_assets/new33.jpg",
        width: 288,
        height: 380,
        categoryId: 'giftware-promotional-items',
        subcategories: [
          {
            id: 1.61,
            name: "Giftware & Promotional Items",
            items: [
              "Jute greeting card sleeves",
              "Jute event souvenir pouches",
              "Jute promotional giveaways (small pouches)",
              "Jute branded USB sleeves (pouch)",
              "Jute corporate gift boxes",
              "Jute charity donation envelopes"
            ],
            description: "Eco-conscious promotional and gift packaging solutions made from jute."
          },
          {
            id: 1.62,
            name: "Crafts & DIY Supplies",
            items: [
              "Jute twine / ropes / cords",
              "Jute yarn / threads"
            ],
            description: "Craft materials made from jute for creative, decorative, and DIY projects."
          }
        ]
      }
    ]
  }
]


