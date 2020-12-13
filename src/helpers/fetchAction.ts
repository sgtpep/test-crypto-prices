import { Dispatch } from "redux";
import { PayloadAction, PayloadActionCreator } from "@reduxjs/toolkit";

export interface FetchData<T> {
  data?: T;
  error?: string;
  isLoading?: boolean;
}

const fetchAction = async <Response, T>(
  url: Parameters<typeof fetch>[0],
  {
    dispatch,
    getData,
    setFetchData,
    ...options
  }: Parameters<typeof fetch>[1] & {
    dispatch: Dispatch<PayloadAction<FetchData<T>>>;
    getData: (json: Response) => T;
    setFetchData: PayloadActionCreator<FetchData<T>>;
  }
) => {
  dispatch(
    setFetchData({
      data: undefined,
      error: undefined,
      isLoading: true,
    })
  );
  let data;
  try {
    const response = await fetch(url, options);
    const json: Response = await response.json();
    data = (getData ?? ((json: Response) => json))(json);
  } catch (error) {
    dispatch(
      setFetchData({
        error: error.message,
        isLoading: false,
      })
    );
    return;
  }
  dispatch(
    setFetchData({
      data,
      isLoading: false,
    })
  );
};

export default fetchAction;
