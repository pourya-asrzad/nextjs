import type { PropsWithChildren } from "react";
import { Header } from "../layouts/Header";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div>
      <Header />
      {children}
      website footer
    </div>
  );
}
