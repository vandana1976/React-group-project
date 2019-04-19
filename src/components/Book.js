import React, {Component} from 'react';
import '../css/Book.css';
import PropTypes from 'prop-types';

class Book extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="col-sm-2">
            <div className="card card-view text-white bg-info">
            <div className="card-body ">
                <h5 className="card-title ">{this.props.title}</h5>
                    <p className="author">{this.props.author}</p>
                    <p className="year">{this.props.year}</p>
                    <p className="genre">{this.props.genre}</p>
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