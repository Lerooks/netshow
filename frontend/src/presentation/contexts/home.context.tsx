"use client";

import { homeStore } from "@/infrastructure/stores/home.store";
import { createContext, useContext } from "react";

const HomeContext = createContext(homeStore);

export function HomeProvider({
  children,
  initialState,
}: {
  children: React.ReactNode;
  initialState?: Partial<typeof homeStore>;
}) {
  if (initialState) {
    Object.assign(homeStore, initialState);
  }

  return (
    <HomeContext.Provider value={homeStore}>{children}</HomeContext.Provider>
  );
}

export function useHomeStore() {
  return useContext(HomeContext);
}
