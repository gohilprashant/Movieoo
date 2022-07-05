import React, { Fragment, useEffect, useState } from 'react';
import { IconButton } from '@mui/material';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import WatchlistDrawer from './WatchlistDrawer';
import { toast } from 'react-toastify';
import { resetWatchlist } from '../../store/slices/watchlistSlice';
import { useDispatch, useSelector } from 'react-redux';
const Watchlist = () => {
  const [drawer, setDrawer] = useState(false);
  const dispatch = useDispatch();
  const { error, success } = useSelector((state) => state.watchlist);

  // useEffect(() => {
  //   if (error) {
  //     toast.error(error);
  //   }
  //   if (success) {
  //     toast.success(success);
  //   }

  //   dispatch(resetWatchlist());
  // }, [error, success]);

  const handleOpen = () => {
    setDrawer(true);
  };
  const handleClose = () => {
    setDrawer(!drawer);
  };

  return (
    <Fragment>
      <IconButton onClick={handleOpen} size='large' color='inherit'>
        <BookmarksIcon />
      </IconButton>
      <WatchlistDrawer active={drawer} handleClose={handleClose} />
    </Fragment>
  );
};

export default Watchlist;
