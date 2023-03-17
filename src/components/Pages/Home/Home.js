import React, { useState } from 'react';
// import Navbar from '../../Navbar';
import img1 from "../../../images/logo.svg"
import BookCard from './BookCard';
import FeatureAll from './FeatureAll';
import { useGetBooksQuery } from '../../../features/books/apiSlice';
import { Link } from 'react-router-dom';

const Home = () => {
    const { data: books, isLoading, isError } = useGetBooksQuery();
    console.log(books)
    //search
    const [search, setNewSearch] = useState("");
    const handleSearchChange = (e) => {
        setNewSearch(e.target.value);
    };
    // decide what to render
    let content = null;

    if (isLoading) {
        content = (
            <>
                <p>loading...</p>
            </>
        );
    }

    if (!isLoading && isError) {
        content = <p>There is an error</p>;

    }

    if (!isLoading && !isError && books ?.length === 0) {
        content = <p>There is no books</p>;
    }

    if (!isLoading && !isError && books ?.length > 0) {
        if (!search) { content = books.map((book) => <BookCard key={book.id} book={book} />) }
        else if (search) {
            let books2 = books.filter(book => book.name.toLowerCase().includes(search.toLowerCase()));
            content = books2.map((book) => <BookCard key={book.id} book={book} />);
        }

    }



    return (
        <div>
            {/* <Navbar /> */}
            <nav className="py-4 2xl:px-6">
                <div className="container flex items-center justify-between">
                    <Link to="/">  <img src={img1} width="150px" className="object-contain" /></Link>

                    <ul className="hidden md:flex items-center space-x-6">
                        <Link className="font-semibold cursor-pointer" to="/" id="lws-bookStore">
                            <li>Book Store</li>
                        </Link>
                        <Link className="cursor-pointer" to="/addBook" id="lws-addBook">
                            <li>Add Book</li>
                        </Link>

                    </ul>

                    <form

                        className="flex items-center">
                        <div className="group relative rounded-md bg-white">
                            <svg width="20" height="20" fill="currentColor"
                                className="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-primary">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z">
                                </path>
                            </svg>
                            <input
                                type="text"

                                value={search} onChange={handleSearchChange}
                                type="text" placeholder="Filter books..." className="search" id="lws-search" />
                        </div>
                    </form>

                </div>
            </nav>
            {/* nav close here */}

            <main className="py-12 px-6 2xl:px-6 container">
                <div className="order-2 xl:-order-1">
                    <FeatureAll />
                    <div className="space-y-6 md:space-y-0 md:grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* <!-- Card 1 --> */}
                        {/* <BookCard /> */}

                        {content}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Home;