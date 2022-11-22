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

export const NAV_ITEMS: Array<NavItem> = [
  //New & Featured
  {
    label: "New & Featured",
    children: [
      {
        label: "New Arrivals",
        subLabel: "Newest items",
        href: "/new-arrivals",
      },
      {
        label: "Best Sellers",
        subLabel: "Best selling items",
        href: "/best-sellers",
      },
      {
        label: "Sale",
        subLabel: "On sale items",
        href: "/sale",
      },
    ],
  },
  //Men
  {
    label: "Men",
    children: [
      {
        label: "Shoes",
        subLabel: "Shop for shoes",
        href: "/men/shoes",
      },
      {
        label: "Accessories",
        subLabel: "Shop for accessories",
        href: "/men/accessories",
      },
    ],
  },
  //Women
  {
    label: "Women",
    children: [
      {
        label: "Shoes",
        subLabel: "Shop for shoes",
        href: "/women/shoes",
      },
      {
        label: "Accessories",
        subLabel: "Shop for accessories",
        href: "/women/accessories",
      },
    ],
  },
  //Kids
  {
    label: "Kids",
    children: [
      {
        label: "Shoes",
        subLabel: "Shop for shoes",
        href: "/kids/shoes",
      },
      {
        label: "Accessories",
        subLabel: "Shop for accessories",
        href: "/kids/accessories",
      },
    ],
  },
  {
    label: "Unisex",
    children: [
      {
        label: "Shoes",
        subLabel: "Shop for shoes",
        href: "/unisex/shoes",
      },
      {
        label: "Accessories",
        subLabel: "Shop for accessories",
        href: "/unisex/accessories",
      },
    ],
  },
  //Brands
  {
    label: "Brands",
    children: [
      {
        label: "Adidas",
        subLabel: "Shop for Adidas",
        href: "/brands/adidas",
      },
      {
        label: "Nike",
        subLabel: "Shop for Nike",
        href: "/brands/nike",
      },
      {
        label: "Puma",
        subLabel: "Shop for Puma",
        href: "/brands/puma",
      },
      {
        label: "Lotto",
        subLabel: "Shop for Lotto",
        href: "/brands/loto",
      },
      {
        label: "Converse",
        subLabel: "Shop for Converse",
        href: "/brands/converse",
      },
      {
        label: "Topper",
        subLabel: "Shop for Topper",
        href: "/brands/topper",
      },
    ],
  },
];
