
import { useState, useEffect } from "react";
import Image from "next/image";
import { DataTable } from "@/components/chart/data-table";
import { columns } from "@/components/chart/columns";
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Assets | Crypto Punch",
    description: "All CryptoCurrency AssetS in one Table.",
}

export default function AssetsPage() {
    // const [coins, setCoins] = useState({});
    // const [loading, setLoading] = useState(true);
    // const[error, setError] = useState(null);

    // useEffect(() => {
    //     const fetchCoins = async () => {
    //         try {
    //             const response = await fetch('http://localhost:8000/coins');
    //             if (!response.ok) {
    //                 throw new Error('Network Error');
    //             }

    //             const data = await response.json();
    //             setCoins(data);
    //         }
    //         catch (err:any) {
    //             setError(err.message);
    //         }
    //         finally {
    //             setLoading(false);
    //         }
    //     };
    //     fetchCoins();
    // }, [])
    
    // if (loading) return <div>loading ...</div>;
    // if (error) return <div>Error: {error}</div>
    const coins = [
        {
            "id": "1",
            "name": "bitcoin (BTC)",
            "price": "62000",
            "dailyChange": "0.28",
            "icon": ""
        },
        {
            "id": "2",
            "name": "etherium (ETH)",
            "price": "3600",
            "dailyChange": "1.8",
            "icon": ""
        },
        {
            "id": "3",
            "name": "tether (USDT)",
            "price": "1.0000017",
            "dailyChange": "-0.0001",
            "icon": ""
        },

    ]
    return (
        <main className="flex min-h-screen flex-col items-center overflow-hidden justify-start pb-2 pt-20 px-2 bg-[#ededed] dark:bg-black">
            <div className="md:hidden">
                <Image
                src="/examples/tasks-light.png"
                width={1280}
                height={998}
                alt="Playground"
                className="block dark:hidden"
                />
                <Image
                src="/examples/tasks-dark.png"
                width={1280}
                height={998}
                alt="Playground"
                className="hidden dark:block"
                />
            </div>
            <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
                <div className="flex items-center justify-between space-y-2">
                    <div>
                        <h2 className="text-2xl font-bold tracking-tight">Price of Crypto assets</h2>
                        <p className="text-muted-foreground">
                        over 1400 coins and token from over 13 blockchains
                        </p>
                    </div>
                </div>
                <DataTable data={coins} columns={columns} />
            </div>
            
        </main>
  );
}