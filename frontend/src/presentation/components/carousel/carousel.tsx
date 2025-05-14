"use client";

import { SwiperSlide } from "swiper/react";
import { CarouselProps } from "./carousel.types";
import { CarouselItem } from "@/presentation/components/carousel/carousel-item";
import { CarouselWrapper } from "@/presentation/components/carousel/carousel-wrapper";
import { CarouselItemSkeleton } from "@/presentation/components/carousel/carousel-item-skeleton";

import "swiper/css";
import "./carousel.styles.css";

export function Carousel({ videos = [] }: CarouselProps) {
  if (!videos || videos.length === 0) {
    const skeletonItems = Array(6).fill(null);

    return (
      <CarouselWrapper>
        {skeletonItems.map((_, index) => (
          <SwiperSlide key={`skeleton-${index}`}>
            <CarouselItemSkeleton />
          </SwiperSlide>
        ))}
      </CarouselWrapper>
    );
  }

  return (
    <CarouselWrapper>
      {videos.map((video) => (
        <SwiperSlide key={video.id}>
          <CarouselItem video={video} />
        </SwiperSlide>
      ))}
    </CarouselWrapper>
  );
}
