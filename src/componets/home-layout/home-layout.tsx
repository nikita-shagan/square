import "./home-layout.css"
import { ReactNode } from "react";

export default function HomeLayout({ children }: { children: ReactNode }) {
  return <div className="home-layout">{children}</div>
}
