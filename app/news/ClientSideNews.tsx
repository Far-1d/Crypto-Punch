'use client';
import BlurIn from "@/components/magic/blurIn";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useEffect, useState } from 'react'
import { fetch_news, fetch_pages } from '@/data/news';
import Image from "next/image";
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
import { useSearchParams } from "next/navigation";

const ClientSideNews = () => {
  const [newsArray, setNewsArray] = useState<any>([]); // State to hold news data
  const [loading, setLoading] = useState(true); // State to manage loading status
  const [pageSize, setPageSize] = useState("12");
  const [page, setPage] = useState("1");
  const [totalPages, setTotalPages] = useState(1);

  const searchParams = useSearchParams();

  useEffect(() => {
    const query_page = searchParams.get("page");
    if (query_page) {
      setPage(query_page);
    } else {
      setPage("1"); // Default to page 1 if no query param
    }
  }, [searchParams]);

  const handleValueChange = (value:string) => {
    setPageSize(value);
  };

  useEffect(() => {
    setLoading(true);

    const getPages = async () => {
      const data = await fetch_pages({pageSize});
      setTotalPages(data.size);
    }

    const loadNews = async () => {
        const data = await fetch_news({page, pageSize}); // Fetch news data
        if ('results' in data){
          setNewsArray(data.results); // Set the fetched data to state
          const currentPage = Number(page);

        } else {
          setNewsArray(null);
        }
        setLoading(false); // Set loading to false once data is fetched
    };

    getPages();
    loadNews(); // Call the function to load news
}, [pageSize, page]);

  if (loading) {
      return (
        <div className="h-screen w-full flex flex-col items-center justify-start text-xl">
          <BlurIn
          word="News"
          className="text-4xl mb-6 font-bold text-black dark:text-white h-[50vh]"
          />
          <p>Loading...</p>
        </div>   
      );
  }

  return (
    <>
      <div className="w-full">
          <BlurIn
          word="News"
          className="text-4xl mb-6 font-bold text-black dark:text-white"
          />
          {/* <SVGFrame className="top-10 h-auto"/> */}

          <section className="w-full my-10 mx-14 -translate-x-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center justify-start gap-4 sm:gap-8 p-4">
            {Array.isArray(newsArray) && newsArray.map((news, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0, 0, 0, 0.2)" }}
                className="col-span-1 w-full h-full flex flex-col flex-1 items-center justify-center 
                hover:shadow-xl dark:shadow-none shadow-sm rounded-xl"
              >
                <motion.div 
                initial={{ y: 100, opacity: 0 }}
                transition={{ duration: 0.5 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                className=" border border-neutral-300 dark:border-neutral-800 rounded-xl white-glassmorphism
                 flex flex-col flex-1 h-full items-center justify-center overflow-hidden duration-200" >
                  <Link href={`news/single?id=${news.id}`} className="h-full w-full flex flex-col items-start justify-center py-0">
                    <Image src={news.image} height={200} width={250} alt={news.title}
                    className="w-full h-full object-cover"/>
                    <h1 className="text-lg font-bold text-left p-4">
                      {news.title}
                    </h1>
                    <div className="p-4 flex flex-row justify-between items-center w-full">
                      <small>{news.writer ? <Link href={`/profile?id=${news.writer.id}`} className="hover:underline">{news.writer.username}</Link> : "admin" }</small>
                      <small>{news.published_at}</small>
                    </div>
                  </Link>
                </motion.div>
              </motion.div>
            ))}
          </section>
          <div className="pagination flex flex-col items-center justify-center w-full mb-10">
              <div className="flex items-center justify-end w-full px-4 sm:px-20">
                <span className="px-2">News per page</span>
                <Select onValueChange={handleValueChange} value={pageSize}>
                  <SelectTrigger className="w-[80px]">
                    <SelectValue placeholder="NPP" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="12">12</SelectItem>
                    <SelectItem value="24">24</SelectItem>
                    <SelectItem value="48">48</SelectItem>
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

                    {/* {Array.from({ length: totalPages }, (_, index) => {
                      const pageNumber = index + 1; // Page numbers start from 1

                      // Check if the page number is within the range we want to display
                      if (
                        pageNumber === Number(page) 
                      ) {
                        return (
                          <PaginationItem key={pageNumber}>
                            <PaginationLink href={`?page=${pageNumber}`} className={`${Number(page)===pageNumber? "underline":""}`}>
                              {pageNumber}
                            </PaginationLink>
                          </PaginationItem>
                        );
                      }

                      return null; // Skip rendering for other pages
                    })} */}
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

      <div className="searchBar"></div>
    </>
  )
}

export default ClientSideNews