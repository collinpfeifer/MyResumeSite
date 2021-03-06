/* eslint-disable max-len */
import React from 'react';
import Footer from '../Footer/Footer';
import {Helmet} from 'react-helmet';
import styles from './Layout.module.css';
import IndexHeader from '../IndexHeader';
import BlogHeader from '../BlogHeader';

const Layout = ({children, page}) => {
  return (
    <div className={styles.container}>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, height=device-height initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Andika+New+Basic&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap"
          rel="stylesheet"
        />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />

        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/uikit@3.5.17/dist/css/uikit.min.css"
        />

        <script src="https://cdn.jsdelivr.net/npm/uikit@3.5.17/dist/js/uikit.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/uikit@3.5.17/dist/js/uikit-icons.min.js"></script>

        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        />

        <script
          src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
          integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
          crossOrigin="anonymous"
        ></script>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
          integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
          crossOrigin="anonymous"
        ></script>
        <script
          src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
          integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
          crossOrigin="anonymous"
        ></script>
        <title>Collin Pfeifer</title>
      </Helmet>
      <div className={styles.content}>
        {page === 'index' ? <IndexHeader/> : <BlogHeader/>}
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
