import { useRouter } from "next/router";
import { Navbar } from "react-bootstrap";

import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <main>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand onClick={() => router.push("/fruits")}>
          Fruits
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Navbar>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
