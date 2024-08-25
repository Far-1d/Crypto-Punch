'use client';
import { Card, CardContent, CardTitle } from '@/components/shadcn/card';
import { useAppContext } from '@/context';
import { fetch_single } from '@/data/coins';
import { notFound, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import Image from "next/image"
import { FaCaretUp, FaCaretDown } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import StarButton from '@/components/sub/starButton';
import { Separator } from '@/components/shadcn/separator';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/shadcn/tooltip"
import { motion } from 'framer-motion';
import { FaXTwitter, FaLink, FaTelegram, FaFacebookF, FaGithub, FaInstagram, } from "react-icons/fa6";
import { TbClipboardData, TbChartHistogram, TbChartBubble, TbArrowsRandom, TbGrain } from "react-icons/tb";
import { Chart } from '@/components/chart/asset_price_chart';
import { get_exchanges } from '@/data/exchanges';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/shadcn/table';
import {Component} from '@/components/chart/asset_history_chart';


const ClientSideSingleAsset = () => {
    const { user, setUser } = useAppContext();
    const [asset, setAsset] = useState<any>([]);
    const searchParams = useSearchParams();
    const id = searchParams.get("id") ? searchParams.get("id"): "";

    
    useEffect(()=>{
      if (id !== "") {
        const GetAsset = async () => {
            const data = await fetch_single({id}); // Fetch Asset data
            setAsset(data); // Set the fetched data to state
        };
    
        GetAsset();
      }
    }, [id, user])
    
    if (id === ""){
      return notFound();
    }

  return (
    <div className='w-full px-4 mb-10'>
      <div className='grid grid-cols-3 grid-rows-[13] sm:grid-rows-8 gap-6'>
        <Cart1 asset={asset}/>
        <Cart2 asset={asset}/>
        <Cart3 asset={asset}/>
        <Cart4 asset={asset}/>
        <Cart5 asset={asset}/>
        <Cart6 asset={asset}/>
        {/* <div className='col-span-3 row-span-2 sm:col-span-1 sm:row-span-2 bg-amber-400'>1</div>
        <div className='col-span-3 row-span-3 sm:col-span-2 sm:row-span-4 bg-emerald-400'>2</div>
        <div className='col-span-3 row-span-3 sm:col-span-1 sm:row-span-3 sm:col-start-1 sm:row-start-3 bg-rose-400 '>3</div>
        <div className='col-span-3 sm:col-span-1 sm:row-span-1 sm:col-start-2 sm:row-start-5 bg-teal-400'>4</div>
        <div className='col-span-3 sm:col-span-1 sm:row-span-1 sm:col-start-3 sm:row-start-5 bg-indigo-400'>5</div>
        <div className='col-span-3 row-span-2 sm:col-span-3 sm:row-span-3 sm:col-start-1 sm:row-start-6 bg-purple-400'>6</div> */}
      </div>
    </div>
  )
}

export default ClientSideSingleAsset



const Cart1 = ({asset}:{asset:any}) => {
  return (
    <motion.div
      initial={{ y: -200, opacity: 0 }}
      transition={{ duration: 0.5 }}
      // whileInView={{ x: 0, opacity: 1 }}
      animate={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      className='col-span-3 row-span-2 md:col-span-1 md:row-span-2 overflow-hidden'
    >
      <Card className='w-full h-full pt-1'>
        <CardTitle className='w-full flex items-center justify-start'>
          <Image src={asset.icon} height={35} width={35} alt=''
          className='m-2 mt-3 ml-5'/>
          <h1 className='header text-2xl font-semibold px-3'>
            {asset.name}
          </h1>
          <span className='font-light text-neutral-500'>{asset.symbol}</span>
          <span className='mx-3 px-2 font-medium text-base border rounded-md bg-neutral-300 dark:bg-neutral-800'>#{asset.rank}</span>
        </CardTitle>
        <CardContent>
          <div className='w-full mt-2 flex items-center flex-row mb-8'>
            <span className='text-3xl font-bold'>$ {asset._price}</span>
            <div className='flex pl-6'>
              <span className={`pt-[6px] pr-[2px] ${asset.price_change_percentage_24h>0? 'text-emerald-500 dark:text-emerald-400': asset.price_change_percentage_24h<0?'text-red-500 dark:text-red-400': ''}`}>
                {asset.price_change_percentage_24h>0? <FaCaretUp/>: asset.price_change_percentage_24h<0? <FaCaretDown/>: ''}
              </span>
              <span className={`${asset.price_change_percentage_24h>0? 'text-emerald-500 dark:text-emerald-400': asset.price_change_percentage_24h<0?'text-red-500 dark:text-red-400': ''}`}>
              {asset.price_change_percentage_24h} %
              </span>
            </div>
          </div>
          <div className='relative w-full rounded-full bg-neutral-300 dark:bg-neutral-700 h-2 mt-4'>
            <div className={`bg-gradient-to-r from-amber-500 via-emerald-500 to-green-600 h-full rounded-full`}
                style={{ width: `${(((Number(asset._price) - Number(asset.low_24h))/(Number(asset.high_24h) - Number(asset.low_24h)))*100).toFixed(0)}%` }}
                />
          </div>
          <div className='w-full flex justify-between items-center'>
            <span className='font-normal text-xs sm:text-sm'>{asset.low_24h}</span>
            <span className='font-normal text-sm'>24h range</span>
            <span className='font-normal text-xs sm:text-sm'>{asset.high_24h}</span>
          </div>
          <ul className='mt-8'>
            <li className='flex justify-center border shadow-sm rounded-md p-2'>
              <span className='pt-[2px]'>{typeof(asset.users_interested)=='object' ? <StarButton count={asset.users_interested} asset_id={asset.id} reverse={true}/> : '' }</span>
              <span className='px-2'>users are interested</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  )
}

const Cart2 = ({asset}:{asset:any}) => {
  return (
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      transition={{ duration: 0.5, delay:0.35 }}
      animate={{ x: 0, opacity: 1 }}
      className='col-span-3 row-span-3 md:col-span-2 md:row-span-4 overflow-hidden'
    >
      <Card className='w-full h-full'>
        <CardTitle className='flex items-center justify-start px-4 pt-4'>
          <TbChartHistogram/> <span className='px-2'>Chart</span>
        </CardTitle>
        <CardContent>
          <Component/>
          <div className='w-full mt-6'>
            <h1>Volitility</h1>
            <div className='relative w-full rounded-full bg-neutral-300 dark:bg-neutral-700 h-2 mt-2'>
              <div className={`bg-gradient-to-r from-rose-500 via-fuchsia-500 to-indigo-600 h-full rounded-full`}
                  style={{ width: `62%` }}
                  />
            </div>
            <div className='w-full flex justify-between items-center'>
              <span className='font-normal text-xs sm:text-sm'>{(asset.low_24h/4.5).toFixed(3)}</span>
              <span className='font-normal text-sm'>24h range</span>
              <span className='font-normal text-xs sm:text-sm'>{(asset.high_24h/2.5).toFixed(3)}</span>
            </div>
          </div>
          <div className='w-full mt-6'>
            <h1>Spread</h1>
            <div className='relative w-full rounded-full bg-neutral-300 dark:bg-neutral-700 h-2 mt-2'>
              <div className={`bg-gradient-to-r from-teal-500 via-sky-500 to-purple-600 h-full rounded-full`}
                  style={{ width: `40%` }}
                  />
            </div>
            <div className='w-full flex justify-between items-center'>
              <span className='font-normal text-xs sm:text-sm'>{(asset.price/3240).toFixed(4)}</span>
              <span className='font-normal text-sm'>24h range</span>
              <span className='font-normal text-xs sm:text-sm'>{(asset.price/1408).toFixed(4)}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

const Cart3 = ({asset}:{asset:any}) => {
  return (
    <motion.div
      initial={{ x: -200, opacity: 0 }}
      transition={{ duration: 0.5, delay:0.75 }}
      // whileInView={{ x: 0, opacity: 1 }}
      animate={{ x: 0, opacity: 1 }}
      // viewport={{ once: true, amount: 0.15 }}
      className='col-span-3 row-span-3 md:col-span-1 md:row-span-3 md:col-start-1 md:row-start-3 overflow-hidden'
    >
      <Card className='w-full h-full'>
        <CardTitle className='flex items-center justify-center pb-3 pt-5'>
          <TbClipboardData/><span className='px-2'>Statistics</span>
        </CardTitle>
        <CardContent>
          <ul className='my-2'>
            <li className='flex justify-between py-4'>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className='text-neutral-500 truncate'>updated</TooltipTrigger>
                  <TooltipContent className='w-56 text-pretty'>
                    <p>Last Update Time.</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <span className=''>{asset.update}</span>
            </li>
            <Separator/>

            <li className='flex justify-between py-4'>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className='text-neutral-500 truncate'>Change (24h)</TooltipTrigger>
                  <TooltipContent className='w-56 text-pretty'>
                    <p>Price change during last 24 hour in dollars.</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <span className=''>${asset.d_change}</span>
            </li>
            <Separator/>

            <li className='flex justify-between py-4'>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className='text-neutral-500 truncate'>Market Cap</TooltipTrigger>
                  <TooltipContent className='w-56 text-pretty'>
                    <p>Market cap is the total money invested in a asset based on dollars.</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <span className=''>${asset.market}</span>
            </li>
            <Separator/>

            <li className='flex justify-between py-4'>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className='text-neutral-500 truncate'>Total Volume</TooltipTrigger>
                  <TooltipContent className='w-56 text-pretty'>
                    <p>Total volume.</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <span className=''>${asset.volume}</span>
            </li>
            <Separator/>

            <li className='flex justify-between py-4'>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className='text-neutral-500 truncate'>Fully diluted valuation</TooltipTrigger>
                  <TooltipContent className='w-56 text-pretty'>
                    <p>Fully diluted valuation.</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <span className=''>${asset.diluted_valuation}</span>
            </li>
            <Separator/>

            <li className='flex justify-between py-4'>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className='text-neutral-500 truncate'>Circulating supply</TooltipTrigger>
                  <TooltipContent className='w-56 text-pretty'>
                    <p>Circulating supply.</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <span className=''>${asset.c_supply}</span>
            </li>

          </ul>
        </CardContent>
      </Card>
    </motion.div>
  )
}

const Cart4 = ({asset}:{asset:any}) => {
  return (
    <motion.div
      initial={{ scale:0, opacity: 0 }}
      transition={{ duration: 0.5 }}
      whileInView={{ scale: 1, opacity: 1 }}
      // animate={{ x: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      className='col-span-3 md:col-span-1 md:row-span-1 md:col-start-2 md:row-start-5 overflow-hidden'
    >
      <Card className='w-full h-full'>
        <CardTitle className='flex items-center justify-start px-4 pb-3 pt-5'>
          <TbChartBubble/><span className='px-2'>social</span>
        </CardTitle>
        <CardContent className='mt-4 mb-1 md:mb-0 md:mt-5 flex items-center justify-center'>
          <a href={asset.twitter?asset.twitter:'#'} className='px-2 hover:underline'><FaXTwitter/></a>
          <a href={asset.website? asset.website:'#'} className='px-2 hover:underline'><FaLink/></a>
          <a href={asset.telegram? asset.telegram:'#'} className='px-2 hover:underline'><FaTelegramPlane/></a>
          <a href={asset.facebook? asset.facebook:'#'} className='px-2 hover:underline'><FaFacebookF/></a>
          <a href={asset.github? asset.github:'#'} className='px-2 hover:underline'><FaGithub/></a>
          <a href={asset.instagram? asset.instagram:'#'} className='px-2 hover:underline'><FaInstagram/></a>
        </CardContent>
      </Card>
    </motion.div>
  )
}

const Cart5 = ({asset}:{asset:any}) => {
  return (
    <motion.div
      initial={{ x: 200, opacity:0 }}
      transition={{ duration: 0.5, delay:0.15 }}
      whileInView={{ x: 0, opacity:1 }}
      // animate={{ x: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      className='col-span-3 md:col-span-1 md:row-span-1 md:col-start-3 md:row-start-5'
    >
      <Card className='w-full h-full'>
        <CardTitle className='flex items-center justify-start px-4 pb-3 pt-5'>
          <TbArrowsRandom/><span className='px-2'>Curve</span>
        </CardTitle>
        <CardContent className='relative mt-5 flex items-center justify-center'>
          <div className='z-30 absolute left-24 md:left-0 -top-8 w-[16vw] md:w-[12vw] md:h-[70px] pl-4
             bg-white dark:bg-neutral-950 flex flex-col items-center justify-center text-sm font-light'>
            <div className='text-left grid grid-cols-2 w-28'><span className='text-neutral-500'>ath</span><span className=''>{asset.ath}</span></div>
            <div className='text-left grid grid-cols-2 w-28'><span className='text-neutral-500'>atl</span><span className=''>{asset.atl}</span></div>
          </div>
          <Chart asset={asset}/>
        </CardContent>
      </Card>
    </motion.div>
  )
}

const Cart6 = ({asset}:{asset:any}) => {
    const [exc, setExc] = useState([]);  
    useEffect(()=>{
      const _exchanges = async ()=>{
        const x = 5
        const result = await get_exchanges({x});
        setExc(result)
      }
      _exchanges();
    }, [asset.id])
    
  return (
    <motion.div
      initial={{ y: 200, opacity:0 }}
      transition={{ duration: 0.5 }}
      whileInView={{ y: 0, opacity:1 }}
      // animate={{ x: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      className='col-span-3 row-span-3 md:col-span-3 smdm:row-span-3 md:col-start-1 md:row-start-6'
    >
      <Card className='w-full h-full'>
        <CardTitle className='flex items-center justify-start px-4 pb-3 pt-5'>
          <TbGrain/><span className='px-2'>Exchange</span>
        </CardTitle>
        <CardContent className='relative mt-5 flex flex-col items-center justify-center'>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className=''>#</TableHead>
              <TableHead className=''>Exchange</TableHead>
              <TableHead className=''>Establish</TableHead>
              <TableHead className=''>Rank <span className='text-neutral-500'> (score)</span></TableHead>
              <TableHead className=''>Volume <span className='text-neutral-500'> (BTC)</span></TableHead>
              <TableHead className=''>Update</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
              {exc.map((ex:any, idx)=>(
                <TableRow key={idx} className="h-[40px]">
                  <TableCell className="max-w-10">{idx+1}</TableCell>
                  <TableCell className="max-w-60 flex items-center justify-start">
                    <Image src={ex.image} height={35}width={35}alt={ex.name}
                    className='mr-2'/>
                    {ex.name}
                  </TableCell>
                  <TableCell className="">{ex.established}</TableCell>
                  <TableCell className="">
                    {ex.trust_rank}
                    <span className='text-neutral-500'> ({ex.trust_score})</span>
                  </TableCell>
                  <TableCell className="">{ex.volume}</TableCell>
                  <TableCell className="">{ex.last_update}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>

        </CardContent>
      </Card>
    </motion.div>
  )
}
// cart 1: 'id', 'name', 'symbol', 'rank', 'icon', '_price', 'price_change_percentage_24h', 'users_interested'
// cart 2: 'high_24h','low_24h'
// cart 3: 'market', 'daily_change', 'total_volume', 'update', 'fully_diluted_valuation','circulating_supply',
// cart 4 (social): 'twitter' 'description',
// card 5: 'ath', 'ath_change_percentage','ath_date','atl', 'atl_change_percentage', 'atl_date'
// card 6: 'exchanges',  