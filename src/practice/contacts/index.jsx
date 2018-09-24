import React from 'react';
import ReactDOM from 'react-dom';
import { Grid } from 'react-bootstrap';

import Profiles from './Profiles';
import Header from './header';

import './index.css';

class App extends React.Component {
  state = {
    users: null,
  }

  componentDidMount() {
    fetch('https://randomuser.me/api/?results=25')
      .then(res => res.json())
      .then(({ results }) => this.setState({ users: results }));
  }

  render() {
    const { users } = this.state;
    if (!users) return null;
    return (
      <div className="App">
        <Header />
        <Grid className="App-intro">
          <br />
          <Profiles users={users} />
        </Grid>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
