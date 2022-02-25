import React, { Component } from 'react'
import { Link } from 'react-router-dom'

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

const TableBody = (props) =>{
    
    const rows = props.users.map((user, index) => {
        return (
            <tr key={index}>
                <td>{user.name}</td>
                <td>{user.role}</td>
                <td>
                    <div className='d-flex justify-content-between'>
                        <button className='btn btn-secondary'>View</button>
                        <button className='btn btn-secondary'>Edit</button>
                        <button className='btn btn-danger'>Delete</button>
                    </div>
                </td>
            </tr>
        )
    });

    return (
        <tbody>
            {rows}
        </tbody>
    )
}

class Table extends Component {
    constructor(props){
        super(props)
    }

  render() {
    const { users } = this.props;

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
                                 <button className='btn btn-warning'>Edit</button>
                                 <button className='btn btn-danger'>Delete</button>
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

