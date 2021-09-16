import React from 'react'
import * as BooksAPI from './BooksAPI'

class BookShelfChanger extends React.Component {
  state = {
    shelf:""
  }

  componentDidMount() {
    this.setState(()=>({
      shelf:this.props.shelf
    }))
  }

  setShelf = (event)=>{
    let NewShelf = event.target.value;
    BooksAPI.update(this.props.book,NewShelf);
    this.setState(()=>({shelf:NewShelf}))
  }

  render() {
    //console.log(this.state.shelf)
    return (
            <div className="book-shelf-changer">
              <select onChange={this.setShelf} value={this.state.shelf}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
        )}
}

export default BookShelfChanger
