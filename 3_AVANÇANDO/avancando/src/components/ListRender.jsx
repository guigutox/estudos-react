import React, { useState } from 'react'

const ListRender = () => {
     const [list] = useState(["Matheus", "Pedro", "Guilherme"]);

     const [users, setUsers] = useState([
        {id: 1, name: "Guilherme", age:31},
        {id: 2, name: "Pedro", age: 22},
        {id: 3, name: "Pedro", age: 32},
     ])

     const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 3);
        setUsers((prevUsers) => {
            return prevUsers.filter((user) => randomNumber !== user.id);
        })
     }

    return (
    <div>
        <ul>
            {list.map((item) => (
                <li>{item}</li>
            ))}
        </ul>
        <ul>
            {users.map((user)=>(
                <li key={user.id}>{user.name} - {user.age}</li>
            ))}
        </ul>
        <button onClick={deleteRandom}> Delete random user</button>
    </div>
  )
}

export default ListRender