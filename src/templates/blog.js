/* eslint-disable max-len */
import React from 'react';
import Layout from '../components/Layout/Layout';
import './blog.css';
import {graphql} from 'gatsby';

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`;
const Blog = (props) => {
  return (
    <Layout page="blog">
      <div className="uk-flex uk-flex-middle uk-flex-column uk-flex-center">
        <div className='paper uk-flex uk-flex-middle uk-flex-column '>
          <h1 style={{marginTop: '3rem'}}>{props.data.markdownRemark.frontmatter.title}</h1>
          <p>{props.data.markdownRemark.frontmatter.date}</p>
          <div
            dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}}
            style={{width: '70%', display: 'block'}}
          ></div>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
