import { PersonFilled } from "@/presentation/icons/person-filled.icon";
import { Search } from "@/presentation/icons/search.icon";
import { Box, Button, HStack, Image, Link, List } from "@chakra-ui/react";
import { default as NextLink } from "next/link";

function VideoHeader() {
  return (
    <Box
      as="header"
      height={{ base: "72px", md: "80px" }}
      backgroundColor={{ base: "#262626", md: "#3D3D3D" }}
      position="relative"
      width="100%"
      top="0"
      zIndex={2}
    >
      <HStack
        justifyContent="space-between"
        height="100%"
        padding={{ base: "16px", md: "20px 60px" }}
      >
        <Box display={{ base: "block", md: "none" }} width="32px">
          <Button
            display="flex"
            flexDirection="column"
            gap="4px"
            backgroundColor="transparent"
            padding="0"
          >
            <Box width="24px" height="2px" background="dark.text.secondary" />
            <Box width="24px" height="2px" background="dark.text.secondary" />
            <Box width="24px" height="2px" background="dark.text.secondary" />
          </Button>
        </Box>
        <Link asChild _hover={{ textDecoration: "none" }} flexShrink={0}>
          <NextLink href="/">
            <Image
              src="/assets/images/brand/logo.svg"
              alt="Logo"
              title="Logo"
            />
          </NextLink>
        </Link>
        <Box as="nav" display={{ base: "none", md: "block" }}>
          <List.Root
            display="flex"
            flexDirection="row"
            listStyleType="none"
            gap={{ base: "0.5rem", lg: "16px" }}
          >
            <List.Item flexShrink={0}>
              <Link
                asChild
                textStyle="header-link"
                color="dark.text.primary"
                padding={{ base: "0.25rem", lg: "0.25rem 1rem" }}
                _hover={{ textDecoration: "none" }}
              >
                <NextLink href="/">Categorias</NextLink>
              </Link>
            </List.Item>
            <List.Item flexShrink={0}>
              <Link
                asChild
                textStyle="header-link"
                color="dark.text.primary"
                padding={{ base: "0.25rem", lg: "0.25rem 1rem" }}
                _hover={{ textDecoration: "none" }}
              >
                <NextLink href="/">Assuntos</NextLink>
              </Link>
            </List.Item>
            <List.Item flexShrink={0}>
              <Link
                asChild
                textStyle="header-link"
                color="dark.text.primary"
                padding={{ base: "0.25rem", lg: "0.25rem 1rem" }}
                _hover={{ textDecoration: "none" }}
              >
                <NextLink href="/">Outras páginas</NextLink>
              </Link>
            </List.Item>
            <List.Item flexShrink={0}>
              <Link
                asChild
                textStyle="header-link"
                color="dark.text.primary"
                padding={{ base: "0.25rem", lg: "0.25rem 1rem" }}
                _hover={{ textDecoration: "none" }}
              >
                <NextLink href="/">Minha Lista</NextLink>
              </Link>
            </List.Item>
            <List.Item flexShrink={0}>
              <Link
                asChild
                textStyle="header-link"
                color="dark.text.primary"
                padding={{ base: "0.25rem", lg: "0.25rem 1rem" }}
                _hover={{ textDecoration: "none" }}
              >
                <NextLink href="/">Lives</NextLink>
              </Link>
            </List.Item>
            <List.Item flexShrink={0}>
              <Link
                asChild
                textStyle="header-link"
                color="dark.text.primary"
                padding={{ base: "0.25rem", lg: "0.25rem 1rem" }}
                _hover={{ textDecoration: "none" }}
              >
                <NextLink href="/">Fórum</NextLink>
              </Link>
            </List.Item>
          </List.Root>
        </Box>
        <List.Root
          display="flex"
          flexDirection="row"
          listStyleType="none"
          gap={{ base: "8px", sm: "24px" }}
        >
          <List.Item flexShrink={0}>
            <Button
              width="40px"
              height="40px"
              borderRadius="50%"
              background="transparent"
            >
              <Search color="common.white" />
            </Button>
          </List.Item>
          <List.Item flexShrink={0}>
            <Button
              width="40px"
              height="40px"
              borderRadius="50%"
              background="gray.600"
            >
              <PersonFilled color="#121212" />
            </Button>
          </List.Item>
        </List.Root>
      </HStack>
    </Box>
  );
}

export { VideoHeader };
