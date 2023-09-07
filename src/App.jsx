import { useState, useEffect } from 'react'
import './index.css'

function App() {

  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchData = async() => {
    const response = await fetch('https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users')
    const json = await response.json();
    setUsers(json)
    }
    fetchData()
   }, []);

   const [hash, setHash] = useState(window.location.hash.slice(1)*1)
   useEffect(() => {
    window.addEventListener("hashchange", () => {
      setHash(window.location.hash.slice(1)*1);
    })
   }, [])

   const selectedUser = users.find(user => hash === user.id);
   console.log(selectedUser)
  
  return (
    <>
    <h1> Contact List: ({users.length})</h1>
    <h2>{selectedUser ? (<p>{selectedUser.name}</p>) : null}</h2>
    <h2>{selectedUser ? (<p>{selectedUser.email}</p>) : null}</h2>
    <h2>{selectedUser ? (<p>{selectedUser.address.street}</p>) : null}</h2>
    <h2>{selectedUser ? (<p>{selectedUser.address.suite}</p>) : null}</h2>
    <h2>{selectedUser ? (<p>{selectedUser.address.city}</p>) : null}</h2>
    <h2>{selectedUser ? (<p>{selectedUser.address.zipcode}</p>) : null}</h2>
     <hr></hr>
     <ul>
      {users.map(users => {
          return (
            <li key={users.id} className= {users.id === hash ? "selected" : ""}> <a href={`#${users.id}`}> {users.name}</a> </li>
          )
      }
      )
      }
     </ul>
     <hr/>
    </>
  )
}

export default App
