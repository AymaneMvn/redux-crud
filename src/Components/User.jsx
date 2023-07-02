import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {deleteUserAction} from '../config/action'

export default function User() {
  const users = useSelector(data => data.users)
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteUserAction(id))
  }
  return (
    <div>
        <p><Link to={'/add-user'}><button>Add User</button></Link></p>
        
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>email</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
           {users.map((user , index)=>{
            return (
              <tr key={index}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <Link to={`/update-user/${user.id}`}>
                <button>Edit</button>
                </Link>
                <Link>
                <button onClick={e => handleDelete(user.id)}>Delete</button>
                </Link>
                </td> 
            </tr>
            )
           })}
          </tbody>
        </table>
    </div>
  )
}
