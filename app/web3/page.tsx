import Image from "next/image";
import { Metadata } from "next"
import ClientSideWeb3 from "./ClientSideWeb3";

export const metadata: Metadata = {
    title: "Web 3 | Crypto Punch",
    description: "Transaction, Tx history, Wallet check and more",
}

export default function Web3Page() {

    return (
        <main className="flex min-h-screen flex-col items-center overflow-hidden justify-start pb-2 pt-20 px-2 bg-[#ededed] dark:bg-black">
            <ClientSideWeb3/>
        </main>
  );
}