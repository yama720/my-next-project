'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import styles from './pickup.module.css';

gsap.registerPlugin(ScrollTrigger);

interface PickUpItem {
  id: number;
  src: string;
  href: string;
}

export default function PickUp() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  const items: PickUpItem[] = [
    { id: 1, src: '/banner.png', href: '/banner' },
    { id: 2, src: '/maskingtape.png', href: '' },
    { id: 3, src: '/glasspen.png', href: '/special' },
    { id: 4, src: '/Interior6.png', href: '' },
    { id: 5, src: '/firstviewall2.png', href: '' },
    { id: 6, src: '/inkall.png', href: '' },
    { id: 7, src: '/inkbottle.png', href: '' },
  ];

  useEffect(() => {
    if (!sectionRef.current || !triggerRef.current) return;

    // スライドの幅(450px) × (枚数(7) - 1) = 2700px
    // 最後の画像が画面に収まった瞬間にスクロールが解除される。
    const slideWidth = 450;
    const totalMovement = slideWidth * (items.length - 1);

    // メディアクエリ（768px以下ではアニメーションを無効化する設定も可能）
    let mm = gsap.matchMedia();

    mm.add('(min-width: 769px)', () => {
      gsap.fromTo(
        sectionRef.current,
        { x: 0 },
        {
          x: `-${totalMovement}px`,
          ease: 'none',
          scrollTrigger: {
            trigger: triggerRef.current,
            start: 'top top',
            end: `+=${totalMovement}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            // ↓ これを追加：優先順位を上げ、計算後に全体を再配置させる
            refreshPriority: 1,
          },
        }
      );
      // 全体の高さを再計算
      ScrollTrigger.refresh();
    });

    return () => mm.revert(); // クリーンアップ
  }, [items.length]);

  return (
    <div ref={triggerRef} className={styles.outerContainer}>
      <section className={`${styles.container} ${styles.headerFlex}`}>
        <h2 className={styles.heading}>Pick up</h2>
        <div className={styles.line}></div>
      </section>

      <div className={styles.scrollWindow}>
        <div ref={sectionRef} className={styles.flexContainer}>
          {items.map((item) => (
            <div key={item.id} className={styles.slide}>
              <Link href={item.href} className={styles.cardLink}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={item.src}
                    alt={`Pick up ${item.id}`}
                    fill // 親要素いっぱいに広げる設定
                    sizes="(max-width: 768px) 100vw, 350px"
                    className={styles.image}
                    priority={item.id === 1}
                  />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.bottomLine}></div>
    </div>
  );
}
