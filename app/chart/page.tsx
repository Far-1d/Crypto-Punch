import Image from "next/image";
import { Metadata } from "next"
import ClientSideChart from "./ClientSideChart";

export const metadata: Metadata = {
    title: "Charts | Crypto Punch",
    description: "Handy Chart integrated from tradingview",
}

export default function ChartPage() {

    return (
        <main className="flex min-h-screen flex-col items-center overflow-hidden justify-start pb-2 pt-20 px-2 bg-[#ededed] dark:bg-black">
            <ClientSideChart/>
        </main>
  );
}