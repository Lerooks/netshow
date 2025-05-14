import { Box, Flex } from "@chakra-ui/react";
import { Footer } from "@/presentation/components/layout/footer";
import { VideoHeader } from "@/presentation/components/layout/video-header";

export default function VideoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Flex
      direction="column"
      minHeight="100vh"
      justifyContent="space-between"
      alignItems="stretch"
    >
      <VideoHeader />
      <Box
        as="main"
        backgroundColor="dark.background.default"
        minHeight="calc(100vh - 100px)"
      >
        {children}
      </Box>
      <Footer />
    </Flex>
  );
}
