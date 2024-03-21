const { ethers } = require("hardhat");
const BEP20ABI = require("../abis/BEP20ABI.json");

// addresses
const usdtAddress = "0x55d398326f99059fF775485246999027B3197955";
const userAddress = "0x499A652DC94704C9356A55f7bdfC011739D648e1";

// run command
// npx hardhat run scripts/call.js --network mainnet

const checkBalance = async () => {
  try {
    const contract = await ethers.getContractAt(BEP20ABI, usdtAddress);
    return await contract?.functions?.balanceOf(userAddress);
  } catch (e) {
    console.log("CALL ERROR", e);
  }
};

checkBalance().then(res => {
  console.log(res?.toString() / 1e18)
})
