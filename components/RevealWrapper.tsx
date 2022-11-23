import { useEffect } from "react";
import { reveal } from "../utils";

interface IProps {
  children: React.ReactNode;
}

export default function Layout({ children }: IProps) {
  useEffect(() => {
    reveal();
    window.addEventListener("scroll", reveal);
  }, []);
  return <div className="reveal">{children}</div>;
}
