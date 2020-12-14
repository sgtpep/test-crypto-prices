import Nominal from "types/Nominal";

interface Crypto {
  id: Nominal<number, "Crypto">;
  name: string;
  priceUSD: number;
  rank: number;
  symbol: string;
}

export default Crypto;
