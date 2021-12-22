require("@nomiclabs/hardhat-waffle");
require("dotenv")

const privateKey= process.env.fun

module.exports = {
  networks:{
    hardhat:{
      chainId:1337
    },
    mumbai:{
      url:"https://rpc-mumbai.maticvigil.com/v1/5dc3bde6baa9b7e36dda54434e8e63e0e8abbebf",
      accounts:[privateKey]
    },
    mainnet:{
      url:"https://rpc-mainnet.maticvigil.com/v1/5dc3bde6baa9b7e36dda54434e8e63e0e8abbebf",
      accounts:[privateKey]
    }
  },
  solidity: "0.8.4",
};
