import Header from "./Components/Header";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogList from './Components/BlogList';
import BlogCreate from './Components/BlogCreate';
import Home from "./Components/Home";


function App() {
  return (
    <div>
      <Header />
           <BrowserRouter>
      <Routes>
          <Route path="blogcreate" element={<BlogCreate/>} />
          <Route path="blogList" element={<BlogList/>} />
          <Route path="*" element={<Home/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
