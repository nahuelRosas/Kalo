export async function payCartProducts(paymentMethod: string) {
  // if (paymentMethod === "1") {
  //   const carryProductsToMap = cartItems.map((element: any) => {
  //     const newProduct = {
  //       title: element.name,
  //       unit_price: element.price,
  //       price: element.price,
  //       quantity: element.quantity,
  //       id: element.id,
  //     };
  //     return newProduct;
  //   });
  //   const response = await fetch(
  //     "https://api.mercadopago.com/checkout/preferences",
  //     {
  //       method: "POST",
  //       headers: {
  //         Authorization:
  //           "Bearer TEST-7971931143108565-120213-9543ac0f52ff97241f2833737a6a4c85-389442168", //Aca va el token individual luego del bearer: token individual
  //       },
  //       body: JSON.stringify({
  //         items: carryProductsToMap,
  //       }),
  //     }
  //   );
  //   const data = await response.json();
  //   window.open(data.init_point, "_blank");
  // }
}
