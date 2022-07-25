import React from 'react';
import { alpha, InputBase, styled } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const SearchForm = styled('form')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconButton = styled('button')(({ theme }) => ({
  padding: theme.spacing(0.3, 1),
  borderRadius: theme.shape.borderRadius,
  top: '50%',
  right: '8px',
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transform: 'translateY(-50%)',
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  color: theme.palette.common.white,
  border: 'none',
  cursor: 'pointer',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 1.5),
    // vertical padding + font size from searchIcon
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '25ch',
    },
  },
}));

const Search = () => {
  const [query, setQuery] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query) {
      navigate(`/search?${query}`);
      // setQuery('');
    }
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <StyledInputBase
        placeholder='Search…'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        inputProps={{ 'aria-label': 'search' }}
      />
      <SearchIconButton type='submit'>
        <SearchIcon />
      </SearchIconButton>
    </SearchForm>
  );
};

export default Search;
