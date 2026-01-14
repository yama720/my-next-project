import Footer from '../_components/Footer/Footer';
import OnlineHeader from '../_components/Header/OnlineHeader';
import ScrollToTop from '../_components/ScrollToTop/ScrollToTop';
import ScrollToTopOnNavigate from '../_components/ScrollToTopOnNavigate';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="online-layout-wrapper">
      <ScrollToTopOnNavigate />
      <OnlineHeader />
      {children}
      <Footer />
      <ScrollToTop />
    </div>
  );
}
