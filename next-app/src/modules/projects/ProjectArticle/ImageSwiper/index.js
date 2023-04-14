"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import SwiperArrow from "@assets/icons/swiper-arrow.svg";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./SwiperPagination.scss";

import styles from "./ImageSwiper.module.scss";
import { useRef, useEffect } from "react";
import clsx from "clsx";

const ImageSwiper = ({ images }) => {
  const prevArrowRef = useRef(null);
  const nextArrowRef = useRef(null);

  return (
    <div className={styles.swiperContainer}>
      <Swiper
        breakpoints={{
          1024: {
            simulateTouch: false,
          },
        }}
        navigation={{
          nextEl: `#nextArrow`,
          prevEl: `#prevArrow`,
          clickable: true,
        }}
        pagination={{ type: 'bullets' }}
        modules={[Pagination, Navigation]}
        className={styles.swiper}
        loop
      >
        {images.map((image, index) => (
          <SwiperSlide key={`image-${index}`} className={styles.swiperSlide}>
            <Image
              key={`project-image-${index}`}
              src={image.url}
              alt="Project image"
              width={image.width}
              height={image.height}
              className={styles.image}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        className={clsx(styles.arrowContainer, styles.nextArrow)}
        id="nextArrow"
        ref={nextArrowRef}
      >
        <Image
          src={SwiperArrow.src}
          alt="Next"
          width={SwiperArrow.width}
          height={SwiperArrow.height}
        />
      </button>
      <button
        className={clsx(styles.arrowContainer, styles.prevArrow)}
        id="prevArrow"
        ref={prevArrowRef}
      >
        <Image
          src={SwiperArrow.src}
          alt="Previous"
          width={SwiperArrow.width}
          height={SwiperArrow.height}
          className={styles.arrow}
        />
      </button>
    </div>
  );
};

export default ImageSwiper;
