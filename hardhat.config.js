require("@nomicfoundation/hardhat-toolbox");

// Go to https://www.alchemyapi.io, sign up, create
// a new App in its dashboard, and replace "KEY" with its key
const ALCHEMY_API_KEY = "b0XD7VFC3ZMtg2CwRKjqIhCk1OWZR_Yk";

// Replace this private key with your Goerli account private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Beware: NEVER put real Ether into testing accounts
const GOERLI_PRIVATE_KEY = "84df74d70ce37d733f39d70895e92bc4e0d467c2201f77547fae7f2c1f95dd49";

module.exports = {
  solidity: "0.8.17",
  etherscan: {
    apiKey: "UK1AZDMMKJXNHXTB53KHJUQB71E4BTIRV8",
  },
  networks: {
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [GOERLI_PRIVATE_KEY]
    }
  }
};