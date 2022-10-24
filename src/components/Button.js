import React from "react";
import "./Button.scss";

const Button = (props) => {
    return(
        <button  onClick={() => props.addFavorites(props.id)}
              className={props.isFavorite?"btn-favourite":"btn-not-favourite"}
            >
            Favourite
        </button>
    )
}

export default Button;