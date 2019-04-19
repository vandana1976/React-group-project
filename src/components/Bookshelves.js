import React, {Component} from 'react';
import '../css/Bookshelves.css';
import Book from './Book';


class Bookshelves extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <div className="div-board">
                    <div className="row">
                    
                    <Book title="The Notebook" author="Nicholas Sparks" year="1996" genre="Fiction"></Book>
                    <Book title="The Red Scrolls" author="Cassandra Clare" year="2019" genre="Fiction"></Book>
                    <Book title="Game of Bones" author="Carolyn Haines" year="2019" genre="Mystery"></Book>
                    <Book title="Welcome to Hell" author="Fah" year="2000" genre="Science Fiction"></Book>
                    <Book title="Harry Potter" author="J.K. Rowling" year="2001" genre="Fiction"></Book>
                    <Book title="Moon Rising" author="Ian McDonald" year="2019" genre="Science Fiction"></Book>
                    
                    <Book title="The Notebook" author="Nicholas Sparks" year="1996" genre="Fiction"></Book>
                    <Book title="The Red Scrolls" author="Cassandra Clare" year="2019" genre="Fiction"></Book>
                    <Book title="Game of Bones" author="Carolyn Haines" year="2019" genre="Mystery"></Book>
                    <Book title="Welcome to Hell" author="Fah" year="2000" genre="Science Fiction"></Book>
                    <Book title="Harry Potter" author="J.K. Rowling" year="2001" genre="Fiction"></Book>
                    <Book title="Moon Rising" author="Ian McDonald" year="2019" genre="Science Fiction"></Book>

                    
                    </div>
                </div>
                <div>
                    
                </div>
            </div>
        )
    }
}

export default Bookshelves;