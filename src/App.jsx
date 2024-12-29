import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Listing from "./pages/Listing";
import AddPropperty from "./AddPropperty";
import Bookings from "./pages/Bookings";
import Favourites from "./pages/Favourites";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/listing" element={<Listing/>}/>
        <Route path="/addproperty" element={<AddPropperty/>}/>
        <Route path="/bookings" element={<Bookings/>}/>
        <Route path="/favourites" element={<Favourites/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}