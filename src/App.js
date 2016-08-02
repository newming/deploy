import React from 'react';
import axios from 'axios';

class App extends React.Component {
  getUserInfo(){
    return axios.get(`https://api.github.com/users/newming`)
      .then((xx) => (
        { gitInfo: xx.data }
    ))
  }
  constructor(){
    super();
    this.state={
      info:{}
    }
  }
  componentDidMount(){
    this.getUserInfo().then((data) => {
      console.log(data.gitInfo);
      this.setState({
        info:data.gitInfo
      })
    });
  }
  render () {
    return(
      <div>
        {this.state.info.blog},
        {this.state.info.following},
        {this.state.info.location},
        <img src={this.state.info.avatar_url} />
      </div>
    )
  }
}

export default App;
