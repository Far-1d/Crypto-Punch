import ClientSideSingle from "./ClientSideSingleNews";
import { Metadata } from "next"


export const metadata: Metadata = {
    title: "News | Crypto Punch",
    description: "News and Events of Crypto market",
}

export default function SingleNewsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center overflow-hidden justify-start pb-2 pt-20 px-2 bg-[#ededed] dark:bg-black">
      <ClientSideSingle/>
    </main>
  );
}
