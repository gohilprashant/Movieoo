import React, { useState } from 'react';
import { alpha, Box, Button, Divider, Drawer, IconButton, styled, Tab, Tabs, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import WatchlistCard from './WatchlistCard';
import { movies, tvShows } from '../../utils/fakeData';
import SimpleBarReact from 'simplebar-react';

const StyledTabPanel = styled('div')`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    value === index && (
      <StyledTabPanel
        role='tabpanel'
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {children}
      </StyledTabPanel>
    )
  );
}

const SimpleBarStyle = styled(SimpleBarReact)(({ theme }) => ({
  maxHeight: '100%',
  '& .simplebar-scrollbar': {
    '&:before': {
      backgroundColor: alpha(theme.palette.grey[600], 0.48),
    },
    '&.simplebar-visible:before': {
      opacity: 1,
    },
  },
  '& .simplebar-track.simplebar-vertical': {
    width: 10,
  },
  '& .simplebar-track.simplebar-horizontal .simplebar-scrollbar': {
    height: 6,
  },
  '& .simplebar-mask': {
    zIndex: 'inherit',
  },
}));

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const WatchlistDrawer = ({ active, handleClose }) => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Drawer
      sx={{
        '& .MuiDrawer-paper': {
          width: 350,
          boxSizing: 'border-box',
          backgroundColor: 'background.default',
          backgroundImage: 'none',
        },
      }}
      anchor={'right'}
      open={active}
      onClose={handleClose}
    >
      <Box
        px={2}
        py={1}
        sx={{
          borderBottom: 1,
          borderColor: 'divider',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Typography variant='subtitle1'>Watchlist</Typography>
        <IconButton onClick={handleClose} size='large' color='inherit'>
          <CloseIcon />
        </IconButton>
      </Box>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={tabValue} onChange={handleTabChange} aria-label='basic tabs example' variant='fullWidth'>
          <Tab label='Movies' {...a11yProps(0)} disableRipple />
          <Tab label='Tv Shows' {...a11yProps(1)} disableRipple />
        </Tabs>
      </Box>
      <Box flexGrow={1} display='flex' overflow='hidden'>
        <TabPanel value={tabValue} index={0}>
          <Box flexGrow={1} overflow='hidden'>
            <SimpleBarStyle>
              <Box p={2}>
                {movies.map((m) => (
                  <WatchlistCard media={m} mediaType='movie' />
                ))}
              </Box>
            </SimpleBarStyle>
          </Box>
        </TabPanel>
        <TabPanel value={tabValue} index={1}>
          <Box flexGrow={1} overflow='hidden'>
            <SimpleBarStyle>
              <Box p={2}>
                {tvShows.map((m) => (
                  <WatchlistCard media={m} mediaType='tv' />
                ))}
              </Box>
            </SimpleBarStyle>
          </Box>
        </TabPanel>
      </Box>
    </Drawer>
  );
};

export default WatchlistDrawer;
