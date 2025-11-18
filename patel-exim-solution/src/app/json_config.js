
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
  {
      title: 'Natural Comfort for Every Corner',
      description: 'Add warmth to your home with handcrafted jute carpets and breathable bed sheets.',
      buttonText: 'Explore Home Linen & Décor',
      img1:{
          url:'/images/carpet_hero_image.png',
          width: 342,
          height: 342,
      } ,
      img2:{
          url:'/images/second_carpet_hero_image.png',
          width: 320,
          height: 475,
      } ,
      bgColor: '#A7C1A8',
  },
  {
      title: 'Write, Work & Organize — Naturally',
      description: 'Discover handmade jute office accessories — from laptop sleeves to notebook covers.',
      buttonText: 'Discover the Collection',
      img1:{
          url:'/images/office_decore.png',
          width: 306,
          height: 306,
      } ,
      img2:{
          url:'/images/second_purse_cover.png',
          width: 336,
          height: 450,
      } ,
      bgColor: '#D5DBDB',
  },
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
    value: 'C-09, Sangita Society, Swagat Hall, Ranip, Ahmedabad-382480, Gujarat, India',
  },
  {
    icon: <HiPhone size={24} color="#005F00" />,
    label: 'Phone',
    value: '+91 95101 24299',
  },
  {
    icon: <MdEmail size={24} color="#005F00" />,
    label: 'Email',
    value: 'ptlexims1@gmail.com',
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
        imageUrl: "/product_assets/1_1/1_1_1/NEW107.jpeg",
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
    subCategoryName: "Tote & Fashion",
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
    subCategoryName: "Promotional & Branding",
    subCategoryId: "promotional-branding",
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
    subCategoryName: "Gift, Event & Specialty",
    subCategoryId: "gift-event-specialty",
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
  },
  "home-decore-products": {
    id: 1_12_1,
    subCategoryName: "Home & Décor",
    subCategoryId: "home-decore",
    categoryName: "Home & Décor / Utility",
    imageWidth: 288,
    imageHeight: 380,
    images: [
      { imageId: 1, imageUrl: "/product_assets/1_2/1_2_1/new42.jpg" },
      { imageId: 2, imageUrl: "/product_assets/1_2/1_2_1/new43.jpg" },
      { imageId: 3, imageUrl: "/product_assets/1_2/1_2_1/new44.jpg" },
      { imageId: 4, imageUrl: "/product_assets/1_2/1_2_1/new45.jpg" },
      { imageId: 5, imageUrl: "/product_assets/1_2/1_2_1/new46.jpg" },
      { imageId: 6, imageUrl: "/product_assets/1_2/1_2_1/new48.jpg" },
      { imageId: 7, imageUrl: "/product_assets/1_2/1_2_1/new49.jpg" },
      { imageId: 8, imageUrl: "/product_assets/1_2/1_2_1/new50.jpg" },
      { imageId: 9, imageUrl: "/product_assets/1_2/1_2_1/new51.jpg" },
      { imageId: 10, imageUrl: "/product_assets/1_2/1_2_1/new52.jpg" },
      { imageId: 11, imageUrl: "/product_assets/1_2/1_2_1/new53.jpg" },
      { imageId: 12, imageUrl: "/product_assets/1_2/1_2_1/new54.jpg" },
      { imageId: 13, imageUrl: "/product_assets/1_2/1_2_1/new55.jpg" },
      { imageId: 14, imageUrl: "/product_assets/1_2/1_2_1/new56.jpg" },
      { imageId: 15, imageUrl: "/product_assets/1_2/1_2_1/new57.jpg" },
      { imageId: 16, imageUrl: "/product_assets/1_2/1_2_1/new58.jpg" },
      { imageId: 17, imageUrl: "/product_assets/1_2/1_2_1/new59.jpg" },
      { imageId: 22, imageUrl: "/product_assets/1_2/1_2_1/new65.jpeg" },
      { imageId: 18, imageUrl: "/product_assets/1_2/1_2_1/new66.jpeg" },
      { imageId: 19, imageUrl: "/product_assets/1_2/1_2_1/new67.jpeg" },
      { imageId: 20, imageUrl: "/product_assets/1_2/1_2_1/new68.jpeg" },
      { imageId: 21, imageUrl: "/product_assets/1_2/1_2_1/new69.jpeg" },
      { imageId: 23, imageUrl: "/product_assets/1_2/1_2_1/new73.jpeg" },
      { imageId: 24, imageUrl: "/product_assets/1_2/1_2_1/new74.jpeg" },
      { imageId: 25, imageUrl: "/product_assets/1_2/1_2_1/new75.jpeg" },
      { imageId: 26, imageUrl: "/product_assets/1_2/1_2_1/new76.jpeg" },
      { imageId: 27, imageUrl: "/product_assets/1_2/1_2_1/new87.jpeg" },
    ],
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
    description:
      "Bring natural charm and sustainability into your living spaces with our handcrafted Home & Décor Jute Products. Made from 100% natural and eco-friendly jute, each piece blends rustic elegance with modern design — perfect for adding warmth, texture, and style to any home. From rugs and carpets to storage baskets, wall art, and planters, our collection offers both functionality and aesthetic appeal.",
    whyChooseThisProduct:
      "Sustainably made, biodegradable, and crafted by skilled artisans — these pieces elevate interiors with natural texture while supporting eco-friendly living and traditional craftsmanship.",
    features: [
      { key: "Material", value: "100% natural, biodegradable, and durable jute" },
      { key: "Product Range", value: "Rugs, floor mats, wall décor, hanging organizers, storage baskets, planters, and mirror frames" },
      { key: "Designs", value: "Handwoven and artisanal patterns in contemporary or traditional styles" },
      { key: "Customization", value: "Sizes, shapes, and colors tailored to suit interior themes" },
      { key: "Usage", value: "Ideal for home, office, hotels, cafes, and eco-conscious interior projects" },
      { key: "Maintenance", value: "Easy to clean and long-lasting with natural texture" },
      { key: "Eco-Benefits", value: "Sustainably made, biodegradable, and supports traditional craftsmanship" }
    ]
  },
  "kitchen-dining": {
    id: 1_12_2,
    subCategoryName: "Kitchen & Dining",
    subCategoryId: "kitchen-dining",
    categoryName: "Home & Décor",
    imageWidth: 288,
    imageHeight: 380,
    images: [
      { imageId: 1, imageUrl: "/product_assets/1_2/1_2_2/new70.jpeg" },
      { imageId: 2, imageUrl: "/product_assets/1_2/1_2_2/new71.jpeg" },
      { imageId: 3, imageUrl: "/product_assets/1_2/1_2_2/new72.jpeg" },
      { imageId: 4, imageUrl: "/product_assets/1_2/1_2_2/new81.png" },
      { imageId: 5, imageUrl: "/product_assets/1_2/1_2_2/new82.jpeg" },
      { imageId: 6, imageUrl: "/product_assets/1_2/1_2_2/new84.jpeg" },
      { imageId: 7, imageUrl: "/product_assets/1_2/1_2_2/new96.jpeg" },
    ],
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
    description:
      "Add a touch of natural elegance to your kitchen and dining space with our handcrafted Jute Kitchen & Dining Collection. Designed for both beauty and practicality, our range includes aprons, oven mitts, table runners, placemats, coasters, and utensil holders — all made from 100% natural and sustainable jute fiber. Each piece reflects a perfect blend of rustic charm and modern design, ideal for eco-conscious homes and hospitality spaces.",
    whyChooseThisProduct:
      "Crafted from renewable jute fiber, these kitchen and dining items are durable, practical, and eco-friendly — perfect for homes, cafés, and hospitality businesses looking for sustainable dining accessories.",
    features: [
      { key: "Material", value: "100% natural, biodegradable, and durable jute" },
      { key: "Product Range", value: "Aprons, oven mitts, table runners, placemats, utensil holders, coasters, and more" },
      { key: "Designs", value: "Handcrafted and neatly finished with natural or dyed jute" },
      { key: "Customization", value: "Sizes, colors, and branding options available for bulk orders" },
      { key: "Usage", value: "Suitable for home kitchens, restaurants, cafés, and gift hampers" },
      { key: "Maintenance", value: "Easy to clean and long-lasting" },
      { key: "Eco-Benefits", value: "Reusable, compostable, and plastic-free — promoting sustainable living and responsible dining" }
    ]
  },
  "storage-organizers-utility": {
    id: 1_12_3,
    subCategoryName: "Storage, Organizers & Utility",
    subCategoryId: "storage-organizers-utility",
    categoryName: "Home & Décor",
    imageWidth: 288,
    imageHeight: 380,
    images: [
      { imageId: 1, imageUrl: "/product_assets/1_2/1_2_3/new62.jpg" },
      { imageId: 2, imageUrl: "/product_assets/1_2/1_2_3/new62.jpg" },
      { imageId: 3, imageUrl: "/product_assets/1_2/1_2_3/new64.jpeg" },
      { imageId: 4, imageUrl: "/product_assets/1_2/1_2_3/new78.jpeg" },
      { imageId: 5, imageUrl: "/product_assets/1_2/1_2_3/new88.jpeg" },
      { imageId: 6, imageUrl: "/product_assets/1_2/1_2_3/new89.jpeg" },
      { imageId: 7, imageUrl: "/product_assets/1_2/1_2_3/new90.jpeg" },
      { imageId: 8, imageUrl: "/product_assets/1_2/1_2_3/new91.jpeg" },
      { imageId: 9, imageUrl: "/product_assets/1_2/1_2_3/new92.jpeg" },
      { imageId: 10, imageUrl: "/product_assets/1_2/1_2_3/new93.jpeg" },
      { imageId: 11, imageUrl: "/product_assets/1_2/1_2_3/new94.png" },
      { imageId: 12, imageUrl: "/product_assets/1_2/1_2_3/new95.jpeg" },
      { imageId: 13, imageUrl: "/product_assets/1_2/1_2_3/new97.jpeg" },
    ],
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
    description:
      "Organize sustainably with our Jute Storage, Organizers & Utility Collection, thoughtfully crafted to bring function and natural beauty into everyday living. Each piece is made from high-quality, eco-friendly jute, offering a perfect blend of durability, style, and environmental responsibility.",
    whyChooseThisProduct:
      "Perfect for homes, offices, and retail spaces that value sustainability and functionality — these jute organizers add a natural, elegant touch while reducing plastic use.",
    features: [
      { key: "Material", value: "Made from 100% natural and biodegradable jute fibers" },
      { key: "Durability", value: "Strong, breathable, and long-lasting" },
      { key: "Portability", value: "Lightweight and foldable for easy use and storage" },
      { key: "Variety", value: "Available in various sizes, textures, and color options" },
      { key: "Customization", value: "Customizable designs for home, hotel, or corporate utility use" },
      { key: "Applications", value: "Perfect for homes, offices, and retail spaces seeking eco-friendly organization solutions" }
    ]
  },
  "office-stationery": {
  id: 1_13_1,
  subCategoryName: "Office & Stationery",
  subCategoryId: "office-stationery",
  categoryName: "Office & Industrial Utilities",
  imageWidth: 288,
  imageHeight: 380,
  images: [
    { imageId: 1, imageUrl: "/product_assets/1_3/1_3_1/new10.jpg" },
    { imageId: 2, imageUrl: "/product_assets/1_3/1_3_1/new25.jpg" },
    { imageId: 3, imageUrl: "/product_assets/1_3/1_3_1/new77.jpeg" },
    { imageId: 4, imageUrl: "/product_assets/1_3/1_3_1/NEW103.jpeg" },
    { imageId: 5, imageUrl: "/product_assets/1_3/1_3_1/NEW104.jpeg" },
    { imageId: 6, imageUrl: "/product_assets/1_3/1_3_1/NEW105.jpeg" },
    { imageId: 7, imageUrl: "/product_assets/1_3/1_3_1/NEW106.jpeg" },
  ],
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
  description:
    "Add a touch of sustainability and style to your workspace with our eco-friendly Jute Office & Stationery Collection. Thoughtfully designed for professionals, students, and creatives, these products blend natural elegance with everyday functionality.",
  whyChooseThisProduct:
    "Biodegradable and reusable, these jute-based stationery and office essentials help reduce plastic waste while adding an elegant, earthy aesthetic to your workspace.",
  features: [
    { key: "Material", value: "Made from 100% natural jute fabric, sometimes blended with cotton for added softness and strength" },
    { key: "Product Range", value: "Jute folders, document holders, diary covers, notebooks, pen stands, laptop sleeves, pencil cases, and office organizers" },
    { key: "Design", value: "Sleek, minimalistic, and available in natural jute tones or custom printed designs for branding" },
    { key: "Durability", value: "Sturdy stitching and reinforced edges ensure long-lasting use in office and travel settings" },
    { key: "Customization", value: "Can be personalized with company logos, names, or event branding—ideal for corporate gifting and conferences" },
    { key: "Eco-Benefits", value: "Biodegradable and reusable, promoting a plastic-free, sustainable office environment" },
    { key: "Applications", value: "Perfect for corporate gifts, event giveaways, eco-conscious offices, student supplies, and professional stationery needs" }
  ]
},
"packaging-industrial": {
  id: 1_14_1,
  subCategoryName: "Packaging & Industrial",
  subCategoryId: "packaging-industrial",
  categoryName: "Jute Packaging & Industrial Use",
  imageWidth: 288,
  imageHeight: 380,
  images: [
    { imageId: 1, imageUrl: "/product_assets/1_4/1_4_1/new109.jpeg" },
    { imageId: 2, imageUrl: "/product_assets/1_4/1_4_1/new110.jpeg" },
    { imageId: 3, imageUrl: "/product_assets/1_4/1_4_1/new111.jpeg" },
    { imageId: 4, imageUrl: "/product_assets/1_4/1_4_1/new112.jpeg" },
    { imageId: 5, imageUrl: "/product_assets/1_4/1_4_1/new114.jpeg" },
    { imageId: 6, imageUrl: "/product_assets/1_4/1_4_1/new115.jpeg" },
    { imageId: 7, imageUrl: "/product_assets/1_4/1_4_1/new117.jpeg" },
    { imageId: 8, imageUrl: "/product_assets/1_4/1_4_1/new118.jpeg" },
    { imageId: 9, imageUrl: "/product_assets/1_4/1_4_1/new121.jpeg" },
    { imageId: 10, imageUrl: "/product_assets/1_4/1_4_1/new122.jpeg" },
    { imageId: 11, imageUrl: "/product_assets/1_4/1_4_1/new123.jpeg" },
    { imageId: 12, imageUrl: "/product_assets/1_4/1_4_1/new124.jpeg" },
    { imageId: 13, imageUrl: "/product_assets/1_4/1_4_1/new125.jpeg" },
    { imageId: 14, imageUrl: "/product_assets/1_4/1_4_1/new126.jpeg" },
  ],
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
  description:
    "Our Jute Packaging & Industrial Use Range offers strong, sustainable, and reliable solutions for a wide variety of commercial and bulk packaging needs. Designed to replace synthetic materials, these products combine high tensile strength with natural breathability—making them ideal for agricultural, industrial, and export packaging.",
  whyChooseThisProduct:
    "Strong, sustainable, and cost-effective — jute packaging supports both product safety and environmental responsibility, offering a biodegradable alternative to synthetic packaging.",
  features: [
    { key: "Material", value: "100% natural, biodegradable, and recyclable jute fiber" },
    { key: "Product Range", value: "Jute sacks, burlap bags, tea packaging, fabric rolls, pallet covers, and wrapping sheets" },
    { key: "Strength & Durability", value: "High load-bearing capacity, tear-resistant, and suitable for long-distance shipments" },
    { key: "Breathability", value: "Allows air circulation to keep grains and produce fresh and moisture-free" },
    { key: "Eco-Friendly", value: "100% compostable and a sustainable alternative to plastic and polypropylene" },
    { key: "Customization", value: "Available in multiple sizes, GSM, weave densities, and print options for branding or labeling" },
    { key: "Applications", value: "Ideal for agricultural produce, coffee and tea export bags, industrial wrapping, pallet protection, and eco-friendly bulk transport" }
  ]
},
"agricultural-horticultural-products": {
  id: 1_15_1,
  subCategoryName: "Agricultural & Horticultural",
  subCategoryId: "agricultural-horticultural",
  categoryName: "Agricultural Use",
  imageWidth: 288,
  imageHeight: 380,
  images: [],
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
  description:
    "Our Jute Agricultural & Horticultural Range is designed to promote sustainable farming and eco-friendly cultivation practices. Made from 100% natural jute fiber, these products support plant growth, soil protection, and responsible land management—all while reducing plastic waste in agriculture.",
  whyChooseThisProduct:
    "Naturally renewable, biodegradable, and soil-safe — these jute-based agricultural solutions enhance sustainability, promote soil health, and reduce plastic dependency in modern farming.",
  features: [
    { key: "Material", value: "100% biodegradable and eco-friendly jute, safe for soil and plants" },
    { key: "Product Range", value: "Grow bags, tree guards, erosion mats, crop covers, mulch mats, and seed storage sacks" },
    { key: "Functionality", value: "Enhances soil fertility, prevents erosion, and promotes healthy root development" },
    { key: "Durability", value: "Strong and long-lasting, yet naturally decomposes after use—ideal for sustainable farming" },
    { key: "Customization", value: "Available in various sizes, thicknesses, and weave densities to suit agricultural needs" },
    { key: "Applications", value: "Used in nurseries, landscaping, organic farming, plantations, and soil conservation projects" },
    { key: "Eco Advantage", value: "Naturally renewable and compostable—helping farmers and horticulturists move toward sustainable cultivation systems" }
  ]
},
"giftware-promotional": {
  id: 1_16_1,
  subCategoryName: "Giftware & Promotional",
  subCategoryId: "giftware-promotional",
  categoryName: "Giftware & Promotional Item",
  imageWidth: 288,
  imageHeight: 380,
  images: [],
  items: [
    "Jute greeting card sleeves",
    "Jute event souvenir pouches",
    "Jute promotional giveaways (small pouches)",
    "Jute branded USB sleeves (pouch)",
    "Jute corporate gift boxes",
    "Jute charity donation envelopes"
  ],
  description:
    "Our Jute Giftware & Promotional Range is designed to make every occasion extra special — combining elegance with eco-conscious craftsmanship. Made from premium natural jute, these products are ideal for weddings, parties, corporate gifting, festive packaging, or luxury hampers. Their rustic charm and customizable designs make them a stylish and sustainable choice for thoughtful gifting.",
  whyChooseThisProduct:
    "Reusable, biodegradable, and plastic-free — these bags reflect your care for both style and sustainability.",
  features: [
    { key: "Material", value: "100% natural jute fiber" },
    { key: "Product Range", value: "Gift cards, pouches, boxes, and more" },
    { key: "Design", value: "Sleek, minimalistic, and available in natural jute tones or custom printed designs for branding" },
    { key: "Durability", value: "Strong and long-lasting, yet naturally decomposes after use—ideal for sustainable gifting" },
    { key: "Customization", value: "Available in multiple sizes, thicknesses, and weave densities to suit gifting needs" },
    { key: "Applications", value: "Used in weddings, parties, corporate gifting, festive packaging, and luxury hampers" },
    { key: "Eco Advantage", value: "Naturally renewable and compostable—helping businesses and individuals move toward sustainable gifting practices" }
  ]
},
"crafts-diy-supplies": {
  id: 1_17_1,
  subCategoryName: "Crafts & DIY Supplies",
  subCategoryId: "crafts-diy-supplies",
  categoryName: "Giftware & Promotional Item",
  imageWidth: 288,
  imageHeight: 380,
  images: [],
  items: [
    "Jute twine / ropes / cords",
    "Jute yarn / threads",
  ],
  description:
    "Our Jute Crafts & DIY Supplies Range is designed to inspire creativity and sustainability. Made from premium natural jute, these products are ideal for crafting, DIY projects, and sustainable living. Their rustic charm and customizable designs make them a stylish and sustainable choice for creative projects.",
  whyChooseThisProduct:
    "Reusable, biodegradable, and plastic-free — these products reflect your care for both style and sustainability.",
  features: [
    { key: "Material", value: "100% natural jute fiber" },
    { key: "Product Range", value: "Twine, yarn, threads, and more" },
    { key: "Design", value: "Sleek, minimalistic, and available in natural jute tones or custom printed designs for branding" },
    { key: "Durability", value: "Strong and long-lasting, yet naturally decomposes after use—ideal for sustainable crafting" },
    { key: "Customization", value: "Available in multiple sizes, thicknesses, and weave densities to suit crafting needs" },
    { key: "Applications", value: "Used in crafting, DIY projects, and sustainable living" },
    { key: "Eco Advantage", value: "Naturally renewable and compostable—helping individuals and communities move toward sustainable crafting practices" }
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
    },
  ],
  "home-decore-utility": [
    {
      id: 1_21,
      name: "Home & Décor Products",
      imageUrl: "/product_assets/1_2/new60.jpg",
      width: 288,
      height: 380,
      categoryName: "Home Décor / Utility",
      subCategoryId: 'home-decore-products',
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
    },
    {
      id: 1_22,
      name: "Kitchen & Dining",
      imageUrl: "/product_assets/1_2/new79.jpeg",
      width: 288,
      height: 380,
      categoryName: "Home Décor / Utility",
      subCategoryId: 'kitchen-dining',
    },
    {
      id: 1_23,
      name: "Storage, Organizers & Utility",
      imageUrl: "/product_assets/1_2/new61.jpg",
      width: 288,
      height: 380,
      categoryName: "Home Décor / Utility",
      subCategoryId: 'storage-organizers-utility',
    }
  ],
  "office-industrial-utilities": [
    {
      id: 1_31,
      name: "Office & Stationery",
      imageUrl: "/product_assets/1_3/new102.jpeg",
      width: 288,
      height: 380,
      categoryName: "Office & Industrial Utilities",
      subCategoryId: 'office-stationery',
    }
  ],
  "packaging-industrial-use": [
    {
      id: 1_41,
      name: "Packaging & Industrial",
      imageUrl: "/product_assets/1_4/new113.jpeg",
      width: 288,
      height: 380,
      categoryName: "Packaging & Industrial Use",
      subCategoryId: 'packaging-industrial',
    }
  ],
  "agricultural-use": [
    {
      id: 1_51,
      name: "Agricultural & Horticultural Products",
      imageUrl: "/product_assets/1_5/new120.jpeg",
      width: 288,
      height: 380,
      categoryName: "Agricultural Use",
      subCategoryId: 'agricultural-horticultural-products',
    }
  ],
  "giftware-promotional-items": [
    {
      id: 1_61,
      name: "Giftware & Promotional",
      imageUrl: "/product_assets/1_6/new27.jpg",
      width: 288,
      height: 380,
      categoryName: "Giftware & Promotional Item",
      subCategoryId: 'giftware-promotional',
    },
    {
      id: 1_62,
      name: "Crafts & DIY Supplies",
      imageUrl: "/product_assets/1_6/new131.jpeg",
      width: 288,
      height: 380,
      categoryName: "Giftware & Promotional Item",
      subCategoryId: 'crafts-diy-supplies',
    }
  ]
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


