import React, {useRef, useState, useEffect, } from "react";
import APIURL from '../configData.json';
import Loader from "./Loader";
import Photos from "./Photos";
import "./PhotoList.scss";
import InfiniteScroll from "../hooks/useInfiniteScroll";
//const apiKey = process.env.REACT_APP_ACCESS_KEY;

const {apiUrl, param, imageUrl} = APIURL;
const queryString = new URLSearchParams(param);

function PhotoList() {
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] =InfiniteScroll(fetchMorePhotos);
    const [page, setPage] = useState(1);
    const initialPageLoaded = useRef(false);
    const [errorText, setErrorText] = useState('');
   

    const fetchGallery = async() => {
      queryString.set('page',page)
      setLoading(true);

      let urlQuery = `${apiUrl}?${queryString}`;
      try {
        const response = await fetch(urlQuery, {method: 'POST'});
        const data = await response.json();
        
           let imageArray = data.photos.photo.map((pic)=> ({
              ...pic,
              "url": `${imageUrl}`+pic.server+'/'+pic.id+ '_'+pic.secret+'.jpg',
            }))
            setPhotos((oldImage)=> {
            return [...oldImage, ...imageArray];
          });
           setLoading(false);
        }
       

      catch(error) {
        setLoading(false)
        console.log(error)
        setErrorText("There is an error fetching!")
      }
   
  }

  function fetchMorePhotos() {
    if(!initialPageLoaded.current) {
      initialPageLoaded.current = true
    return;
    }
    setPage((oldPage)=> oldPage + 1);
    }

    useEffect(()=> {
      fetchGallery()
    },[page])

    
     
   return (
    <>
     {errorText && (
       <p className="error"> {errorText} </p>
     )}
      <main>
        <section className="gallery">
          <div className="gallery-images">
            <Photos
            photos={photos}
            data-testid='fetch-photos'
            />
          </div>
        </section>
        <Loader {...loading}/>
      </main>
    </>
  );
}

export default PhotoList;
