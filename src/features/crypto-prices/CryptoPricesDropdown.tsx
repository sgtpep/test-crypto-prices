import React, { useMemo } from "react";
import Select from "react-select-virtualized";
import { useSelector, useDispatch } from "react-redux";

import Crypto from "features/cryptos/Crypto";
import { addCryptos, selectAddedCryptos } from "./cryptoPricesSlice";
import { addedCryptosMaxLength } from "./consts";
import { selectCryptos } from "features/cryptos/cryptosSlice";

interface Option {
  value: Crypto;
}

const CryptoPricesDropdown = () => {
  const dispatch = useDispatch();

  const { data } = useSelector(selectCryptos);
  const addedCryptos = useSelector(selectAddedCryptos);

  const options = useMemo(
    () =>
      (data ?? [])
        .filter((crypto) => !addedCryptos.includes(crypto))
        .map((crypto) => {
          const { symbol } = crypto;
          return {
            label: symbol,
            value: crypto,
          };
        }),
    [addedCryptos, data]
  );

  return (
    <Select
      isDisabled={addedCryptos.length === addedCryptosMaxLength}
      onChange={({ value }: Option) => dispatch(addCryptos([value]))}
      options={options}
      value={null}
    />
  );
};

export default CryptoPricesDropdown;
