import { CssBaseline, ThemeProvider } from '@mui/material';
import Footer from './components/footer';
import Header from './components/header';
import AppRouter from './router/AppRouter';
import { theme } from './theme';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { resetWatchlist } from './store/slices/watchlistSlice';
function App() {
  const dispatch = useDispatch();
  const { error, success } = useSelector((state) => state.watchlist);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
    if (success) {
      toast.success(success);
    }

    dispatch(resetWatchlist());
  }, [error, success]);

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
      <ToastContainer />
    </ThemeProvider>
  );
}

export default App;
