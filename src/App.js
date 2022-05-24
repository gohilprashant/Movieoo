import { CssBaseline, ThemeProvider } from '@mui/material';
import Footer from './components/footer';
import Header from './components/header';
import AppRouter from './router/AppRouter';
import { theme } from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <div className='App'>
        <Header />
        <main>
          <AppRouter />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
