import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { HomeScreen } from './pages/home';
import { PostPage } from './pages/page';

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeScreen/>} />
        <Route path='/post/:postId' element={<PostPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;