import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import service from './service/service';

const TableHeader = () =>{
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
                <th>Actions</th>
            </tr>
        </thead>
    );
}


class Table extends Component {
    constructor(props){
        super(props)
    }

  render() {
    
    
    const { users } = this.props;
    const deleteUser = (userId) =>{
        service.deleteUser(userId)
            .then(() => console.log("Successfully deleted!"))
    }

    return (
      <table className='table table-bordered'>
         <TableHeader/>
        
        <tbody>
        {users.map((user, index) =>(
                         <tr key={index}>
                         <td>{user.name}</td>
                         <td>{user.role}</td>
                         <td>
                             <div className='d-flex justify-content-between'>
                                 <Link to={`/user/${user._id}`} className='btn btn-secondary'>View</Link>
                                 <Link to={`/update-user/${user._id}`} className='btn btn-warning'>Edit</Link>
                                 <button className='btn btn-danger' onClick={() => deleteUser(user._id)}>Delete</button>
                             </div>
                         </td>
                     </tr>
         ))}
        </tbody>
      </table>
    )
  }
}

export default Table

