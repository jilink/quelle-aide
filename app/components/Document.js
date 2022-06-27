import React from "react";
import { Links, LiveReload, Meta, Scripts, ScrollRestoration } from "remix";
import { Link } from "@chakra-ui/react";
import Footer from "~/components/ui/Footer";

const Document = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta
          name="description"
          content="Quelle Aide est une application web qui permet de simplifier autant que possible le parcours pour obtenir des aides en France par exemple le RSA"
        />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <Footer />
      </body>
    </html>
  );
};

export default Document;
