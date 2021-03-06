import React, { Component } from 'react'

import {connect} from 'react-redux'

import {createPost} from './action/dispatch'
import PropTypes from 'prop-types'
class PostForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title:'',
            body:'',
        };


this.onChange = this.onChange.bind(this);
this.onSubmit = this.onSubmit.bind(this)
    }

onChange(e) {
 this.setState({[e.target.name]:e.target.value});
}
onSubmit(e){
    e.preventDefault();
    const post = {
        title:this.state.title,
        body:this.state.body,
    };

//call action
 this.props.createPost(post)


//   fetch('https://jsonplaceholder.typicode.com/posts', {
//  method:'POST',
//  headers:{
//      'content-type': 'application/Json'
//  },
//  body:JSON.stringify(post)
//   })

//   .then(res => res.json())
//   .then(data => console.log(data))

}

  render() {


    return (
      <div>
<h1>Add Post</h1>
<form onSubmit={this.onSubmit}>
<div>
<label>title:</label>
<br/>
<input type="text" name="title"  value = {this.state.title} onChange={this.onChange}/>
</div>
<div>
<label>Body:</label>
<br/>
<textarea name="body" value= {this.state.body} onChange={this.onChange}/>
</div>
<br/>
<button type="submit" onSubmit={this.onSubmit}>post</button>
</form>
      </div>
    )
  }
}
PostForm.propTypes = {
    createPost: PropTypes.func.isRequired,
    // PostForm:PropTypes.array.isRequired
   }

export default connect(null, {createPost}) (PostForm);