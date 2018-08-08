import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Post from './component/post'
import PostForm from './component/postForm'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'

const store = createStore(() => [], {}, applyMiddleware())

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        </header>
        <PostForm/>
        <hr/>
        <Post/>

      </div>
</Provider>
    );
  }
}

export default App;
