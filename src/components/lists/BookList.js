import React from 'react';
import Book from '../representational/Book';

const bookList = (props) => {
    return (
        props.books.map((book, index) => {
            return (
                <Book
                    bookName={book.bookName}
                    writer={book.writer}
                    delete={() => props.deleteBookState(index)}
                    key={book.id}
                    inputName={(event) => props.changeWithInputState(event, index)}
                />
            );
        })
    );
}

export default bookList;