import React, {Component} from 'react'
import Book from './Book';





class Buy extends React.Component{
    constructor(props){
        super(props);
    }
    
    render() {
        return (
            <div>
       <div>
       <h1 style={{textAlign:"center", display:"block", fontSize: "100px", color:"lightblue"}}>Buy Books</h1>
       </div>
            <p><button className="btn btn-warning">Add to cart</button></p>
            </div>
    )
    }
}
    
    


export default Buy