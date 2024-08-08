'use client';
import React from 'react'
import { TracingBeam } from "@/components/aceternity/traceBeam";
import BlurIn from "@/components/magic/blurIn";
import { motion } from "framer-motion";
import Image from 'next/image';
import { comments } from '@/data/staff_comments';
import {BackgroundGradient} from '@/components/aceternity/backgroundGradient'
import { MapContainer } from 'https://cdn.esm.sh/react-leaflet/MapContainer'
import { TileLayer } from 'https://cdn.esm.sh/react-leaflet/TileLayer'
import { useMap } from 'https://cdn.esm.sh/react-leaflet/hooks'

const ClientSideAbout = () => {
  return (
    <div>
        <BlurIn
      word="About Us"
      className="text-4xl font-bold text-black dark:text-white"
      />
      <TracingBeam className="px-6">
        <section className="grid-cols-1 w-full px-4">
            <div className="col-span-1 grid grid-cols-3 my-20 px-4 md:px-12 w-full ">
              <div className="overflow-hidden col-span-3 sm:col-span-1 flex items-center justify-center">  
                <motion.h1 
                initial={{ x: 100, opacity: 0 }}
                transition={{ duration: 0.5 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                className="pb-12 sm:pb-0 text-xl md:text-2xl lg:text-4xl font-bold text-center">
                  Introduction to Crypto Punch
                </motion.h1>
              </div>
              <div className="relative overflow-hidden sm:ml-4 col-span-3 sm:col-span-2
               p-6 rounded-2xl shadow-md shadow-emerald-600 dark:shadow-emerald-800">
                <div className='h-full w-full absolute z-[0] rotate-12 bg-[radial-gradient(30%_45%_at_50%_44%,rgba(12,74,110,0.6)_50%,rgba(0,0,0,0.0)_100%)]'/>
                <div className='h-full w-full absolute z-[1] -rotate-12 bg-[radial-gradient(30%_45%_at_40%_60%,rgba(112,174,90,0.6)_50%,rgba(0,0,0,0.0)_100%)]'/>
                <Image src={'/noise.webp'} height={400} width={300} alt=""
                className='h-full w-full absolute top-0 left-0 object-cover opacity-10 z-0'/>
                  <div className='relative z-10'>
                    <motion.p
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    className="text-base lg:text-xl text-justify">
                    At Crypto Punch, we pride ourselves on being a leading cryptocurrency API 
                    service provider dedicated to delivering fast, secure, and reliable solutions 
                    for developers, businesses, and individuals alike. With three years of 
                    experience in the rapidly evolving crypto landscape, we have established 
                    ourselves as a trusted partner for various projects worldwide. Our comprehensive
                    suite of services includes real-time market news, on-time market analytics, 
                    live asset data, and interactive charts tailored for diverse applications. We
                    understand that the cryptocurrency market is dynamic and ever-changing, which
                    is why we focus on providing our clients with the most accurate and up-to-date
                    information available.
                    </motion.p>
                  </div>
              </div>
            </div>
            <div className="col-span-1 grid grid-cols-3 my-20 px-4 md:px-12 w-full">
              <div className="order-1 sm:order-0 relative overflow-hidden sm:mr-8 col-span-3 sm:col-span-2
                p-6 rounded-2xl shadow-md shadow-cyan-600 dark:shadow-cyan-800">
                  <div className='h-full w-full absolute z-[0] rotate-12 bg-[radial-gradient(30%_45%_at_50%_44%,rgba(26,201,252,0.6)_50%,rgba(0,0,0,0.0)_100%)]'/>
                  <div className='h-full w-full absolute z-[1] -rotate-12 bg-[radial-gradient(30%_45%_at_40%_60%,rgba(134,98,244,0.6)_50%,rgba(0,0,0,0.0)_100%)]'/>
                  <Image src={'/noise.webp'} height={400} width={300} alt=""
                  className='h-full w-full absolute top-0 left-0 object-cover opacity-10 z-0'/>
                  <div className='relative z-10'>
                    <motion.p
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    className="text-base lg:text-xl text-justify">
                      Our commitment to excellence is reflected in our robust infrastructure and 
                      user-friendly API design. We have built a platform that not only simplifies 
                      access to critical blockchain data but also enhances the development 
                      experience for our users. Our APIs are designed to be intuitive and easy to 
                      integrate, allowing developers to focus on building innovative solutions 
                      without getting bogged down by technical complexities. Whether you are a 
                      seasoned developer or a business looking to leverage cryptocurrency data, 
                      our services are tailored to meet your specific needs. We prioritize security 
                      and reliability, ensuring that our clients can trust us to handle sensitive 
                      data with the utmost care.
                    </motion.p>
                  </div>
              </div>
              <div className="order-0 sm:order-1 overflow-hidden col-span-3 sm:col-span-1 flex items-center justify-center">  
                <motion.h1 
                initial={{ x: -100, opacity: 0 }}
                transition={{ duration: 0.5 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                className="pb-12 sm:pb-0 text-xl md:text-2xl lg:text-4xl font-bold text-center">
                  Commitment to Excellence
                </motion.h1>
              </div>
            </div>
            <div className="col-span-1 grid grid-cols-3 my-20 px-4 md:px-12 w-full">
              <div className="overflow-hidden col-span-3 sm:col-span-1 flex items-center justify-center">  
                <motion.h1 
                initial={{ x: 100, opacity: 0 }}
                transition={{ duration: 0.5 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                className="pb-8 sm:pb-0 text-xl md:text-2xl lg:text-4xl font-bold text-center">
                  Collaboration and Growth
                </motion.h1>
              </div>
              <div className="relative overflow-clip sm:ml-4 col-span-3 sm:col-span-2
               p-6 rounded-2xl shadow-md shadow-red-600 dark:shadow-red-800">
                <div className='h-full w-full absolute z-[0] rotate-12 bg-[radial-gradient(30%_45%_at_50%_44%,rgba(217,119,6,0.6)_50%,rgba(0,0,0,0.0)_100%)]'/>
                <div className='h-full w-full absolute z-[1] rotate-[-10deg] bg-[radial-gradient(30%_45%_at_35%_45%,rgba(220,38,38,0.6)_50%,rgba(0,0,0,0.0)_100%)]'/>
                <Image src={'/noise.webp'} height={400} width={300} alt=""
                className='h-full w-full absolute top-0 left-0 object-cover opacity-10 z-0'/>
                <div className='relative z-10'>
                  <motion.p 
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  className="text-base lg:text-xl text-justify">
                    Collaboration is at the heart of what we do at Crypto Punch. We have 
                    partnered with numerous prominent projects across the globe, which has 
                    enriched our offerings and allowed us to stay at the forefront of the 
                    industry. Our clients benefit from our extensive network and the insights 
                    we gain from these partnerships. As we continue to grow and evolve, we remain 
                    committed to delivering exceptional service and innovative solutions that 
                    empower our users to thrive in the cryptocurrency space. With Crypto Punch, 
                    you can expect not only a service provider but a dedicated ally in navigating 
                    the complexities of the crypto market.
                  </motion.p>
                </div>
              </div>
            </div>
        </section> 

        <section className='flex flex-col w-full px-4 pt-6 pb-12'>
          <div className='flex items-center justify-center'>
            <h1 className="text-5xl font-bold text-black dark:text-white">
              Our {''}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-teal-400 dark:from-teal-300 to-indigo-600 dark:to-indigo-500'>Staff</span>
              <svg width="86" height="14" viewBox="0 0 86 14" fill="none" xmlns="http://www.w3.org/2000/svg"
              className='stroke-black dark:stroke-white stroke-2 translate-x-32 scale-x-150'>
                <path d="M2.16711 1.94995C11.5271 2.74233 20.8921 2.67587 30.2819 2.6909C39.9005 2.70629 49.5191 2.6985 59.1377 2.6909C66.5933 2.68501 74.393 3.09829 81.8601 2.50566C94.4699 1.50488 56.5663 3.28083 43.9483 4.17279C36.579 4.69373 29.2105 5.2272 21.8434 5.77818C19.565 5.94857 17.2866 6.11844 15.0102 6.3133C13.5398 6.43917 9.3332 6.21958 10.6263 6.93076C12.1514 7.7696 14.0944 7.24935 15.8335 7.32182C19.15 7.46001 24.2653 7.60888 27.4416 7.71287C40.5446 8.14184 29.0402 7.77462 42.5487 8.22742C44.8812 8.3056 47.2146 8.35972 49.5466 8.45382C51.8876 8.54828 54.645 7.74068 56.5444 9.11244C57.6982 9.94577 53.9162 10.2898 52.5103 10.512C48.1461 11.2017 43.7044 11.3732 39.2968 11.5411C36.3781 11.6523 40.8115 11.5823 41.4373 11.5823" stroke-linecap="round"/>
              </svg>
            </h1>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-12'>
              {comments.map((comment, idx) => (
                <div className="col-span-1 rounded-[22px] mx-6 sm:mx-0 p-4 sm:p-4 bg-neutral-100 dark:bg-neutral-950 ease-in-out
                  hover:drop-shadow-2xl drop-shadow-2xl sm:drop-shadow-none 
                  hover:dark:shadow-lg hover:dark:shadow-neutral-700 dark:shadow-lg dark:shadow-neutral-700 sm:dark:shadow-none duration-300">
                    <Image src={comment.src} alt="" width={100} height={100}
                    className="w-24 h-24 rounded-full mx-auto aspect-square my-2 " />
                    <div className="pt-6 text-center space-y-4">
                      <blockquote>
                        <p className="text-sm font-medium line-clamp-5 px-2">
                          {comment.comment}
                        </p>
                      </blockquote>
                      <div className="font-medium">
                        <div className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-purple-500">
                          {comment.name}
                        </div>
                        <div className="text-slate-700 dark:text-slate-500 mb-4">
                          {comment.position}
                        </div>
                      </div>
                    </div>
                </div>
              ))}
          </div>
        </section>
        
        <section>
        <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>

        </section>
      </TracingBeam>
    </div>
  )
}

export default ClientSideAbout