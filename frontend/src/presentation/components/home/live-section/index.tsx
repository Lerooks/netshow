"use client";

import { Carousel } from "@/presentation/components/carousel/carousel";
import { useHomeStore } from "@/presentation/contexts/home.context";
import { Box, Circle, HStack, Link, Text } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import { default as NextLink } from "next/link";
import { useEffect } from "react";

export const LiveSection = observer(() => {
  const { liveVideos, loadLiveVideos } = useHomeStore();

  useEffect(() => {
    if (liveVideos.length === 0) {
      loadLiveVideos();
    }
  }, [liveVideos.length, loadLiveVideos]);

  return (
    <Box
      as="section"
      background={{
        base: "linear-gradient(180deg,rgba(0, 0, 0, 1) 0%, rgba(19, 19, 19, 0) 100%)",
        md: "#0D0D0D",
      }}
      position="relative"
      className="live-section"
      padding={{ base: "8px 0", md: "30px 0" }}
    >
      <Box
        padding={{ base: "16px", md: "0 60px" }}
        marginBottom={{ base: "0", md: "1rem" }}
      >
        <HStack justifyContent={{ base: "space-between", md: "flex-start" }}>
          <HStack>
            <Text
              as="h2"
              textStyle={{ base: "heading-h6", md: "heading-h5" }}
              color="dark.text.primary"
            >
              Ao vivo
            </Text>
            <Circle size="8px" background="error.light"></Circle>
          </HStack>
          <Link
            display={{ base: "block", md: "none" }}
            as={NextLink}
            href="/"
            color="primary.main"
            fontFamily="inter"
            fontWeight="500"
            fontSize="13px"
            lineHeight="22px"
            letterSpacing="0px"
            _hover={{ textDecoration: "none" }}
          >
            Veja mais
          </Link>
        </HStack>
      </Box>
      <Carousel videos={liveVideos}></Carousel>
    </Box>
  );
});
