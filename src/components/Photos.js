import React from "react";
import Button from "./Button";
import "./Photos.scss";
import useLocalStorage from "../hooks/useLocalStorage";

const Photos = (props)=> {
    const [favorites, setFavorites] = useLocalStorage([],'isfavorite')
        
        const addFavorite =(fav)=> {
        const isFavorite = favorites.includes(fav);
        return isFavorite ? setFavorites((prev)=> prev.filter((item)=> item!==fav)):
        setFavorites((prev)=>[...prev, fav]);
        ;     
      }

    return(
        <>
        {props.photos.length > 0 && (
        <>
        {props.photos.map((photo, index)=> {
            const isFavorite = favorites.includes(photo.id);
                return (
                   <article className="images" key={index}>
                      <div className="content-overlay"></div>
                      
                      <img src={photo.url} alt={photo.id}/>
                      {isFavorite &&(
                        <div className="favorite">
                          <p>&#11088;</p>
                        </div>
                      )}
                      <div className="gallery-details">
                        <div>
                          <h4 className="title">{photo.title}</h4>
                          <div className="bottom-border"></div>
                          <p className="ownername">{photo.ownername}</p>
                          <Button 
                            addFavorites={addFavorite} 
                            isFavorite={isFavorite} id={photo.id}
                          />
                        </div>
                      </div>
                   </article>
                )
               })}
            </>
            )}
        </>
        
    )

}


export default Photos;