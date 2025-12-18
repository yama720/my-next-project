import Hero from '../_components/Hero/Hero';
import Sheet from '../_components/Sheet/Sheet';

type Props = {
  children: React.ReactNode;
};

export const revalidate = 60;

export default function RootLayout({ children }: Props) {
  return (
    <>
      <Hero title="Contact" sub="お問い合わせ" />
      <Sheet>{children}</Sheet>
    </>
  );
}
