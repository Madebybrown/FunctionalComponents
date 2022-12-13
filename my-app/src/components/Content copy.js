import React, { Component } from 'react'
import css from "./css/Content.module.css";
import {savedPosts} from "../posts.json";
import PostItem from './PostItem';
import Loader from './Loader';

export class Content extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isLoaded: false,
       posts: {},
       name: '', // add a state variable to store the user input
    }
  }
  
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoaded: true,
        posts: savedPosts,
      })
    }, 2000)
  }

  handleInputChange = (event) => {
    // convert the input value to lowercase
    const name = event.target.value.toLowerCase();

    // filter the saved posts by name
    const filteredPosts = savedPosts.filter(post => post.name.toLowerCase().includes(name));

    // update the state with the filtered posts
    this.setState({
      posts: filteredPosts,
      name, // update the state variable with the user input value
    });
  }

  render() {
    return (
      <div className={css.Content}>
        <div className={css.TitleBar}>
          <h1>
            My Photos
          </h1>
          <form>
            <label htmlFor="searchInput">Search:</label>
            <input type="text" id="searchInput" onChange={this.handleInputChange} /> {/* add the onChange event handler */}
          </form>
          <h4>posts found: {this.state.posts.length}</h4>
        </div>
        <div className={css.SearchResults}>
          {
            this.state.isLoaded ? <PostItem savedPosts={this.state.posts} />
            : <Loader />
        }
    </div>
</div>
)
}
}

export default Content
