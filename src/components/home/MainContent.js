import { Box, Button, Container, Tab, Tabs, Typography } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';
import MoviesContainer from './MoviesContainer';
import TvShowsContainer from './TvShowsContainer';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ pt: 3 }}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const MainContent = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: '100%', paddingBottom: 4 }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label='basic tabs example'>
          <Tab label='Movies' {...a11yProps(0)} disableRipple />
          <Tab label='Tv Shows' {...a11yProps(1)} disableRipple />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <MoviesContainer />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TvShowsContainer />
      </TabPanel>
    </Box>
  );
};

export default MainContent;
