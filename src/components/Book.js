import React, {Component} from 'react';
import '../css/Book.css';
import PropTypes from 'prop-types';

class Book extends Component {
    constructor() {
        super();
    }

    componentWillMount(){
        
        this.state = {
            title: this.props.title,
            author: this.props.author,
            year: this.props.year,
            genre: this.props.genre,
            readMode: false
        }
    }

    handleRead(){
        this.setState(
        {
             readMode: true
        });
    }

    handlerSave() {
        this.setState(
            {
                readMode: true
            
            }
        )
            
    }

    render() {
        let titleElement, authorElement, yearElement, genreElement, buttonArea;
        titleElement = this.state.title;
        authorElement = this.state.author;
        yearElement = this.state.year;
        genreElement = this.state.genre;
        if(this.state.readMode) {
            buttonArea = <div><button className="btn btn-danger" >Read</button></div> ;
        } else {
            buttonArea = <div><button className="btn btn-warning" onClick={this.handleRead.bind(this)}>Unread</button></div>;
        }
        
        return (
            <div className="col-sm-2">
            <div className="card card-view text-white bg-info">
            <div className="card-body ">
               <p>{titleElement}</p>
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