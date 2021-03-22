import App from "next/app";
import Head from "next/head";
import React from "react";

import "../styles/global.css";

export default class CustomApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />

          <title>Evandro Sasse - Full stack developer</title>
          <meta name="description" content="Mostly focused on Rails. Also a React, Python, and UX enthusiast." />
          <link rel="canonical" href="https://evandro.sasse.it/" />
          <meta name="robots" content="index, follow" />

          <meta property="og:title" content="Evandro Sasse - Full stack developer" />
          <meta property="og:url" content="https://evandro.sasse.it/" />
          <meta property="og:description" content="Mostly focused on Rails. Also a React, Python, and UX enthusiast." />
          <meta property="og:image" content="/profile.jpg" />
          <meta property="og:image:width" content="200" />
          <meta property="og:image:height" content="200" />
          <meta property="og:type" content="profile" />
          <meta property="profile:first_name" content="Evandro" />
          <meta property="profile:last_name" content="Sasse" />
          <meta property="profile:username" content="evsasse" />
          <meta property="profile:gender" content="male" />

          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />

          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          ></link>

          <script async defer data-domain="evandro.sasse.it" src="https://plausible.io/js/plausible.js"></script>
        </Head>

        <Component {...pageProps} />
      </>
    );
  }
}
