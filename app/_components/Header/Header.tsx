import React from 'react';
import styles from './Header.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Menu from '../Menu/Menu';

export default function Header() {
  return (
    <header className={styles.headerwrap}>
      {/* ロゴ部分 */}
      <div className={styles.titleWrap}>
        <h1 className={styles.title}>
          <Link href="/" className={styles.logoLink}>
            PLOTTERIE
          </Link>
        </h1>
      </div>
      <Menu />
    </header>
  );
}
