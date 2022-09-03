export class Web3 implements CryptoCurrencyModule {
  async getTransaction(hash: string): Promise<Transaction> {
    return null as unknown as Transaction;
  }

  async getBlockByNumber(n: number): Promise<Block> {
    return null as unknown as Block;
  }
  async getBlockNumber(n: number, timestamp: string): Promise<string> {
    return n.toString();
  }
}

export class Ethers implements CryptoCurrencyModule {
  async getTransaction(hash: string): Promise<Transaction> {
    return null as unknown as Transaction;
  }

  async getAccount(address: Address): Promise<Account> {
    return null as unknown as Account;
  }
}
