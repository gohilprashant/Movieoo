import React, { Fragment, useState } from 'react';
import { IconButton } from '@mui/material';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import WatchlistDrawer from './WatchlistDrawer';

const Watchlist = () => {
  const [drawer, setDrawer] = useState(false);

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
