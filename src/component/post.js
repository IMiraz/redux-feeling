import React, { Component } from 'react'
import {connect} from 'react-redux';
import {fetchPosts} from './action/postAction'

class Posts extends Component {

    componentWillMount(){
        this.props.fetchPosts();

    }


  render() {

 const postitem = this.props.post.map(data => (
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
const mapStateToProps = state => {
posts:state.posts.items;

}

export default connect(mapStateToProps,{fetchPosts}) (Posts);
