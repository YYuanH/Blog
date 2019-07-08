import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import MainPage from './main';
import SignUp from './signup';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      key: undefined,
    };
  }

  setKey = (key, remember) => {
    this.setState({ key });
    if(remember)
      localStorage.setItem('local_key', key);
  }

  signOut = () => {
    this.setKey({key: undefined});
    localStorage.removeItem('local_key');
  }

  render() {
    const { key } = this.state; //每次启动时的key
    const local_key = localStorage.getItem('local_key'); //本地存储的key

    return (
      <Router>
        <Switch>
          <Route exact path="/" render={ () => <Redirect to="/home" /> } />
          <Route 
            path="/home"
            render={ ({history, match}) => <MainPage history={history} match={match} user_key={ local_key ? local_key : key } setKey={this.setKey} signOut={this.signOut} /> } 
          />
          <Route
            path="/signup"
            render={ ({history, match}) => <SignUp history={history} match={match} user_key={ local_key ? local_key : key } /> }
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
