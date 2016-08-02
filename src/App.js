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
      info:{},
      wait:true
    }
  }
  componentDidMount(){
    this.getUserInfo().then((data) => {
      console.log(data.gitInfo);
      this.setState({
        info:data.gitInfo,
        wait:false
      })
    });
  }
  render () {
    return(
      <div>
        {
          this.state.wait ? <h1>loading....</h1> :
            <div>
              {this.state.info.blog},
              {this.state.info.following},
              {this.state.info.location},
              <img src={this.state.info.avatar_url} />
            </div>
        }
      </div>
    )
  }
}

export default App;
