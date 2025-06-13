// App component is the root of the React application.
// It wraps the HomePage component with React Query's QueryClientProvider
// to enable server state management and caching throughout the app.

import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './api/queryClient';
import HomePage from './pages/HomePage';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HomePage />
    </QueryClientProvider>
  );
}

export default App;
