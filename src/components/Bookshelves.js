import React, { Component } from 'react';
import '../css/Bookshelves.css';
import Book from './Book';


class Bookshelves extends Component {
  constructor() {
    super();
    //     this.state = {
    //         book: [
    //             {
    //                 title:"The Notebook" ,
    //                 author:"Nicholas Sparks", 
    //                 year:"1996" ,
    //                 genre:"Fiction"
    //             },
    //             {
    //                 title:"The Red Scrolls" ,
    //                 author:"Cassandra Clare" ,
    //                 year:"2019" ,
    //                 genre:"Fiction"
    //             },
    //             {
    //                 title:"Game of Bones" ,
    //                 author:"Carolyn Haines" ,
    //              year:"2019" ,
    //              genre:"Mystery"
    //             },
    //             { 
    //                 title:"Welcome to Hell", 
    //                 author:"Fah",
    //                 year:"2000",
    //                 genre:"Science Fiction"
    //             },
    //             {
    //                  title:"Harry Potter", 
    //                 author:"J.K. Rowling",
    //                 year:"2001", 
    //                 genre:"Fiction"
    //             },
    //             {
    //                  title:"Moon Rising", 
    //                 author:"Ian McDonald",
    //                  year:"2019",
    //                   genre:"Science Fiction"
    //             }

    //         ]
    //     }
    // }

    // addBook(){
    //     this.state.book.push(
    //         {
    //             title: "New Book Title",
    //             Author: "New Book Author",
    //             Year: "New Book Year"

    //         }
    //     );
    //     this.setState(
    //         {
    //             book: this.state.book
    //         }
    //     )

    // }

    this.state = {
      books: []
    };
  }

  addBook() {
    this.state.books.push({
      id: Date.now()
    });
    this.setState({
      books: this.state.books
    });
  }

  

  deleteBook(id) {
    let newBookArr = this.state.books;
    newBookArr.map((book, index) => {
      if (id === book.id) {
        newBookArr.splice(index, 1);
      }
    });
    this.setState({
      books: newBookArr
    });
  }

  render() {
    return (
      <div>
        <div className="div-board">
          <div className="row">
            {this.state.books.map(book => {
              return (
                <Book
                  key={book.id}
                  id={book.id}
                  deleteHandler={this.deleteBook.bind(this)}
                />

              );
            })}
          </div>
          <div>
            <button className="btn btn-success add-button" onClick={this.addBook.bind(this)}>Add</button>
          </div>
        
        </div>

      </div>
    )
  }
}

export default Bookshelves;