import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ViewUsers from './ViewUsers';
import CreateUpdateUser from './CreateUpdateUser';
import service from './service/service';
import ViewUser from './ViewUser';

class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      users : []
    } 
  }

  componentDidMount(){
      service.getUsers().then((res) =>{
        console.log(res.data);
        this.setState({ users : res.data});
      })
  }

  render() {
    const staticUsers = [
        {
            name: "John",
            title: "Developer"
        },
        {  
            name: "Wes",
            title: "Content Creator"
        },
        {
            name: "Jane",
            title: "Designer"
        }
    ]; 

    return (
      <Router>
        <Routes>
          <Route path="/" element={<ViewUsers users={this.state.users}/>} />
          <Route path='/create' element={<CreateUpdateUser/>}/>
          <Route path='/user/:userId' element={<ViewUser/>}/>
        </Routes>
      </Router>

    )
  }
}

export default App