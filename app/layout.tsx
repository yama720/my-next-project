import Footer from './_components/Footer/Footer';
import Header from './_components/Header/Header';
import ScrollToTopOnNavigate from './_components/ScrollToTopOnNavigate';
import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <ScrollToTopOnNavigate />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
