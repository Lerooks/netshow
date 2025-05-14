import { Box, Flex } from "@chakra-ui/react";
import { HomeHeader } from "@/presentation/components/layout/home-header";
import { Footer } from "@/presentation/components/layout/footer";

export default function HomeLayout({
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
      <HomeHeader />
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
