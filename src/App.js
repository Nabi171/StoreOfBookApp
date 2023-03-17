import React from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import './App.css';
// import Try1 from './Try1';
import Home from './components/Pages/Home/Home';
import AddBook from './components/Pages/Add/AddBook';
// import EditBookComponent from './components/Pages/Edit/EditBookComponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import EditBook from './components/Pages/Edit/EditBook';
import BookCard from './components/Pages/Home/BookCard';
import FeatureComponent from './components/Pages/Home/Feature/FeatureComponent';
function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/books' element={<Home />} />
        <Route exact path='/books/:bookId' element={<BookCard />} />
        <Route exact path='/addBook' element={<AddBook />} />
        <Route exact path='/featureComponent' element={<FeatureComponent />} />
        <Route exact path='/editbook/:bookId' element={<EditBook />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
