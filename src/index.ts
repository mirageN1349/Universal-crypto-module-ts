import { Ethers, Web3 } from './lib/crypto';

// Класс для получения типизированных методов из различных крипто-библиотек
class CryptoModule {
  static getMethod<T extends keyof U, U>(crypto: U, methodName: T): U[T] {
    return crypto[methodName];
  }
}

const getBlockByNumberWeb3 = CryptoModule.getMethod(new Web3(), 'getBlockByNumber');
const getAccountEthers = CryptoModule.getMethod(new Ethers(), 'getAccount');
