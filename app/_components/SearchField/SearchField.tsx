'use client';
// ↑ App Router（Next.js）で「このファイルはクライアント側で動くコンポーネントです」と宣言する。
// useRouter / useSearchParams などの “ブラウザで動くフック” を使うために必要。

import styles from './SearchField.module.css';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';
import { Suspense } from 'react';

function SearchFieldComponent() {
  // router.push で URL を変更してページ遷移するために使う
  const router = useRouter();

  // 現在のURLのクエリ文字列（例: ?q=react）を読むために使う
  const searchParams = useSearchParams();

  // フォーム送信（Enterキーなど）されたときの処理
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // 既定の動作（フォーム送信でページがリロードされる）を止める
    e.preventDefault();

    // この submit イベントが起きた「form」の中から name="q" の要素を探す
    // qという属性がついていた場合(ここだとinputタグ)、それをqに入れる
    const q = e.currentTarget.elements.namedItem('q');

    // namedItem は「見つからない」や「別の要素」もあり得るので安全チェック
    // ここで input 要素だと確定させる
    if (q instanceof HTMLInputElement) {
      // URL のクエリ文字列を組み立てるための便利クラス
      // 例: new URLSearchParams() → "q=react" みたいな形を作れる
      const params = new URLSearchParams();

      // 入力された文字列の前後の空白を削ってから、q にセット
      params.set('q', q.value.trim());

      // /news/search?q=xxx に移動する（ページ遷移）
      // toString:上記までに成形してきた文字列をparamsに入れる
      router.push(`/news/search?${params.toString()}`);
    }
  };

  return (
    // onSubmit は「Enter」「送信ボタン」などで発火する
    <form onSubmit={handleSubmit} className={styles.form}>
      {/* label で input を包むと、ラベルをクリックしても入力欄にフォーカスが当たる */}
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

// ==================================================
// 外側のコンポーネント（Suspenseで包む役）
// ==================================================

export default function SearchField() {
  return (
    // Suspense で囲むことで、useSearchParams の準備が整うまで待てるようにする。
    // （環境や実装によっては、これがないと警告/エラーになることがある）
    <Suspense>
      <SearchFieldComponent />
    </Suspense>
  );
}
