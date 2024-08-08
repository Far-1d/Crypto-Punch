import ClientSideRefund from "./ClientSideRefund";
import { Metadata } from "next"


export const metadata: Metadata = {
    title: "Refund Policy | Crypto Punch",
    description: "User refund policy",
}

export default function RefundPolicy() {
  return (
    <main className="flex min-h-screen flex-col items-center overflow-hidden justify-start pb-2 pt-20 px-2 bg-[#ededed] dark:bg-black">
      <ClientSideRefund/>
    </main>
  );
}
