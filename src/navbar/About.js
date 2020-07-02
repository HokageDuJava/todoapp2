import React, { Component } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

class About extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      this.setState({
        posts: res.data.slice(1, 25),
      });
    });
  }

  render() {
    const { posts } = this.state;
    const postsList = posts.length ? (
      posts.map((post) => {
        return (
          <div className="card" key={post.id}>
            <NavLink to={"/" + post.id}>
              <h1 className="card-title">{post.title}</h1>
            </NavLink>
            <p className="card-content">{post.body}</p>
          </div>
        );
      })
    ) : (
      <div className="card">
        <p className="card-content">Loading...</p>
      </div>
    );
    return (
      <div className="">
        <h1>About</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id, libero?
          Tenetur incidunt minima alias unde tempore porro voluptas commodi ut
          at. Laborum labore, dolorum officia ipsum molestias voluptas
          consectetur similique.
        </p>

        <div className="cards">{postsList}</div>
      </div>
    );
  }
}

export default About;
