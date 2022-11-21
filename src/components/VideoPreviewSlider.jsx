import React, { useEffect, useState } from "react";
import { VideoPreviewCard } from "./VideoPreviewCard";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import api from "../services/api";


export const VideoPreviewSlider = () => {

  const [posts,setPosts]=useState([]);

  const getPosts = async () => {
    try {
    
     var {data}= await api().get("/posts/public",);
    setPosts(data);
    
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(()=>{
    getPosts()
  },[])
 
  return (
    <div className="ml-2 lg:mx-16">
      <Swiper
        slidesPerView={2}
        spaceBetween={20}
        pagination={{
          clickable: false,
        }}
        breakpoints={{
          768: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <div className="ml-6 md:mx-4">
          {posts.map((item, index) => {
            return (
              <div key={index}>
                <SwiperSlide>
                  <VideoPreviewCard
                    title={item.name}
                    linkImg={item.imageUrl}
                    linkvideo={item.videoUrl}
                  />
                </SwiperSlide>
              </div>
            );
          })}
        </div>
      </Swiper>
    </div>
  );
};
