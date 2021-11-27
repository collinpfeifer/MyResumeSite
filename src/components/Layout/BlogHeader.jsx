import React from 'react';
import {Link} from 'gatsby';
import Self from '../../images/self.jpg'

const BlogHeader = () => {
  return (
    <div>
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
    </div>
  );
};

export default BlogHeader;
