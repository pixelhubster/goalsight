require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version:  "0.8.24",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1,
      }
  },
  },
  networks: {
    sepolia: {
      url: "https://rpc.sepolia.org",
      accounts: ["YourPrivateKey"],
    }
  }

};
