import { doc, setDoc } from "firebase/firestore";
import { nanoid } from "nanoid";
import { ProductCreateAtom } from "../atoms/productCreateAtom";
import { firestore } from "../firebase/clientApp";

export const products: ProductCreateAtom[] = [
  {
    active: true,
    name: "Puma Karmen Exotics",
    description:
      "The Puma Karmen Exotics Sneakers are urban, sporty and feminine. They are made of leather and have a rubber sole. They have a lace-up closure and a padded tongue and collar. They have a Puma logo on the tongue and on the side. They have a Puma logo on the tongue and on the side.",
    brand: "Puma",

    images: [
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwddf9c570/products/PU_389022-02/PU_389022-02-2.JPG",
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw1c598d0b/products/PU_389022-02/PU_389022-02-1.JPG",
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw4adcd2c6/products/PU_389022-02/PU_389022-02-3.JPG",
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw41f2e969/products/PU_389022-02/PU_389022-02-4.JPG",
    ],
    unitofmeasurement: {
      label: "ARG",
      value: "ARG",
    },
    size: [
      { value: "ARG 36.5", label: "ARG 36.5" },
      { value: "ARG 37", label: "ARG 37" },
      { value: "ARG 37.5", label: "ARG 37.5" },
      { value: "ARG 38", label: "ARG 38" },
      { value: "ARG 38.5", label: "ARG 38.5" },
      { value: "ARG 39", label: "ARG 39" },
    ],

    price: 23.0,
    rating: 4.5,
    numReviews: 1,
    reviews: [
      {
        name: "Ani",
        rating: 5,
        comment: "LOVE!! I will definitely buy more",
      },
    ],

    color: "White",
    genres: { value: "Women", label: "Women" },
    agegroup: { value: "Adult", label: "Adult" },
    exteriormaterials: "synthetic",
    solematerials: "Rubber",
    fittype: "Regular",
    recommendedsport: "Running",
    style: "casual",
    discount: 0,
    stock: 10,
  },
  {
    active: true,
    name: "Nike Court Vision Lo Vday",
    images: [
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw42b16ddd/products/NI_DJ9297-100/NI_DJ9297-100-1.JPG",
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwce9303e4/products/NI_DJ9297-100/NI_DJ9297-100-2.JPG",
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw05346929/products/NI_DJ9297-100/NI_DJ9297-100-3.JPG",
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw7d5e4732/products/NI_DJ9297-100/NI_DJ9297-100-4.JPG",
    ],
    description:
      "The Nike Court Vision Lo Vday Sneakers invade you in style thanks to its canvas upper with cutouts that create a unique look for all your plans. Its floral print fills you with energy and gives you a springtime feel that never fails to remind you of your love for basketball that's currently moving to the city. It features a foam midsole to ensure your cushioning with every step, while the rubber outsole creates unique traction wherever you go.",
    brand: "Nike",

    price: 25.0,
    rating: 4,
    numReviews: 3,

    reviews: [
      {
        name: "A",
        rating: 5,
        comment: "I love the design, very comfortable",
      },
      {
        name: "B",
        rating: 4,
        comment: "I love the design, very comfortable",
      },
      {
        name: "C",
        rating: 4,
        comment: "I love the design, very comfortable",
      },
    ],

    color: "Beige",
    genres: { value: "Women", label: "Women" },
    agegroup: { value: "Adult", label: "Adult" },
    exteriormaterials: "leather",
    solematerials: "Rubber",
    fittype: "Laced",
    recommendedsport: "Other",
    style: "casual",
    discount: 0,
    stock: 10,
    size: [
      { value: "ARG 36.5", label: "ARG 36.5" },
      { value: "ARG 37", label: "ARG 37" },
      { value: "ARG 37.5", label: "ARG 37.5" },
      { value: "ARG 38", label: "ARG 38" },
    ],
    unitofmeasurement: {
      label: "ARG",
      value: "ARG",
    },
  },
  {
    active: true,
    name: "Nike Air Zoom Pegasus",
    images: [
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw845001e9/products/NI_CW7358-400/NI_CW7358-400-1.JPG",
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw843fe6b8/products/NI_CW7358-400/NI_CW7358-400-2.JPG",
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw2d4ecb8e/products/NI_CW7358-400/NI_CW7358-400-4.JPG",
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw32bd69cf/products/NI_CW7358-400/NI_CW7358-400-7.JPG",
    ],
    description:
      "The Nike Air Zoom Pegasus 38 is none other than one of the most outstanding running shoes in the world. Its improved Nike React midsole is more elastic, lighter and with more foam with less volume gives you superior cushioning; the Zoom Air unit in the toe box was adjusted to give you a softer feel and better rebound in each step, relocated close to the foot to give you an immediate response. Its midfoot strap gives you a more secure fit, plus, its rubber outsole made of Nike Grind material provides traction and makes them essential for amateur runners who want to make their training day, one of pleasure.",
    brand: "Nike",

    price: 45.0,
    rating: 5,
    numReviews: 3,

    reviews: [
      {
        name: "A",
        rating: 5,
        comment: "great, excellent gift",
      },
      {
        name: "B",
        rating: 4,
        comment: "great, excellent gift",
      },
      {
        name: "C",
        rating: 4,
        comment: "great, excellent gift",
      },
    ],

    color: "Blue dark",
    genres: { value: "Women", label: "Women" },
    agegroup: { value: "Adult", label: "Adult" },
    exteriormaterials: "mesh",
    solematerials: "Rubber",
    fittype: "Laced",
    recommendedsport: "Running",
    style: "casual",
    discount: 0,
    stock: 10,
    size: [
      { value: "ARG 36.5", label: "ARG 36.5" },
      { value: "ARG 37", label: "ARG 37" },
    ],
    unitofmeasurement: {
      label: "ARG",
      value: "ARG",
    },
  },

  {
    active: true,
    name: "Nike Air Max Excee",
    images: [
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwe10cec83/products/NI_CD5432-115/NI_CD5432-115-1.JPG",
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw347cb63a/products/NI_CD5432-115/NI_CD5432-115-2.JPG",
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw4be6456c/products/NI_CD5432-115/NI_CD5432-115-3.JPG",
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw4986c2b4/products/NI_CD5432-115/NI_CD5432-115-4.JPG",
    ],
    description:
      "Inspired by the 90s classic, the Nike Air Max Excee sneaker gets a fresh update that brings unique design lines and new style to your life. Enjoy your running days with a visible Air unit that enhances cushioning along with the foam midsole and outsole, which also provide superior durability. Made from mesh, leather and suede, they're your perfect ally when looking for a comfortable shoe with all the right vibes. ",
    brand: "Nike",

    price: 39.0,
    rating: 4,
    numReviews: 3,

    reviews: [
      {
        name: "A",
        rating: 5,
        comment: "I love the design, very comfortable",
      },
      {
        name: "B",
        rating: 4,
        comment: "I love the design, very comfortable",
      },
      {
        name: "C",
        rating: 4,
        comment: "I love the design, very comfortable",
      },
    ],

    color: "White and salmon",
    genres: { value: "Women", label: "Women" },
    agegroup: { value: "Adult", label: "Adult" },
    exteriormaterials: "other",
    solematerials: "Rubber",
    fittype: "Laced",
    recommendedsport: "Running",
    style: "casual",
    discount: 0,
    stock: 10,
    size: [
      { value: "ARG 36.5", label: "ARG 36.5" },
      { value: "ARG 37", label: "ARG 37" },
      { value: "ARG 37.5", label: "ARG 37.5" },
      { value: "ARG 38", label: "ARG 38" },
      { value: "ARG 38.5", label: "ARG 38.5" },
      { value: "ARG 39", label: "ARG 39" },
      { value: "ARG 40", label: "ARG 40" },
    ],
    unitofmeasurement: {
      label: "ARG",
      value: "ARG",
    },
  },
  {
    active: true,
    name: "Adidas Grand Court",
    images: [
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw79c05205/products/AD_F36483/AD_F36483-1.JPG",
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw8138bee7/products/AD_F36483/AD_F36483-2.JPG",
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwe6f2023d/products/AD_F36483/AD_F36483-4.JPG",
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw3eeb4dbb/products/AD_F36483/AD_F36483-5.JPG",
    ],
    description:
      "The Adidas Grand Court Sneakers invade you in style thanks to its canvas upper with cutouts that create a unique look for all your plans. It features a foam midsole to ensure your cushioning with every step, while the rubber outsole creates unique traction wherever you go.",
    brand: "Adidas",

    price: 29.0,
    rating: 4,
    numReviews: 3,

    reviews: [
      {
        name: "A",
        rating: 5,
        comment: "I love the design, very comfortable",
      },
      {
        name: "B",
        rating: 4,
        comment: "I love the design, very comfortable",
      },
      {
        name: "C",
        rating: 4,
        comment: "I love the design, very comfortable",
      },
    ],

    color: "White",
    genres: {
      value: "Women",
      label: "Women",
    },
    agegroup: { value: "Adult", label: "Adult" },
    exteriormaterials: "canvas",
    solematerials: "Rubber",
    fittype: "Laced",
    recommendedsport: "Running",
    style: "casual",
    discount: 0,
    stock: 10,
    size: [
      { value: "ARG 36.5", label: "ARG 36.5" },
      { value: "ARG 37", label: "ARG 37" },
      { value: "ARG 37.5", label: "ARG 37.5" },
      { value: "ARG 39", label: "ARG 39" },
    ],
    unitofmeasurement: {
      label: "ARG",
      value: "ARG",
    },
  },

  {
    active: true,
    name: "Fila Euro Jogger Sport",
    images: [
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwd71fde3e/products/FI_51U335X-4704/FI_51U335X-4704-1.JPG",
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwab6863c5/products/FI_51U335X-4704/FI_51U335X-4704-2.JPG",
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwb83decfc/products/FI_51U335X-4704/FI_51U335X-4704-3.JPG",
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw3444843e/products/FI_51U335X-4704/FI_51U335X-4704-4.JPG",
    ],
    description:
      "The Fila Euro Jogger Sport Sneakers are made with materials that make them more comfortable and breathable so you can wear them all day long. Its lace-up fit, midsole and rubber outsole offer cushioning and grip on any surface, while its design is inspired by sporty lines for an urban use that will stand out and complete all your looks.",
    brand: "Fila",
    price: 25.0,
    rating: 4,
    numReviews: 3,

    reviews: [
      {
        name: "A",
        rating: 5,
        comment: "I love the design, very comfortable",
      },
      {
        name: "B",
        rating: 4,
        comment: "I love the design, very comfortable",
      },
      {
        name: "C",
        rating: 4,
        comment: "I love the design, very comfortable",
      },
    ],
    color: "Pink",
    genres: {
      value: "Women",
      label: "Women",
    },
    agegroup: { value: "Adult", label: "Adult" },
    exteriormaterials: "textile",
    solematerials: "Rubber",
    fittype: "Laced",
    recommendedsport: "Running",
    style: "casual",
    discount: 0,
    stock: 10,
    size: [
      { value: "ARG 36.5", label: "ARG 36.5" },
      { value: "ARG 37", label: "ARG 37" },
      { value: "ARG 37.5", label: "ARG 37.5" },
    ],
    unitofmeasurement: {
      label: "ARG",
      value: "ARG",
    },
  },
  {
    active: true,
    name: "Puma Erupter",
    images: [
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw865377c9/products/PU_377451-08/PU_377451-08-1.JPG",
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw2575326b/products/PU_377451-08/PU_377451-08-2.JPG",
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw25b4ef3f/products/PU_377451-08/PU_377451-08-4.JPG",
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw0dff2571/products/PU_377451-08/PU_377451-08-6.JPG",
    ],
    description:
      "The Puma Erupter Sneakers are ideal for your training moments when you need to give your best, because they allow you to reach and exceed your goals. They feature a classic and elegant design based on an upper made of breathable mesh that gives you ease of movement and also allows your feet to stay cool and dry at all times. They feature a full-length EVA midsole and SoftFoam sockliner that adds extreme comfort. The rubber outsole allows for better traction and ground grip. Have them in your shoe rack to complete your ideal sporty look.",
    brand: "Puma",

    price: 28.0,
    rating: 5,
    numReviews: 3,

    reviews: [
      {
        name: "A",
        rating: 5,
        comment: "I love the design, very comfortable",
      },
      {
        name: "B",
        rating: 4,
        comment: "I love the design, very comfortable",
      },
      {
        name: "C",
        rating: 4,
        comment: "I love the design, very comfortable",
      },
    ],

    color: "Wine",
    genres: {
      value: "Women",
      label: "Women",
    },
    agegroup: { value: "Adult", label: "Adult" },
    exteriormaterials: "synthetic",
    solematerials: "Rubber",
    fittype: "Laced",
    recommendedsport: "Running",
    style: "casual",
    discount: 0,
    stock: 10,
    size: [
      { value: "ARG 36.5", label: "ARG 36.5" },
      { value: "ARG 37", label: "ARG 37" },
      { value: "ARG 37.5", label: "ARG 37.5" },
    ],
    unitofmeasurement: {
      label: "ARG",
      value: "ARG",
    },
  },
  {
    active: true,
    name: "Topper Tie Break III",
    images: [
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw7281d87f/products/TO_29701/TO_29701-1.JPG",
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwff8a0d53/products/TO_29701/TO_29701-2.JPG",
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw37fd5842/products/TO_29701/TO_29701-3.JPG",
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw0df76766/products/TO_29701/TO_29701-4.JPG",
    ],
    description:
      "Look fashionable and trendy with the Topper Tie Break III sneakers, their material makes them light and lightweight, giving you better cushioning and firmness; you can combine them with any of your outfits and you will be the center of attention. ",
    brand: "Topper",

    price: 29.0,
    rating: 4,
    numReviews: 3,

    reviews: [
      {
        name: "A",
        rating: 5,
        comment: "I love the design, very comfortable",
      },
      {
        name: "B",
        rating: 4,
        comment: "I love the design, very comfortable",
      },
      {
        name: "C",
        rating: 4,
        comment: "I love the design, very comfortable",
      },
    ],
    color: "Black",
    genres: {
      value: "Men",
      label: "Men",
    },
    agegroup: { value: "Adult", label: "Adult" },
    exteriormaterials: "synthetic",
    solematerials: "Rubber",
    fittype: "Laced",
    recommendedsport: "Running",
    style: "casual",
    discount: 0,
    stock: 10,
    size: [
      { value: "ARG 37", label: "ARG 37" },
      { value: "ARG 37.5", label: "ARG 37.5" },
      { value: "ARG 38", label: "ARG 38" },
    ],
    unitofmeasurement: {
      label: "ARG",
      value: "ARG",
    },
  },
  {
    active: true,
    name: "Nike Court Legacy canvas",
    images: [
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw98b98280/products/NI_CW6539-002/NI_CW6539-002-1.JPG",
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwcc37594f/products/NI_CW6539-002/NI_CW6539-002-2.JPG",
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwe52f9a11/products/NI_CW6539-002/NI_CW6539-002-4.JPG",
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw37043db8/products/NI_CW6539-002/NI_CW6539-002-6.JPG",
    ],
    description:
      "A classic design that can't be missing in your closet, the Nike Court Legacy canvas Sneakers have a reinforced canvas upper that improves its resistance and a rubber sole that provides traction to your steps to accompany you throughout your routine and with the look you choose. Combine them as you like and never be without a basic shoe when it comes to putting together your outfit.",
    brand: "Nike",

    price: 30.0,
    rating: 5,
    numReviews: 3,

    reviews: [
      {
        name: "A",
        rating: 5,
        comment: "I love the design, very comfortable",
      },
      {
        name: "B",
        rating: 4,
        comment: "I love the design, very comfortable",
      },
      {
        name: "C",
        rating: 4,
        comment: "I love the design, very comfortable",
      },
    ],

    color: "Black",
    genres: {
      value: "Men",
      label: "Men",
    },
    agegroup: { value: "Adult", label: "Adult" },
    exteriormaterials: "canvas",
    solematerials: "Rubber",
    fittype: "Laced",
    recommendedsport: "Running",
    style: "casual",
    discount: 0,
    stock: 10,
    size: [
      { value: "ARG 37", label: "ARG 37" },
      { value: "ARG 37.5", label: "ARG 37.5" },
      { value: "ARG 38", label: "ARG 38" },
    ],
    unitofmeasurement: {
      label: "ARG",
      value: "ARG",
    },
  },
  {
    active: true,
    name: "Adidas Coreracer",
    images: [
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw3bf3b7c8/products/AD_FX3593/AD_FX3593-1.JPG",
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw89b854a3/products/AD_FX3593/AD_FX3593-2.JPG",
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw98ff0a78/products/AD_FX3593/AD_FX3593-3.JPG",
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw4f7d8f2f/products/AD_FX3593/AD_FX3593-4.JPG",
    ],
    description:
      "Urban, light and fresh, the adidas Coreracer shoes are designed to meet the demands of the most demanding runners. Its sole has a heel stabilizer and its upper is breathable to maintain the comfort you deserve throughout your run.",
    brand: "Adidas",

    price: 40.0,
    rating: 4,
    numReviews: 3,

    reviews: [
      {
        name: "A",
        rating: 5,
        comment: "I love the design, very comfortable",
      },
      {
        name: "B",
        rating: 4,
        comment: "I love the design, very comfortable",
      },
      {
        name: "C",
        rating: 4,
        comment: "I love the design, very comfortable",
      },
    ],
    color: "Black",
    genres: {
      value: "Men",
      label: "Men",
    },
    agegroup: { value: "Adult", label: "Adult" },
    exteriormaterials: "textile",
    solematerials: "Rubber",
    fittype: "Laced",
    recommendedsport: "Running",
    style: "casual",
    discount: 0,
    stock: 10,
    size: [
      { value: "ARG 37", label: "ARG 37" },
      { value: "ARG 37.5", label: "ARG 37.5" },
      { value: "ARG 38", label: "ARG 38" },
    ],
    unitofmeasurement: {
      label: "ARG",
      value: "ARG",
    },
  },
  {
    active: true,
    name: "Adidas Advantage Base",
    images: [
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw3207375e/products/AD_GW2064/AD_GW2064-6.JPG",
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw1c496ea9/products/AD_GW2064/AD_GW2064-1.JPG",
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw9c66e44d/products/AD_GW2064/AD_GW2064-2.JPG",
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw854bd8bd/products/AD_GW2064/AD_GW2064-3.JPG",
    ],
    description:
      "The Adidas Advantage Base sneakers are inspired by the tennis courts so you can wear them on any street. Made with a synthetic leather upper, they feature perforated Adidas 3-Stripes on the sides and a low-cut silhouette that along with the cupsole rubber outsole offers a sleek and understated design. ",
    brand: "Adidas",

    genres: {
      label: "Men",
      value: "Men",
    },
    price: 25.0,
    rating: 4,
    numReviews: 3,

    reviews: [
      {
        name: "A",
        rating: 5,
        comment: "I love the design, very comfortable",
      },
      {
        name: "B",
        rating: 4,
        comment: "I love the design, very comfortable",
      },
      {
        name: "C",
        rating: 4,
        comment: "I love the design, very comfortable",
      },
    ],

    color: "white",
    agegroup: { value: "Adult", label: "Adult" },
    exteriormaterials: "synthetic",
    solematerials: "Rubber",
    fittype: "Laced",
    recommendedsport: "Running",
    style: "casual",
    discount: 0,
    stock: 10,
    size: [
      { value: "ARG 37", label: "ARG 37" },
      { value: "ARG 37.5", label: "ARG 37.5" },
      { value: "ARG 38", label: "ARG 38" },
    ],
    unitofmeasurement: {
      label: "ARG",
      value: "ARG",
    },
  },
  {
    active: true,
    name: "Converse Chuck Taylor Core ",
    images: [
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw66403c2f/products/CO_156994C/CO_156994C-1.JPG",
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw73f75ddb/products/CO_156994C/CO_156994C-2.JPG",
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw71d5eb0c/products/CO_156994C/CO_156994C-3.JPG",
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw2c070c24/products/CO_156994C/CO_156994C-4.JPG",
    ],
    description:
      "If you're looking for a sneaker to wear anytime, anywhere, the Converse Chuck Taylor Core Ox Sneakers are for you. They give you the versatility you want to combine them with the best you have in your closet without losing style and comfort. ",
    brand: "Converse",

    // category: [{ label: "Unisex", value: "Unisex" }],

    price: 32.0,
    rating: 4.5,
    numReviews: 3,

    reviews: [
      {
        name: "A",
        rating: 5,
        comment: "I love the design, very comfortable",
      },
      {
        name: "B",
        rating: 4,
        comment: "I love the design, very comfortable",
      },
      {
        name: "C",
        rating: 4,
        comment: "I love the design, very comfortable",
      },
    ],

    color: "white",
    agegroup: { value: "Adult", label: "Adult" },
    exteriormaterials: "canvas",
    solematerials: "Rubber",
    fittype: "Laced",
    recommendedsport: "Running",
    style: "casual",
    discount: 0,
    stock: 10,
    size: [
      { value: "ARG 37", label: "ARG 37" },
      { value: "ARG 37.5", label: "ARG 37.5" },
      { value: "ARG 38", label: "ARG 38" },
      { value: "ARG 38.5", label: "ARG 38.5" },
      { value: "ARG 39", label: "ARG 39" },
      { value: "ARG 39.5", label: "ARG 39.5" },
    ],
    unitofmeasurement: {
      label: "ARG",
      value: "ARG",
    },
    genres: {
      label: "Unisex",
      value: "Unisex",
    },
  },
  {
    active: true,
    name: "Nike Revolution 6 Next Nature",
    images: [
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw2ba64150/products/NI_DC3728-005/NI_DC3728-005-1.JPG",
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw8e503d86/products/NI_DC3728-005/NI_DC3728-005-2.JPG",
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw2e0425e9/products/NI_DC3728-005/NI_DC3728-005-3.JPG",
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw35931031/products/NI_DC3728-005/NI_DC3728-005-4.JPG",
    ],
    description:
      "Add more and more miles with your Nike Revolution 6 Next Nature shoes, which provide cushioning and comfort with every step you take. Its breathable upper and computer-designed outsole for better traction are ideal for even the most demanding runners. ",
    brand: "Nike",

    price: 40.0,
    rating: 4,
    numReviews: 3,

    reviews: [
      {
        name: "A",
        rating: 5,
        comment: "I love the design, very comfortable",
      },
      {
        name: "B",
        rating: 4,
        comment: "I love the design, very comfortable",
      },
      {
        name: "C",
        rating: 4,
        comment: "I love the design, very comfortable",
      },
    ],

    color: "black",
    agegroup: { value: "Adult", label: "Adult" },
    exteriormaterials: "mesh",
    solematerials: "Rubber",
    fittype: "Laced",
    recommendedsport: "Running",
    style: "casual",
    discount: 0,
    stock: 10,
    size: [
      { value: "ARG 39", label: "ARG 39" },
      { value: "ARG 39.5", label: "ARG 39.5" },
      { value: "ARG 40", label: "ARG 40" },
      { value: "ARG 40.5", label: "ARG 40.5" },
      { value: "ARG 41", label: "ARG 41" },
      { value: "ARG 41.5", label: "ARG 41.5" },
      { value: "ARG 42", label: "ARG 42" },
      { value: "ARG 42.5", label: "ARG 42.5" },
      { value: "ARG 43", label: "ARG 43" },
      { value: "ARG 44", label: "ARG 44" },
    ],
    unitofmeasurement: {
      label: "ARG",
      value: "ARG",
    },
    genres: {
      label: "Men",
      value: "Men",
    },
  },
  {
    active: true,
    name: "Puma Softride Sophia Better",
    images: [
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw42b16ddd/products/NI_DJ9297-100/NI_DJ9297-100-1.JPG",
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwce9303e4/products/NI_DJ9297-100/NI_DJ9297-100-2.JPG",
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw05346929/products/NI_DJ9297-100/NI_DJ9297-100-3.JPG",
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw7d5e4732/products/NI_DJ9297-100/NI_DJ9297-100-4.JPG",
    ],
    description:
      "The Puma Softride Sophia Better Sneakers are as light as feathers and as equipped as oak. They feature a supremely comfortable SOFTRIDE midsole that will keep your feet nimble wherever you go. Plus, they feature a comfortable SOFTFOAM+ PUMA sockliner for an instant step-in and long-lasting comfort that provides great cushioning. ",
    brand: "Puma",

    price: 33.0,
    rating: 4,
    numReviews: 3,

    reviews: [
      {
        name: "A",
        rating: 5,
        comment: "I love the design, very comfortable",
      },
      {
        name: "B",
        rating: 4,
        comment: "I love the design, very comfortable",
      },
      {
        name: "C",
        rating: 4,
        comment: "I love the design, very comfortable",
      },
    ],

    color: "black",
    agegroup: { value: "Adult", label: "Adult" },
    exteriormaterials: "Mix of materials",
    solematerials: "Rubber",
    fittype: "Laced",
    recommendedsport: "Running",
    style: "casual",
    discount: 0,
    stock: 10,
    size: [
      { value: "ARG 36", label: "ARG 36" },
      { value: "ARG 36.5", label: "ARG 36.5" },
      { value: "ARG 37", label: "ARG 37" },
      { value: "ARG 37.5", label: "ARG 37.5" },
      { value: "ARG 38", label: "ARG 38" },
      { value: "ARG 38.5", label: "ARG 38.5" },
    ],
    unitofmeasurement: {
      label: "ARG",
      value: "ARG",
    },
    genres: {
      label: "Women",
      value: "Women",
    },
  },
  {
    active: true,
    name: "Adidas Tensaur Run 2.0",
    images: [
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw4ee6b22f/products/AD_GW0396/AD_GW0396-1.JPG",
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw1ced2d54/products/AD_GW0396/AD_GW0396-2.JPG",
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw43418e5e/products/AD_GW0396/AD_GW0396-3.JPG",
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwbd4c229e/products/AD_GW0396/AD_GW0396-4.JPG",
    ],
    description:
      "The adidas Tenasur Run 2.0 shoes are ideal for your kids' comfort during play or when they go to the club. It has a durable quality that allows them to enjoy their activities without worries, in addition to the safety in the tread offered by the one-piece Eva sole. The mesh upper makes this shoe comfortable, provides freedom of movement and promotes ventilation for their feet. Put them on to see them enjoy like never before.",
    brand: "Adidas",

    price: 37.0,
    rating: 5,
    numReviews: 3,

    reviews: [
      {
        name: "A",
        rating: 5,
        comment: "I love the design, very comfortable",
      },
      {
        name: "B",
        rating: 4,
        comment: "I love the design, very comfortable",
      },
      {
        name: "C",
        rating: 4,
        comment: "I love the design, very comfortable",
      },
    ],

    color: "blue",
    agegroup: { value: "Kids", label: "Kids" },
    exteriormaterials: "mesh",
    solematerials: "Rubber",
    fittype: "Laced",
    recommendedsport: "Running",
    style: "casual",
    discount: 0,
    stock: 10,
    size: [
      { value: "ARG 26", label: "ARG 26" },
      { value: "ARG 26.5", label: "ARG 26.5" },
      { value: "ARG 27", label: "ARG 27" },
      { value: "ARG 27.5", label: "ARG 27.5" },
      { value: "ARG 28", label: "ARG 28" },
      { value: "ARG 28.5", label: "ARG 28.5" },
      { value: "ARG 29", label: "ARG 29" },
      { value: "ARG 29.5", label: "ARG 29.5" },
      { value: "ARG 30", label: "ARG 30" },
      { value: "ARG 30.5", label: "ARG 30.5" },
      { value: "ARG 31", label: "ARG 31" },
    ],
    unitofmeasurement: {
      label: "ARG",
      value: "ARG",
    },
    genres: {
      label: "Kids",
      value: "Kids",
    },
  },
  {
    active: true,
    name: "Lotto Ilusion III",
    images: [
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw98e75677/products/LO_ACFW22004/LO_ACFW22004-1.JPG",
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw94f86021/products/LO_ACFW22004/LO_ACFW22004-2.JPG",
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwa96f84a4/products/LO_ACFW22004/LO_ACFW22004-3.JPG",
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwa6c1f585/products/LO_ACFW22004/LO_ACFW22004-4.JPG",
    ],
    description:
      "The Lotto Ilusion III shoes give you more flexibility for your feet, achieving better performance in your workout or when you go for a run. Enjoy every drop of perspiration at Funcional Gym, Cross Fit or working out at the gym or at home with the Lotto Ilusion III.",
    brand: "Lotto",

    price: 14.0,
    rating: 4,
    numReviews: 3,

    reviews: [
      {
        name: "A",
        rating: 5,
        comment: "I love the design, very comfortable",
      },
      {
        name: "B",
        rating: 4,
        comment: "I love the design, very comfortable",
      },
      {
        name: "C",
        rating: 4,
        comment: "I love the design, very comfortable",
      },
    ],

    color: "gray",
    agegroup: { value: "Adult", label: "Adult" },
    exteriormaterials: "Nylon mesh low",
    solematerials: "Rubber",
    fittype: "Laced",
    recommendedsport: "Running",
    style: "casual",
    discount: 0,
    stock: 10,
    size: [
      { value: "ARG 36", label: "ARG 36" },
      { value: "ARG 37", label: "ARG 37" },
      { value: "ARG 38", label: "ARG 38" },
      { value: "ARG 39", label: "ARG 39" },
      { value: "ARG 40", label: "ARG 40" },
      { value: "ARG 41", label: "ARG 41" },
      { value: "ARG 42", label: "ARG 42" },
      { value: "ARG 43", label: "ARG 43" },
      { value: "ARG 44", label: "ARG 44" },
      { value: "ARG 45", label: "ARG 45" },
    ],
    unitofmeasurement: {
      label: "ARG",
      value: "ARG",
    },
    genres: {
      label: "Women",
      value: "Women",
    },
  },

  {
    active: true,
    name: "Adidas Fluidflow 2.0",
    images: [
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw016c9087/products/AD_GY8597/AD_GY8597-1.JPG",
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw82350e89/products/AD_GY8597/AD_GY8597-2.JPG",
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwdcf60e22/products/AD_GY8597/AD_GY8597-3.JPG",
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwea778fa3/products/AD_GY8597/AD_GY8597-4.JPG",
    ],
    description:
      "The adidas Fluidflow 2.0 shoes help you improve your run times. Bounce cushioning is lightweight and increases the shoe's flexibility to soften your stride and provide durability. The woven upper is stretchy and breathable, and the synthetic outsole provides traction on a variety of surfaces to make any terrain your training ground. ",
    brand: "Adidas",

    price: 30.0,
    rating: 5,
    numReviews: 3,

    reviews: [
      {
        name: "A",
        rating: 5,
        comment: "I love the design, very comfortable",
      },
      {
        name: "B",
        rating: 4,
        comment: "I love the design, very comfortable",
      },
      {
        name: "C",
        rating: 4,
        comment: "I love the design, very comfortable",
      },
    ],

    color: "pink",
    agegroup: { value: "Adult", label: "Adult" },
    exteriormaterials: "mesh",
    solematerials: "Rubber",
    fittype: "Laced",
    recommendedsport: "Running",
    style: "casual",
    discount: 0,
    stock: 10,
    size: [
      { value: "ARG 36", label: "ARG 36" },
      { value: "ARG 37", label: "ARG 37" },
      { value: "ARG 38", label: "ARG 38" },
      { value: "ARG 39", label: "ARG 39" },
      { value: "ARG 40", label: "ARG 40" },
      { value: "ARG 41", label: "ARG 41" },
    ],
    unitofmeasurement: {
      label: "ARG",
      value: "ARG",
    },
    genres: {
      label: "Women",
      value: "Women",
    },
  },
  {
    active: true,
    name: "Adidas Response Solar",
    images: [
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw5be311ad/products/AD_GV9532/AD_GV9532-1.JPG",
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw5acc7ba5/products/AD_GV9532/AD_GV9532-2.JPG",
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwfc41b315/products/AD_GV9532/AD_GV9532-3.JPG",
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwd9f009e6/products/AD_GV9532/AD_GV9532-4.JPG",
    ],
    description:
      "Comfort is not negotiable when it comes to running; get it with the adidas Response Solar shoes, a breathable, modern and stable design for your feet. Its mesh upper with reinforcement pieces enhance your stride and the wide rubber outsole provides proper grip and durability so that any terrain becomes your running track. Plus, the Bounce midsole gives you immediate cushioning and responsiveness with every step. Experience your performance with this pair!",
    brand: "Adidas",

    price: 31.0,
    rating: 4,
    numReviews: 3,

    reviews: [
      {
        name: "A",
        rating: 5,
        comment: "I love the design, very comfortable",
      },
      {
        name: "B",
        rating: 4,
        comment: "I love the design, very comfortable",
      },
      {
        name: "C",
        rating: 4,
        comment: "I love the design, very comfortable",
      },
    ],

    color: "gray",
    agegroup: { value: "Adult", label: "Adult" },
    exteriormaterials: "mesh",
    solematerials: "Rubber",
    fittype: "Laced",
    recommendedsport: "Running",
    style: "casual",
    discount: 0,
    stock: 10,
    size: [
      { value: "ARG 36", label: "ARG 36" },
      { value: "ARG 37", label: "ARG 37" },
      { value: "ARG 38", label: "ARG 38" },
      { value: "ARG 39", label: "ARG 39" },
      { value: "ARG 40", label: "ARG 40" },
      { value: "ARG 41", label: "ARG 41" },
    ],
    unitofmeasurement: {
      label: "ARG",
      value: "ARG",
    },
    genres: {
      label: "Men",
      value: "Men",
    },
  },
  {
    active: true,
    name: "Topper Wind Iv",
    images: [
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw7010d93d/products/TO_27837/TO_27837-1.JPG",
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw2232253f/products/TO_27837/TO_27837-2.JPG",
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwf76da841/products/TO_27837/TO_27837-3.JPG",
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwc2e872bc/products/TO_27837/TO_27837-4.JPG",
    ],
    description:
      "The Topper Wind Iv Sneakers are ideal for your running days and show off a simple and delicate design typical of the WIND line that combines a traditional look but incorporates design lines. Its mesh construction provides ventilation and allows greater flexibility when moving. The toe and heel reinforcements add stability and durability to this shoe and the EVA midsole reduces pressure and controls impact for greater comfort. Put them on, increase your goals and surpass them with these shoes.",
    brand: "Topper",

    price: 16.0,
    rating: 4,
    numReviews: 3,

    reviews: [
      {
        name: "A",
        rating: 5,
        comment: "I love the design, very comfortable",
      },
      {
        name: "B",
        rating: 4,
        comment: "I love the design, very comfortable",
      },
      {
        name: "C",
        rating: 4,
        comment: "I love the design, very comfortable",
      },
    ],

    color: "gray",
    agegroup: { value: "Adult", label: "Adult" },
    exteriormaterials: "mesh",
    solematerials: "Rubber",
    fittype: "Laced",
    recommendedsport: "Running",
    style: "casual",
    discount: 0,
    stock: 10,
    size: [
      { value: "ARG 36", label: "ARG 36" },
      { value: "ARG 37", label: "ARG 37" },
      { value: "ARG 38", label: "ARG 38" },
      { value: "ARG 39", label: "ARG 39" },
      { value: "ARG 40", label: "ARG 40" },
    ],
    unitofmeasurement: {
      label: "ARG",
      value: "ARG",
    },
    genres: {
      label: "Men",
      value: "Men",
    },
  },
  {
    active: true,
    name: "Nike Star Runner 2",
    images: [
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw01ccc4d6/products/NI_AT1803-603/NI_AT1803-603-1.JPG",
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw6aea2300/products/NI_AT1803-603/NI_AT1803-603-2.JPG",
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw0450a7c6/products/NI_AT1803-603/NI_AT1803-603-3.JPG",
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwd23e885f/products/NI_AT1803-603/NI_AT1803-603-4.JPG",
    ],
    description:
      "Perfect for the youngest beginners in the world of running, the Nike Star Runner 2 shoes are ideal to start running with the right foot, its mesh construction makes them lightweight and with greater flexibility for natural movements. In addition its mesh and synthetic material makes them breathable and resistant to constant use, the grooves of the sole will give you better grip so you can go further and further.",
    brand: "Nike",

    price: 10.0,
    rating: 4,
    numReviews: 3,

    reviews: [
      {
        name: "A",
        rating: 5,
        comment: "I love the design, very comfortable",
      },
      {
        name: "B",
        rating: 4,
        comment: "I love the design, very comfortable",
      },
      {
        name: "C",
        rating: 4,
        comment: "I love the design, very comfortable",
      },
    ],

    color: "pink",
    agegroup: { value: "Kids", label: "Kids" },
    exteriormaterials: "mesh",
    solematerials: "Rubber",
    fittype: "Laced",
    recommendedsport: "Running",
    style: "casual",
    discount: 0,
    stock: 10,
    size: [
      { value: "ARG 20", label: "ARG 20" },
      { value: "ARG 21", label: "ARG 21" },
      { value: "ARG 22", label: "ARG 22" },
      { value: "ARG 23", label: "ARG 23" },
      { value: "ARG 24", label: "ARG 24" },
    ],
    unitofmeasurement: {
      label: "ARG",
      value: "ARG",
    },
    genres: {
      label: "Kids",
      value: "Kids",
    },
  },
  {
    active: true,
    name: "Adidas Grand Court 2.0",
    images: [
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw476c7e74/products/AD_GY4764/AD_GY4764-1.JPG",
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw476c7e74/products/AD_GY4764/AD_GY4764-1.JPG",
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwcf25b246/products/AD_GY4764/AD_GY4764-3.JPG",
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw715faeb4/products/AD_GY4764/AD_GY4764-4.JPG",
    ],
    description:
      "Inspired by tennis and designed for your everyday life, the adidas Grand Court 2.0 sneaker features a durable leather upper that gives you a premium look to enhance any outfit. The rubber outsole improves grip on a variety of surfaces, and the Cloudfoam sockliner enhances cushioning and foot-to-shoe integration to bring stability and precision to your stride.",
    brand: "Adidas",

    price: 18.0,
    rating: 4,
    numReviews: 3,

    reviews: [
      {
        name: "A",
        rating: 5,
        comment: "I love the design, very comfortable",
      },
      {
        name: "B",
        rating: 4,
        comment: "I love the design, very comfortable",
      },
      {
        name: "C",
        rating: 4,
        comment: "I love the design, very comfortable",
      },
    ],

    color: "white",
    agegroup: { value: "Kids", label: "Kids" },
    exteriormaterials: "synthetic leather",
    solematerials: "Rubber",
    fittype: "Laced",
    recommendedsport: "None",
    style: "casual",
    discount: 0,
    stock: 10,
    size: [
      { value: "ARG 20", label: "ARG 20" },
      { value: "ARG 21", label: "ARG 21" },
      { value: "ARG 22", label: "ARG 22" },
      { value: "ARG 23", label: "ARG 23" },
      { value: "ARG 24", label: "ARG 24" },
    ],
    unitofmeasurement: {
      label: "ARG",
      value: "ARG",
    },
    genres: {
      label: "Kids",
      value: "Kids",
    },
  },
  {
    active: true,
    name: "Converse Chuck Taylor All Star ",
    images: [
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw263d67f0/products/CO_A03983C/CO_A03983C-1.JPG",
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwc64c07fd/products/CO_A03983C/CO_A03983C-2.JPG",
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw93cf9b49/products/CO_A03983C/CO_A03983C-3.JPG",
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwebd10bcc/products/CO_A03983C/CO_A03983C-4.JPG",
    ],
    description:
      "The Converse Chuck Taylor All Star sneakers are an everyday icon. The comfort of their sole and their purple canvas upper design are perfect to wear at all times. The plan for them is up to you, they are versatile, classic and can be worn however, wherever and whenever you want. The Converse Chuck Taylor All Star sneakers have a lot of history, now you write yours.",
    brand: "Converse",

    price: 28.0,
    rating: 4,
    numReviews: 3,

    reviews: [
      {
        name: "A",
        rating: 5,
        comment: "I love the design, very comfortable",
      },
      {
        name: "B",
        rating: 4,
        comment: "I love the design, very comfortable",
      },
      {
        name: "C",
        rating: 4,
        comment: "I love the design, very comfortable",
      },
    ],

    color: "purple",
    agegroup: { value: "Kids", label: "Kids" },
    exteriormaterials: "mesh",
    solematerials: "Rubber",
    fittype: "Laced",
    recommendedsport: "None",
    style: "casual",
    discount: 0,
    stock: 10,
    size: [
      { value: "ARG 20", label: "ARG 20" },
      { value: "ARG 21", label: "ARG 21" },
      { value: "ARG 22", label: "ARG 22" },
      { value: "ARG 23", label: "ARG 23" },
      { value: "ARG 24", label: "ARG 24" },
    ],
    unitofmeasurement: {
      label: "ARG",
      value: "ARG",
    },
    genres: {
      label: "Unisex",
      value: "Unisex",
    },
  },

  {
    active: true,
    name: "Converse Chuck Taylor Core Ox",
    images: [
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwbe6d0812/products/CO_156991C/CO_156991C-1.JPG",
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw3c6493d7/products/CO_156991C/CO_156991C-2.JPG",
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwbfc9f138/products/CO_156991C/CO_156991C-3.JPG",
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwd354d7e7/products/CO_156991C/CO_156991C-4.JPG",
    ],
    description:
      "If you're looking for a sneaker to wear anytime, anywhere, the Converse Chuck Taylor Core Ox Sneakers are for you. They give you the versatility you want to combine them with the best you have in your closet without losing style and comfort.",
    brand: "Converse",

    price: 27.0,
    rating: 5,
    numReviews: 3,

    reviews: [
      {
        name: "A",
        rating: 5,
        comment: "I love the design, very comfortable",
      },
      {
        name: "B",
        rating: 4,
        comment: "I love the design, very comfortable",
      },
      {
        name: "C",
        rating: 4,
        comment: "I love the design, very comfortable",
      },
    ],

    color: "blue",
    agegroup: { value: "Kids", label: "Kids" },
    exteriormaterials: "mesh",
    solematerials: "Rubber",
    fittype: "Laced",
    recommendedsport: "None",
    style: "casual",
    discount: 0,
    stock: 10,
    size: [
      { value: "ARG 20", label: "ARG 20" },
      { value: "ARG 21", label: "ARG 21" },
      { value: "ARG 22", label: "ARG 22" },
      { value: "ARG 23", label: "ARG 23" },
      { value: "ARG 24", label: "ARG 24" },
    ],
    unitofmeasurement: {
      label: "ARG",
      value: "ARG",
    },
    genres: {
      label: "Unisex",
      value: "Unisex",
    },
  },
  {
    active: true,
    name: "Topper Ultralight II",
    images: [
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw7f06fc6b/products/TO_26272/TO_26272-1.JPG",
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw892bacde/products/TO_26272/TO_26272-2.JPG",
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw2068f898/products/TO_26272/TO_26272-3.JPG",
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwbb7cfdde/products/TO_26272/TO_26272-4.JPG",
    ],
    description:
      "The Topper Ultralight II shoes are ideal for those runners who need an ultra-light, comfortable and reliable shoe when exercising. Made with a mesh upper and a rubber sole that cushions all the blows; its almost imperceptible weight will make you feel like floating in the air.",
    brand: "Topper",

    price: 13.0,
    rating: 4,
    numReviews: 3,

    reviews: [
      {
        name: "A",
        rating: 5,
        comment: "I love the design, very comfortable",
      },
      {
        name: "B",
        rating: 4,
        comment: "I love the design, very comfortable",
      },
      {
        name: "C",
        rating: 4,
        comment: "I love the design, very comfortable",
      },
    ],

    color: "white",
    agegroup: { value: "Kids", label: "Kids" },
    exteriormaterials: "Mix of materials",
    solematerials: "Rubber",
    fittype: "Laced",
    recommendedsport: "Running",
    style: "casual",
    discount: 0,
    stock: 10,
    size: [
      { value: "ARG 20", label: "ARG 20" },
      { value: "ARG 21", label: "ARG 21" },
      { value: "ARG 22", label: "ARG 22" },
      { value: "ARG 23", label: "ARG 23" },
      { value: "ARG 24", label: "ARG 24" },
    ],
    unitofmeasurement: {
      label: "ARG",
      value: "ARG",
    },
    genres: {
      label: "Kids",
      value: "Kids",
    },
  },
  {
    active: true,
    name: "Topper Kerala",
    images: [
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw682a8d37/products/TO_27789/TO_27789-1.JPG",
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwab8e22ca/products/TO_27789/TO_27789-2.JPG",
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwdedf0d8e/products/TO_27789/TO_27789-3.JPG",
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwfa160822/products/TO_27789/TO_27789-4.JPG",
    ],
    description:
      "Topper keralta shoes are the perfect choice for your baby's first steps. They are inspired by training shoes and are extremely resistant. The synthetic and mesh upper is pierced with a classic design. The milled EVA sole with rubber inserts is comfortable and allows their first steps to be as smooth as they are stable. ",
    brand: "Topper",

    price: 18.0,
    rating: 4,
    numReviews: 3,

    reviews: [
      {
        name: "A",
        rating: 5,
        comment: "I love the design, very comfortable",
      },
      {
        name: "B",
        rating: 4,
        comment: "I love the design, very comfortable",
      },
      {
        name: "C",
        rating: 4,
        comment: "I love the design, very comfortable",
      },
    ],

    color: "black",
    agegroup: { value: "Kids", label: "Kids" },
    exteriormaterials: "mesh",
    solematerials: "Rubber",
    fittype: "Laced",
    recommendedsport: "Other",
    style: "casual",
    discount: 0,
    stock: 10,
    size: [
      { value: "ARG 20", label: "ARG 20" },
      { value: "ARG 21", label: "ARG 21" },
      { value: "ARG 22", label: "ARG 22" },
      { value: "ARG 23", label: "ARG 23" },
      { value: "ARG 24", label: "ARG 24" },
    ],
    unitofmeasurement: {
      label: "ARG",
      value: "ARG",
    },
    genres: {
      label: "Kids",
      value: "Kids",
    },
  },
  {
    active: true,
    name: "Topper Chalpa",
    images: [
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw8a713a4d/products/TO_54915/TO_54915-1.JPG",
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwd8ba6311/products/TO_54915/TO_54915-2.JPG",
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw6fc067c4/products/TO_54915/TO_54915-3.JPG",
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwc4a5c5c2/products/TO_54915/TO_54915-4.JPG",
    ],
    description:
      "Topper Chalpa shoes are the perfect choice for your baby's first steps. They are inspired by outdoor sports and are extremely resistant. The synthetic and mesh uppers are pierced with colorful designs with gross tape and patterned laces for added style. The milled EVA sole with rubber inserts is comfortable and allows their first steps to be as smooth as they are stable. ",
    brand: "Topper",

    price: 13.0,
    rating: 4,
    numReviews: 3,

    reviews: [
      {
        name: "A",
        rating: 5,
        comment: "I love the design, very comfortable",
      },
      {
        name: "B",
        rating: 4,
        comment: "I love the design, very comfortable",
      },
      {
        name: "C",
        rating: 4,
        comment: "I love the design, very comfortable",
      },
    ],

    color: "pink",
    agegroup: { value: "Kids", label: "Kids" },
    exteriormaterials: "mesh",
    solematerials: "Rubber",
    fittype: "Laced",
    recommendedsport: "Other",
    style: "casual",
    discount: 0,
    stock: 10,
    size: [
      { value: "ARG 20", label: "ARG 20" },
      { value: "ARG 21", label: "ARG 21" },
      { value: "ARG 22", label: "ARG 22" },
      { value: "ARG 23", label: "ARG 23" },
      { value: "ARG 24", label: "ARG 24" },
    ],
    unitofmeasurement: {
      label: "ARG",
      value: "ARG",
    },
    genres: {
      label: "Kids",
      value: "Kids",
    },
  },
  {
    active: true,
    name: "Topper Zurich II",
    images: [
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw82468c95/products/TO_25540/TO_25540-1.JPG",
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw6ec03b4e/products/TO_25540/TO_25540-2.JPG",
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwaf13743f/products/TO_25540/TO_25540-3.JPG",
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw85cabb69/products/TO_25540/TO_25540-4.JPG",
    ],
    description:
      "The Topper Zurich II shoes accompany children in each of their races so that they can become the athletes they want to be. The mesh upper features synthetic leather and reinforced stitching so they can go all out in a durable shoe. The EVA outsole provides superior comfort and the design provides a modern, easy-to-match look.",
    brand: "Nike",

    price: 15.0,
    rating: 4,
    numReviews: 3,

    reviews: [
      {
        name: "A",
        rating: 5,
        comment: "I love the design, very comfortable",
      },
      {
        name: "B",
        rating: 4,
        comment: "I love the design, very comfortable",
      },
      {
        name: "C",
        rating: 4,
        comment: "I love the design, very comfortable",
      },
    ],

    color: "white",
    agegroup: { value: "Kids", label: "Kids" },
    exteriormaterials: "mesh",
    solematerials: "Rubber",
    fittype: "Laced",
    recommendedsport: "Running",
    style: "casual",
    discount: 0,
    stock: 10,
    size: [
      { value: "ARG 20", label: "ARG 20" },
      { value: "ARG 21", label: "ARG 21" },
      { value: "ARG 22", label: "ARG 22" },
      { value: "ARG 23", label: "ARG 23" },
      { value: "ARG 24", label: "ARG 24" },
    ],
    unitofmeasurement: {
      label: "ARG",
      value: "ARG",
    },
    genres: {
      label: "Kids",
      value: "Kids",
    },
  },
  {
    active: true,
    name: "Nike Downshifter 12",
    images: [
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwbae14382/products/NI_DD9293-400/NI_DD9293-400-1.JPG",
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwe40844c4/products/NI_DD9293-400/NI_DD9293-400-2.JPG",
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw6beed8c6/products/NI_DD9293-400/NI_DD9293-400-4.JPG",
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw53894f1a/products/NI_DD9293-400/NI_DD9293-400-6.JPG",
    ],
    description:
      "The Nike Downshifter 12 Running Shoes are perfect for your running days, the mesh upper gives you breathable comfort, with flex grooves in the outsole gives you better traction, responsiveness, and cushioning in every step, plus the metallic swoosh logo adds a sporty and original touch.",
    brand: "Nike",

    price: 40.0,
    rating: 4,
    numReviews: 3,

    reviews: [
      {
        name: "A",
        rating: 5,
        comment: "I love the design, very comfortable",
      },
      {
        name: "B",
        rating: 4,
        comment: "I love the design, very comfortable",
      },
      {
        name: "C",
        rating: 4,
        comment: "I love the design, very comfortable",
      },
    ],

    color: "blue",
    agegroup: { value: "Adult", label: "Adult" },
    exteriormaterials: "mesh",
    solematerials: "Rubber",
    fittype: "Laced",
    recommendedsport: "Running",
    style: "casual",
    discount: 0,
    stock: 10,
    size: [
      { value: "ARG 37", label: "ARG 37" },
      { value: "ARG 38", label: "ARG 38" },
      { value: "ARG 39", label: "ARG 39" },
      { value: "ARG 40", label: "ARG 40" },
      { value: "ARG 41", label: "ARG 41" },
      { value: "ARG 42", label: "ARG 42" },
    ],
    unitofmeasurement: {
      label: "ARG",
      value: "ARG",
    },
    genres: {
      label: "Men",
      value: "Men",
    },
  },
  {
    active: true,
    name: "Puma Better Foam Prowl Slip Cryst",
    images: [
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw29dfa0ef/products/PU_377148-01/PU_377148-01-1.JPG",
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwcdb1d070/products/PU_377148-01/PU_377148-01-2.JPG",
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwd603edee/products/PU_377148-01/PU_377148-01-3.JPG",
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwfad6914a/products/PU_377148-01/PU_377148-01-4.JPG",
    ],
    description:
      "Add comfort to your day with the Puma Better Foam Prowl Slip Cryst Sneakers. Made in one piece of stretch mesh for easy on and off and comfort in your every move while the criss-cross elastics provide extra support and fit. Plus, it features Better Foam technology, a midsole made from sugar cane as part of a more sustainable manufacturing process. This pair is everything your activities need.",
    brand: "Puma",

    price: 29.0,
    rating: 4,
    numReviews: 3,

    reviews: [
      {
        name: "A",
        rating: 5,
        comment: "I love the design, very comfortable",
      },
      {
        name: "B",
        rating: 4,
        comment: "I love the design, very comfortable",
      },
      {
        name: "C",
        rating: 4,
        comment: "I love the design, very comfortable",
      },
    ],

    color: "pink",
    agegroup: { value: "Adult", label: "Adult" },
    exteriormaterials: "mesh",
    solematerials: "Rubber",
    fittype: "Laced",
    recommendedsport: "Running",
    style: "casual",
    discount: 0,
    stock: 10,
    size: [
      { value: "ARG 37", label: "ARG 37" },
      { value: "ARG 38", label: "ARG 38" },
    ],
    unitofmeasurement: {
      label: "ARG",
      value: "ARG",
    },
    genres: {
      label: "Women",
      value: "Women",
    },
  },

  {
    active: true,
    name: "Fila Iconic",
    images: [
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw117df03a/products/FI_F01ST004027-4572/FI_F01ST004027-4572-1.JPG",
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw669ce754/products/FI_F01ST004027-4572/FI_F01ST004027-4572-2.JPG",
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw5cf22616/products/FI_F01ST004027-4572/FI_F01ST004027-4572-3.JPG",
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwbf2e2192/products/FI_F01ST004027-4572/FI_F01ST004027-4572-4.JPG",
    ],
    description:
      "For the most demanding runners, the Fila Iconic sneakers have arrived. Its upper features a lightweight design; it is made of mesh and its laces are made of polyester, with unique and discreet logos on them. The composition provides greater ventilation for your feet and adapts easily to them. The foam sole and midsole provide the comfort you are looking for in a shoe that will accompany you on all your runs. ",
    brand: "Fila",

    price: 19.0,
    rating: 4,
    numReviews: 3,

    reviews: [
      {
        name: "A",
        rating: 5,
        comment: "I love the design, very comfortable",
      },
      {
        name: "B",
        rating: 4,
        comment: "I love the design, very comfortable",
      },
      {
        name: "C",
        rating: 4,
        comment: "I love the design, very comfortable",
      },
    ],

    color: "black",
    agegroup: { value: "Adult", label: "Adult" },
    exteriormaterials: "mesh",
    solematerials: "Rubber",
    fittype: "Laced",
    recommendedsport: "Running",
    style: "casual",
    discount: 0,
    stock: 10,
    size: [
      { value: "ARG 37", label: "ARG 37" },
      { value: "ARG 38", label: "ARG 38" },
    ],
    unitofmeasurement: {
      label: "ARG",
      value: "ARG",
    },
    genres: {
      label: "Men",
      value: "Men",
    },
  },
  {
    active: true,
    name: "Adidas Runfalcon 2.0",
    images: [
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwb8e80fd2/products/AD_GX8238/AD_GX8238-1.JPG",
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw8616d57f/products/AD_GX8238/AD_GX8238-2.JPG",
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwf24da229/products/AD_GX8238/AD_GX8238-3.JPG",
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw667e8952/products/AD_GX8238/AD_GX8238-4.JPG",
    ],
    description:
      "Run to your next goal with the adidas Runfalcon 2.0 running shoes, ideal for finishing a race and heading anywhere else with a lightweight design you can wear anywhere. The mesh upper provides breathability and the cupsole outsole keeps you stable so that you can add more kilometers with total security. It has an EVA midsole for the comfort you deserve.",
    brand: "Adidas",

    price: 39.0,
    rating: 4,
    numReviews: 3,

    reviews: [
      {
        name: "A",
        rating: 5,
        comment: "I love the design, very comfortable",
      },
      {
        name: "B",
        rating: 4,
        comment: "I love the design, very comfortable",
      },
      {
        name: "C",
        rating: 4,
        comment: "I love the design, very comfortable",
      },
    ],

    color: "gray",
    agegroup: { value: "Adult", label: "Adult" },
    exteriormaterials: "mesh",
    solematerials: "Rubber",
    fittype: "Laced",
    recommendedsport: "Running",
    style: "casual",
    discount: 0,
    stock: 10,
    size: [
      { value: "ARG 37", label: "ARG 37" },
      { value: "ARG 38", label: "ARG 38" },
    ],
    unitofmeasurement: {
      label: "ARG",
      value: "ARG",
    },
    genres: {
      label: "Men",
      value: "Men",
    },
  },
  {
    active: true,
    name: "Nike Court Air Zoom Vapor Pro",
    images: [
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw5550f9b4/products/NI_CZ0220-009/NI_CZ0220-009-2.JPG",
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw79126c70/products/NI_CZ0220-009/NI_CZ0220-009-3.JPG",
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw5f93cd10/products/NI_CZ0220-009/NI_CZ0220-009-4.JPG",
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw788c7325/products/NI_CZ0220-009/NI_CZ0220-009-1.JPG",
    ],
    description:
      "For the running days you enjoy the most, the Nike Court Air Zoom Vapor Pro Shoes are ideal. Their three-layer mesh upper makes them resistant and durable, as promised by the brand, in addition to providing breathability. Its Vapor Pro technology, which consists of a carbon fiber plate in the thick foam outsole, propels you forward to make running easy for you. Feel like a professional runner with these shoes. ",
    brand: "Nike",

    price: 47.0,
    rating: 5,
    numReviews: 3,

    reviews: [
      {
        name: "A",
        rating: 5,
        comment: "I love the design, very comfortable",
      },
      {
        name: "B",
        rating: 4,
        comment: "I love the design, very comfortable",
      },
      {
        name: "C",
        rating: 4,
        comment: "I love the design, very comfortable",
      },
    ],
    color: "black",
    agegroup: { value: "Adult", label: "Adult" },
    exteriormaterials: "mesh",
    solematerials: "Rubber",
    fittype: "Laced",
    recommendedsport: "Running",
    style: "casual",
    discount: 0,
    stock: 10,
    size: [
      { value: "ARG 37", label: "ARG 37" },
      { value: "ARG 38", label: "ARG 38" },
    ],
    unitofmeasurement: {
      label: "ARG",
      value: "ARG",
    },
    genres: {
      label: "Men",
      value: "Men",
    },
  },
];

import { useToast } from "@chakra-ui/react";
const CreateProducts = async () => {
  const toast = useToast();
  for (let i = 0; i < products.length; i++) {
    setTimeout(async () => {
      const id = nanoid();
      const docRef = doc(firestore, "productsFirestore", `prod_M${id}`);
      try {
        await setDoc(docRef, {
          ...products[i],
          id: `prod_M${id}`,
        });
        toast({
          title: "Product created.",
          description: `We've created your product for you. ${i + 1}`,
          status: "success",
          duration: 1000,
          isClosable: true,
        });
      } catch (e) {
        toast({
          title: "An error occurred.",
          description: "We could not create your product.",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      }
    }, 1000 + i * 5000);
  }
};

export default CreateProducts;
