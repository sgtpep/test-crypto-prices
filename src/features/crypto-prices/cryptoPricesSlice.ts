import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import Crypto from "features/cryptos/Crypto";
import { RootState } from "store";

interface State {
  addedCryptos: Crypto[];
}

const initialState: State = {
  addedCryptos: [],
};

export const cryptoPricesSlice = createSlice({
  initialState,
  name: "cryptoPrices",
  reducers: {
    addCryptos: (state, { payload }: PayloadAction<Crypto[]>) => {
      for (const crypto of payload) {
        if (
          !state.addedCryptos.some(({ symbol }) => symbol === crypto.symbol)
        ) {
          state.addedCryptos.push(crypto);
        }
      }
    },

    removeCrypto: (state, { payload }: PayloadAction<Crypto["symbol"]>) => {
      const index = state.addedCryptos.findIndex(
        ({ symbol }) => symbol === payload
      );
      if (index !== -1) {
        state.addedCryptos.splice(index, 1);
      }
    },
  },
});

export const cryptoPricesReducer = cryptoPricesSlice.reducer;

export const { addCryptos, removeCrypto } = cryptoPricesSlice.actions;

export const selectAddedCryptos = ({ cryptoPrices }: RootState) =>
  cryptoPrices.addedCryptos;

export default cryptoPricesSlice;
