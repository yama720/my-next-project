'use client'; // Swiperはクライアントサイドで動くため必須

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';

// Swiperのスタイルをインポート
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './Slider.module.css';
import Link from 'next/link';

// Propsの型定義：画像のパスを配列で受け取れるようにする
type Props = {
  images: string[] | { src: string; href?: string }[];
};

export default function Slider({ images }: Props) {
  return (
    <div className={styles.container}>
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={0} // スライド間の余白
        slidesPerView={1} // 一度に見せるスライド数
        loop={true} // ループ再生
        autoplay={{ delay: 3000 }} // 3秒ごとに自動再生
        pagination={{ clickable: true }} // 下の点々
        navigation={true} // 左右の矢印
        className={styles.swiper}
      >
        {images.map((image, index) => {
          // 【追加】現在のデータが「文字列」か「オブジェクト」か判定して、中身を取り出す
          const isString = typeof image === 'string';
          const src = isString ? image : image.src;
          const href = isString ? undefined : image.href;

          return (
            <SwiperSlide key={index}>
              <div className={styles.imageWrapper}>
                {href ? (
                  /* リンクがある場合（トップページなど） */
                  <Link href={href} className={styles.link}>
                    <Image
                      src={src}
                      alt={`Slide ${index + 1}`}
                      fill
                      sizes="100vw"
                      priority={index === 0}
                      className={styles.image}
                    />
                  </Link>
                ) : (
                  /* リンクがない場合（コンセプトページなど） */
                  <Image
                    src={src}
                    alt={`Slide ${index + 1}`}
                    fill
                    sizes="100vw"
                    priority={index === 0}
                    className={styles.image}
                  />
                )}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
