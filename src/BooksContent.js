import React from 'react'
import * as BooksAPI from './BooksAPI'
import BookShelf from './BookShelf'
import {Link} from 'react-router-dom';

class BooksContent extends React.Component {
  state = {
    books:[],
    shelves:["Currently Reading", "Want to Read", "Read"]
  }

  componentDidMount() {
    BooksAPI.getAll().then((books)=>{
      this.setState(
        {
          books:books
        })
    })
  }

  BookShelfChanged = ()=>{
    BooksAPI.getAll().then((books)=>{
      this.setState(
        {
          books:books
        })
    })
  }

  render() {
    const {shelves, books} = this.state;
    return (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            {shelves.map((bookShelf)=><BookShelf books={
              books.filter((book)=>{return book.shelf.toLowerCase() === bookShelf.replace(/ /g,'').toLowerCase()})
            } bookShelf = {bookShelf} BookShelfChanged={this.BookShelfChanged}/>)}
          </div>
          <div className="open-search">
              <Link to='/search'><button>Add a book</button></Link>
          </div>
        </div>
    )}
}

export default BooksContent
