import React from "react";

const ImageItems = ({ image }) => {
  return (
     /* Display the image using the URL from the image object */
    <div className="overflow-hidden rounded-lg shadow-md shadow-gray-950 hover:scale-[101%] transition-all hover:shadow-gray-950 cursor-pointer ">
      <img src={image.urls.small} className="w-full h-full object-cover" />
    </div>
  );
};

export default ImageItems;
