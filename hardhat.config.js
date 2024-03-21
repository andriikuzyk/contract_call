require("@nomiclabs/hardhat-ethers");
require("@nomicfoundation/hardhat-network-helpers");

module.exports = {
  solidity: "0.8.19",
  networks: {
    mainnet: {
      url: "https://bsc-dataseed.binance.org/",
      chainId: 56,
      gasPrice: 20000000000,
    },
    hardhat: {
    }
  }
};
