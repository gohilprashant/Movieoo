import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Detail from '../pages/Detail';
import Home from '../pages/Home';
import Search from '../pages/Search';
const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/search' element={<Search />} />
      <Route path='/detail/:id' element={<Detail />} />
    </Routes>
  );
};

export default AppRouter;
