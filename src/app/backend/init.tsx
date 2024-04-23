// "use client"
// import React from 'react'
// import Web3 from 'web3';
// import abi from "../../app/backend/abi.json"
// import dao from "../../app/backend/dao.json"
// const web3 = new Web3("https://rpc.sepolia.org");
// // "0xb5507D64Aab0777Ad025915E7671362f299bc8d6";
// const address = "0xddAf1138278408E86a43f59dc76959E5653E4841";
// const contract = new web3.eth.Contract(abi.abi, address)

// let walletContract: any = null;
// let daoWalletContract: any = null;
// let daoContract: any = null;

// // const daoAddress = "0x5896A931de976815774230fd6B0eCc547f7Cd794"
// const daoAddress = "0x68BA7B1a908eDf9A317283CBe25F570A403696C0"
// daoContract = new web3.eth.Contract(dao.abi, daoAddress)
// if (typeof window !== undefined) {
//     if (window.ethereum) {
//         const walletWeb3 = new Web3(window.ethereum)
//         walletContract = new walletWeb3.eth.Contract(abi.abi, address);
//         daoWalletContract = new walletWeb3.eth.Contract(dao.abi, daoAddress);
//         // window.ethereum.enable().then(() => {
//         // }).catch((error) => {
//         //     console.log("Failed to connect to users wallet", error);
//         // })
//     } else {
//         console.log("MetaMask or compatible web3 provider not installed")
//     }
// }

// export { contract, walletContract, web3, daoContract, daoWalletContract }




import Web3 from 'web3';
import abi from "../../app/backend/abi.json"
import dao from "../../app/backend/dao.json"

let web3: any = null;
let contract: any = null;
let walletContract: any = null;
let daoContract: any = null;
let daoWalletContract: any = null;

web3 = new Web3("https://rpc.sepolia.org");
const address = "0xddAf1138278408E86a43f59dc76959E5653E4841";
contract = new web3.eth.Contract(abi.abi, address);

// const daoAddress = "0x5896A931de976815774230fd6B0eCc547f7Cd794"
const daoAddress = "0x68BA7B1a908eDf9A317283CBe25F570A403696C0";
daoContract = new web3.eth.Contract(dao.abi, daoAddress);


const initializeWeb3 = () => {
    if (window.ethereum) {
        const walletWeb3 = new Web3(window.ethereum);
        walletContract = new walletWeb3.eth.Contract(abi.abi, address);
        daoWalletContract = new walletWeb3.eth.Contract(dao.abi, daoAddress);
        // window.ethereum.enable().then(() => {
        // }).catch((error) => {
        //     console.log("Failed to connect to user's wallet", error);
        // })
    } else {
        console.log("MetaMask or compatible web3 provider not installed");
    }
};

if (typeof window !== 'undefined') {
    initializeWeb3();
}

export { contract, walletContract, web3, daoContract, daoWalletContract };