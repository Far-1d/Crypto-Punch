import ClientSideAnalytic from "./ClientSideAnalytic";
import { Metadata } from "next"


export const metadata: Metadata = {
    title: "Analytics | Crypto Punch",
    description: "Analyze of Market and Events",
}

export default function AnalyticPage() {
  return (
    <main className="flex min-h-screen flex-col items-center overflow-hidden justify-start pb-2 pt-20 px-2 bg-[#ededed] dark:bg-black">
      <ClientSideAnalytic/>
    </main>
  );
}
