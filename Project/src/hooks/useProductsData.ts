import { useToast } from "@chakra-ui/react";
import { DocumentData } from "@firebase/firestore-types";
import { collection, getDocs, Timestamp } from "firebase/firestore";
import { useRecoilState } from "recoil";
import { ProductsAtom } from "../atoms/productsAtom";
import { firestore } from "../firebase/clientApp";
const useProductsData = () => {
  const [ProductsState, setProducts] = useRecoilState(ProductsAtom);

  const toast = useToast();

  const getProducts = async () => {
    if (ProductsState.isLoadead) return;
    try {
      await getDocs(collection(firestore, "ArrayProducts")).then(
        async (querySnapshot) => {
          if (querySnapshot.docs.length === 0)
            throw new Error("ERROR 500: No found products in Firestore");
          const ArrayProducts = querySnapshot.docs[0].data();
          const ArrayProductsProducts = ArrayProducts.products;
          const ArrayProductsProductsActive = ArrayProductsProducts.filter(
            (product: DocumentData) => product.active
          );
          setProducts({
            products: ArrayProductsProducts,
            productsActive: ArrayProductsProductsActive,
            isLoadead: true,
            orderBy: "a-z",
            filterBy: [],
          });
        }
      );
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };
  const productsActive = ProductsState.productsActive;
  const productsAll = ProductsState.products;
  const findProduct = (id: string) => {
    const product = ProductsState.products.find((product) => product.id === id);
    return product;
  };

  const filterProducts = () => {
    const filter = ProductsState.filterBy;
    if (filter.length === 0) return productsActive;
    const filtered = productsActive.filter((product) => {
      let flag = false;
      filter.forEach((filter) => {
        if (
          product.genres.value
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "") ===
          filter
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
        ) {
          flag = true;
        }
      });
      return flag;
    });
    return filtered;
  };

  const orderProducts = (productsList: DocumentData[]) => {
    const order = ProductsState.orderBy;
    const products = new Array(...productsList);
    const orderProducts = products.sort((a: DocumentData, b: DocumentData) => {
      const dateA = new Timestamp(
        a.createdAt.seconds,
        a.createdAt.nanoseconds
      ).toDate();
      const dateB = new Timestamp(
        b.createdAt.seconds,
        b.createdAt.nanoseconds
      ).toDate();
      if (order === "a-z") {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      }
      if (order === "z-a") {
        if (a.name > b.name) return -1;
        if (a.name < b.name) return 1;
        return 0;
      }
      if (order === "price-desc") {
        if (a.price < b.price) return -1;
        if (a.price > b.price) return 1;
        return 0;
      }
      if (order === "price-asc") {
        if (a.price > b.price) return -1;
        if (a.price < b.price) return 1;
        return 0;
      }
      if (order === "date-desc") {
        if (dateA < dateB) return -1;
        if (dateA > dateB) return 1;
        return 0;
      }
      if (order === "date-asc") {
        if (dateA > dateB) return -1;
        if (dateA < dateB) return 1;
        return 0;
      }
      if (order === "discount-desc") {
        if (a.discount < b.discount) return -1;
        if (a.discount > b.discount) return 1;
        return 0;
      }
      if (order === "random") {
        return Math.random() - 0.5;
      }
      return 0;
    });
    return orderProducts;
  };

  const MappingProducts = () => {
    const _filterProducts = filterProducts();
    const _orderProducts = orderProducts(_filterProducts);
    return _orderProducts;
  };

  const setOrderBy = (order: string | undefined) => {
    if (!order) order = "a-z";

    setProducts({
      ...ProductsState,
      orderBy: order,
    });
  };

  const setFilterBy = (filter: string) => {
    const filterLowerCase = filter?.toLowerCase();
    if (filter === "all") {
      setProducts({
        ...ProductsState,
        filterBy: [],
      });
      return;
    }
    const Index = ProductsState.filterBy.indexOf(filterLowerCase);
    if (Index !== -1) {
      setProducts({
        ...ProductsState,
        filterBy: [
          ...ProductsState.filterBy.slice(0, Index),
          ...ProductsState.filterBy.slice(Index + 1),
        ],
      });
      return;
    }
    setProducts({
      ...ProductsState,
      filterBy: [...ProductsState.filterBy, filterLowerCase],
    });
  };

  const currentFilter = (filter: string) => {
    const filterLowerCase = filter?.toLowerCase();
    if (ProductsState.filterBy.length === 0 && filter === "all") return true;
    const Index = ProductsState.filterBy.indexOf(filterLowerCase);
    if (Index !== -1) return true;
    return false;
  };

  const Reload = () => {
    setProducts({
      ...ProductsState,
      isLoadead: false,
    });
    getProducts();
  };

  return {
    getProducts,
    productsActive,
    productsAll,
    findProduct,
    MappingProducts,
    setOrderBy,
    setFilterBy,
    currentFilter,
    Reload,
  };
};
export default useProductsData;
