import Article from '@/app/_components/Article/Article';
import { getNewsDetail } from '@/app/_libs/microcms';
import styles from './page.module.css';
import ButtonLink from '@/app/_components/ButtonLink';
import { notFound } from 'next/navigation';

type Props = {
  params: {
    slug: string;
  };
};

export default async function Page({ params }: Props) {
  //   return <div>{JSON.stringify(props)}</div>;

  const data = await getNewsDetail(params.slug).catch(notFound);

  //   return <div>{data.title}</div>;

  return (
    <>
      <Article data={data} />
      <div className={styles.footer}>
        <ButtonLink href="/news">ニュース一覧へ</ButtonLink>
      </div>
    </>
  );
}
