import InfoItem from '../InfoItem/InfoItem';
import styles from './Information.module.css';
import { getNewsList } from '@/app/_libs/microcms';

type Props = {
  limit?: number; // 件数を外から指定できるようにする（?は任意という意味）
};

export default async function Information({ limit = 6 }: Props) {
  // デフォルトは6件
  const { contents } = await getNewsList({
    limit: limit, // ここで受け取った件数を使う
  });
  if (contents.length === 0) {
    return <p>お知らせはありません</p>;
  }

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {contents.map((info) => (
          <li key={info.id} className={styles.listItem}>
            <InfoItem
              // info.publishedAt はmicroCMSが自動で持つ公開日です
              // .slice(0, 10) で "2025-12-25" の形式にカットできます
              date={
                info.date
                  ? info.date.slice(0, 10).replace(/-/g, '.')
                  : info.publishedAt
                  ? info.publishedAt.slice(0, 10).replace(/-/g, '.')
                  : ''
              }
              category={info.category.name}
              title={info.title}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
