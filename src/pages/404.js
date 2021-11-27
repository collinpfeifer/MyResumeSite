import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout/Layout';

const NotFound = () => {
  return (
    <Layout>
      <div style={{ height: '100vh' }}>
        <h1>Page not found</h1>
        <p>
          <Link to="/">Head home</Link>
        </p>
      </div>
    </Layout>
  );
};

export default NotFound;
