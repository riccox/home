import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Providers } from "../provider";
import "react-tooltip/dist/react-tooltip.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <Component {...pageProps} />
    </Providers>
  );
}
