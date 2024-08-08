import ClientSideAbout from "./ClientSideAbout";
import { Metadata } from "next"


export const metadata: Metadata = {
    title: "About us | Crypto Punch",
    description: "An introduction about Crypto Punch.",
}

export default function AboutUs() {
  
  return (
    <main className="flex min-h-screen flex-col items-center overflow-hidden justify-start pt-20 pb-2 px-2 bg-[#ededed] dark:bg-black">
      <ClientSideAbout/>
    </main>
  );
}
