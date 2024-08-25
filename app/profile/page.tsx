
import { Suspense } from "react";
import ClientSideProfile from "./ClientSideProfile";
import { Metadata } from "next"


export const metadata: Metadata = {
    description: "User Profile",
}

export default function ProfilePage() {
  
  return (
    <>
      <main className="flex min-h-screen flex-col items-center overflow-hidden justify-start pb-2 pt-20 px-2 bg-[#ededed] dark:bg-black">
          <Suspense>
            <ClientSideProfile/>
          </Suspense>
      </main>
    </>
  );
}
