import { useEffect, useState } from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import { useAppContext } from '@/context';
import { add_to_favorite, check_favorite } from '@/data/coins';
import { toast } from 'sonner';

const StarButton = ({
    count, asset_id, reverse
    }:{
        count:any, 
        asset_id:string
        reverse?:boolean
    }) => {
    const { user, setUser } = useAppContext();
    const initialState = user ? count.includes(user.id) : false;
    const [isStarred, setIsStarred] = useState(initialState);
    const [stars, setStars] = useState(count.length);
    
    const handleClick = async () => {
      // Simulate an asynchronous operation (e.g., API call)
      if (user){
            const user_id = user.id;
            const result = await add_to_favorite({asset_id, user_id});
            if (result.message === "added" || result.message === "removed"){

                setIsStarred(!isStarred);
                setStars(result.count);
            }else {
                toast("Something went wrong please retry after a while");
            }
        } else {
            toast("Please Login/Signup before marking");
        }
    };
    
    useEffect(()=>{
        const userChange = async () => {
            // Simulate an asynchronous operation (e.g., API call)
            if (user){
                const user_id = user.id;
                const result = await check_favorite({asset_id, user_id});
                if (result.message === "yes"){
                    setIsStarred(true);
                    setStars(result.count);
                }else if(result.message === "no"){
                    setIsStarred(false);
                    setStars(result.count);
                }
            }else{
            setIsStarred(false);
            }
        };
        if (reverse){
            userChange();
        }

    },[user, asset_id, reverse])

    return (
        <div className='flex'>
            {reverse ? '': stars}
            <motion.button
                onClick={handleClick}
                initial={{ scale: 1 }}
                animate={{ scale: isStarred ? 1.1 : 1, transition: { duration: 0.1 } }}
                exit={{ scale: 1 }}
                className={`text-lg px-2 ${isStarred? 'text-amber-300':''}`}
            >
                {isStarred ? <FaStar /> : <FaRegStar />}
            </motion.button>
            {reverse ? stars : ''}
        </div>
    );
  };
  
  export default StarButton;