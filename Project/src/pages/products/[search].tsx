import React from "react";
import Index from "../../components/pagination";
import { useRouter } from "next/router";

const Pagination: React.FC = () => {
  const router = useRouter();
  const { search } = router.query;
  return <Index type={search as string} />;
};

export default Pagination;
