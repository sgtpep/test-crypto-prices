import React, { Suspense, lazy } from "react";
import { createGlobalStyle } from "styled-components";

import Loading from "components/Loading";

const Style = createGlobalStyle`
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  margin: 1.5em;
}
`;

const CryptoPrices = lazy(() => import("features/crypto-prices/CryptoPrices"));

const App = () => (
  <>
    <Style />
    <h1>Crypto Prices</h1>
    <Suspense fallback={<Loading />}>
      <CryptoPrices />
    </Suspense>
  </>
);

export default App;
