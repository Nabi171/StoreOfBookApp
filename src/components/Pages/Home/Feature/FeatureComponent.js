import React from 'react';
import { useGetBooksQuery } from '../../../../features/books/apiSlice';
import BookCard from '../BookCard';
import FeatureAll from '../FeatureAll';
import Navbar from '../../../Navbar';



const FeatureComponent = () => {
    const { data: books, isLoading, isError } = useGetBooksQuery();
    console.log(books)
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

        let books2 = books.filter(book => book.featured == true);
        content = books2.map((book) => <BookCard key={book.id} book={book} />);
    }
    return (
        <div>
            <Navbar />

            <main class="py-12 px-6 2xl:px-6 container">
                <div class="order-2 xl:-order-1">
                    <FeatureAll />
                    <div class="space-y-6 md:space-y-0 md:grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* <!-- Card 1 --> */}
                        {/* <BookCard /> */}

                        {content}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default FeatureComponent;