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
    otherPropos: "I am some other Props",
  };

  changeBookState = (newBookName) => {
    this.setState({
      books: [
        { bookName: newBookName, writer: "George Orwell" },
        { bookName: "The Da Vonci Code", writer: "Dan Brown" },
        { bookName: "Metmorphosis", writer: "Franz Kafka" }
      ],
    });
  }

  changeWithInputChange = (event) => {
    this.setState({
      books: [
        { bookName: event.target.value, writer: "George Orwell" },
        { bookName: "The Da Vonci Code", writer: "Dan Brown" },
        { bookName: "Metmorphosis", writer: "Franz Kafka" }
      ],
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

    const books = this.state.books.map((book) => {
      return (
        <Book
          bookName={book.bookName}
          bookName={book.writer}
        />
      );
    })

    // console.log(bookState);
    console.log(books);

    return (
      <div className="App">

        <h1 style={style}>Book List</h1>
        <button onClick={() => this.changeBookState("Nineteen Eithty-Four")}>Change State</button>
        <input type="text" onChange={this.changeWithInputChange} />
        {books}

      </div>
    );

  }
}

export default App;
