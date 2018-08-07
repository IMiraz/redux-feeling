import React, { Component } from 'react'

class PostForm extends Component {
    constructor(props) {
        super(props)

    }

  render() {


    return (
      <div>
<h1>Postform</h1>
<form>
<div>
<label>title:</label>
<br/>
<input type="text" name="title"/>
</div>
<div>
<label>Body:</label>
<br/>
<textarea name="body"/>
</div>
<br/>
<button type="submit">post</button>
</form>
      </div>
    )
  }
}

export default PostForm
