import { Box, Skeleton, SkeletonText, VStack } from "@chakra-ui/react";

function HeroLoadingSkeleton() {
  return (
    <Box padding={{ base: "320px 24px 0 24px", md: "50px 60px 0 60px" }}>
      <VStack
        alignItems={{ base: "stretch", md: "flex-start" }}
        gap="1rem"
        marginBottom={{ base: "1rem", md: "1.5rem" }}
        maxWidth="600px"
      >
        <SkeletonText width="105px" height="20px" noOfLines={1}></SkeletonText>
        <SkeletonText
          width={{ base: "100%", md: "600px" }}
          height="40px"
          noOfLines={2}
        ></SkeletonText>
        <SkeletonText
          width={{ base: "calc(100% - 24px)", md: "500px" }}
          height="28px"
          noOfLines={2}
        ></SkeletonText>
      </VStack>
      <Skeleton width={{ base: "100%", md: "200px" }} height="48px"></Skeleton>
    </Box>
  );
}
export { HeroLoadingSkeleton };
