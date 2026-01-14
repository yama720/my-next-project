'use client'; // ランダム処理用

import React, { useState, useEffect } from 'react';
import styles from './page.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Slider from '../_components/Slider/Slider';

type Product = {
  id: number;
  name: string;
  src: string;
  href: string;
};

export default function OnlineStorePage() {
  // オンラインストア専用のスライダー画像
  const onlineImages = [
    { id: 1, src: '/firstviewall.png', href: '/special' },
    { id: 2, src: '/firstview6.png', href: '' },
    { id: 3, src: '/firstview7.png', href: '' },
  ];

  // おすすめ商品用（全在庫リスト：ここからランダムに4つ選ばれる）
  const allRecommendedProducts: Product[] = [
    {
      id: 1,
      name: 'ガラスペン ストア限定',
      src: '/glasspendetails8.png',
      href: '/',
    },
    {
      id: 2,
      name: 'ボトルインク 翡翠',
      src: '/inkbottledetails8.png',
      href: '/',
    },
    {
      id: 3,
      name: 'レターセット 桜',
      src: '/rettersetdetails2.png',
      href: '/',
    },
    {
      id: 4,
      name: 'シーリングスタンプ ライオン',
      src: '/sealingstampdetails6.png',
      href: '/',
    },
    {
      id: 5,
      name: '万年筆 紫',
      src: '/fountainpendetails7.png',
      href: '/',
    },
    {
      id: 6,
      name: 'ラベルプリンター',
      src: '/labelprinter.png',
      href: '/',
    },
  ];

  // 新商品用配列（固定で4つ表示）
  const newArrivals = [
    {
      id: 101,
      name: '2026年新作ダイアリー',
      src: '/pocketbookdetails.png',
      href: '/',
    },
    {
      id: 102,
      name: 'オリジナルマスキングテープ',
      src: '/maskingtapedetails.png',
      href: '/',
    },
    {
      id: 103,
      name: 'シーリングワックス',
      src: '/wax4.png',
      href: '/',
    },
    {
      id: 104,
      name: 'ポチ袋 キャラクター',
      src: '/pochibagdetails2.png',
      href: '/',
    },
  ];

  // 人気シリーズ用配列
  const popularSeries = [
    {
      id: 201,
      title: '彩雫',
      text: '飾るだけで心が弾む、幻想的な文具たち。',
      src: '/about3.png',
      href: '/special',
    },
    {
      id: 202,
      title: '魔法の小瓶',
      text: '日本の四季をイメージしたインクシリーズ。',
      src: '/inkbottle2.png',
      href: '/banner',
    },
  ];

  // サイドバーのカテゴリー
  const categoryGroups = [
    {
      title: '人気・新着',
      items: ['人気ランキング', 'ストア限定商品', '新着商品'],
    },
    {
      title: '紙製品',
      items: [
        '手帳/ダイアリー',
        'レターセット/便箋',
        'シール',
        'ポチ袋',
        'ノート',
      ],
    },
    {
      title: '筆記具・文具',
      items: [
        '万年筆',
        'ガラスペン',
        'インク',
        'テープ',
        'クリップ',
        'スタンプ',
      ],
    },
    { title: 'シリーズ', items: ['彩雫', '魔法の小瓶'] },
    {
      title: 'ご案内',
      items: [
        'メールマガジン購読',
        'オンラインストア公式X',
        '公式Instagram',
        'はじめての方へ',
        '会員登録',
        'お問い合わせ',
      ],
    },
  ];

  // --- ランダム表示のための処理 ---
  const [randomProducts, setRandomProducts] = useState<Product[]>([]);

  useEffect(() => {
    // ページ読み込み時に配列をシャッフルして、最初の4つを取り出す
    const shuffled = [...allRecommendedProducts].sort(
      () => 0.5 - Math.random()
    );
    setRandomProducts(shuffled.slice(0, 4));
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        {/* 左側：サイドバーメニュー */}
        <aside className={styles.sidebar}>
          {categoryGroups.map((group, index) => (
            <div key={index} className={styles.categorySection}>
              {/* 見出し：クリック不可・背景あり */}
              <h3 className={styles.groupTitle}>{group.title}</h3>
              <ul className={styles.categoryList}>
                {group.items.map((item, itemIndex) => (
                  <li key={itemIndex} className={styles.categoryItem}>
                    <Link href="#">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </aside>

        {/* 右側：メインコンテンツ */}
        <div className={styles.content}>
          {/* スライダーセクション */}
          <section className={styles.heroSlider}>
            {/* Sliderに渡す画像リストが空でないことを確認 */}
            {onlineImages.length > 0 && <Slider images={onlineImages} />}
          </section>

          {/* おすすめ商品セクション（ランダム表示） */}
          <section className={styles.productSection}>
            <h2 className={styles.sectionTitle}>おすすめ商品</h2>
            <div className={styles.productGrid}>
              {randomProducts.length > 0 &&
                randomProducts.map((product) => (
                  <div key={product.id} className={styles.productCard}>
                    <Link href={product.href} className={styles.productLink}>
                      <div className={styles.imageBox}>
                        <Image
                          src={product.src}
                          alt={product.name}
                          fill
                          style={{ objectFit: 'cover' }}
                          sizes="(max-width: 768px) 50vw, 25vw"
                          unoptimized={true}
                        />
                      </div>
                      <p className={styles.productName}>{product.name}</p>
                    </Link>
                  </div>
                ))}
            </div>
            <div className={styles.buttonCenter}>
              <Link href="#" className={styles.moreButton}>
                おすすめ一覧へ
              </Link>
            </div>
          </section>

          {/* 新商品セクション（固定表示） */}
          <section className={styles.productSection}>
            <h2 className={styles.sectionTitle}>新商品</h2>
            <div className={styles.productGrid}>
              {newArrivals.map((product) => (
                <div key={product.id} className={styles.productCard}>
                  <Link href={product.href} className={styles.productLink}>
                    <div className={styles.imageBox}>
                      <Image
                        src={product.src}
                        alt={product.name}
                        fill
                        style={{ objectFit: 'cover' }}
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                    </div>
                    <p className={styles.productName}>{product.name}</p>
                  </Link>
                </div>
              ))}
            </div>
            <div className={styles.buttonCenter}>
              <Link href="#" className={styles.moreButton}>
                新商品一覧へ
              </Link>
            </div>
          </section>

          {/* 人気シリーズセクション */}
          <section className={styles.productSection}>
            <h2 className={styles.sectionTitle}>人気シリーズ</h2>
            <div className={styles.seriesGrid}>
              {popularSeries.map((series) => (
                <Link
                  href={series.href}
                  key={series.id}
                  className={styles.seriesCard}
                >
                  <div className={styles.seriesImageBox}>
                    <Image
                      src={series.src}
                      alt={series.title}
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <h4 className={styles.seriesTitle}>{series.title}</h4>
                  <p className={styles.seriesText}>{series.text}</p>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
