import React from "react";

type formatPriceProps = {
  value: number;
  locale?: string;
  currency?: string;
};

const FormatPrice = ({
  value,
  locale = "en-GB",
  currency = "EUR",
}: formatPriceProps) => {
  const formatter = new Intl.NumberFormat(locale, {
    currency,
    style: "currency",
    maximumFractionDigits: 2,
  });
  return formatter.format(value / 100);
};
export default FormatPrice;
