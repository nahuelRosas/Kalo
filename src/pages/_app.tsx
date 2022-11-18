import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/Layout/Layout";
import type { AppProps } from "next/app";
import { theme } from "../chakra/theme";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </RecoilRoot>
  );
}
