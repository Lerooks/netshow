import { Box, Skeleton, SkeletonText, VStack } from "@chakra-ui/react";

function CarouselItemSkeleton() {
  return (
    <Box>
      <VStack gap="8px" alignItems="stretch">
        <Box
          position="relative"
          width="100%"
          height="164px"
          background="linear-gradient(107.54deg, rgba(255, 255, 255, 0.1) -0.03%, rgba(0, 0, 0, 0) 99.99%), #000000"
          _before={{
            content: '""',
            position: "absolute",
            bottom: "0",
            left: "0",
            width: "133px",
            height: "6px",
            backgroundColor: "#1E1E1E",
          }}
        >
          <Skeleton height="full" width="full" />
        </Box>
        <VStack gap="8px" alignItems="flex-start">
          <SkeletonText height="20px" width="120px" noOfLines={1} />
          <SkeletonText height="16px" gap="8px" width="100%" noOfLines={3} />
        </VStack>
      </VStack>
    </Box>
  );
}

export { CarouselItemSkeleton };
