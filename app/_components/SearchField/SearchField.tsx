'use client';

import styles from './SearchField.module.css';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';
import { Suspense } from 'react';

function SearchFieldComponent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const q = e.currentTarget.elements.namedItem('q');
    // qという属性がついていた場合(ここだとinputタグ)、それをqに入れる

    if (q instanceof HTMLInputElement) {
      const params = new URLSearchParams();
      // paramsをURLを扱えるようにする
      params.set('q', q.value.trim());
      // 要らん値を切る
      router.push(`/news/search?${params.toString()}`);
      // toString:上記までに成形してきた文字列をparamsに入れる
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label className={styles.search}>
        <Image
          src="/search.svg"
          alt="検索"
          width={16}
          height={16}
          loading="eager"
        />
        <input
          type="text"
          name="q"
          defaultValue={searchParams.get('q') ?? undefined}
          placeholder="キーワードを入力"
          className={styles.searchInput}
        />
      </label>
    </form>
  );
}

export default function SearchField() {
  return (
    <Suspense>
      <SearchFieldComponent />
    </Suspense>
  );
}
