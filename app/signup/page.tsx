import ClientSideSignup from "./ClientSideSignup";
import { Metadata } from "next"


export const metadata: Metadata = {
    title: "Signup | Crypto Punch",
    description: "sign up to crypto punch",
}

export default function Signup() {
  return (
    <main className="flex min-h-screen flex-col items-center overflow-hidden py-16 justify-start bg-black">
      <ClientSideSignup/>
    </main>
  );
}
