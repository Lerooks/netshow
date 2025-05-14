"use client";

import { Carousel } from "@/presentation/components/carousel/carousel";
import { useHomeStore } from "@/presentation/contexts/home.context";
import { Box, HStack, Link, Text } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import { default as NextLink } from "next/link";
import { useEffect } from "react";

export const PlaylistSection = observer(() => {
  const { playlistVideos, loadPlaylistVideos } = useHomeStore();

  useEffect(() => {
    if (playlistVideos.length === 0) {
      loadPlaylistVideos();
    }
  }, [playlistVideos.length, loadPlaylistVideos]);

  return (
    <Box
      as="section"
      background={{
        base: "linear-gradient(180deg,rgba(0, 0, 0, 1) 0%, rgba(19, 19, 19, 0) 100%)",
        md: "transparent",
      }}
      position="relative"
      className="playlist-section"
      padding={{ base: "8px 0 32px 0", md: "30px 0" }}
    >
      <Box
        padding={{ base: "16px", md: "0 60px" }}
        marginBottom={{ base: "0", md: "1rem" }}
      >
        <HStack justifyContent={{ base: "space-between", md: "flex-start" }}>
          <Text
            as="h2"
            textStyle={{ base: "heading-h6", md: "heading-h5" }}
            color="dark.text.primary"
          >
            Playlists
          </Text>
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
      <Carousel videos={playlistVideos}></Carousel>
    </Box>
  );
});
