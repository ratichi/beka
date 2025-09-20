import { NextIntlClientProvider } from "next-intl";
import Header from "../components/header";
import Footer from "../components/footer";
import "../globals.css";

export const metadata = {
  title: "My Website",
  description: "Bilingual Next.js site",
};

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params; 

  let messages;
  try {
    messages = (await import(`../messages/${locale}.json`)).default;
  } catch {
    messages = {};
  }

  return (
    <html lang={locale}>
      <body className="flex flex-col min-h-screen bg-gray-50">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
