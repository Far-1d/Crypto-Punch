import React from 'react'
import { DataTable } from "@/components/chart/data-table";

import BlurIn from '@/components/magic/blurIn';

const ClientSideAsset = () => {
  return (
    <div className="w-full">
          <BlurIn
          word="Asset"
          className="text-4xl mb-6 font-bold text-black dark:text-white"
          />
        <DataTable />
    </div>
  )
}

export default ClientSideAsset