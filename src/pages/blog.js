/* eslint-disable max-len */
import React from 'react';
import Layout from '../components/Layout/Layout';
import {graphql, useStaticQuery, Link} from 'gatsby';
import {posts, post} from '../css/blog.module.scss';

const BlogPage = () => {
  const posts = useStaticQuery(graphql`
      query {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                title
                date
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `);
  return (
    <>
      <Layout page='blog'>
        <div className='uk-flex uk-flex-column uk-flex-center uk-flex-middle'>
          <h1>Blog</h1>
          <ol className={posts}>
            {posts.allMarkdownRemark.edges.map((post) => {
              return (
                <li className={post}>
                  <Link to={`/blog/${post.node.fields.slug}`}>
                    <h2>{post.node.frontmatter.title}</h2>
                    <p>{post.node.frontmatter.date}</p>
                  </Link>
                </li>
              );
            })}
          </ol>
        </div>
      </Layout>
    </>
  );
};

export default BlogPage;
