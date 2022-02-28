import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import service from './service/service'


const CreateUpdateUser = () => {

    const navigate = useNavigate();
    const [name, setName] = useState('')
    const [role, setRole] = useState('')

    const submitForm = (e) =>{
      e.preventDefault();

      const user = {name, role}

      console.log(user)

      service.createUser(user)
        .then((res) => {
          console.log(res)
          navigate('/')
          })
        .catch((err) => console.log(err));
    }

  return (
    <div className='container pt-5'>
      <h1 className='text-center'>Create User</h1>
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

export default CreateUpdateUser