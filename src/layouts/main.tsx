import { Header } from "./header";
import { PropsWithChildren } from "react";
import { Navigation } from "./navigation";

export const Main = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex flex-col font-mincho min-h-screen bg-[#0C1219]">
      <Header></Header>
      <div className="flex flex-grow flex-col md:flex-row">
        <Navigation></Navigation>
        <main className="flex-grow">{children}</main>
      </div>
    </div>
  );
};
