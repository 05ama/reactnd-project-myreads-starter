import React from 'react'
import Book from './Book'
import * as BooksAPI from './BooksAPI'

class BookShelf extends React.Component {
  state = {
    books:[],
    shelf :""
  }

  componentDidMount() {
    BooksAPI.getAll().then((books)=>{
      this.setState(
        {
          books:books.filter((book)=>{return book.shelf.toLowerCase() === this.props.BookShelf.replace(/ /g,'').toLowerCase()}),
          shelf:this.props.BookShelf
        })
    })
  };
  
  render() {
    const {books , shelf} = this.state;
    //console.log("Called")
    return (
              <div className="bookshelf">
                  <h2 className="bookshelf-title">{shelf}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {books.map((book)=><li key={book.id}><Book bookInfo={book}/></li>)}
                    </ol>
                  </div>
                </div>
        )}
}

export default BookShelf
