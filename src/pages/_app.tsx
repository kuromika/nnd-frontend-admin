import { AuthProvider } from "@/contexts/auth-context";
import { Main } from "@/layouts/main";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Main>
        <Component {...pageProps} />
      </Main>
    </AuthProvider>
  );
}