import { Container as ChakraContainer, ContainerProps } from "@chakra-ui/react";

export type Props = ContainerProps;

function Container({ children, ...props }: Props) {
  return (
    <ChakraContainer
      paddingLeft={{ base: "16px", md: "60px" }}
      paddingRight={{ base: "24px", md: "60px" }}
      maxWidth={{
        base: "100%",
        md: "100%",
        lg: "100%",
        xl: "100%",
        "2xl": "1246px",
      }}
      width={{
        base: "100%",
        md: "100%",
        lg: "100%",
        xl: "100%",
        "2xl": "1246px",
      }}
      {...props}
    >
      {children}
    </ChakraContainer>
  );
}

export { Container };
