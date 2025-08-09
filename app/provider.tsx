"use client";
import { HeroUIProvider } from "@heroui/react";
import { FC, PropsWithChildren } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import StoreProvider from "./StoreProvider";
const queryClient = new QueryClient();
export const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <StoreProvider>
        <HeroUIProvider>{children}</HeroUIProvider>;
      </StoreProvider>
    </QueryClientProvider>
  );
};
