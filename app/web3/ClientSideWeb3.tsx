'use client';
import { FlipWords } from '@/components/aceternity/flip_word'
import { Card, CardContent, CardHeader } from '@/components/shadcn/card'
import { Input } from '@/components/shadcn/input'
import { Separator } from '@/components/shadcn/separator'
import React, { useEffect, useState } from 'react'
import { FaEthereum } from "react-icons/fa6";
import Image from 'next/image';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/shadcn/tooltip"
import { toast } from 'sonner'
import { Skeleton } from "@/components/shadcn/skeleton"
import Web3 from 'web3';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/shadcn/select';

//@ts-ignore
const {ethereum} = typeof window != 'undefined' ?window : false;
const web3 = new Web3(ethereum);
const Networks = {
  1: 'Ethereum mainnet',
  56: 'BNB Smart Chain',
  42161: 'Arbitrum',
  8453: 'Base',
  43114: 'Avalanche',
  137: 'Polygon mainnet',
  59144: 'Linea',
  10: 'OP mainnet',
  324: 'zkSync mainnet',
};
const NetworkImages = {
  1: 'https://icons.llamao.fi/icons/chains/rsz_ethereum.jpg',
  56: 'https://icons.llamao.fi/icons/chains/rsz_binance.jpg',
  42161: 'https://icons.llamao.fi/icons/chains/rsz_arbitrum.jpg',
  8453: 'https://icons.llamao.fi/icons/chains/rsz_base.jpg',
  43114: 'https://icons.llamao.fi/icons/chains/rsz_avalanche.jpg',
  137: 'https://icons.llamao.fi/icons/chains/rsz_polygon.jpg',
  59144: 'https://icons.llamao.fi/icons/chains/rsz_linea.jpg',
  10: 'https://icons.llamao.fi/icons/chains/rsz_optimism.jpg',
  324: 'https://icons.llamao.fi/icons/chains/rsz_zksync era.jpg',
};
const NetworkHex = {
  1: '0x1',
  56: '0x38',
  42161: '0xa4b1',
  8453: '0x2105',
  43114: '0xa86a',
  137: '0x89',
  59144: '0xe708',
  10: '0xa',
  324: '0x144',
};

const usdtAddress = '0xdAC17F958D2ee523a2206206994597C13D831ec7'; // USDT contract address
const minABI = [
  {"constant":true,"inputs":[{"name":"who","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},
];



const ClientSideWeb3 = () => {
  const [connectedAccount, setConnectedAccount] = useState('')
  const [balance, setBalance] = useState<any>('')
  const [balanceUSDT, setBalanceUSDT] = useState<any>()
  const [network, setNetwork] = useState<any>()

  // Change Network
  const handleNetworkChange = async (value:string)=>{
    if (!ethereum) {return '';}
    try {
      const x = await ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: value }],
      });
      const b = web3.eth.getBalance(connectedAccount);
      setBalance(formatFloat(web3.utils.fromWei(await b, 'ether')));
      
      // setBalanceUSDT(await UsdtBalance(connectedAccount));

      const n_id = await web3.eth.net.getId();
      //@ts-ignore
      const n = Networks[n_id] || 'Unknown';
      setNetwork(await n);

      console.log(`Switched to network with chain ID: ${value}`);
    } catch (error:any) {
      if (error.code === 4902) {
        toast('This network is not added to MetaMask. Please add it manually.');
      } else {
        toast('something went wrong, please try later');
        console.error('Error switching network:', error);
      }
    }
  }

  // Check if a Wallet is already connected
  const checkConnectedWallet = async ()=>{
    if (!ethereum) {return '';}
    
    const accounts = await ethereum.request({method: 'eth_accounts'});

    if (accounts.length){
      setConnectedAccount(accounts[0]);

      const b = web3.eth.getBalance(accounts[0]);
      setBalance(formatFloat(web3.utils.fromWei(await b, 'ether')));
      
      // setBalanceUSDT(await UsdtBalance(connectedAccount));

      const n_id = await web3.eth.net.getId();
      //@ts-ignore
      const n = Networks[n_id] || 'Unknown';
      setNetwork(await n);
    }
  }

  // connect a wallet
  const connectWallet = async () =>{
    try {
      if (!ethereum) {
        toast('install a wallet to start using the service');
      }
      const accounts = await ethereum.request({method: 'eth_requestAccounts'});
      setConnectedAccount(accounts[0]);
      
      const b = web3.eth.getBalance(accounts[0]);
      setBalance(formatFloat(web3.utils.fromWei(await b, 'ether')));
      
      const n_id = await web3.eth.net.getId();
      //@ts-ignore
      const n = Networks[n_id] || 'Unknown';
      setNetwork(await n);
    
    } catch (error) {
      console.log("error: ", error);
    }
  }

  useEffect(() => {
    checkConnectedWallet();
  }, [])
  

  return (
    <div className="h-auto w-full mx-3 pt-6 mb-12">
        <div className='flex flex-col md:flex-row items-center justify-around w-full mx-1 md:mx-10'>
          
          <div className='md:mx-6 flex flex-col items-start max-w-80'>
            <div className='text-6xl text-left w-full font-semibold py-4'>
              <h1 className='heading'>Send
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-rose-400'> crypto</span>
              </h1>
              <FlipWords words={["across the world", "to your family", "to a charity", "to a friend"]} />
            </div>
            <p className='text-xl'>Connect your wallet and use the panel to send money to your destination</p>
            <button className='w-64 my-8 py-2 font-bold border rounded-full
               hover:scale-105  duration-200' onClick={connectWallet}>Connect Wallet</button>

            <div></div>
          </div>

          <div className='min-w-80 sm:min-w-96 relative overflow-hidden mr-4 sm:mr-10'>
              {/* Card code */}
              <div className="h-48 rounded-md overflow-hidden my-3 dark:bg-[url('/animated_dark.svg')] bg-[url('/animated_light.svg')] bg-cover bg-center bg-no-repeat">
                <div className='flex flex-col items-center justify-center w-full p-4'>
                  <div className='w-full text-4xl flex justify-between'>
                    <span className=''><FaEthereum /></span>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger className='w-8 h-8 text-lg border border-black dark:border-white rounded-full'>i</TooltipTrigger>
                        <TooltipContent className='w-56 text-pretty'>
                          <p>After connecting your wallet here you will see a summery</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>

                  <div className='w-full flex flex-col justify-between mt-12'>
                    
                    <div className='w-full'>
                      <h1 className='text-left font-bold text-lg'>Wallet Address</h1>
                      <div className='text-left'>
                        <div className='text-sm max-w-64 overscroll-contain'>
                          {connectedAccount != '' ? 
                          connectedAccount: <Skeleton className='w-64 h-6'/>
                          }
                        </div>
                      </div>
                    </div>

                    <div className='w-full text-right flex justify-between pt-2'>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger className='text-base'>
                            {network ? 
                              network : <Skeleton className='w-28 h-6'/>
                            }
                          </TooltipTrigger>
                          <TooltipContent className='max-w-56 text-pretty'>
                            <p>Current Network</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>

                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger className='text-base'>
                            {balance!='' ? 
                              balance : <Skeleton className='w-28 h-6'/>
                            }
                            {balance!='' ? ' ETH' : ''}
                          </TooltipTrigger>
                          <TooltipContent className='max-w-56 text-pretty'>
                          {balanceUSDT? <p>balance in usdt  {balanceUSDT}</p>: 'Balance'}
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    
                    </div>

                  </div>
                </div>
              </div>

              <Card className=''>
                <CardHeader>
                  <div className='flex items-center justify-around'>
                    <p>change network</p>
                    <Select onValueChange={handleNetworkChange}>
                      <SelectTrigger className="">
                        <SelectValue placeholder="" />
                      </SelectTrigger>
                      <SelectContent className='max-h-44'>
                        
                        <SelectItem className='flex flex-row items-center justify-start text-sm' value={NetworkHex[1]}>
                          {/* <Image src={NetworkImages[1]} height={20} width={20} alt=''
                          className='inline-block mr-2'/> */}
                          <span>{Networks[1]}</span>
                        </SelectItem>

                        <SelectItem className='flex flex-row items-center justify-start text-sm' value={NetworkHex[137]}>
                          <span>{Networks[137]}</span>
                        </SelectItem>

                        <SelectItem className='flex flex-row items-center justify-start text-sm' value={NetworkHex[10]}>
                          <span>{Networks[10]}</span>
                        </SelectItem>
                        
                        <SelectItem className='flex flex-row items-center justify-start text-sm' value={NetworkHex[56]}>
                          <span>{Networks[56]}</span>
                        </SelectItem>

                        <SelectItem className='flex flex-row items-center justify-start text-sm' value={NetworkHex[42161]}>
                          <span>{Networks[42161]}</span>
                        </SelectItem>

                        <SelectItem className='flex flex-row items-center justify-start text-sm' value={NetworkHex[8453]}>
                          <span>{Networks[8453]}</span>
                        </SelectItem>

                        <SelectItem className='flex flex-row items-center justify-start text-sm' value={NetworkHex[43114]}>
                          <span>{Networks[43114]}</span>
                        </SelectItem>

                        <SelectItem className='flex flex-row items-center justify-start text-sm' value={NetworkHex[59144]}>
                          <span>{Networks[59144]}</span>
                        </SelectItem>

                        <SelectItem className='flex flex-row items-center justify-start text-sm' value={NetworkHex[324]}>
                          <span>{Networks[324]}</span>
                        </SelectItem>

                      </SelectContent>
                    </Select>
                  </div>
                </CardHeader>
                <CardContent className='pt-6'>
                    <div>
                      <Input placeholder='Address To' type='text' name='address' 
                        className='py-6 px-2 w-full mb-6'/>
                      <Input placeholder='Amount' type="text" pattern="[0-9]*"
                        className='py-6 px-2 w-full my-6'/>
                      <Input placeholder='Message' type='text'
                        className='py-2 px-2 w-full my-6'/>
                      <Separator/>
                      {false ? (
                          <Loader />
                      ): (
                        <button className='w-full border-b-2 rounded-lg text-white dark:text-black
                        bg-neutral-800 dark:bg-neutral-300 hover:bg-neutral-950 
                        hover:dark:bg-neutral-50 py-4 font-semibold hover:border-rose-500'>Send</button>
                      )}
                          
                    </div>
                </CardContent>
              </Card>
          </div>
        </div>
    </div>
  )
}

export default ClientSideWeb3


const Loader = ()=>{
  return (
    <div className='flex justify-center items-center pt-2 mt-3'>
        <div className='animate-spin rounded-full h-10 w-10 border-b-2 border-sky-500'/>
    </div>
  )
}


function formatFloat(number:string) {
  // Check if the number is already less than 5 decimal places
  const decimalPart = number.split('.')[1];
  
  if (decimalPart && decimalPart.length > 6) {
    // Limit to 6 decimal places
    return parseFloat(Number(number).toFixed(6));
  }
  
  // Return the number as is if it has less than or equal to 5 decimal places
  return number;
}

async function UsdtBalance (account:any){
    const contract = new web3.eth.Contract(minABI, usdtAddress);
    const result = await contract.methods.balanceOf(account).call();
    if (result){
      const balanceInUsdt = '1.2'//web3.utils.fromWei(result, 'mwei')
      return balanceInUsdt;
    }
    return 'unknown';
}