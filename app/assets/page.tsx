import { Metadata } from "next"
import ClientSideAsset from "./ClientSideAsset";


export const metadata: Metadata = {
    title: "Assets | Crypto Punch",
    description: "All CryptoCurrency AssetS in one Table.",
}

export default function AssetsPage() {

    return (
        <main className="flex min-h-screen flex-col items-center overflow-hidden justify-start pb-2 pt-20 px-2 bg-[#ededed] dark:bg-black">
            <ClientSideAsset/>
        </main>
  );
}