import React from 'react'
import BookShelfChanger from './BookShelfChanger'

class Book extends React.Component {

  BookShelfChanged = ()=>{
    this.props.BookShelfChanged();  /* send Notification to caller component indicating Book shelf change */
  }

  _isMounted = true;
  componentWillUnmount(){
    this._isMounted = false;
  }

  render() {
    const {title, authors, imageLinks, shelf} = this.props.bookInfo;
    return this._isMounted&&(
            <div className="book">
              <div className="book-top">
                <div className="book-cover" 
                  style={
                    { width: 128, 
                      height: 193, 
                      backgroundImage: `url(${imageLinks!==undefined?imageLinks.thumbnail:""})`}/* Book has an image link */}>
                </div>
                <BookShelfChanger shelf={shelf} book={this.props.bookInfo} BookShelfChanged={this.BookShelfChanged}/>
              </div>
              <div className="book-title">{title}</div>
              {authors !== undefined?authors.map((author)=><div className="book-authors" key={author+this.props.bookInfo.id}>{author}</div>)/* Book has an Author info*/:
              ""}
            </div>
        )}
}

export default Book
