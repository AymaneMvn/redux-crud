import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function User() {
  const users = useSelector(data => data.users)
  return (
    <div>
        <p><Link to={'/AddUser'}><button>Add User</button></Link></p>
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
                <button>Delete</button>
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
