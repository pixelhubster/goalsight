"use client"
import Web3 from 'web3';
import abi from "./abi.json"
const web3 = new Web3("https://rpc.sepolia.org");
const address = "0xb5507D64Aab0777Ad025915E7671362f299bc8d6";
const contract = new web3.eth.Contract(abi.abi, address)
let walletContract = null;
if (window.ethereum) {
    const walletWeb3 = new Web3(window.ethereum)
    walletContract = new walletWeb3.eth.Contract(abi.abi, address);
    // window.ethereum.enable().then(() => {
    // }).catch((error) => {
    //     console.log("Failed to connect to users wallet", error);
    // })
} else {
    console.log("MetaMask or compatible web3 provider not installed")
}
export { contract, walletContract, web3 }