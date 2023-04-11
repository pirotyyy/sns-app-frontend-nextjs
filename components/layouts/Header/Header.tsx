import React from 'react';

import styles from './Header.module.scss';
import Link from 'next/link';

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.list}>
          <Link href='/'>
            <h4 className={styles.title}>Gatheryy</h4>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
