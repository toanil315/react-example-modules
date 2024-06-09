import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from '@emotion/react';
import theme from './styles/theme';
import { ConfigProvider } from 'antd';
import { ProviderTree } from './components';
import { createProviderConfig } from './components/ProviderTree/ProviderTree';
import { NotificationProvider } from './contexts';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/i18n';
import { RouterProvider, createRouter } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 2, // 2 minutes,
    },
  },
});

// Create a new router instance
const router = createRouter({ routeTree, context: { queryClient } });

const App = () => {
  const convertToPx = (value: string) => Number(value.replace('px', ''));

  const antdTheme = {
    token: {
      colorPrimary: theme.colors.primary_6,
      colorError: theme.colors.red_6,
      fontSize: convertToPx(theme.fontSizes.body),
      borderRadius: convertToPx(theme.radii.medium),
    },
  };

  // Please define your providers and their configurations here
  // note that the order of the providers is important
  // the first provider will be the outermost provider
  const providersAndConfigs = [
    createProviderConfig(QueryClientProvider, { client: queryClient }),
    createProviderConfig(I18nextProvider, { i18n } as any),
    createProviderConfig(ThemeProvider, { theme } as any),
    createProviderConfig(ConfigProvider, {
      theme: antdTheme,
    }),
    createProviderConfig(RouterProvider, { router }),
    createProviderConfig(NotificationProvider),
  ];

  return <ProviderTree providers={providersAndConfigs}>App</ProviderTree>;
};

export default App;
