import { NewsCard } from "./NewsCard";
import "./NewsCards.css";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

export const NewsCards = () => {

  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          <NewsCard newsDesc="Flutterwave merchants can now process payments in eNaira, the Nigerian digital currency issued and distributed by the Central Bank of" />
        </SwiperSlide>
        <SwiperSlide>
          <NewsCard newsDesc="African fintech companies have made significant inroads into the market over these past couple of years, with revenues reaching US$4" />
        </SwiperSlide>
        <SwiperSlide>
          <NewsCard newsDesc="Fintech Challenge offers early stage and mature start-ups the potential to partner with Ecobank across 33 African countries; Applications open until" />
        </SwiperSlide>
        <SwiperSlide>
          <NewsCard newsDesc="Central Bank of Nigeria’s (CBN) governor Godwin Emefiele says the second phase of the eNaira project has begun and i" />
        </SwiperSlide>
        <SwiperSlide>
          <NewsCard newsDesc="Following a successful pilot implementation, Bank of Ghana launched now its Regulatory and Innovation Sandbox developed in collaboration with EMTECH" />
        </SwiperSlide>
        <SwiperSlide>
          <NewsCard newsDesc="Bizao, a fintech that facilitates payments for both local and international businesses operating in Africa, announces an €8 million series" />
        </SwiperSlide>
        <SwiperSlide>
          <NewsCard newsDesc="The International Finance Corporation (IFC) announced an investment in mobile money provider Wave Mobile to spur financial inclusion and support" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
