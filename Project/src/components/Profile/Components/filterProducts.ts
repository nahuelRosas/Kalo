import { SetStateAction, useState } from "react";
import useProductsData from "../../../hooks/useProductsData";
import FormatPrice from "../../Products/Price/formatPrice";

const Filter = () => {
  const { productsAll } = useProductsData();
  const [searchTerm, setSearchTerm] = useState("");
  const [contextSearch, setContextSearch] = useState("all");
  const handleChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setSearchTerm(event.target.value);
  };
  const results = !searchTerm
    ? productsAll
    : productsAll.filter((product) => {
        const _filter = searchTerm
          ?.toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "");
        if (contextSearch === "all") {
          return (
            product?.name
              ?.toLowerCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
              .includes(_filter) ||
            FormatPrice({
              value: product?.price,
              locale: "en-GB",
              currency: "EUR",
            })
              .toLowerCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
              .includes(_filter) ||
            product?.id
              .toLowerCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
              .includes(_filter) ||
            product?.stock
              ?.toString()
              .toLowerCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
              .includes(_filter) ||
            product?.createdAt
              ?.toDate()
              .toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })
              .toLowerCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
              .includes(_filter)
          );
        } else if (contextSearch === "name") {
          return product?.name
            ?.toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .includes(_filter);
        } else if (contextSearch === "price") {
          return FormatPrice({
            value: product?.price,
            locale: "en-GB",
            currency: "EUR",
          })
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .includes(_filter);
        } else if (contextSearch === "id") {
          return product?.id
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .includes(_filter);
        } else if (contextSearch === "stock") {
          return product?.stock
            ?.toString()
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .includes(_filter);
        } else if (contextSearch === "date") {
          return product?.createdAt
            ?.toDate()
            .toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .includes(_filter);
        }
      });

  return {
    results,
    handleChange,
    searchTerm,
    setContextSearch,
  };
};

export default Filter;
