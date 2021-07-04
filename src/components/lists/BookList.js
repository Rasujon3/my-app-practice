import React from 'react';
import Book from '../representational/Book';

const bookList = (props) => {
    return (
        props.books.map((book, index) => {
            return (
                <Book
                    bookName={book.bookName}
                    writer={book.writer}
                    // delete={this.deleteBookState.bind(this,index)}
                    delete={() => this.deleteBookState(index)}
                    key={book.id}
                    inputName={(event) => this.changeWithInputState(event, index)}
                />
            );
        })
    );
}

export default bookList;