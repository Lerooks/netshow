import { Box, BoxProps } from "@chakra-ui/react";

export type DividerProps = BoxProps;

function Divider(props: DividerProps) {
  return (
    <Box
      as="hr"
      height="1px"
      backgroundColor="common.white"
      opacity="0.12"
      width="100%"
      {...props}
    />
  );
}

export { Divider };
