import '../globals.css';
import Header from '../components/header';
import Footer from '../components/footer';

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;

  let messages = {};
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch {
    messages = {};
  }

  return (
    <html lang={locale}>
      <body className="flex flex-col min-h-screen">
        <Header locale={locale} messages={messages} />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
