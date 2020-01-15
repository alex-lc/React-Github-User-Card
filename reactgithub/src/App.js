import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

// components
import UserCard from './components/UserCard';

const Container = styled.div`
  width: 100%;
  margin-top: 10%;

  .search {
    display: flex;
    justify-content: center;
    margin-bottom: 5rem;

    button {
      margin: 0 1rem;
      border: none;
      border-radius: 0.3rem;
      transition: all 300ms;

      &:hover {
        transition: opacity 300ms;
        opacity: 0.8;
        cursor: pointer;
      }
    }

    input[type=text] {
      background: #4d4d4d;
      border: none;
      height: 3rem;
      padding: 0.5rem;
      color: #ccc;
    }
  }

  .logo {
    display: flex;
    justify-content: center;
    width: 100%;

    h1 {
      font-size: 3rem;
      font-weight: 300;
      color: #ccc;
      margin-bottom: 2rem;
    }
  }
`;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: [],
      followers: [],
      query: ''
    }
  }

  handleChanges = (e) => {
    this.setState({ query: e.target.value })
  }

  fetchUser = (e) => {
    e.preventDefault();
    axios.get(`https://api.github.com/users/${this.state.query}`)
      .then((res) => {
        this.setState({ user: res.data })
      })
      .catch((err) => {
        console.log(`There was an error: ${err}`);
      })

    axios.get(`https://api.github.com/users/${this.state.query}/followers`)
      .then((res) => {
        this.setState({ followers: res.data });
      })
      .catch((err) => {
        console.log(`There was an error: ${err}`);
      })
  }

  componentDidMount() {
    axios.get(`https://api.github.com/users/alex-lc`)
      .then((res) => {
        // console.log(res);
        this.setState({ user: res.data });
      })
      .catch((err) => {
        console.log(`There was an error: ${err}`);
      })

    axios.get(`https://api.github.com/users/alex-lc/followers`)
      .then((res) => {
        // console.log(res);
        this.setState({ followers: res.data })
      })
      .catch((err) => {
        console.log(`There was an error ${err}`);
      })
  }

  componentDidUpdate(prevPorps, prevState) {

  }

  render() {
    return (
      <Container>
        <div className="logo">
          <h1>GitHub Profile Search</h1>
        </div>
        <div className="search">
          <input onChange={this.handleChanges} type="text" name="githubUser" />
          <button onClick={this.fetchUser}>Search</button>
        </div>
        <UserCard user={this.state.user} followers={this.state.followers} />
      </Container>
    )
  }
}

export default App;
