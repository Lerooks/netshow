"use client";

import { system } from "@/presentation/config/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

export type Props = PropsWithChildren;

export function Provider({ children }: Props) {
  return <ChakraProvider value={system}>{children}</ChakraProvider>;
}
