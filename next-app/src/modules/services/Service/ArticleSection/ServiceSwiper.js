"use client";

import { SwiperSlide, Swiper } from "swiper/react";
import { ChevronRightOutline } from "shared/assets/icons";

import styles from "./ArticleSection.module.scss";
import "swiper/css";
import { useCallback, useRef, useState } from "react";

const ServiceSwiper = ({ slides }) => {
  const sliderRef = useRef(null);
  const [isBeggining, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <div className={styles.swiperContainer}>
      <Swiper
        spaceBetween={32}
        slidesPerView="auto"
        ref={sliderRef}
        allowTouchMove={false}
        className={styles.swiper}
        onSlideChange={(slide) => {
          setIsBeginning(slide.isBeginning);
          !isEnd && setIsEnd(slide.isEnd);
        }}
        onReachEnd={() => setIsEnd(true)}
        onFromEdge={() => setIsEnd(false)}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.title} className={`p3 ${styles.swiperSlide}`}>
            <span>{slide.title}</span> {slide.description}
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.swiperArrows}>
        <button
          disabled={isBeggining}
          className={styles.swiperArrow}
          onClick={handlePrev}
        >
          <ChevronRightOutline />
        </button>
        <button
          disabled={isEnd}
          className={styles.swiperArrow}
          onClick={handleNext}
        >
          <ChevronRightOutline />
        </button>
      </div>
    </div>
  );
};

export default ServiceSwiper;
