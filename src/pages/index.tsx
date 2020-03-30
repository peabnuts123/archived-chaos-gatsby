import React from "react";
import { graphql, Link } from "gatsby";

interface Props {
  data: {
    allFile: {
      nodes: {
        childMarkdownRemark: {
          id: string;
          frontmatter: {
            date: string;
            subTitle: string;
            tags: string;
            title: string;
            url: string;
          };
          snippet: string;
        };
      }[];
    };
  };
}

const Index = ({ data }: Props) => {
  const posts = data.allFile.nodes.map((node) => node.childMarkdownRemark);

  return (
    <div className="container">
      <h1>Blog posts</h1>

      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <div>
              {post.frontmatter.title && (
                <Link to={`${post.frontmatter.date}-${post.frontmatter.url}`}><h2>{post.frontmatter.title}</h2></Link>
              )}

              {post.frontmatter.subTitle && (
                <h3>{post.frontmatter.subTitle}</h3>
              )}

              {post.frontmatter.date && (
                <p>Post date: {post.frontmatter.date}</p>
              )}

              <div dangerouslySetInnerHTML={{ __html: post.snippet }} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const pageQuery = graphql`
  query Index {
    allFile(
      filter: {
        sourceInstanceName: { eq: "content-posts" },
        childMarkdownRemark: { id: { ne: null } }
      },
      sort: {
        fields: childMarkdownRemark___frontmatter___date,
        order: DESC
      }
    ) {
      nodes {
        childMarkdownRemark {
          id
          frontmatter {
            date
            subTitle
            tags
            title
            url
          }
          snippet
        }
      }
    }
  }
`;

export default Index;
