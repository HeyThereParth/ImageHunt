import React, { useContext } from "react";
import ImageItems from "./ImageItems";
import { ImageContext } from "../context/ImageContextProvider";
import Skeleton from "./Skeleton"; // Component to show loading skeletons

const TheImages = () => {
  // Accessing values from the ImageContext
  const { images, page, setPage, searchTitle, loading } =
    useContext(ImageContext);

  return (
    <>
      <div className="my-10">
        {searchTitle && (
          <h1 className="text-center max-w-full text-3xl font-semibold  text-gray-900 mb-8">
            Showing Results for {searchTitle}
          </h1>
        )}
        {loading ? (
          <Skeleton />
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grids-cols-3 xl:grid-cols-4 gap-6 px-20">
              {images.map((image) => (
                <ImageItems key={image.id} image={image} />
              ))}
            </div>
            {images.length > 0 && (
              <div className="flex justify-center mt-4">
                <button
                  onClick={() => setPage(page + 1)}
                  className="inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed focus:shadow-none text-lg py-2 px-4 shadow-sm hover:shadow-md bg-stone-200 hover:bg-stone-100 relative bg-gradient-to-b from-white to-white border-stone-200 text-stone-700 rounded-lg hover:bg-gradient-to-b hover:from-stone-50 hover:to-stone-100 hover:border-stone-200 after:absolute after:inset-0 after:rounded-[inherit] after:box-shadow after:shadow-[inset_0_1px_0px_rgba(255,255,255,0.35),inset_0_-1px_0px_rgba(0,0,0,0.20)] after:pointer-events-none transition antialiased"
                >
                  Load More
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default TheImages;
