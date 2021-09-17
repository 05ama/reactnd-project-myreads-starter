import React from 'react'
import {withRouter} from 'react-router-dom' 
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

  windowReload = () =>{
    const Location = this.props.location.pathname; /* get page location */
    if(Location === "/")
    {
      window.location.reload(true); /* Reload Main page */
    }else{
      /* No need to reload */
    }
  }

  componentDidMount() {
    BooksAPI.get(this.props.book.id).then((book)=>{
      if(book.shelf !== "none"){          /* none is not displayed as a shelf */
        this.setState({shelf:book.shelf}) /* Update book shelf */
      }
    });
  }

  setShelf = (event)=>{
    let NewShelf = event.target.value;
    BooksAPI.update(this.props.book,NewShelf).then(this.windowReload); /* Update the Book shelf in the back end server */
    this.setState(()=>({shelf:NewShelf})); /* Update component state */
    this.props.BookShelfChanged();  /* send Notification to caller component indicating Book shelf change */
  }

  render() {
    return (
            <div className="book-shelf-changer">
              {
                /*
                  Display a "✓" mark in case option matching the current book shelf
                */
              }
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

export default withRouter(BookShelfChanger)
