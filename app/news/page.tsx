import { getNewsList } from '../_libs/microcms';
import NewsList from '../_components/NewsList/NewsList';

import React from 'react';

export default async function page() {
  const { contents: news } = await getNewsList();

  return <NewsList news={news} />;
}
