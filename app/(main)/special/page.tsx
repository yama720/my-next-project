import Slider from '@/app/_components/Slider/Slider';
import styles from './page.module.css';

export default function SpecialPage() {
  const TopImages = [
    '/about3.png',
    '/firstview4.png',
    '/firstview6.png',
    '/glasspen.png',
    '/glasspen11.png',
    '/glasspen12.png',
    '/glasspenall.png',
  ];

  return (
    <main className={styles.main}>
      <Slider images={TopImages} />

      <section className={styles.intro}>
        <h2 className={styles.introTitle}>
          ガラスペンの入門に <br />
          「彩雫」
        </h2>
        <p className={styles.introText}>
          ファンの間で注目されている「彩雫」。 <br />
          相性の良いインクと合わせて、ガラスペンデビューしてみませんか。
        </p>
      </section>

      {/* 各項目 */}
      <section className={styles.categoryNav}>
        <div className={styles.navItem}>
          <div className={styles.circleImage}>
            <img src="/about2.png" alt="ABOUT" />
          </div>
          <span className={styles.navText}>ABOUT</span>
        </div>

        <div className={styles.navItem}>
          <div className={styles.circleImage}>
            <img src="/howtouse3.png" alt="HOWTOUSE" />
          </div>
          <span className={styles.navText}>HOW TO USE</span>
        </div>

        <div className={styles.navItem}>
          <div className={styles.circleImage}>
            <img src="/about3.png" alt="LINEUP" />
          </div>
          <span className={styles.navText}>LINEUP</span>
        </div>

        <div className={styles.navItem}>
          <div className={styles.circleImage}>
            <img src="/inkbottledetails18.png" alt="Q&A" />
          </div>
          <span className={styles.navText}>Q&A</span>
        </div>
      </section>

      {/* ABOUT */}
      <section className={styles.intro}>
        <h2 className={styles.introTitle}>ABOUT</h2>
        <p className={styles.introText}>
          一筆ごとに、インクの色と光のきらめきを楽しむ。 <br />
          日常に彩りを与える、あなただけのガラスペンです。
        </p>
      </section>

      <section className={styles.galleryGrid}>
        <div className={styles.gridItem}>
          <img src="/about2.png" alt="ABOUT1" />
          <span className={styles.aboutText}>
            なめらかな書き心地が、
            <br />
            文字を書く楽しさを深めます
          </span>
        </div>
        <div className={styles.gridItem}>
          <img src="/about1.png" alt="ABOUT2" />
          <span className={styles.aboutText}>
            お手入れ簡単 <br />
            水でさっと洗い流すだけ
          </span>
        </div>
        <div className={styles.gridItem}>
          <img src="/about3.png" alt="ABOUT3" />
          <span className={styles.aboutText}>
            飾っても美しい、
            <br />
            まるで芸術品のような輝き
          </span>
        </div>
        <div className={styles.gridItem}>
          <img src="/about4.png" alt="ABOUT4" />
          <span className={styles.aboutText}>
            数秒で色替えOK！ <br />
            インクバリエーションに対応
          </span>
        </div>
      </section>

      {/* HOW TO USE */}
      <section className={styles.wideBanner}>
        <img src="/howtousetop.png" alt="HOW_TO_USE TOP画像" />
      </section>

      <section className={styles.intro}>
        <h2 className={styles.introTitle}>HOW TO USE</h2>
        <p className={styles.introText}>
          つけペンならではの手軽さで、多彩なインクを自由に表現。 <br />
          すぐに始められる、シンプルで美しい使い方をご紹介します。
        </p>
      </section>

      {/* グリッド */}
      <section className={styles.galleryGrid}>
        <div className={styles.gridItem}>
          <img src="/howtouse2.png" alt="HOW_TO_USE1" />
          <span className={styles.aboutText}>日記・記録</span>
        </div>
        <div className={styles.gridItem}>
          <img src="/howtouse3.png" alt="HOW_TO_USE2" />
          <span className={styles.aboutText}>インク選び</span>
        </div>
        <div className={styles.gridItem}>
          <img src="/howtouse4.png" alt="HOW_TO_USE3" />
          <span className={styles.aboutText}>スケッチ・イラスト</span>
        </div>
        <div className={styles.gridItem}>
          <img src="/howtouse.png" alt="HOW_TO_USE4" />
          <span className={styles.aboutText}>手紙・メッセージ</span>
        </div>
      </section>

      {/* LINEUP */}
      <section className={styles.lineupSection}>
        <h2 className={styles.introTitle}>LINEUP</h2>

        {/* --- 限定カラー：上1枚、下2枚 --- */}
        <div className={styles.lineupCategory}>
          <h3 className={styles.categoryTitle}>限定カラー</h3>
          <div className={styles.lineupGridThree}>
            <div className={styles.itemLarge}>
              <img src="/glasspendetails.png" alt="Limited Top" />
            </div>
            <div className={styles.itemSmall}>
              <img src="/glasspendetails3.png" alt="Limited Bottom1" />
            </div>
            <div className={styles.itemSmall}>
              <img src="/glasspendetails2.png" alt="Limited Bottom2" />
            </div>
          </div>
        </div>

        {/* --- 定番カラー：2列 --- */}
        <div className={styles.lineupCategory}>
          <h3 className={styles.categoryTitle}>定番カラー</h3>
          <div className={styles.lineupGrid}>
            <div className={styles.lineupItem}>
              <img src="/glasspendetails6.png" alt="Standard1" />
            </div>
            <div className={styles.lineupItem}>
              <img src="/glasspendetails7.png" alt="Standard2" />
            </div>
            <div className={styles.lineupItem}>
              <img src="/glasspendetails4.png" alt="Standard3" />
            </div>
            <div className={styles.lineupItem}>
              <img src="/glasspendetails5.png" alt="Standard4" />
            </div>
          </div>
        </div>

        {/* --- オンラインストア限定 --- */}
        <div className={styles.lineupCategory}>
          <h3 className={styles.categoryTitle}>オンラインストア限定</h3>
          <div className={styles.lineupSingle}>
            <div className={styles.lineupItem}>
              <span className={styles.limitedBadge}>限定</span>
              <img src="/glasspendetails8.png" alt="Online Limited" />
            </div>
          </div>
        </div>
      </section>

      {/* アコーディオン（Q&A） */}
      <section className={styles.faqSection}>
        <div className={styles.accordionContainer}>
          <details className={styles.details}>
            <summary className={styles.summary}>Q. ショッピングガイド</summary>
            <div className={styles.content}>
              <p>A. お届けはご注文から3営業日以内に出荷いたします。</p>
            </div>
          </details>
          <details className={styles.details}>
            <summary className={styles.summary}>Q. お手入れの注意点</summary>
            <div className={styles.content}>
              <p>
                A.
                ペン先は非常に繊細ですので、硬いものにぶつけないようご注意ください。
              </p>
            </div>
          </details>
          <details className={styles.details}>
            <summary className={styles.summary}>
              Q. サイズを教えてください。
            </summary>
            <div className={styles.content}>
              <p>A. H152×W115×D27mm</p>
            </div>
          </details>
          <details className={styles.details}>
            <summary className={styles.summary}>
              Q. 重さを教えてください。
            </summary>
            <div className={styles.content}>
              <p>A. 約325g (本体のみ)</p>
            </div>
          </details>
        </div>
      </section>
    </main>
  );
}
