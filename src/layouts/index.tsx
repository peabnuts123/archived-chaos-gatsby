import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';

interface Props {
  children: any;
}

const BaseLayout = ({ children }: Props) => {

  return (
    <>
      <Helmet>
        {/* <title>Archived Chaos</title> */}

        {/* <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#b91d47" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="stylesheet" href="https://use.typekit.net/oxd3yww.css"></link> */}
      </Helmet>

      <div className="Page">
        {children}
      </div>
    </>
  );
};

// export const layoutQuery = graphql`
//   fragment Layout on Query {
//   }
// `;

export default BaseLayout;
