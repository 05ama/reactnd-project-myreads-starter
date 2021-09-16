import React from 'react'
import BookShelf from './BookShelf'

class BooksContent extends React.Component {
  state = {

  }

  render() {
    return (
            <div className="list-books-content">
              {this.props.BookShelves.map((bookShelf)=>(<BookShelf BookShelf={bookShelf} key={bookShelf}/>))}
            </div>
        )}
}

export default BooksContent
