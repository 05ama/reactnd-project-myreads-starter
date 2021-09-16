import React from 'react'
import BookShelf from './BookShelf'

class BooksContent extends React.Component {
  state = {

  }

  render() {
    return (
            <div className="list-books-content">
              <BookShelf/>
            </div>
        )}
}

export default BooksContent
