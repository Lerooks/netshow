import { Container } from "@/presentation/components/section/container";
import { Box, HStack, Link, List, Stack, Tag, Text } from "@chakra-ui/react";
import { default as NextLink } from "next/link";

function Footer() {
  return (
    <Box
      as="footer"
      backgroundColor="dark.background.default"
      borderTop="1px solid #292929"
      padding={{ base: "24px 0", md: "16px 0 96px 0" }}
    >
      <Container>
        <Stack
          gap="1rem"
          flexDirection={{ base: "column", md: "row" }}
          padding="0"
          justifyContent={{ base: "center", md: "space-between" }}
          alignItems={{ base: "center", md: "center" }}
        >
          <Stack
            flexDirection={{ base: "column", md: "row" }}
            alignItems={{ base: "center", md: "center" }}
            justifyContent={{ base: "center", md: "space-between" }}
          >
            <Text
              fontFamily="nunito"
              fontWeight="400"
              fontSize="14px"
              lineHeight="129%"
              letterSpacing="-2%"
              color="dark.text.secondary"
            >
              © Flow 2023
            </Text>
            <List.Root
              display="flex"
              flexDirection={{ base: "column", md: "row" }}
              justifyContent={{ base: "center", md: "space-between" }}
              alignItems={{ base: "center", md: "center" }}
              listStyleType="none"
              gap="1rem"
            >
              <List.Item
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Link
                  as={NextLink}
                  href="/"
                  fontFamily="nunito"
                  fontWeight="700"
                  fontSize="12px"
                  lineHeight="166%"
                  letterSpacing="0px"
                  textDecoration="underline"
                  textDecorationStyle="solid"
                  color="dark.text.primary"
                  padding="0.25rem 1rem"
                  textAlign="center"
                >
                  Política de Privacidade
                </Link>
              </List.Item>
              <List.Item
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Link
                  asChild
                  fontFamily="nunito"
                  fontWeight="700"
                  fontSize="12px"
                  lineHeight="166%"
                  letterSpacing="0px"
                  textDecoration="underline"
                  textDecorationStyle="solid"
                  color="dark.text.primary"
                  padding="0.25rem 1rem"
                  textAlign="center"
                >
                  <NextLink href="/">Termos de Uso</NextLink>
                </Link>
              </List.Item>
            </List.Root>
          </Stack>
          <HStack gap="8px">
            <Text
              fontFamily="nunito"
              fontWeight="400"
              fontSize="12px"
              lineHeight="166%"
              letterSpacing="0px"
              color="common.white"
            >
              Desenvolvido por{" "}
              <Box as="strong" fontWeight="700">
                Netshow.me
              </Box>
            </Text>
            <Tag.Root
              padding="2px 6px"
              borderRadius="3px"
              borderWidth="1px"
              borderColor="#000000"
              borderStyle="solid"
              backgroundColor="primary.main"
              boxShadow="none"
            >
              <Tag.Label
                fontFamily="inter"
                fontWeight="600"
                fontSize="11px"
                lineHeight="120%"
                letterSpacing="0%"
                verticalAlign="middle"
                textTransform="uppercase"
                color="common.white"
              >
                Beta
              </Tag.Label>
            </Tag.Root>
          </HStack>
        </Stack>
      </Container>
    </Box>
  );
}

export { Footer };
