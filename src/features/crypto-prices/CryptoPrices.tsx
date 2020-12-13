import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import CryptoPricesDropdown from "./CryptoPricesDropdown";
import CryptoPricesTable from "./CryptoPricesTable";
import indicator from "helpers/indicator";
import { fetchCryptos } from "features/cryptos/cryptosSlice";
import { selectCryptos } from "features/cryptos/cryptosSlice";

const CryptoPrices = () => {
  const dispatch = useDispatch();

  const { error, isLoading } = useSelector(selectCryptos);

  useEffect(() => {
    dispatch(fetchCryptos());
  }, [dispatch]);

  return (
    indicator(isLoading, error) ?? (
      <CryptoPricesTable>
        <CryptoPricesDropdown />
      </CryptoPricesTable>
    )
  );
};

export default CryptoPrices;
