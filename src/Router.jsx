import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Main from './pages/Main';
import Gallery from './pages/Gallery/Gallery';
import Content from './pages/GalleryContent/Content';
import MyPage from './pages/MyPage/MyPage';
import AdminPage from './pages/AdminPage/AdminPage';
import Profile from './pages/Profile/Profile';
import Registration from './pages/Registration/Registration';
import GalleryInfo from './pages/MyPage/GalleryInfo/GalleryInfo';
const Router = () => {
  return (
    <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='gallery/content/:id' element={<Content/>}/>
        <Route path='/mypage' element={<MyPage/>}/>
        <Route path='/admin' element={<AdminPage/>}/>
        <Route path='/profile/:id' element={<Profile/>}/>
        <Route path="/registration" element={<Registration/>}/>
        <Route path='/gallery/:id' element={<GalleryInfo/>}/>
    </Routes>
  )
}

export default Router