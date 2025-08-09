"use client";
import { HeroUIProvider } from "@heroui/react";
import { FC, PropsWithChildren } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import StoreProvider from "./StoreProvider";
import { Toaster } from "sonner";
const queryClient = new QueryClient();
export const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <StoreProvider>
        <Toaster />
        <HeroUIProvider>{children}</HeroUIProvider>;
      </StoreProvider>
    </QueryClientProvider>
  );
};
