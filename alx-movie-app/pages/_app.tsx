// pages/_app.tsx
import type { AppProps } from 'next/app';
import '../styles/globals.css'; // if you don't have this file, it's OK to remove the import

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
