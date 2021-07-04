import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Book from './components/Book';

import './App.css';
class App extends Component {
  state = {
    books: [
      { id: 1, bookName: "1984", writer: "George Orwell" },
      { id: 2, bookName: "The Da Vonci Code", writer: "Dan Brown" },
      { id: 3, bookName: "Metmorphosis", writer: "Franz Kafka" }
    ],
  };

  changeWithInputState = (event, index) => {
    const book = {
      ...this.state.books[index]
    }
    book.bookName = event.target.value;
    const books = [...this.state.books];
    books[index] = book;

    this.setState({ books: books });
  }

  deleteBookState = (index) => {
    // const books = this.state.books.splice();
    // const books = this.state.books.map(item => item);
    const books = [...this.state.books];
    books.splice(index, 1); // delete specfic book
    this.setState({
      books: books
    });
  }

  render() {
    const style = {
      border: "1px solidd red",
      borderRadius: "5px",
      backgroundColor: "black",
      color: "white"
    };

    // const bookState = this.state.books;

    const books = this.state.books.map((book, index) => {
      return (
        <Book
          bookName={book.bookName}
          bookName={book.writer}
          // delete={this.deleteBookState.bind(this,index)}
          delete={() => this.deleteBookState(index)}
          key={book.id}
          inputName={(event) => this.changeWithInputState(event, index)}
        />
      );
    })

    // console.log(bookState);
    console.log(books);

    return (
      <div className="App">
        <h1 style={style}>Book List</h1>
        {books}

      </div>
    );

  }
}

export default App;
