import React from 'react'
import Table from './Table'
import { Link } from 'react-router-dom'

const ViewUsers = ({ users }) => {
  return (
    <div className='container'>
        <h1 className='text-center mt-4'>Good Afternoon</h1>
        <h4 className='text-center mt-4'>Let's do some crud operations</h4>
        <Link className='btn btn-primary mb-4' to="/create">CREATE USER</Link>
        
        <Table users={users}/>
    </div>
  )
}

export default ViewUsers