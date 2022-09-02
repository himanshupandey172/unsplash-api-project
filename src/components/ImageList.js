import React from "react";
import ImageCard from "./ImageCard";
import "./ImageList.css";

const ImageList = (props) => {
  const images = props.imageprop.map((image) => {
    return (
      <div>
        <ImageCard key={image.id} image={image} />;
      </div>
    );
  });

  return <div className="image-list">{images}</div>;
};

export default ImageList;
