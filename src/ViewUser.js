import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import service from './service/service'

const ViewUser = () => {

    const { userId } = useParams();
    const [user, setUser] = useState({})

    const getUserById = () =>{
        service.getUserById(userId).then((res) =>{
            setUser(res.data);
        })
    }
    
    useEffect(() => {
      getUserById();
    }, [])


    return (
    <div className='container mt-4'>
        <div className='card border-4'>
            <h1 className='text-center'>User</h1>

            <div className='row'>
                <div className='text-center col-lg-6'>
                    <h3>Name:</h3>
                    <h3>{user.name}</h3>
                </div>
            
                <div className='text-center col-lg-6'>
                    <h3>Role:</h3>
                    <h3>{user.role}</h3>
                </div>

            </div>

            <Link to="/" className="btn btn-sm btn-primary">Back</Link>

        </div>

    </div>
  )
}

export default ViewUser