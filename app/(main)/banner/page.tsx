'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export default function BannerPage() {
  // 初期値として最初のメイン画像を設定
  const [mainSrc, setMainSrc] = useState('/banner.png');

  const subImages = [
    '/banner.png',
    '/banner2.png',
    '/banner3.png',
    '/banner4.png',
    '/banner5.png',
    '/banner6.png',
  ];

  return (
    <main className={styles.container}>
      <section className={styles.textSection}>
        {/* ここに商品名（h1）を追加 */}
        <h1 className={styles.productTitle}>インク壺</h1>

        {/* パンくずリスト */}
        <nav className={styles.breadcrumb}>
          <Link href="/">ホーム</Link> ＞ インク壺
        </nav>

        <div className={styles.contentWrapper}>
          {/* 左側：画像エリア */}
          <section className={styles.imageSection}>
            <div className={styles.mainImageArea}>
              <Image
                src={mainSrc} // 【修正】固定パスではなくstateを参照
                alt="メイン画像"
                width={600}
                height={600}
                className={styles.mainImage}
                priority
              />
            </div>

            <div className={styles.subImageGrid}>
              {subImages.map((src, index) => (
                <div
                  key={index}
                  className={`${styles.subImageBtn} ${
                    mainSrc === src ? styles.active : ''
                  }`}
                  onClick={() => setMainSrc(src)} // 【追加】クリックでmainSrcを更新
                >
                  <Image
                    src={src}
                    alt={`詳細画像 ${index + 1}`}
                    width={150}
                    height={150}
                    className={styles.subImage}
                  />
                </div>
              ))}
            </div>
          </section>

          {/* 右側：テキストエリア */}
          <section className={styles.textSection}>
            <p className={styles.catchphrase}>＼色彩を操る魔法の小瓶／</p>
            <p className={styles.description}>
              一滴が創造性を刺激する ガラスペンとの相性抜群、
              <br />
              手書きの時間を豊かに。
              <br />
              季節の移ろいを表現する、限定カラーが新登場
            </p>

            <hr className={styles.divider} />

            <div className={styles.productDetails}>
              <h3>＜商品詳細＞</h3>
              <p>○限定インクボトル</p>
              <ul className={styles.itemList}>
                <li>4550480816890　萌黄</li>
                <li>4550480816937　紺碧</li>
                <li>4550480816938　茜</li>
                <li>4550480816939　黄金</li>
              </ul>
              <p className={styles.price}>各種1,800円（税込1,980円）</p>
            </div>

            <hr className={styles.divider} />

            <div className={styles.notes}>
              <p>※店舗によって品揃えが異なり、在庫がない場合がございます。</p>
              <p>※商品パッケージの説明文を読んで正しくご使用ください。</p>
              <p>※画像はイメージです実際とは異なる場合がございます。</p>
            </div>
          </section>
        </div>

        <div className={styles.footerLink}>
          <Link href="/">一覧へ戻る</Link>
        </div>
      </section>
    </main>
  );
}
