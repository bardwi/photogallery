import React from "react";
import "./Loader.scss";

function Loader({loading}) {
    return (
        <div data-testid='loader'>
           {!loading && <h2 className="loading">Loading...</h2>}
        </div>
    )
}

export default Loader;