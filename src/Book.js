import React from 'react'
import BookShelfChanger from './BookShelfChanger'

class Book extends React.Component {

  BookShelfChanged = ()=>{
    this.props.BookShelfChanged();
  }

  render() {
    const {title, authors, imageLinks, shelf} = this.props.bookInfo;
    return (
            <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${imageLinks.thumbnail})`}}></div>
                <BookShelfChanger shelf={shelf} book={this.props.bookInfo} BookShelfChanged={this.BookShelfChanged}/>
              </div>
              <div className="book-title">{title}</div>
              {authors.map((author)=><div className="book-authors" key={author+this.props.bookInfo.id}>{author}</div>)}
            </div>
        )}
}

export default Book
