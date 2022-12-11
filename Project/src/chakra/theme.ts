import { extendTheme } from "@chakra-ui/react";

import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/700.css";
import "@fontsource/montserrat/variable-italic.css";

export const theme = extendTheme({
  colors: {
    primary: "#805AD5",
    BGL: "#EDF2F7",
    BDM: "#2D3748",
    white: "#FFFFFF",
    black: "#000000",
  },
  fonts: {
    body: "Montserrat, sans-serif",
  },
});
