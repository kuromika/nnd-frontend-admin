import { Header } from "./header";
import { PropsWithChildren } from "react";

export const Main = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header></Header>
      {children}
    </>
  );
};
