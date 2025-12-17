import NewsList from '@/app/_components/NewsList/NewsList';
import { getNewsList } from '@/app/_libs/microcms';
import { notFound } from 'next/navigation';
import { NEWS_LIST_LIMIT } from '@/app/_constants';
import Pagination from '@/app/_components/Pagination/Pagination';
import SearchField from '@/app/_components/SearchField/SearchField';

type Props = {
  params: {
    current: string;
  };
};

export default async function page({ params }: Props) {
  const current = parseInt(params.current, 10);

  //   isNaN:数字ではなかった時  ||:もしくは
  if (Number.isNaN(current) || current < 1) {
    notFound();
  }

  const { contents: news, totalCount } = await getNewsList({
    limit: NEWS_LIST_LIMIT,
    offset: NEWS_LIST_LIMIT * (current - 1),
  });

  if (news.length === 0) {
    notFound();
  }

  return (
    <>
      <SearchField />
      <NewsList news={news} />
      <Pagination totalCount={totalCount} current={current} />
    </>
  );
}

// 不正な値を判定する条件分岐
// 404エラー
// 悪さする人がいるので、この記述は必ずしないといけない
