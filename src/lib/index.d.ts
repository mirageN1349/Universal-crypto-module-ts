type Address = string;

type Transaction = {
  blockNumber: string;
  value: number;
  from: Address;
  to: Address;
};

type Block = {
  blockNumber: string;
  rootHash: string;
  gasPrice: string;
};

type Account = {
  address: Address;
};

class CryptoCurrencyModule {
  getBlockNumber?(n: number, timestamp: string): Promise<string>;
  getTransaction?(hash: string): Promise<Transaction>;
  getBlockByNumber?(n: number): Promise<Block>;
  getAccount?(address: Address): Promise<Account>;
}
