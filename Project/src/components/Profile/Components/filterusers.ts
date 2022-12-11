import { SetStateAction, useState } from "react";
import useUserData from "../../../hooks/useUserData";

const Filter = () => {
  const { usersData, getUsersData } = useUserData();
  

  const [searchTerm, setSearchTerm] = useState("");
  const [contextSearch, setContextSearch] = useState("all");
  const handleChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setSearchTerm(event.target.value);
  };

  const results = !searchTerm
    ? usersData || []
    : usersData.filter((user) => {
        const _filter = searchTerm
          ?.toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "");
        if (contextSearch === "all") {
          user?.name
            ?.toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .includes(_filter) ||
            user?.email
              ?.toLowerCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
              .includes(_filter) ||
            // user?.id?.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(_filter) ||
            user?.createdAt
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
        } else if (contextSearch === "name") {
          user?.name
            ?.toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .includes(_filter);
        } else if (contextSearch === "email") {
          user?.email
            ?.toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .includes(_filter);
        } else if (contextSearch === "createdAt") {
          user?.createdAt
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
