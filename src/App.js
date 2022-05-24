import { CssBaseline, ThemeProvider } from '@mui/material';
import AppRouter from './router/AppRouter';
import { theme } from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <div className='App'>
        <main>
          <AppRouter />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
