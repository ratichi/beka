import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./next-intl.config.mjs');

const nextConfig = {
  // keep empty or add other non-i18n options
};

export default withNextIntl(nextConfig);
