import type { AppProps } from 'next/app';

import DashboardLayout from '@/components/dashboard/layout/dashboard-layout';

import '@/styles/globals.css';

export default function App({ Component, pageProps, router }: AppProps) {
  if (router.pathname.startsWith('/dashboard')) {
    return (
      <DashboardLayout>
        <Component {...pageProps} />
      </DashboardLayout>
    );
  }

  return <Component {...pageProps} />;
}
