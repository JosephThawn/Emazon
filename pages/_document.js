import React from "react";
import Document, { Head, Html, Main, NextScript } from "next/document";
import createEmotionServer from "@emotion/server/crate-instance";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="stylesheet"
            href="https;//fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <body>
            <Main />
            <NextScript />
          </body>
        </Head>
      </Html>
    );
  }
}
