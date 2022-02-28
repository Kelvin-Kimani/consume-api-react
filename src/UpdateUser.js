import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import service from './service/service';

const UpdateUser = () => {

    const { userId } = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState({});
    const [name, setName] = useState('');
    const [role, setRole] = useState('');

    const submitForm = (e) =>{
        e.preventDefault();

       const updatedUser = { name, role}

        service.updateUser(userId, updatedUser)
            .then((res) =>{
                console.log(res)
                navigate('/')
            })
            .catch((err) => console.log(err))
    }

    useEffect(() => {
      
        service.getUserById(userId)
            .then((res) => {
                setUser(res.data)
                setName(res.data.name)
                setRole(res.data.role)

                console.log(user)
            })
            .catch((err) => console.log(err))

    }, [])
    

  return (
    <div className='container pt-5'>
      <h1 className='text-center'>Update User</h1>
      <form>

        <div className="form-group pb-3">
            <input type="text" className="form-control" required name="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
        </div>
        <div className="form-group pb-3">
            <input type="text" className="form-control" required name="role" placeholder="Role" value={role} onChange={(e) => setRole(e.target.value)}/>
        </div>

        <button className='btn btn-success btn-sm' onClick={(e) => submitForm(e)}>Submit</button>

      </form>
    </div>
  )
}

export default UpdateUser