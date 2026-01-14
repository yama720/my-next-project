import React from 'react';
import styles from './Access.module.css';

export default function AccessPage() {
  return (
    <main className={styles.main}>
      <div className={styles.inner}>
        <section className={styles.container}>
          <div className={styles.headerFlex}>
            <h2 className={styles.heading}>Store Access</h2>
            <div className={styles.line}></div>
          </div>
        </section>

        <div className={styles.content}>
          {/* 左側：Googleマップ */}
          <div className={styles.mapWrapper}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.6272506642735!2d135.1932375762283!3d34.6893450841262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60008ee4f3750001%3A0xe54e63f5f3e0c03!2z5pel5pys55Sf5ZG95LiJ5a6u6aeF5YmN44OT44Or!5e0!3m2!1sja!2sjp!4v1700000000000"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </div>

          {/* 右側：住所情報 */}
          <div className={styles.infoWrapper}>
            <h3 className={styles.infoTitle}>住所</h3>
            <div className={styles.addressDetails}>
              <p>〒651-0088</p>
              <p>兵庫県神戸市中央区小野柄通7丁目1-1</p>
              <p>日本生命三宮駅前ビル</p>
              <br />
              <p>TEL：078-XXX-XXXX</p>
              <p>営業時間：10:00 〜 17:00</p>
              <p>定休日：土日・祝日</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
