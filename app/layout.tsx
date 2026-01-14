import Footer from './_components/Footer/Footer';
import Header from './_components/Header/Header';
import ScrollToTopOnNavigate from './_components/ScrollToTopOnNavigate';
import ScrollToTop from './_components/ScrollToTop/ScrollToTop';
import './globals.css';
import {
  Playfair_Display,
  Shippori_Mincho,
  Homemade_Apple,
} from 'next/font/google';

const shipporiMincho = Shippori_Mincho({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
}); // 全体

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  style: ['normal', 'italic'],
  weight: ['400', '800'],
  variable: '--font-playfair', // CSS変数として使えるように設定
}); // タイトルのみ

const homemadeApple = Homemade_Apple({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-apple', // CSS変数を定義
}); //見出し

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${shipporiMincho.className} ${playfair.variable} ${homemadeApple.variable}`}
      >
        <ScrollToTopOnNavigate />
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
