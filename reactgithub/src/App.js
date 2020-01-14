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
