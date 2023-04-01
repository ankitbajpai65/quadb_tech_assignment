import React, { useEffect } from "react";
import './index.css'
import { Route, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Item_details from "./Components/Item_details";
import Book_ticket from "./Components/Book_ticket";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Home /> */}
      <Routes>
        <Route index element={<Home />} />
        <Route path="/item_details" element={<Item_details />} />
        <Route path="/book_ticket" element={<Book_ticket />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
