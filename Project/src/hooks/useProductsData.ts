import { useToast } from "@chakra-ui/react";
import { DocumentData } from "@firebase/firestore-types";
import { collection, getDocs, Timestamp } from "firebase/firestore";
import { useRecoilState } from "recoil";
import { ProductCreateAtom } from "../atoms/ProductCreateAtom";
import { ProductEditAtom } from "../atoms/ProductEditAtom";
import { ProductsAtom } from "../atoms/productsAtom";
import { firestore } from "../firebase/clientApp";
const useProductsData = () => {
  const [ProductsState, setProducts] = useRecoilState(ProductsAtom);
  const [ProductEditState, setProductEdit] = useRecoilState(ProductEditAtom);
  const [ProductCreateState, setProductCreate] =
    useRecoilState(ProductCreateAtom);
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
          const ArrayProductSelected = ArrayProductsProductsActive.map(
            (product: DocumentData) => {
              return { value: product.id, label: product.name };
            }
          );
          setProducts({
            products: ArrayProductsProducts,
            productsActive: ArrayProductsProductsActive,
            productSelected: ArrayProductSelected,
            isLoadead: true,
            orderBy: "a-z",
            filterBy: [],
            orderByPrice: [0, 5000],
            search: "",
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
    const product = ProductsState.productsActive.find(
      (product) => product.id === id
    );
    return product;
  };

  const filterProducts = () => {
    const filter = ProductsState.filterBy;
    if (filter.length === 0) return productsActive;
    const filtered = productsActive.filter((product) => {
      let flag = false;
      filter.forEach((filter) => {
        if (
          product?.genres?.value
            ?.toLowerCase()
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

  const searchProducts = (productList: DocumentData[]) => {
    const search = ProductsState.search;
    if (search === "") return productList;
    const searched = productList.filter((product) => {
      const name = product.name
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
      const searchName = search
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
      return name.includes(searchName);
    });
    return searched;
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

  const orderByPrice = (productsList: DocumentData[]) => {
    const order = ProductsState.orderByPrice;
    const products = new Array(...productsList);
    const orderProducts = products.filter(
      (product) => product.price >= order[0] && product.price <= order[1]
    );
    return orderProducts;
  };

  const MappingProducts = () => {
    const _filterProducts = filterProducts();
    const _searchProducts = searchProducts(_filterProducts);
    const _orderProducts = orderProducts(_searchProducts);
    const _orderByPrice = orderByPrice(_orderProducts);
    return _orderByPrice;
  };

  const setOrderBy = (order: string | undefined) => {
    if (!order) order = "a-z";

    setProducts({
      ...ProductsState,
      orderBy: order,
    });
  };

  const setOrderByPrice = (order: number[]) => {
    if (!order) order = [0, 5000];

    setProducts({
      ...ProductsState,
      orderByPrice: order,
    });
  };

  const setSearch = (search: string) => {
    if (!search) search = "";

    setProducts({
      ...ProductsState,
      search,
    });
  };

  const setFilterBy = (filter: string, forced?: boolean) => {
    if (filter === "all") {
      setProducts({
        ...ProductsState,
        filterBy: [],
      });
      return;
    }
    if (forced) {
      setProducts({
        ...ProductsState,
        filterBy: [filter],
      });
      return;
    }

    const filterLowerCase = filter?.toLowerCase();

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

  const currentValueRange = () => {
    const value = ProductsState.orderByPrice;
    return value;
  };

  const Reload = () => {
    setProducts({
      ...ProductsState,
      isLoadead: false,
    });
    getProducts();
  };

  const selectProduct = (e: { value: string }) => {
    const product = findProduct(e.value);
    setProductEdit({
      name: product?.name,
      description: product?.description,
      brand: product?.brand,
      active: product?.active,
      images: product?.images,
      unitofmeasurement: product?.unitofmeasurement,
      color: product?.color,
      stock: product?.stock,
      discount: product?.discount,
      price: product?.price,
      style: product?.style,
      subType: product?.subType,
      recommendedsport: product?.recommendedsport,
      exteriormaterials: product?.exteriormaterials,
      solematerials: product?.solematerials,
      fittype: product?.fittype,
      genres: product?.genres,
      agegroup: product?.agegroup,
      rating: product?.rating,
      reviews: product?.reviews,
      numReviews: product?.numReviews,
      dontRepet: false,
      id: product?.id,
      size: product?.size,
    });
  };
  const DontRepet = ({
    e,
    ParentType,
  }: {
    e?: boolean;
    ParentType: string;
  }) => {
    if (ParentType === "CreateProduct") {
      if (e === undefined) {
        console.log(ProductCreateState);
        return ProductCreateState.dontRepet;
      }
      setProductCreate({
        ...ProductCreateState,
        dontRepet: e,
      });
      return ProductCreateState.dontRepet;
    } else if (ParentType === "EditProduct") {
      if (e === undefined) {
        return ProductEditState.dontRepet;
      }
      setProductEdit({
        ...ProductEditState,
        dontRepet: e,
      });
      return ProductEditState.dontRepet;
    }
  };

  return {
    currentValueRange,
    getProducts,
    productsActive,
    productsAll,
    findProduct,
    MappingProducts,
    setOrderBy,
    setFilterBy,
    setOrderByPrice,
    currentFilter,
    Reload,
    ProductSelected: ProductsState.productSelected,
    selectProduct,
    DontRepet,
    setSearch,
  };
};
export default useProductsData;
