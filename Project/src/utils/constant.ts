const followUs = "Follow Us";
const shoppingCategories = "Shopping & Categories";
const usefulLinks = "Useful Links";
const menShopping = "Men's Shopping";
const womanShopping = "Woman's Shopping";
const homePage = "Home Page";
const aboutUs = "About Us";
const contactUs = "Contact Us";
const copyright = "copyright";
const kalo = "Kalo, Inc. All rights reserved.";
const newsletter = "Subscribe to our newsletter";
const blog = "Blog";
const careers = "Careers";
const support = "Support";
const helpCenter = "Help Center";
const company = "Company";
const safetyCenter = "Safety Center";
const refundPolicy = "Refund Policy";
const legal = "Legal";
const cookiesPolicy = "Cookies Policy";
const privacyPolicy = "Privacy Policy";
const termsOfService = "Terms of Service";
const returnPolicy = "Return Policy";

export {
  followUs,
  shoppingCategories,
  usefulLinks,
  menShopping,
  womanShopping,
  homePage,
  aboutUs,
  contactUs,
  copyright,
  kalo,
  newsletter,
  blog,
  careers,
  company,
  support,
  helpCenter,
  safetyCenter,
  refundPolicy,
  legal,
  cookiesPolicy,
  privacyPolicy,
  termsOfService,
  returnPolicy,
};

import Cell1 from "../../public/assets/images/1Cell.png";
import Cell2 from "../../public/assets/images/2Cell.png";
import Cell3 from "../../public/assets/images/3Cell.png";
import PC1 from "../../public/assets/images/1PC.png";
import PC2 from "../../public/assets/images/2PC.png";
import PC3 from "../../public/assets/images/3PC.png";
import PC4 from "../../public/assets/images/4PC.png";
import PC5 from "../../public/assets/images/5PC.png";

export const cellImages = [Cell1, Cell2, Cell3];
export const pcImages = [PC1, PC2, PC3, PC4, PC5];
export type NavItem = {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
};

export const itemMenuTitle = {
  profile: "Profile",
  settings: "Settings",
  orders: "Orders",
  payments: "Payments",
  wishlist: "Wishlist",
  Admproducts: "ADMIN — Products",
  AdmcreateProduct: "ADMIN — Create Product",
  AdmeditProduct: "ADMIN — Edit Product",
  Admcategories: "ADMIN — Categories",
  Admorders: "ADMIN — Orders",
  Admusers: "ADMIN — Users",
  AdmcreateCategory: "ADMIN — Create Category",
  AdmeditCategory: "ADMIN — Edit Category",
  AdmcreateOrder: "ADMIN — Create Order",
  AdmeditOrder: "ADMIN — Edit Order",
};

export const Sizes = {
  ARG: [
    { value: "ARG 26.5", label: "ARG 26.5" },
    { value: "ARG 27", label: "ARG 27" },
    { value: "ARG 27.5", label: "ARG 27.5" },
    { value: "ARG 28.5", label: "ARG 28.5" },
    { value: "ARG 29", label: "ARG 29" },
    { value: "ARG 29.5", label: "ARG 29.5" },
    { value: "ARG 30.5", label: "ARG 30.5" },
    { value: "ARG 31", label: "ARG 31" },
    { value: "ARG 31.5", label: "ARG 31.5" },
    { value: "ARG 32", label: "ARG 32" },
    { value: "ARG 33", label: "ARG 33" },
    { value: "ARG 33.5", label: "ARG 33.5" },
    { value: "ARG 34", label: "ARG 34" },
    { value: "ARG 34.5", label: "ARG 34.5" },
    { value: "ARG 35", label: "ARG 35" },
    { value: "ARG 35.5", label: "ARG 35.5" },
    { value: "ARG 36", label: "ARG 36" },
    { value: "ARG 36.5", label: "ARG 36.5" },
    { value: "ARG 37", label: "ARG 37" },
    { value: "ARG 37.5", label: "ARG 37.5" },
    { value: "ARG 38", label: "ARG 38" },
    { value: "ARG 38.5", label: "ARG 38.5" },
    { value: "ARG 39", label: "ARG 39" },
    { value: "ARG 39.5", label: "ARG 39.5" },
    { value: "ARG 40", label: "ARG 40" },
    { value: "ARG 40.5", label: "ARG 40.5" },
    { value: "ARG 41", label: "ARG 41" },
    { value: "ARG 41.5", label: "ARG 41.5" },
    { value: "ARG 42", label: "ARG 42" },
    { value: "ARG 42.5", label: "ARG 42.5" },
    { value: "ARG 43", label: "ARG 43" },
    { value: "ARG 43.5", label: "ARG 43.5" },
    { value: "ARG 44", label: "ARG 44" },
    { value: "ARG 44.5", label: "ARG 44.5" },
    { value: "ARG 45", label: "ARG 45" },
    { value: "ARG 45.5", label: "ARG 45.5" },
    { value: "ARG 46", label: "ARG 46" },
    { value: "ARG 46.5", label: "ARG 46.5" },
    { value: "ARG 47", label: "ARG 47" },
  ],
  UK: [
    { value: "UK 10", label: "UK 10" },
    { value: "UK 10.5", label: "UK 10.5" },
    { value: "UK 11", label: "UK 11" },
    { value: "UK 11.5", label: "UK 11.5" },
    { value: "UK 12", label: "UK 12" },
    { value: "UK 12.5", label: "UK 12.5" },
    { value: "UK 13", label: "UK 13" },
    { value: "UK 13.5", label: "UK 13.5" },
    { value: "UK 1", label: "UK 1" },
    { value: "UK 1.5", label: "UK 1.5" },
    { value: "UK 2", label: "UK 2" },
    { value: "UK 2.5", label: "UK 2.5" },
    { value: "UK 3", label: "UK 3" },
    { value: "UK 3.5", label: "UK 3.5" },
    { value: "UK 4", label: "UK 4" },
    { value: "UK 4.5", label: "UK 4.5" },
    { value: "UK 5", label: "UK 5" },
    { value: "UK 5.5", label: "UK 5.5" },
    { value: "UK 6", label: "UK 6" },
    { value: "UK 6.5", label: "UK 6.5" },
    { value: "UK 7", label: "UK 7" },
    { value: "UK 7.5", label: "UK 7.5" },
    { value: "UK 8", label: "UK 8" },
    { value: "UK 8.5", label: "UK 8.5" },
    { value: "UK 9", label: "UK 9" },
    { value: "UK 9.5", label: "UK 9.5" },
    { value: "UK 10", label: "UK 10" },
    { value: "UK 10.5", label: "UK 10.5" },
    { value: "UK 11", label: "UK 11" },
    { value: "UK 11.5", label: "UK 11.5" },
    { value: "UK 12", label: "UK 12" },
    { value: "UK 12.5", label: "UK 12.5" },
    { value: "UK 13", label: "UK 13" },
  ],
  US: [
    { value: "US 10.5", label: "US 10.5" },
    { value: "US 11", label: "US 11" },
    { value: "US 11.5", label: "US 11.5" },
    { value: "US 12", label: "US 12" },
    { value: "US 12.5", label: "US 12.5" },
    { value: "US 13", label: "US 13" },
    { value: "US 2", label: "US 2" },
    { value: "US 2.5", label: "US 2.5" },
    { value: "US 3", label: "US 3" },
    { value: "US 3.5", label: "US 3.5" },
    { value: "US 4", label: "US 4" },
    { value: "US 4.5", label: "US 4.5" },
    { value: "US 5", label: "US 5" },
    { value: "US 5.5", label: "US 5.5" },
    { value: "US 6", label: "US 6" },
    { value: "US 6.5", label: "US 6.5" },
    { value: "US 7", label: "US 7" },
    { value: "US 7.5", label: "US 7.5" },
    { value: "US 8", label: "US 8" },
    { value: "US 8.5", label: "US 8.5" },
    { value: "US 9", label: "US 9" },
    { value: "US 9.5", label: "US 9.5" },
    { value: "US 10", label: "US 10" },
    { value: "US 10.5", label: "US 10.5" },
    { value: "US 11", label: "US 11" },
    { value: "US 11.5", label: "US 11.5" },
    { value: "US 12", label: "US 12" },
    { value: "US 12.5", label: "US 12.5" },
    { value: "US 13", label: "US 13" },
    { value: "US 13.5", label: "US 13.5" },
  ],
  EUR: [
    { value: "EUR 27", label: "EUR 27" },
    { value: "EUR 27.5", label: "EUR 27.5" },
    { value: "EUR 28", label: "EUR 28" },
    { value: "EUR 28.5", label: "EUR 28.5" },
    { value: "EUR 29", label: "EUR 29" },
    { value: "EUR 29.5", label: "EUR 29.5" },
    { value: "EUR 30", label: "EUR 30" },
    { value: "EUR 30.5", label: "EUR 30.5" },
    { value: "EUR 31", label: "EUR 31" },
    { value: "EUR 31.5", label: "EUR 31.5" },
    { value: "EUR 32", label: "EUR 32" },
    { value: "EUR 32.5", label: "EUR 32.5" },
    { value: "EUR 33", label: "EUR 33" },
    { value: "EUR 33.5", label: "EUR 33.5" },
    { value: "EUR 34", label: "EUR 34" },
    { value: "EUR 34.5", label: "EUR 34.5" },
    { value: "EUR 35", label: "EUR 35" },
    { value: "EUR 35.5", label: "EUR 35.5" },
    { value: "EUR 36", label: "EUR 36" },
    { value: "EUR 36.5", label: "EUR 36.5" },
    { value: "EUR 37", label: "EUR 37" },
    { value: "EUR 37.5", label: "EUR 37.5" },
    { value: "EUR 38", label: "EUR 38" },
    { value: "EUR 38.5", label: "EUR 38.5" },
    { value: "EUR 39 1/3", label: "EUR 39  1/3" },
    { value: "EUR 40", label: "EUR 40" },
    { value: "EUR 40 2/3", label: "EUR 40  2/3" },
    { value: "EUR 41 1/3", label: "EUR 41  1/3" },
    { value: "EUR 42", label: "EUR 42" },
    { value: "EUR 42 2/3", label: "EUR 42  2/3" },
    { value: "EUR 43 1/3", label: "EUR 43  1/3" },
    { value: "EUR 44", label: "EUR 44" },
    { value: "EUR 44 2/3", label: "EUR 44  2/3" },
    { value: "EUR 45 1/3", label: "EUR 45  1/3" },
    { value: "EUR 46", label: "EUR 46" },
    { value: "EUR 46 2/3", label: "EUR 46  2/3" },
    { value: "EUR 47 1/3", label: "EUR 47  1/3" },
    { value: "EUR 48", label: "EUR 48" },
    { value: "EUR 48 2/3", label: "EUR 48  2/3" },
  ],
};

export const unitOfMeasurementOptions = [
  { value: "ARG", label: "ARG" },
  { value: "UK", label: "UK" },
  { value: "US", label: "US" },
  { value: "EUR", label: "EUR" },
];

export const GenresOptions = [
  { value: "Men", label: "Men" },
  { value: "Women", label: "Women" },
  { value: "Kids", label: "Kids" },
  { value: "Unisex", label: "Unisex" },
];

export const AgeRangeOptions = [
  { value: "Adult", label: "Adult" },
  { value: "Kids", label: "Kids" },
  { value: "Baby", label: "Baby" },
];

export const Brands = [
  {
    src: "https://newsport.vteximg.com.br/arquivos/ADIDAS-brand.svg",
    label: "ADIDAS",
    subLabel: "Shop for Adidas",
    href: "/brands/adidas",
  },
  {
    src: "https://www.dexter.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-Dexter-Library/default/dw2f9ed6ed/nike2.png",
    label: "NIKE",
    subLabel: "Shop for Nike",
    href: "/brands/Nike",
  },
  {
    src: "https://www.dexter.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-Dexter-Library/default/dw65c423b8/puma2.png",
    label: "PUMA",
    subLabel: "Shop for Puma",
    href: "/brands/Puma",
  },
  //converse
  {
    label: "CONVERSE",
    subLabel: "Shop for Converse",
    href: "/brands/Converse",
    src: "https://www.dexter.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-Dexter-Library/default/dwb878323e/logoconverse.png",
  },
  //lotto
  {
    label: "LOTTO",
    subLabel: "Shop for Lotto",
    href: "/brands/Lotto",
    src: "https://www.dexter.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-Dexter-Library/default/dw3198520a/images/marcas/logolotto2.png",
  },
  // topper
  {
    label: "TOPPER",
    subLabel: "Shop for Topper",
    href: "/brands/Topper",
    src: "https://www.dexter.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-Dexter-Library/default/dw79e04e09/images/marcas/logotopper2.png",
  },
];

export const NAV_ITEMS: Array<NavItem> = [
  //New & Featured
  {
    label: "New & Featured",
    href: "/products",
    children: [
      {
        label: "New Arrivals",
        subLabel: "Newest items",
        href: "/products/new-arrivals",
      },
      {
        label: "Best Sellers",
        subLabel: "Best selling items",
        href: "/products/best-sellers",
      },
      {
        label: "Sale",
        subLabel: "On sale items",
        href: "/products/sale",
      },
    ],
  },

  {
    label: "Men",
    href: "/products/men",
  },
  //Women
  {
    label: "Women",
    href: "/products/women",
  },
  //Kids
  {
    label: "Kids",
    href: "/products/kids",
  },
  {
    label: "Unisex",
    href: "/products/unisex",
  },
  //Brands
  {
    label: "Brands",
    children: [...(Brands as Array<NavItem>)],
  },
];
