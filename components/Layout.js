import React from 'react';
import Link from "next/link";
import Head from 'next/head'
import styles from '../styles/Header.module.css'
import footerStyles from '../styles/Footer.module.css'

const Layout = ({ children, title }) => {
  // const head = !process.env.NODE_ENV || process.env.NODE_ENV != 'development';

  return (
    <div>
      <Head>
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-131544780-3"></script>
            <script
              async
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
              
                gtag('config', 'UA-131544780-3');`
              }}
            />
      </Head>
      <div className={styles.header}>
        <div className={styles.titleWrapper}>
          <div className={styles.title}>
            <span className={styles.hypercode}>
              <Link href="/">
                <a style={{textDecoration: 'none', color: 'black'}}>
                  hypercode.it
                </a>
              </Link>
            </span>
          </div>
        </div>
      </div>

      {children}

      <div className={footerStyles['footer-section']}>
        &copy; 2020 hypercode.it
      </div>
    </div>
  )
}

export default Layout;