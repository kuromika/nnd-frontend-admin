import { Header } from "./header";
import { PropsWithChildren } from "react";
import { Navigation } from "./navigation";

export const Main = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex flex-col min-h-screen font-mincho">
      <Header></Header>
      <div className="flex flex-grow">
        <Navigation></Navigation>
        <main className="bg-[#0C1219] w-full">{children}</main>
      </div>
    </div>
  );
};
