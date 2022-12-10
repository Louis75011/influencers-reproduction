
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './components/views/Home'
import Product from './components/views/Product'
import Explore from './components/views/Explore'
import Work from './components/views/Work'
import Login from './components/views/Login'
import Join from './components/views/Join'
import Error from './components/layout/Error'
import './App.css'

export default function App() {
  return (
    <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route index path="/" element={<Home />} />
               <Route path="/product" element={<Product />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/work" element={<Work />} />
              <Route path="/login" element={<Login />} /> 
              <Route path="/join" element={<Join />} /> 
              <Route path="*" element={<Error />} />
            </Route>
          </Routes>
    </BrowserRouter>
  )
}
