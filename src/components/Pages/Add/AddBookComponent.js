import React, { useState } from 'react';
import { useAddBookMutation } from '../../../features/books/apiSlice';
import { useNavigate } from 'react-router';

const AddBookComponent = () => {
    const [addBook, { isLoading, isSuccess, isError }] = useAddBookMutation();
    const [name, setName] = useState("");
    const [author, setAuthor] = useState("");
    const [thumbnail, setThumbnail] = useState("");
    const [price, setPrice] = useState("");
    const [rating, setRating] = useState("");
    const [featured, setFeatured] = useState(false);
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        addBook({
            name,
            author,
            thumbnail,
            price,
            rating,
            featured
        });
        navigate('/')
    };

    const handleFeature = () => {
        setFeatured(true)
    }
    return (
        <main class="py-6 2xl:px-6">
            <div class="container">
                <div class="p-8 overflow-hidden bg-white shadow-cardShadow rounded-md max-w-xl mx-auto">
                    <h4 class="mb-8 text-xl font-bold text-center">Add New Book</h4>
                    <form method="POST" onSubmit={handleSubmit} class="book-form">
                        <div class="space-y-2">
                            <label for="lws-bookName">Book Name</label>
                            <input required class="text-input" type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                id="lws-bookName" name="name" />
                        </div>

                        <div class="space-y-2">
                            <label for="lws-author">Author</label>
                            <input required class="text-input" type="text"
                                value={author}
                                onChange={(e) => setAuthor(e.target.value)}
                                id="lws-author" name="author" />
                        </div>

                        <div class="space-y-2">
                            <label for="lws-thumbnail">Image Url</label>
                            <input required class="text-input"
                                value={thumbnail}
                                onChange={(e) => setThumbnail(e.target.value)}
                                type="text" id="lws-thumbnail" name="thumbnail" />
                        </div>

                        <div class="grid grid-cols-2 gap-8 pb-4">
                            <div class="space-y-2">
                                <label for="lws-price">Price</label>
                                <input required class="text-input"
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                    type="number" id="lws-price" name="price" />
                            </div>

                            <div class="space-y-2">
                                <label for="lws-rating">Rating</label>
                                <input required class="text-input"
                                    value={rating}
                                    onChange={(e) => setRating(e.target.value)}
                                    type="number" id="lws-rating" name="rating" min="1"
                                    max="5" />
                            </div>
                        </div>

                        <div class="flex items-center">
                            <input id="lws-featured"
                                value={featured}
                                onChange={handleFeature}
                                type="checkbox" name="featured" class="w-4 h-4" />
                            <label for="lws-featured" class="ml-2 text-sm"> This is a featured book </label>
                        </div>

                        <button type="submit" class="submit" id="lws-submit">Add Book</button>
                    </form>
                </div>
            </div>
        </main>
    );
};

export default AddBookComponent;