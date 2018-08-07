import React, { Component } from 'react'

class Posts extends Component {
    constructor(props) {
        super(props)
        this.state ={
            post:[],
        }
    }
componentWillMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => this.setState({post:data}))
}
  render() {

 const postitem = this.state.post.map(data => (
     <div key={data.id}>
  <p>{data.id}</p>
  <p>{data.title}</p>
  <p>{data.body}</p>
     </div>

 ))

    return (
      <div>
<h1>Posts</h1>
{postitem}
      </div>
    )
  }
}

export default Posts
