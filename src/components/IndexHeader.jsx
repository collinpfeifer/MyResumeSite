import React from 'react';
import Navbar from './Navbar/Navbar';
import {Link} from 'gatsby';

const IndexHeader = () => {
  return (
    <div>
      <Navbar />
      <Link to="/blog">
        <i className="button fas fa-newspaper" style={{right: '0'}} />
      </Link>
    </div>
  );
};

export default IndexHeader;
