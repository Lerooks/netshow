"use client";

import { Box } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { observer } from "mobx-react-lite";
import { HeroSlide } from "@/presentation/components/home/hero-banner/hero-slide";
import { HeroLoadingSkeleton } from "./hero-loading-skeleton";

import "swiper/css";
import "./hero-banner.styles.css";
import { useHomeStore } from "@/presentation/contexts/home.context";

export const HeroBanner = observer(() => {
  const { overTheCastVideos } = useHomeStore();

  return (
    <Box
      as="section"
      className="hero-banner"
      padding="0"
      paddingTop={{ base: "72px", md: "80px" }}
      paddingBottom={{ base: "48px", md: "80px" }}
      bg="common.black"
      position="relative"
    >
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        pagination
        modules={[Pagination]}
      >
        {!overTheCastVideos.length ? (
          <SwiperSlide>
            <HeroLoadingSkeleton />
          </SwiperSlide>
        ) : (
          overTheCastVideos?.map((video) => (
            <SwiperSlide key={video.id}>
              <HeroSlide video={video} />
            </SwiperSlide>
          ))
        )}
      </Swiper>
    </Box>
  );
});
