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
    data: Pick<Crypto, "id" | "name" | "rank" | "symbol">[];
  }
  return fetchAction<CoinMarketCapMapResponse, State["data"]>(
    "https://www.stackadapt.com/coinmarketcap/map?" +
      new URLSearchParams({ sort: "cmc_rank" }),
    {
      dispatch,
      getData: ({ data }) =>
        data
          .map(({ id, name, rank, symbol }) => ({
            id,
            name,
            priceUSD: 0,
            rank,
            symbol,
          }))
          .sort(({ symbol: a }, { symbol: b }) => a.localeCompare(b))
          .sort(({ rank: a }, { rank: b }) => a - b),
      setFetchData: setCryptos,
    }
  );
};

export const selectCryptos = ({ cryptos }: RootState) => cryptos;

export default cryptosSlice;
