import React from 'react';
import axios from 'axios';

// components
import UserCard from './components/UserCard';

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
      <div>
        {/* {console.log(this.state.user)} */}
        <UserCard user={this.state.user} followers={this.state.followers} />
      </div>
    )
  }
}

export default App;
