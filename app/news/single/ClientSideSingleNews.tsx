'use client';
import BlurIn from "@/components/magic/blurIn";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useEffect, useState } from 'react'
import { fetch_single, fetch_like } from '@/data/news';
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { notFound } from 'next/navigation'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/shadcn/avatar";
import { FaRegHeart, FaHeart } from "react-icons/fa6";
import { useAppContext } from "@/context";
import { toast } from "sonner";

const ClientSideSingle = () => {
  const { user, setUser } = useAppContext();
  const [news, setNews] = useState<any>([]); // State to hold news data
  const [likeCount, setLikeCount] = useState(); // State to hold news data
  const [loading, setLoading] = useState(true); // State to manage loading status
  const [isLiked, setIsLiked] = useState('');
  const [updatedContent, setUpdatedContent] = useState('');
  const [liking, setLiking] = useState(false);
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  useEffect(() => {
    if (id!=null){
      const loadNews = async () => {
          const news_id = id;
          const data = await fetch_single({news_id}); // Fetch news data
          
          const content = data.content;
          const tempDiv = document.createElement('div');
          tempDiv.innerHTML = content;

          // Select all h2 tags and add a class name to each
          const h2Tags = tempDiv.querySelectorAll('h2');
          h2Tags.forEach(h2 => {
            h2.classList.add('text-xl', 'font-semibold', 'pt-3');
          });

          setUpdatedContent(tempDiv.innerHTML);

          setLikeCount(data.likes.length);
          setNews(data); // Set the fetched data to state
          setLoading(false); // Set loading to false once data is fetched
      };
      
      loadNews(); // Call the function to load news
  }
}, [id]);

  useEffect(() => {
    setIsLiked('');
  }, [id]);

  function handle_like (){
    if (user){
      if (isLiked === 'yes') setIsLiked('no');
      else setIsLiked('yes');
      setLiking(!liking);
    }
    else {
      toast("please login or signup");
    }
  }

  useEffect(() => {
    const loadLike = async () => {
      const button = document.getElementById('like');
      
      if (user){
        const user_id = user.id;
        const news_id = id ? id : searchParams.get("id");
        if(news_id === null) {
          return notFound();
        }
        const data = await fetch_like({news_id, user_id});
        const newss = await fetch_single({news_id});
        console.log(data)
        if (data.message != "error"){
          setLikeCount(newss.likes.length);
          if (data.message === "liked") 
          {
            setIsLiked("yes");
          }
          else setIsLiked("no"); 
        }
        else {
          toast("something went wrong please retry after a while");
        }
      }
    };
    loadLike();
}, [liking, id]);

  if (id === "" || id===null)
  {
    return notFound();
  }

  if (loading) {
      return <div className="h-screen w-full flex items-center justify-center text-xl"><p>Loading...</p></div>; // Show loading message while fetching data
  }

  return (
    <>
      <div className="w-full flex flex-col items-center justify-center">
          <BlurIn
          word={news.title}
          className="text-2xl sm:text-4xl mb-6 font-semibold text-black dark:text-white px-4 sm:px-10"
          />
          <Image src={news.image} height={200} width={250} alt={news.title}
            className="w-[90vw] h-fit mx-6 border rounded-lg"/>
          <section className="w-full my-10 mx-14 flex flex-col items-center justify-start p-4">
              <div>
                <h1 className="text-xl font-bold text-left p-4">
                  {news.title}
                </h1>
                <div className="px-4 flex flex-col gap-4" dangerouslySetInnerHTML={{ __html: updatedContent }} />
                <div className="p-4 flex flex-row justify-between items-center w-full">
                  <div className="flex flex-row items-center justify-start">
                    <Avatar className='w-12 h-12 rounded-full'>
                        {news.writer && <AvatarImage src={news.writer.image} className="aspect-auto"/> }
                        <AvatarFallback className="text-4xl">{news.writer ? getInitials(news.writer.username): 'A'}</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col pl-4">
                      <p className="font-semibold">{news.writer ? <Link href={`/profile?id=${news.writer.id}`} className="hover:underline">{news.writer.username}</Link> : "admin"}</p>
                      <small className="text-neutral-400">{news.updated_at}</small>
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-end pr-6 text-xl">
                    <small className="px-4 text-base">{likeCount}</small>
                    <button id="like" onClick={handle_like}>
                      {isLiked === "yes" ? <FaHeart/> : <FaRegHeart/> }
                    </button>
                  </div>
                </div>
            </div>
        </section>
      </div>
    </>
  )
}

export default ClientSideSingle

const getInitials = (name:string) => {
  // Split the name by spaces and map over the words
  return name
      .split(' ')
      .map(word => word.charAt(0).toUpperCase()) // Get the first letter of each word
      .join(''); // Join the letters together
};