import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Main from './pages/Main';
import Gallery from './pages/Gallery/Gallery';
import Content from './pages/GalleryContent/Content';
import MyPage from './pages/MyPage/MyPage';
const Router = () => {
  return (
    <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='gallery/content/:id' element={<Content/>}/>
        <Route path='/mypage' element={<MyPage/>}/>
    </Routes>
  )
}

export default Router