import React from 'react'
import Book from './Book'


class BookShelf extends React.Component {
  BookShelfChanged = ()=>{
    this.props.BookShelfChanged(); /* send Notification to caller component indicating Book shelf change */
  }

  _isMounted = true;
  componentWillUnmount(){
    this._isMounted = false;
  }

  render() {
    const {bookShelf ,books} = this.props;
    return this._isMounted&&(
              <div className="bookshelf">
                  <h2 className="bookshelf-title">{bookShelf}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {books.map((book)=><li key={book.id}><Book bookInfo={book} BookShelfChanged={this.BookShelfChanged}/></li>)}
                    </ol>
                  </div>
                </div>
        )}
}

export default BookShelf
