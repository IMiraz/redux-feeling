import React, { Component } from 'react'
import {connect} from 'react-redux';
import PropTypes from 'prop-types'
import {fetchPosts} from './action/dispatch'

class Posts extends Component {

    componentWillMount(){
        this.props.fetchPosts();

    }


  render() {

 const postitem = this.props.posts.map(data => (
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

Posts.propTypes = {
 fetchPosts: PropTypes.func.isRequired,
 posts:PropTypes.array.isRequired
}

const mapStateToProps = state => ({
 posts:state.posts.items
});

export default connect(mapStateToProps,{fetchPosts}) (Posts);
