import React from 'react';
import { graphql } from 'gatsby';

import { LayoutPageModel } from '@app/types/layout-page';

export interface PageModel extends LayoutPageModel {
  markdownRemark: {
    html: string;
    frontmatter: {
      date: string;
      url: string;
      title: string;
      subTitle: string;
      tags: string[];
    };
  };
}

interface Props {
  data: PageModel;
};

const Page = ({ data }: Props) => {
  const page = data.markdownRemark;

  if (page) {
    return (
      <>
        <div className="container">
          {page.frontmatter.title && (
            <h1>{page.frontmatter.title}</h1>
          )}

          {page.frontmatter.subTitle && (
            <h2>{page.frontmatter.subTitle}</h2>
          )}

          <div dangerouslySetInnerHTML={{ __html: page.html }}></div>
        </div>
      </>
    );
  } else {
    return (
      /* @TODO do something better with this */
      <pre><code>No page to render!</code></pre>
    );
  }
};

export const pageQuery = graphql`
  query Page($fileAbsolutePath: String!) {
    # ...Layout
    markdownRemark(fileAbsolutePath: {eq: $fileAbsolutePath}) {
      html
      frontmatter {
        date
        url
        title
        tags
        subTitle
      }
    }
  }
`;

export default Page;