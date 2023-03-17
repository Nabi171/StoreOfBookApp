import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { useLazyQuery } from '@reduxjs/toolkit/query';
// import { apiSlice, useSearchBookQuery } from '../features/books/apiSlice';
// import logo from "../../images/logo.svg"
const Navbar = () => {
    // const [searchTerm, setSearchTerm] = useState('');
    // const [search, { books, isLoading }] = useSearchBookQuery(searchTerm);

    const handleSearch = () => {
        // search(searchTerm);
    };
    return (
        <div>
            <nav class="py-4 2xl:px-6">
                <div class="container flex items-center justify-between">
                    <Link to="/">  <img src="./images/logo.svg" width="150px" class="object-contain" /></Link>

                    <ul class="hidden md:flex items-center space-x-6">
                        <a class="font-semibold cursor-pointer" href="index.html" id="lws-bookStore">
                            <li>Book Store</li>
                        </a>
                        <Link class="cursor-pointer" to="/addBook" id="lws-addBook">
                            <li>Add Book</li>
                        </Link>

                    </ul>

                    <form
                        //  onClick={handleSearch} 
                        class="flex items-center">
                        <div class="group relative rounded-md bg-white">
                            <svg width="20" height="20" fill="currentColor"
                                class="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-primary">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z">
                                </path>
                            </svg>
                            <input
                                type="text"
                                // value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
                                type="text" placeholder="Filter books..." class="search" id="lws-search" />
                        </div>
                    </form>
                    {/* {books && books.map((result) => <div>{result.name}</div>)} */}
                </div>
            </nav>
        </div>
    );
};

export default Navbar;