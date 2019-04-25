import React, {Component} from 'react';
import '../css/Book.css';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const GENERIC_BOOK_TITLE = "New Book Title",
  GENERIC_BOOK_AUTHOR = "New Book Author",
  GENERIC_BOOK_YEAR = "Year",
  GENERIC_BOOK_GENRE = "Genre";

class Book extends Component {
    constructor() {
        super();
    }

    componentWillMount(){
        
        this.state = {
            title: GENERIC_BOOK_TITLE,
            author: GENERIC_BOOK_AUTHOR,
            year: GENERIC_BOOK_YEAR,
            genre: GENERIC_BOOK_GENRE,
            readMode: false,
            editMode: false,
            added: false
        }
    }

    handleRead(){
        this.setState(
            {
                readMode: true,
                
            }
        );
    }

    handleEdit() {
        this.setState(
            {
          
                editMode: true,
                
            }
        );
      }

    handleSave() {
        this.setState(
            {
                readMode: true,
                
            }
        )
            
    }

    handleAdd() {
        this.setState(
            {
                title: this.refs.titleContent.value,
                author: this.refs.authorContent.value,
                year: this.refs.yearContent.value,
                genre: this.refs.genreContent.value,
                editMode: false,                
                added: true
            }
        );
    }

    render() {
        let titleElement, authorElement, yearElement, genreElement, buttonArea;
        titleElement = this.state.title;
        authorElement = this.state.author;
        yearElement = this.state.year;
        genreElement = this.state.genre;

    

        if(!this.state.added && !this.state.editMode) {
            titleElement = <h5>{this.state.title}</h5>
            authorElement = <p>{this.state.author}</p>
            yearElement = <p>{this.state.year}</p>
            genreElement = <p>{this.state.genre}</p>
            buttonArea = (
                <div>
                    <button className="btn btn-primary" onClick={this.handleEdit.bind(this)}>Edit
                    </button>
            </div> )
        }   else if(this.state.editMode) {
            titleElement = (
                <textarea
                  ref="titleContent"
                  className="title-textarea"
                  defaultValue={this.state.title}
                />
              );
              authorElement = (
                <textarea
                  ref="authorContent"
                  className="author-textarea"
                  defaultValue={this.state.author}
                />
              );
              yearElement = (
                <textarea
                  ref="yearContent"
                  className="year-textarea"
                  defaultValue={this.state.year}
                />
              );
              genreElement = (
                <textarea
                  ref="genreContent"
                  className="genre-textarea"
                  defaultValue={this.state.genre}
                />
              );
            buttonArea = (
                <div>
                    <button className="btn btn-danger" onClick={this.handleAdd.bind(this)}>Add to Bookshelve
                    </button>
                </div> 
            );
        }   else if (this.state.readMode) {
            titleElement = <h5>{this.state.title}</h5>
            authorElement = <p>{this.state.author}</p>
            yearElement = <p>{this.state.year}</p>
            genreElement = <p>{this.state.genre}</p>
            buttonArea = (
                <div>
                    <button className="btn btn-danger" onClick={this.handleSave.bind(this)}>Read
                    </button>
                    <a href="/buy"><button className="btn btn-danger">Buy
                        </button></a>
            </div> )
        }   else  {
            buttonArea = <div><button className="btn btn-warning" onClick={this.handleRead.bind(this)}>Unread</button>
            <a href="/buy"><button className="btn btn-danger">Buy
                        </button></a>
            </div>;
            
        }
        
        
        return (
            
        
                <div className="col-sm-2">
            <div className="card card-view text-white bg-dark">
            <div className="card-body">
               <h5>{titleElement}</h5>
               <p>{authorElement}</p>
               <p>{yearElement}</p>
               <p>{genreElement}</p>
               <p>{buttonArea}</p>
            </div>
            </div>
            </div>
        


        )
    }
}

Book.defaultProps = { 
    title: "Title",
    author: "Author",
    year: "Year",
    genre: "Genre"
};

Book.propTypes = {
    title: PropTypes.string,
    author: PropTypes.string,
    year: PropTypes.number,
    genre: PropTypes.string
}

export default Book;