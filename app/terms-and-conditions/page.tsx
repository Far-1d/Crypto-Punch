import ClientSideTerms from "./ClientSideTerms";
import { Metadata } from "next"


export const metadata: Metadata = {
    title: "Terms and Conditions | Crypto Punch",
    description: "Terms and Conditions",
}

export default function TermsConditions() {
  return (
    <main className="flex min-h-screen flex-col items-center overflow-hidden justify-start pb-2 pt-20 px-2 bg-[#ededed] dark:bg-black">
      <ClientSideTerms/>
    </main>
  );
}
