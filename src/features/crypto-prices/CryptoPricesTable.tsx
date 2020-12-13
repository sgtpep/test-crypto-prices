import React, { FC, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import Table, { TableBody, TableHead } from "components/Table";
import {
  addCryptos,
  removeCrypto,
  selectAddedCryptos,
} from "./cryptoPricesSlice";
import { addedCryptosInitialLength, addedCryptosMinLength } from "./consts";
import { selectCryptos } from "features/cryptos/cryptosSlice";

const fadeInAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const AnimatedTableBody = styled(TableBody)`
  > * {
    animation: ${fadeInAnimation} 0.3s;
  }
`;

const CryptoPrices: FC = ({ children }) => {
  const dispatch = useDispatch();

  const { data } = useSelector(selectCryptos);
  const addedCryptos = useSelector(selectAddedCryptos);

  useEffect(() => {
    if (data && !addedCryptos.length) {
      dispatch(addCryptos(data.slice(0, addedCryptosInitialLength)));
    }
  }, [addedCryptos, data, dispatch]);

  return (
    <Table>
      <TableHead>
        {children && (
          <tr>
            <td colSpan={4}>{children}</td>
          </tr>
        )}
        <tr>
          <th className="is-right">CMC Rank</th>
          <th>Symbol</th>
          <th className="is-right">Price, USD</th>
          <th />
        </tr>
      </TableHead>
      <AnimatedTableBody>
        {addedCryptos.map(({ cmcRank, priceUSD, symbol }) => (
          <tr key={symbol}>
            <td className="is-right">{cmcRank.toLocaleString()}</td>
            <td>{symbol}</td>
            <td className="is-right">
              {priceUSD.toLocaleString(undefined, {
                currency: "USD",
                style: "currency",
              })}
            </td>
            <td>
              <button
                disabled={addedCryptos.length <= addedCryptosMinLength}
                onClick={() => dispatch(removeCrypto(symbol))}
              >
                Remove
              </button>
            </td>
          </tr>
        ))}
      </AnimatedTableBody>
    </Table>
  );
};

export default CryptoPrices;
