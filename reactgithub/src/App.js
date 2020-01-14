import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

// components
import UserCard from './components/UserCard';

const Container = styled.div`
  width: 100%;
  margin-top: 10%;
`;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: [],
      followers: []
    }
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

  render() {
    return (
      <Container>
        {/* {console.log(this.state.user)} */}
        <UserCard user={this.state.user} followers={this.state.followers} />
      </Container>
    )
  }
}

export default App;
