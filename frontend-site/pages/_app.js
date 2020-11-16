// Importando bootstrap de forma global no Nextjs
// https://nextjs.org/docs/basic-features/built-in-css-support

import "bootstrap/dist/css/bootstrap.min.css";

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
