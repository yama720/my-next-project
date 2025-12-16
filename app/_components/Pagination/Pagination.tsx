import { NEWS_LIST_LIMIT } from '@/app/_constants';
import styles from './Pagination.module.css';

type Props = {
  totalCount: number;
  current?: number;
  //   currentがあった場合はnumber型で
  basePath?: string;
};

import React from 'react';
import Link from 'next/link';

// current 初期値は1
export default function Pagination({
  totalCount,
  current = 1,
  basePath = '/news',
}: Props) {
  const pages = Array.from(
    { length: Math.ceil(totalCount / NEWS_LIST_LIMIT) },
    (_, i) => i + 1
    // 配列の値をアンダーバー、iはインデックス番号
  );

  return (
    <nav>
      <ul className={styles.container}>
        {pages.map((p) => (
          <li className={styles.list} key={p}>
            {/* currentの値が配列のpの番号と一致していなかった時 */}
            {current !== p ? (
              <Link href={`/${basePath}/p/${p}`} className={styles.item}>
                {p}
              </Link>
            ) : (
              <span className={`${styles.item} ${styles.current}`}>{p}</span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
