import React from 'react'
import {Route} from 'react-router-dom' 
import './App.css'
import BooksContent from './BooksContent'
import SearchBooks from './SearchBooks'

class BooksApp extends React.Component {

  render() {
    return (
      <div className="app">
        <Route exact path='/' render ={()=>(<BooksContent/>)}> </Route>
        <Route path='/search' render={() => (
          <SearchBooks/>
          )}></Route>
      </div>
    )
  }
}

export default BooksApp
