import React from 'react';
import {Link} from 'gatsby';
import Self from './Welcome/self.jpg';

const BlogHeader = () => {
  return (
    <div>
      <Link to="/blog">
        <i
          className="button fas fa-paper-plane"
          style={{right: '0', textDecoration: 'none', color: 'black'}}
        />
      </Link>
      <Link to="/">
        <img
          src={Self}
          alt="self"
          style={{
            border: '3px black solid',
            left: '0',
            width: '6rem',
            borderRadius: '50%',
            margin: '1rem',
          }}
        />
      </Link>
    </div>
  );
};

export default BlogHeader;
