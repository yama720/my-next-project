import Image from 'next/image';
import styles from './page.module.css';
import ButtonLink from '../_components/ButtonLink';
import NewsList from '../_components/NewsList/NewsList';
import { getNewsList } from '../_libs/microcms';
import { TOP_NEWS_LIMIT } from '../_constants';
import Information from '../_components/Information/Information';
import ProductList from '../_components/ProductList/ProductList';
import Slider from '../_components/Slider/Slider';
import PickUp from '../_components/PickUp/PickUp';
import Access from '../_components/Access/Access';

export const revalidate = 60;

export default async function Home() {
  const data = await getNewsList({
    limit: TOP_NEWS_LIMIT,
  });

  const TopImages = [
    { src: '/firstview3.png', href: '/special' },
    { src: '/firstview4.png', href: '/special' },
    { src: '/firstview5.png', href: '' },
    { src: '/firstview6.png', href: '/special' },
    { src: '/firstview7.png', href: '' },
    { src: '/firstview8.png', href: '' },
    { src: '/firstview9.png', href: '' },
    { src: '/firstview12.png', href: '' },
    { src: '/firstviewall.png', href: '' },
    { src: '/Interior7.png', href: '' },
  ];

  return (
    <>
      {/* ファーストビュー */}
      <Slider images={TopImages} />

      {/* ニュース記事 */}
      <section className={styles.news}>
        <h2 className={styles.heading}>Information</h2>
        <div className={styles.newsWrap}>
          <Information limit={2} />
        </div>

        <div className={styles.newsLink}>
          <ButtonLink href="/information">もっとみる</ButtonLink>
        </div>
      </section>

      {/* 製品紹介 */}
      <section>
        <ProductList />
      </section>

      {/* PickUpの広告 */}
      <section>
        <PickUp />
      </section>

      {/* アクセス */}
      <section>
        <Access />
      </section>
    </>
  );
}
