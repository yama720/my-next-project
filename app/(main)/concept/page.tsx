import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

import Slider from '../../_components/Slider/Slider';

export default function ConceptPage() {
  const conceptImages = [
    '/about3.png',
    '/firstview6.png',
    '/inkbottledetails18.png',
    '/coloredpencils.png',
  ];

  return (
    <main className={styles.main}>
      <Slider images={conceptImages} />

      <section className={styles.intro}>
        <h2 className={styles.introTitle}>The Art of Every Plot.</h2>
        <h3 className={styles.introP}>日常に、物語を書き添える。</h3>
        <p className={styles.introText}>
          真っ白なノートを開くとき。ペン先を紙に落とすとき。 <br />
          そこにはあなただけの新しい物語（PLOT）が始まっています。
          <br />
          PLOTTERIEは、そんな『書く』というささやかな
          <br />
          芸術を愛する人のための、街の小さなギャラリーです。
          <br />
        </p>
      </section>

      {/* 特徴紹介 */}
      <section className={styles.features}>
        <article className={styles.featureItem}>
          <div className={styles.imageWrapper}>
            <Image
              src="/glasspen11.png"
              alt="触れる喜び"
              width={600}
              height={400}
              objectFit="cover"
            />
          </div>
          <div className={styles.featureContent}>
            <h3>触れる喜び (Touch)</h3>
            <p>紙の質感やペンの重み。五感に響く道具を選んでいます。</p>
          </div>
        </article>

        <article className={styles.featureItem}>
          <div className={styles.imageWrapper}>
            <Image
              src="/about2.png"
              alt="時を刻む道具"
              width={600}
              height={400}
              objectFit="cover"
            />
          </div>
          <div className={styles.featureContent}>
            <h3>時を刻む道具 (Age)</h3>
            <p>使い込むほどに手に馴染み、自分だけの一本に育つもの。</p>
          </div>
        </article>

        <article className={styles.featureItem}>
          <div className={styles.imageWrapper}>
            <Image
              src="/glasspen12.png"
              alt="時を刻む道具"
              width={600}
              height={400}
              objectFit="cover"
            />
          </div>
          <div className={styles.featureContent}>
            <h3>時を刻む道具 (Age)</h3>
            <p>
              機能性だけでなく、眺めるだけで心が動く。アートのような佇まい。
            </p>
          </div>
        </article>
      </section>

      {/* メッセージ */}
      <section className={styles.intro}>
        <h2 className={styles.introTitle}>文具がもたらす価値 (Your Story)</h2>
        <p className={styles.introText}>
          忙しい毎日のなかで、立ち止まって自分と向き合う数分間。
          <br />
          お気に入りの文具があれば、 その時間はもっと豊かになります。
          <br />
          計画を立てる、手紙を書く、ただ思いを書き出す。
          <br />
          あなたのPLOTを彩る相棒を、ここで見つけてください。
          <br />
        </p>
      </section>

      {/* リンクエリア */}
      <section className={styles.linkContainer}>
        <Link href="/shop" className={styles.shopLink}>
          通販サイトへ
        </Link>
      </section>
    </main>
  );
}
