import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";

import { cryptoPricesReducer } from "features/crypto-prices/cryptoPricesSlice";
import { cryptosReducer } from "features/cryptos/cryptosSlice";

export const store = configureStore({
  reducer: {
    cryptoPrices: cryptoPricesReducer,
    cryptos: cryptosReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
