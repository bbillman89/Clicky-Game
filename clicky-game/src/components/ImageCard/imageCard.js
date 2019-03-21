import React from "react";
import "./style.css";

function ImageCard(props) {
  return (
    // <section className="flexwrap">
        <span onClick={() => props.clickImage(props.id)} className="thisImage">
            <img className="img-container" alt={props.name} src={props.image} />
        </span>
    //</section>
  );
}

export default ImageCard;
