import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import Crypto from "./Crypto";
import fetchAction, { FetchData } from "helpers/fetchAction";
import { AppThunk, RootState } from "store";

interface State extends FetchData<Crypto[]> {}

const initialState: State = {};

export const cryptosSlice = createSlice({
  initialState,
  name: "cryptos",
  reducers: {
    setCryptos: (state, { payload }: PayloadAction<State>) => {
      Object.assign(state, payload);
    },
  },
});

export const cryptosReducer = cryptosSlice.reducer;

export const { setCryptos } = cryptosSlice.actions;

export const fetchCryptos = (): AppThunk => (dispatch, getState) => {
  if (getState().cryptos.isLoading) {
    return;
  }
  interface CoinMarketCapMapResponse {
    data: {
      is_active: boolean;
      symbol: string;
    }[];
  }
  return fetchAction<CoinMarketCapMapResponse, State["data"]>(
    "https://www.stackadapt.com/coinmarketcap/map",
    {
      dispatch,
      getData: ({ data }) =>
        data
          .filter(({ is_active: isActive }) => isActive)
          .map(({ symbol }) => ({
            cmcRank: 0,
            priceUSD: 0,
            symbol,
          }))
          .sort(({ cmcRank: a }, { cmcRank: b }) => b - a)
          .sort(({ symbol: a }, { symbol: b }) => a.localeCompare(b)),
      setFetchData: setCryptos,
    }
  );
};

export const selectCryptos = ({ cryptos }: RootState) => cryptos;

export default cryptosSlice;
