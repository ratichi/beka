import Hero from '../components/hero';

export default async function Page({ params }) {
  const { locale } = await params;

  return (
    <>
      <Hero locale={locale} />
    </>
  );
}
