import ClientSidePrivacy from "./ClientSidePrivacy";
import { Metadata } from "next"


export const metadata: Metadata = {
    title: "Privacy Policy | Crypto Punch",
    description: "Privacy policy at Crypto Punch",
}

export default function PrivacyPolicy() {
  return (
    <main className="flex min-h-screen flex-col items-center overflow-hidden justify-start pb-2 pt-20 px-2 bg-[#ededed] dark:bg-black">
      <ClientSidePrivacy/>
    </main>
  );
}
