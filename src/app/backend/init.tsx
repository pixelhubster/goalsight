import Web3 from 'web3';
import abi from "../../app/backend/abi.json"
import dao from "../../app/backend/dao.json"

let web3: any = null;
let contract: any = null;
let walletContract: any = null;
let daoContract: any = null;
let daoWalletContract: any = null;

web3 = new Web3("https://rpc.sepolia.org");
// const address = "0xddAf1138278408E86a43f59dc76959E5653E4841";
const address = "0x54C37b735D901370d33ceaBa773789D5373a9369";
contract = new web3.eth.Contract(abi.abi, address);

// const daoAddress = "0x5896A931de976815774230fd6B0eCc547f7Cd794"
// const daoAddress = "0x68BA7B1a908eDf9A317283CBe25F570A403696C0";
const daoAddress = "0x759D984193A6b04359A33E9A83195edDF6088148";
daoContract = new web3.eth.Contract(dao.abi, daoAddress);


const initializeWeb3 = () => {
    if (window.ethereum) {
        const walletWeb3 = new Web3(window.ethereum);
        walletContract = new walletWeb3.eth.Contract(abi.abi, address);
        daoWalletContract = new walletWeb3.eth.Contract(dao.abi, daoAddress);
    } else {
        console.log("MetaMask or compatible web3 provider not installed");
    }
};

if (typeof window !== 'undefined') {
    initializeWeb3();
}

async function getPrice() {
    const data = await fetch("https://data.chain.link/api/query?query=FEED_DATA_QUERY&variables=%7B%22schemaName%22%3A%22ethereum-mainnet%22%2C%22contractAddress%22%3A%220xe62b71cf983019bff55bc83b48601ce8419650cc%22%7D").then((res: Response) => {
        return res.json().then((data: any) => {
            const answer = data.data.chainData.nodes[0].inputs.answer
            return answer
        })
    })
    return data
}
// if (typeof window === 'undefined') {
//     rate = await getPrice()
// }

function ethToUSD(rate: number, value: number) {
    // const priceFeed = 314659649694 * 10 ** 10
    const priceFeed = rate * 10 ** 10
    const ethToUsd = BigInt(value) * BigInt(priceFeed) / BigInt(10 ** 18)
    const usdValue = parseFloat(ethToUsd.toString()) / Math.pow(10, 18)
    return usdValue.toFixed(2)
}
function usdToETH(rate: number, value: number) {
    // const priceFeed = BigInt(314659649694) / BigInt(10 ** 8)
    const priceFeed = BigInt(rate) / BigInt(10 ** 8)
    const usdToEth = BigInt(value) * BigInt(10 ** 18) / BigInt(priceFeed)
    const ethValue = parseFloat(usdToEth.toString()) / Math.pow(10, 18);
    return [usdToEth, ethValue.toFixed(4)]
}
export { contract, walletContract, web3, daoContract, daoWalletContract, getPrice, usdToETH, ethToUSD};