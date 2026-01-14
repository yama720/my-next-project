import ProductCard from '../ProductCard/ProductCard';
import styles from './ProductList.module.css';

// 商品データの型定義
export interface Product {
  id: number;
  name: string;
  imageSrc: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'ガラスペン',
    imageSrc: '/glasspendetails4.png',
  },
  {
    id: 2,
    name: 'インクセット',
    imageSrc: '/inkbottledetails4.png',
  },
  {
    id: 3,
    name: 'シーリングスタンプ',
    imageSrc: '/sealingstampdetails.png',
  },
  {
    id: 4,
    name: 'シール',
    imageSrc: '/sealdetails4.png',
  },
  {
    id: 5,
    name: 'ポチ袋',
    imageSrc: '/pochibagdetails18.png',
  },
  {
    id: 6,
    name: 'マスキングテープ',
    imageSrc: '/maskingtapedetails.png',
  },
  {
    id: 7,
    name: 'レターセット/便箋',
    imageSrc: '/rettersetdetails2.png',
  },
  {
    id: 8,
    name: '手帳/ダイアリー',
    imageSrc: '/pocketbookdetails.png',
  },
  {
    id: 9,
    name: '万年筆',
    imageSrc: '/fountainpendetails.png',
  },
  {
    id: 10,
    name: 'クリップ',
    imageSrc: '/clip.png',
  },
  {
    id: 11,
    name: 'ご祝儀袋/色紙',
    imageSrc: '/giftbag.png',
  },
  {
    id: 12,
    name: '絵の具',
    imageSrc: '/paints.png',
  },
  {
    id: 13,
    name: 'ラベルプリンター',
    imageSrc: '/labelprinter.png',
  },
  {
    id: 14,
    name: 'ノート',
    imageSrc: '/notes.png',
  },
];

export default function ProductList() {
  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>Products</h2>
      <div className={styles.grid}>
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
}
