import ReactDOM from 'react-dom';
import { StrictMode } from 'react';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/system';
import { QueryClient, QueryClientProvider } from 'react-query'

import App from './App';
import makeServer from './mirage';
import theme from './theme';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Cache time: how long the cache is persisted in memory AFTER components referencing it unmount.
      // Stale time: how long before cache data is considered stale and refreshed.
      cacheTime: Infinity,
      staleTime: Infinity,
    },
  },
});

const rootEl = document.getElementById('root');

makeServer();

ReactDOM.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </ThemeProvider>
  </StrictMode>,
  rootEl,
);
