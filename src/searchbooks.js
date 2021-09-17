import React from 'react'
import debounce from 'lodash/debounce'
import {Link} from 'react-router-dom' 
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class SearchBooks extends React.Component {
  state = {
    books:[]
  }

  updateQuery = (query) => {
    if(query !== "")
    {
      BooksAPI.search(query).then((books)=>{
        this.setState({
            books:books
        })
      })
    }else{
      this.setState({
        books:[] /* when search inputs is null remove all results */
      })      
    }
  }

  BookShelfChanged = ()=>{
    /* Dummy function No action is required
       Created to match the Props for Book component
    */
  } 
  _isMounted = true;
  componentWillUnmount(){
    this._isMounted = false;
  }
  render() {
    return this._isMounted&&(
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/'>
            <button className="close-search">Close</button>
          </Link>
          <div className="search-books-input-wrapper">
            <input 
              type="text" 
              placeholder="Search by title or author"
              onChange={debounce((event) => this.updateQuery(event.target.value),25000,{trailing:false,leading:true})}/* add debounce */
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.books!== undefined && /* Valid book state  */
            this.state.books.error === undefined && /* book is found in search  */
            this.state.books.length>0? /* there is at least one book found  */
              this.state.books.map((book)=><li key={book.id}><Book bookInfo={book} BookShelfChanged={this.BookShelfChanged}/></li>):
              ""}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBooks
