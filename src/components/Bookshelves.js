import React, {Component} from 'react';
import '../css/Bookshelves.css';
import Book from './Book';


class Bookshelves extends Component {
    constructor() {
        super(); 
        this.state = {
            book: [
                {
                    title:"The Notebook" ,
                    author:"Nicholas Sparks", 
                    year:"1996" ,
                    genre:"Fiction"
                },
                {
                    title:"The Red Scrolls" ,
                    author:"Cassandra Clare" ,
                    year:"2019" ,
                    genre:"Fiction"
                },
                {
                    title:"Game of Bones" ,
                    author:"Carolyn Haines" ,
                 year:"2019" ,
                 genre:"Mystery"
                },
                { 
                    title:"Welcome to Hell", 
                    author:"Fah",
                    year:"2000",
                    genre:"Science Fiction"
                },
                {
                     title:"Harry Potter", 
                    author:"J.K. Rowling",
                    year:"2001", 
                    genre:"Fiction"
                },
                {
                     title:"Moon Rising", 
                    author:"Ian McDonald",
                     year:"2019",
                      genre:"Science Fiction"
                }
                
            ]
        }
    }

    addBook(){
        this.state.book.push(
            {
                title: "New Book Title",
                Author: "New Book Author",
                Year: "New Book Year"
                
            }
        );
        this.setState(
            {
                book: this.state.book
            }
        )
        
    }

    render() {
        return (
            <div>
                <div className="div-board">
                    <div className="row">
                    {
                        this.state.book.map(book => {
                            return < Book title={book.title} author={book.author} year={book.year} genre={book.genre}     />
                        })
                    }
                   
                     <div>
                <button className="btn btn-success add-button" onClick ={this.addBook.bind(this)}>Add</button>
            </div>
                    </div>
                </div>
                <div>
                    
                </div>
            </div>
        )
    }
}

export default Bookshelves;