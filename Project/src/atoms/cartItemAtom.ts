import { atom, selector } from 'recoil';

export interface cartItem {
  id: any;
  product: [],
  quantity: number
  price:number
}

export const cartState = atom({
  key: 'cart',
  // each item in list has 3 keys: id, product and quantity
  default: [] as cartItem[],
});



export const addToCart = (cart:any, item:any) => {
  const newCart = [...cart];
  const foundIndex = cart.findIndex((x:any) => x.id === item.id);

  // Increase quantity if existing
  if (foundIndex >= 0) {
    newCart[foundIndex] = {
      ...cart[foundIndex],
      quantity: cart[foundIndex].quantity + 1,
    };
    return newCart;
  }

  // Add new item
  newCart.push({
    id: item.id,
    item: item,
    price: item.prices[0].unit_amount ,
    quantity: 1,
  });
  return newCart;
};

export const DecreaseQuantity= (cart: any, item:any)=>{
  const newCart = [...cart];
  const foundIndex = cart.findIndex((x:any) => x.id === item.id);

  
  
  if (item.quantity > 1) {
    newCart[foundIndex] = {
      ...cart[foundIndex],
      quantity: cart[foundIndex].quantity - 1,
    };
    return newCart;
  }
  return cart
  
}

export const cartTotal = selector({
  key: 'cartTotal',
  get: ({ get }) => {
    const cart = get(cartState);

    return cart.reduce((total, item) => {
      return total + (item.price * item.quantity);
    }, 0);
  }
});