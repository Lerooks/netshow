import { Video } from "@/domain/entities/video.entity";
import { Button } from "@/presentation/components/ui/button";
import { PlayArrow } from "@/presentation/icons/play-arrow.icon";
import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export interface Props {
  video: Video;
}

function HeroSlide({ video }: Props) {
  const router = useRouter();

  const handleRedirect = () => {
    router.push(`/${video.id}`);
  };

  return (
    <Box padding={{ base: "320px 24px 0 24px", md: "50px 60px 0 60px" }}>
      <VStack
        alignItems={{ base: "stretch", md: "flex-start" }}
        gap="1rem"
        marginBottom={{ base: "1rem", md: "1.5rem" }}
        maxWidth="600px"
      >
        <Text as="h3" textStyle="body-01" color="dark.text.secondary">
          {video.category.title}
        </Text>
        <Text
          as="h2"
          textStyle={{ base: "heading-h5", md: "heading-h4" }}
          color="dark.text.primary"
        >
          {video.title}
        </Text>
        <Text
          as="p"
          textStyle="subtitle"
          color="dark.text.secondary"
          width="100%"
          maxWidth="500px"
          display={{ base: "none", md: "-webkit-box" }}
          whiteSpace="normal"
          textOverflow="ellipsis"
          WebkitLineClamp={3}
          overflow="hidden"
          height="56px"
        >
          {video.description}
        </Text>
      </VStack>
      <Button
        display="flex"
        backgroundColor="common.white"
        padding="11px 22px"
        borderRadius="8px"
        maxHeight="unset"
        height="48px"
        width={{ base: "100%", md: "auto" }}
        _hover={{
          backgroundColor: "primary.main",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        }}
        onClick={handleRedirect}
      >
        <HStack gap="8px" alignItems="center">
          <PlayArrow color="common.black"></PlayArrow>
          <Text
            as="span"
            fontFamily="nunito"
            fontWeight="700"
            fontSize="16px"
            lineHeight="26px"
            letterSpacing="0px"
            color="common.black"
          >
            Reproduzir agora
          </Text>
        </HStack>
      </Button>
    </Box>
  );
}
export { HeroSlide };
