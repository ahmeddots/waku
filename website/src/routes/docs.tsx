import { ReactNode } from "react";
import { Sidebar } from "../components/Sidebar.js";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-row gap-4">
      <Sidebar></Sidebar>
      <div className="grow">{children}</div>
    </div>
  );
}
