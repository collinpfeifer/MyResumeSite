import React from 'react';
import { Link } from 'gatsby';
import Self from '../../images/self.jpg';
import Fade from 'react-reveal';

const BlogHeader = () => {
  return (
    <Fade>
      <Link to="/">
        <img
          src={Self}
          alt="self"
          style={{
            border: '4px white solid',
            left: '0',
            width: '6rem',
            borderRadius: '50%',
            margin: '1rem',
          }}
        />
      </Link>
    </Fade>
  );
};

export default BlogHeader;
