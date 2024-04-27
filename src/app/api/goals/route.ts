import { NextResponse } from "next/server";
import { contract, web3 } from "@/app/backend/ssr";

export async function GET(req: Request) {
    const data = await contract.methods.getGoals().call();
    // @ts-ignore
    BigInt.prototype["toJSON"] = function () {
        return web3.utils.toNumber(this)
    }
    return NextResponse.json({ data })
}