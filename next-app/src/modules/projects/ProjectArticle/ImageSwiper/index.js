"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import SwiperArrow from "@assets/icons/swiper-arrow.svg";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import styles from "./ImageSwiper.module.scss";
import { useRef } from "react";
import clsx from "clsx";

const ImageSwiper = ({ images }) => {
  const prevArrowRef = useRef(null);
  const nextArrowRef = useRef(null);

  const pagination = {
    renderBullet: function (index, className) {
      return `<span class="${className} ${styles.bullet}"></span>`;
    },
  };

  return (
    <div className={styles.swiperContainer}>
      <Swiper
        pagination={pagination}
        breakpoints={{
          1024: {
            simulateTouch: false,
          },
        }}
        navigation={{
          nextEl: nextArrowRef.current,
          prevEl: prevArrowRef.current,
        }}
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
      <div className={clsx(styles.arrowContainer, styles.nextArrow)} ref={nextArrowRef}>
        <Image
          src={SwiperArrow.src}
          alt="Next"
          width={SwiperArrow.width}
          height={SwiperArrow.height}
        />
      </div>
      <div className={clsx(styles.arrowContainer, styles.prevArrow)} ref={prevArrowRef}>
        <Image
          src={SwiperArrow.src}
          alt="Previous"
          width={SwiperArrow.width}
          height={SwiperArrow.height}
          className={styles.arrow}
        />
      </div>
    </div>
  );
};

export default ImageSwiper;
