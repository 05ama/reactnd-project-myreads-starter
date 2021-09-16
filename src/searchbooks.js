import React from 'react'
import {Link} from 'react-router-dom' 
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class SearchBooks extends React.Component {
  state = {
    books:[]
  }
  
  updateQuery = (query) => {
    if(query !== "")
    {
      BooksAPI.search(query).then((books)=>{
        this.setState({
            books:books
        })
      })
    }else{
      this.setState({
        books:[]
      })      
    }
  }

  BookShelfChanged = ()=>{}

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/'>
            <button className="close-search">Close</button>
          </Link>
          <div className="search-books-input-wrapper">
            <input 
              type="text" 
              placeholder="Search by title or author"
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.books!== undefined && 
            this.state.books.error === undefined &&
            this.state.books.length>0? 
              this.state.books.map((book)=><li key={book.id}><Book bookInfo={book} BookShelfChanged={this.BookShelfChanged}/></li>):
              ""}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBooks
