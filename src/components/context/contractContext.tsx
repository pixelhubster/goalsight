// "use client"
// import React, { useEffect } from 'react'
// import Web3 from 'web3';
// import abi from "../../app/backend/abi.json"
// import dao from "../../app/backend/dao.json"
// const web3 = new Web3("https://rpc.sepolia.org");
// const address = "0xb5507D64Aab0777Ad025915E7671362f299bc8d6";
// const contract = new web3.eth.Contract(abi.abi, address)

// let walletContract: any | null = null;
// let daoWalletContract: any | null = null;
// let daoContract: any | null = null;

// const daoAddress = "0x5896A931de976815774230fd6B0eCc547f7Cd794"

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