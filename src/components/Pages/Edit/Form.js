import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { useEditBookMutation } from '../../../features/books/apiSlice';

const Form = ({ book }) => {
    const navigate = useNavigate();
    const {
        id,
        name: initialName,
        author: initialAuthor,
        thumbnail: initialThumbnail,
        rating: initialRating,
        price: initialPrice,

    } = book;

    const [editBook, { isLoading, isError, isSuccess }] =
        useEditBookMutation();

    const [name, setName] = useState(initialName);
    const [author, setAuthor] = useState(initialAuthor);
    const [thumbnail, setThumbnail] = useState(initialThumbnail);
    const [rating, setRating] = useState(initialRating);
    const [price, setPrice] = useState(initialPrice);


    const handleSubmit = (e) => {
        e.preventDefault();
        editBook({
            id,
            data: {
                name,
                author,
                thumbnail,
                price,
                rating,

            },
        });
        navigate('/')
        window.location.reload();
    };
    return (

        <form onSubmit={handleSubmit} class="book-form">
            <div class="space-y-2">
                <label for="lws-bookName">Book Name</label>
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required class="text-input" type="text" id="lws-bookName" name="name" />
            </div>

            <div class="space-y-2">
                <label for="lws-author">Author</label>
                <input
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    required class="text-input" type="text" id="lws-author" name="author" />
            </div>

            <div class="space-y-2">
                <label for="lws-thumbnail">Image Url</label>
                <input
                    value={thumbnail}
                    onChange={(e) => setThumbnail(e.target.value)}
                    required class="text-input" type="text" id="lws-thumbnail" name="thumbnail" />
            </div>

            <div class="grid grid-cols-2 gap-8 pb-4">
                <div class="space-y-2">
                    <label for="lws-price">Price</label>
                    <input
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required class="text-input" type="number" id="lws-price" name="price" />
                </div>

                <div class="space-y-2">
                    <label for="lws-rating">Rating</label>
                    <input
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                        required class="text-input" type="number" id="lws-rating" name="rating" min="1"
                        max="5" />
                </div>
            </div>

            <div class="flex items-center">
                <input id="lws-featured" type="checkbox" name="featured" class="w-4 h-4" />
                <label for="lws-featured" class="ml-2 text-sm"> This is a featured book </label>
            </div>

            <button type="submit" class="submit" id="lws-submit">Edit Book</button>
        </form>

    );
};

export default Form;