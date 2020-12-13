import React from "react";
import { createGlobalStyle } from "styled-components";

import CryptoPrices from "features/crypto-prices/CryptoPrices";

const Style = createGlobalStyle`
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  margin: 1.5em;
}
`;

const App = () => (
  <>
    <Style />
    <h1>Crypto Prices</h1>
    <CryptoPrices />
  </>
);

export default App;
