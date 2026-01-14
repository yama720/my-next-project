'use client';

import Link from 'next/link';
import styles from './Menu.module.css';
import React, { useState } from 'react';
import cx from 'classnames';
import Image from 'next/image';

export default function Menu() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return (
    <>
      {/* ナビゲーション部分 */}
      <nav className={cx(styles.nav, isOpen && styles.open)}>
        <ul className={styles.items}>
          <li>
            <Link href="/">トップ</Link>
          </li>
          <li>
            <Link href="/information">お知らせ</Link>
          </li>
          <li>
            <Link href="/concept">コンセプト</Link>
          </li>
          <li>
            <Link href="/products">製品紹介</Link>
          </li>
          <li>
            <Link href="/access">アクセス</Link>
          </li>
          <li>
            <Link href="/contact">お問い合わせ</Link>
          </li>
          <li>
            <Link href="/online">オンラインストア</Link>
          </li>
        </ul>

        <button className={cx(styles.button, styles.close)} onClick={close}>
          <Image
            src="/close.svg"
            alt="閉じる"
            width={24}
            height={24}
            priority
          />
        </button>
      </nav>

      <button className={styles.button} onClick={open}>
        <Image src="/menu.svg" alt="メニュー" width={24} height={24} />
      </button>
    </>
  );
}
