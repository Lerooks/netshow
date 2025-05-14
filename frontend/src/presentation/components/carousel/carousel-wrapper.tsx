"use client";

import { Box } from "@chakra-ui/react";
import { FreeMode, Navigation } from "swiper/modules";
import { Swiper } from "swiper/react";
import { PropsWithChildren } from "react";

import "./carousel.styles.css";

export type Props = PropsWithChildren;

export function CarouselWrapper({ children }: Props) {
  return (
    <Box className="carousel" position="relative">
      <Swiper
        spaceBetween={16}
        slidesPerView={1.25}
        freeMode={true}
        breakpoints={{
          320: { slidesPerView: 1.25, spaceBetween: 16 },
          768: { slidesPerView: 2.25, spaceBetween: 16 },
          960: { slidesPerView: 3.25, spaceBetween: 16, freeMode: false },
          1216: { slidesPerView: 4.25, spaceBetween: 24, freeMode: false },
          1440: { slidesPerView: 4.25, spaceBetween: 24, freeMode: false },
        }}
        modules={[Navigation, FreeMode]}
      >
        {children}
      </Swiper>
    </Box>
  );
}
