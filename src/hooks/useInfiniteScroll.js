import  {useState, useEffect} from "react";


const InfiniteScroll = (callback)=> {
    const [loading, setLoading] =useState(false);
 
   useEffect(()=> {
          window.addEventListener('scroll', eventScroll) 
          return ()=> window.removeEventListener('scroll', eventScroll);
   },[])

   useEffect(()=> {
     if(!loading) return;
     callback();
   },[loading]);


   function eventScroll() {
    if(window.innerHeight + window.scrollY >= document.body.scrollHeight-1) {
        setLoading(true);
      }
   } 

   return [loading, setLoading];

}

export default InfiniteScroll;