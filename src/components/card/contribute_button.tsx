// "use client"
// import { walletContract } from '@/app/backend/init'
// import React, { useEffect, useState } from 'react'

// async function contribute(wallet: any, id: number, acc: Array<any>, amount: number) {
//     await wallet.methods.contribute(id).send({ from: acc[0], value: 20000 })
//         .then((res: Response) => {
//             console.log(res)
//         }).catch((err: Error) => {
//             console.log(err)
//         })
// }

// const ContributeButton = (props: {id: number}) => {
//     const [accounts, setAccounts] = useState<Array<string>>([]);
//     useEffect(() => {
//         async function getAccount() {
//             const accounts = await window.ethereum.request({ method: 'eth_accounts' })
//             setAccounts(accounts)
//         }
//         getAccount()
//     },[])
//   return (
//     <button className='w-full bg-blue-400 p-2 rounded-md font-medium mb-1'
//     onClick={() => contribute(walletContract, props.id, accounts)}
//     // onClick={() => router.push(`/contribute?id=${props.id}`)}
//     >Contribute</button>
//   )
// }

// export default ContributeButton