import React, { useEffect, useState } from "react";
import GlobalApi from "../Services/GlobalApi";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { useRef } from "react";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const screenWidth = window.innerWidth; // tarayıcı penceresinin iç kısım genişliği

function Slider() {
  const [moviesList, setMoviesList] = useState([]);
  const elementRef = useRef();

  useEffect(() => {
    getTrendingVideos();
  }, []);

  const getTrendingVideos = () => {
    GlobalApi.getTrendingVideos.then((res) => {
      console.log(res.data.results);
      setMoviesList(res.data.results);
    });
  };

  const SliderRight = () => {
    elementRef.current.scrollLeft += screenWidth - 110;
  };

  const SliderLeft = () => {
    elementRef.current.scrollLeft -= screenWidth - 110;
  };

  return (
    <div>
      <HiChevronLeft
        onClick={SliderLeft}
        className=" hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer"
      />
      <HiChevronRight
        onClick={SliderRight}
        className="hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer right-0"
      />

      <div
        className="flex overflow-x-auto w-full px-16 py-4
    scrollbar-hide scroll-smooth"
        ref={elementRef}
      >
        {moviesList.map((item, index) => (
          <img
            key={index}
            src={IMAGE_BASE_URL + item.backdrop_path}
            className="min-w-full  md:h-[310px] object-cover
            object-left-top mr-5 rounded-md hover:border-[4px]
            border-gray-400 transition-all duration-100 ease-in"
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
