import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Book from './components/Book';

import './App.css';
class App extends Component {
  state = {
    books: [
      { bookName: "1984", writer: "George Orwell" },
      { bookName: "The Da Vonci Code", writer: "Dan Brown" },
      { bookName: "The alchemist", writer: "Paulo Coelho" }
    ],
  };

  changeWithInputChange = (event) => {
    this.setState({
      books: [
        { id: 1, bookName: event.target.value, writer: "George Orwell" },
        { id: 2, bookName: "The Da Vonci Code", writer: "Dan Brown" },
        { id: 3, bookName: "Metmorphosis", writer: "Franz Kafka" }
      ],
    });
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
