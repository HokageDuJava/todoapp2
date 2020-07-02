import React, { Component } from "react";
import Axios from "axios";

class Post extends Component {
  state = {
    post: {},
  };

  componentDidMount() {
    let id = this.props.match.params.post_id;
    Axios.get("https://jsonplaceholder.typicode.com/posts/" + id).then(
      (res) => {
        this.setState({
          post: res.data,
        });
      }
    );
  }

  render() {
    const { post } = this.state;
    const postRender =
      post !== {} ? (
        <div className="post">
          <h1>
            Post n°{post.id} : {post.title}
          </h1>
          <p>{post.body}</p>
        </div>
      ) : (
        <div>
          <p>Loading...</p>
        </div>
      );
    return <div>{postRender}</div>;
  }
}

export default Post;
