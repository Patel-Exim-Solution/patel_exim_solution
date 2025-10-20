
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