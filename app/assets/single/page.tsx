import { fetch_single } from "@/data/coins";
import ClientSideSingleAsset from "./ClientSideSingleAsset";
import type { Metadata, ResolvingMetadata } from 'next'

type Props = {
    searchParams: { [id: string]: string | string[] | undefined }
  }
   
  export async function generateMetadata(
    { searchParams }: Props,
    parent: ResolvingMetadata
  ): Promise<Metadata> {
    // read route params
    const id = searchParams.id
   
    // fetch data
    const product = await fetch_single({id})
   
    return {
      title: `${product.name} | Crypto Punch`,
      description: 'xxxx' 
    }
  }

export default function AssetsSinglePage() {
    return (
        <main className="flex min-h-screen flex-col items-center overflow-hidden justify-start pb-2 pt-20 px-2 bg-[#ededed] dark:bg-black">
            <ClientSideSingleAsset/>
        </main>
  );
}