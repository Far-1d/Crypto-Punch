"use client"

import { useEffect, useState } from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/shadcn/table"
import {columns} from '@/data/table';
import { useSearchParams } from "next/navigation";
import { fetch_pages, fetch_coin, add_to_favorite } from "@/data/coins";
import Image from "next/image";
import { FaArrowTrendUp, FaArrowTrendDown, FaRegStar, FaStar } from "react-icons/fa6";
import Link from "next/link";
import StarButton from "../sub/starButton";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/shadcn/pagination"
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue, 
} from "@/components/shadcn/select";
import { useAppContext } from "@/context";

export function DataTable() {
  const { user, setUser } = useAppContext();
  const [assetArray, setAssetArray] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const [pageSize, setPageSize] = useState("100");
  const [totalPages, setTotalPages] = useState(1);

  const searchParams = useSearchParams();
  const page = searchParams.get("page") ? searchParams.get("page"): "1";

  const handleValueChange = (value:string) => {
    setPageSize(value);
  };

  useEffect(() => {
    setLoading(true);

    const getPages = async () => {
      const data = await fetch_pages({pageSize});
      setTotalPages(data.size);
    }

    const loadAsset = async () => {//@ts-ignore
        const data = await fetch_coin({page, pageSize}); // Fetch Asset data
        if ('results' in data){
          setAssetArray(data.results); // Set the fetched data to state
        } else {
          setAssetArray(null);
        }
        setLoading(false); // Set loading to false once data is fetched
    };

    getPages();
    loadAsset(); // Call the function to load Asset
}, [pageSize, page, user]);

  if (loading) {
      return (
        <div className="h-screen w-full flex flex-col items-center justify-start text-xl mt-32">
          <p>Loading...</p>
        </div>   
      );
  }

  return (
    <div className="my-10">
     <Table>
      <TableHeader>
        <TableRow>
          {columns.map( (column:any, idx:any) => (
              <TableHead key={idx} className={column.classname}>{column.icon}{column.name}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
          {Array.isArray(assetArray) && assetArray.map((asset:any, idx:any)=>(
            <TableRow key={idx} className="h-[60px]">
              <TableCell className="max-w-10">{asset.rank}</TableCell>
              <TableCell className="min-w-64">
                <Link href={`assets/single?id=${asset.id}`} className="flex flex-row items-center justify-start text-wrap">
                  <Image src={asset.icon} alt='' height={25} width={25} className="mx-2"/><span className="truncate">{asset.name}</span>
                </Link>
              </TableCell>
              <TableCell >{asset.symbol}</TableCell>
              <TableCell className={`${asset.daily_change>0? 'text-green-500 dark:text-green-400' : asset.daily_change<0? 'text-red-500 dark:text-red-400': ''}`}>{asset._price} $</TableCell>
              <TableCell className="flex items-center justify-start mt-1">
                <span className={`${asset.daily_change>0? 'text-green-500' : asset.daily_change<0? 'text-red-500': ''} pr-2`}>
                  {asset.daily_change>0? <FaArrowTrendUp/> : asset.daily_change<0? <FaArrowTrendDown/> :''}
                </span>
                {asset.daily_change} $
              </TableCell>
              <TableCell>{asset.market}</TableCell>
              <TableCell className="items-center justify-center">
                <StarButton count={asset.users_interested} asset_id={asset.id}/>
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
    <div className="pagination flex flex-col items-center justify-center w-full mb-10">
        <div className="flex items-center justify-end w-full px-4 sm:px-20">
          <span className="px-2">News per page</span>
          <Select onValueChange={handleValueChange} value={pageSize}>
            <SelectTrigger className="w-[80px]">
              <SelectValue placeholder="NPP" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="50">50</SelectItem>
              <SelectItem value="100">100</SelectItem>
              <SelectItem value="200">200</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex pt-8">
          <Pagination>
            <PaginationContent>

              {Number(page) != 1 && 
                <PaginationItem>
                  <PaginationPrevious href={`?page=${Number(page)-1}`}/>
                </PaginationItem>
              }
              <span className="px-10">{`${page} of ${totalPages}`}</span>
              {Number(page) !== totalPages &&
                <PaginationItem>
                  <PaginationNext href={`?page=${Number(page)+1}`}/>
                </PaginationItem>
              }

            </PaginationContent>
          </Pagination>
        </div>
      </div>
  </div>
  )
}