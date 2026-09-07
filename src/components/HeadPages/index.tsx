import React from "react";
import Head from "next/head";

const SITE_URL = "https://pedrolopes.tech";
const DEFAULT_TITLE = "Pedro Lopes | Software Developer & Designer";
const DEFAULT_DESCRIPTION =
  "Portfólio de Pedro Lopes — projetos, stack e trabalhos como desenvolvedor e designer.";
const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`;

interface IHeadPagesProps {
  title?: string;
  description?: string;
  image?: string;
  /** Caminho da página a partir da raiz, ex: "/Project" */
  path?: string;
}

const HeadPages = ({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  image = DEFAULT_IMAGE,
  path = "",
}: IHeadPagesProps) => {
  const url = `${SITE_URL}${path}`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />

      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <link rel="apple-touch-icon" href="/logo192.png" />
      <link rel="manifest" href="/manifest.json" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  );
};

export default HeadPages;
