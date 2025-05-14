import { CarouselItemProps } from "@/presentation/components/carousel/carousel.types";
import { Box, Text, VStack } from "@chakra-ui/react";
import { default as NextLink } from "next/link";

function CarouselItem({ video }: CarouselItemProps) {
  if (!video) return null;

  return (
    <Box as="article">
      <NextLink href={`/${video.id}`} title={video.title}>
        <VStack gap="8px" alignItems="stretch">
          <Box
            position="relative"
            width="100%"
            height="164px"
            background="linear-gradient(107.54deg, rgba(255, 255, 255, 0.1) -0.03%, rgba(0, 0, 0, 0) 99.99%), #000000"
            backgroundSize="cover"
            backgroundPosition="center center"
            backgroundImage={`url(${video.thumbnail})`}
            _before={{
              content: '""',
              position: "absolute",
              bottom: "0",
              left: "0",
              width: "133px",
              height: "6px",
              backgroundColor: "#1E1E1E",
            }}
          ></Box>
          <VStack gap="4px" alignItems="flex-start">
            <Text textStyle="body-02" color="dark.text.secondary">
              {video.category.title}
            </Text>
            <Text
              textStyle="heading-h7"
              color="dark.text.primary"
              whiteSpace="normal"
              textOverflow="ellipsis"
              display="-webkit-box"
              WebkitLineClamp={3}
              overflow="hidden"
              maxHeight="76px"
              lineHeight="1.5"
              css={{
                WebkitBoxOrient: "vertical",
              }}
            >
              {video.title}
            </Text>
          </VStack>
        </VStack>
      </NextLink>
    </Box>
  );
}

export { CarouselItem };
