import React from 'react'
import * as BooksAPI from './BooksAPI'

const Options = {
  currentlyReading:  {key:"currentlyReading" ,value:"Currently Reading"},
  wantToRead      :  {key:"wantToRead" ,value:"Want to Read"}, 
  read            :  {key:"read" ,value:"Read"},
  none            :  {key:"none" ,value:"None"}
}

class BookShelfChanger extends React.Component {
  state = {
    shelf:"none"
  }

  componentDidMount() {
    BooksAPI.get(this.props.book.id).then((book)=>{
      if(book.shelf !== "none"){
        this.setState({shelf:book.shelf})
      }
    });
  }

  setShelf = (event)=>{
    let NewShelf = event.target.value;
    BooksAPI.update(this.props.book,NewShelf);
    this.setState(()=>({shelf:NewShelf}));
    this.props.BookShelfChanged();
  }

  render() {
    return (
            <div className="book-shelf-changer">
              <select onChange={this.setShelf} value={this.state.shelf}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">
                  {this.state.shelf===Options.currentlyReading.key?"✓"+Options.currentlyReading.value:Options.currentlyReading.value}
                </option>
                <option value="wantToRead">
                  {this.state.shelf===Options.wantToRead.key?"✓"+Options.wantToRead.value:Options.wantToRead.value}
                </option>
                <option value="read">
                  {this.state.shelf===Options.read.key?"✓"+Options.read.value:Options.read.value}
                </option>
                <option value="none">
                  {this.state.shelf===Options.none.key?"✓"+Options.none.value:Options.none.value}
                </option>
              </select>
            </div>
        )}
}

export default BookShelfChanger
