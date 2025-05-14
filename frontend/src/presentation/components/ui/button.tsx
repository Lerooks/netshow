import type { ButtonProps as ChakraButtonProps } from "@chakra-ui/react";
import { Button as ChakraButton } from "@chakra-ui/react";
import * as React from "react";

interface ButtonLoadingProps {
  loading?: boolean;
}

export interface ButtonProps extends ChakraButtonProps, ButtonLoadingProps {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(props, ref) {
    const { loading, disabled, children, ...rest } = props;
    return (
      <ChakraButton
        disabled={loading || disabled}
        fontFamily="nunito"
        fontWeight="700"
        fontSize="16px"
        lineHeight="26px"
        letterSpacing="0px"
        borderRadius="8px"
        padding="8px 12px"
        backgroundColor="transparent"
        transition="0.3s ease"
        color="dark.text.primary"
        _hover={{
          backgroundColor: "#FFFFFF1F",
          color: "common.white",
        }}
        ref={ref}
        {...rest}
      >
        {children}
      </ChakraButton>
    );
  },
);
