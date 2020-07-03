import React, { useState } from "react";
import left_arrow from "./asset/left_arrow.svg";
import right_arrow from "./asset/right_arrow.svg";

const Image = () => {
  const [images, setImage] = useState([
    "https://secureservercdn.net/45.40.155.175/6f3.0c6.myftpupload.com/wp-content/uploads/2013/03/DSCF3449-2.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ6b_TFEHHB7or5pt_T-uwaoN-Zkgjl3Nzz1g&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRaW_i6EZ752Q2JtL0gg54uoNDnQaVHrYQ2gA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ63RKMGgOGP3LYVGqsI42NkfYHPpg9EOyNnA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRTlJWDLFYKchpduE_5rnQnlwCxUzJIwqFKRg&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSEDnaXE2TMoe9I2eTGTVPASZ2ESSsLfdMqqA&usqp=CAU",
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const prevIndex = currentIndex === 0;
    const index = prevIndex ? images.length - 1 : currentIndex - 1;
    //무한 안돌게하고싶으면
    //const index = prevIndex ? currentIndex : currentIndex - 1;
    
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    const nextIndex = currentIndex === images.length - 1;
    const index = nextIndex ? 0 : currentIndex + 1;

    setCurrentIndex(index);
  };

  const displayImage = images.slice(
    currentIndex,
    currentIndex + 2
  );
  const imageToDisplay =
    displayImage.length < 2
      ? [
          ...displayImage,
          ...images.slice(0, 2 - displayImage.length),
        ]
      : displayImage;

  return (
    <div>
      <h1>Tiger</h1>
      <img src={left_arrow} alt="pre" onClick={prevSlide}/>
      {imageToDisplay.map((image,index)=><img key={index} src={image} alt="" style={{ maxWidth: '15%'}} />)}
      <img src={right_arrow} alt="next" onClick={nextSlide}/>
    </div>
  );
};

export default Image;
