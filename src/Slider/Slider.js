import React from 'react';
import SimpleImageSlider from "react-simple-image-slider";
const images = [
    { url: "images/1.jpg" },
    { url: "images/2.jfif" },
    { url: "images/3.jfif" },
    { url: "images/4.jfif" },
    { url: "images/5.jfif" },
  ];
const Slider = () => {
    return (
        <div>
              <SimpleImageSlider
        width={896}
        height={504}
        images={images}
        showBullets={true}
        showNavs={true}
      />
        </div>
    );
};

export default Slider;