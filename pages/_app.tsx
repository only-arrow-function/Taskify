import { useState } from 'react';
import { HydrationBoundary, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import type { AppProps } from 'next/app';

import DashboardLayout from '@/components/dashboard/layout/dashboard-layout';

import '@/styles/globals.css';

export default function App({ Component, pageProps, router }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  if (router.isReady && router.asPath.startsWith(`/dashboard/${router.query.id}`)) {
    return (
      <QueryClientProvider client={queryClient}>
        <HydrationBoundary state={pageProps.dehydratedState}>
          <DashboardLayout>
            <Component {...pageProps} />
          </DashboardLayout>
        </HydrationBoundary>
        <ReactQueryDevtools />
      </QueryClientProvider>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </HydrationBoundary>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
