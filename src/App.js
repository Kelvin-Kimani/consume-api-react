import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ViewUsers from './ViewUsers';
import CreateUpdateUser from './CreateUpdateUser';
import service from './service/service';
import ViewUser from './ViewUser';
import UpdateUser from './UpdateUser';

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

    return (
      <Router>
        <Routes>
          <Route path="/" element={<ViewUsers users={this.state.users}/>} />
          <Route path='/create' element={<CreateUpdateUser/>}/>
          <Route path='/user/:userId' element={<ViewUser/>}/>
          <Route path='/update-user/:userId' element={<UpdateUser/>}/>
        </Routes>
      </Router>

    )
  }
}

export default App