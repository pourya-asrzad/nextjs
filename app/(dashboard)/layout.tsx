import type { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div>
      dashboard header
      {children}
      dashboard footer
    </div>
  );
}
