import React from 'react';
import Link from 'next/link';
import styles from './OnlineHeader.module.css';
import { Search, Heart, User, ShoppingCart, HelpCircle } from 'lucide-react';

export default function OnlineHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* 左側：ロゴ */}
        <div className={styles.logoSection}>
          <Link href="/online">
            <h1 className={styles.logoText}>
              PLOTTERIE <span className={styles.subLogo}>ONLINE STORE</span>
            </h1>
          </Link>
        </div>

        {/* 右側：ナビゲーション・検索 */}
        <div className={styles.navSection}>
          {/* アイコン類 */}
          <div className={styles.iconMenu}>
            <Link href="#" title="ヘルプ">
              <HelpCircle size={22} />
            </Link>
            <Link href="#" title="お気に入り">
              <Heart size={22} />
            </Link>
            <Link href="#" title="マイページ">
              <User size={22} />
            </Link>
            <Link href="#" title="カート">
              <ShoppingCart size={22} />
            </Link>
          </div>

          {/* 検索バー */}
          <div className={styles.searchBar}>
            <input
              type="text"
              placeholder="キーワードで探す"
              className={styles.searchInput}
            />
            <button className={styles.searchButton}>
              <Search size={18} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
