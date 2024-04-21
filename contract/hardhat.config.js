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
      accounts: ["a858bc79c6b44a96aedef16ad654733d0b463326cc8784decbc74d379cc0ce29"],
    }
  }

};
