import React from 'react'
import {Route} from 'react-router-dom' 
import './App.css'
import BooksContent from './BooksContent'
import SearchBooks from './searchbooks'

class BooksApp extends React.Component {
  _isMounted = true;
  componentWillUnmount(){
    this._isMounted = false;
  }
  render() {
    return this._isMounted&&(
      <div className="app">
        <Route exact path='/' render ={()=>(<BooksContent/>)}/>
        <Route path='/search' render={() => (<SearchBooks/>)}/>
      </div>
    )
  }
}

export default BooksApp
