import './App.css';
import React, {useState, Fragment} from 'react';
import AddUserForm from "./components/Forms/AddUserForm";
import EditUserForm from "./components/Forms/EditUserForm";
import UserTable from "./components/Tables/UserTable"

function App() {
  const userData=[
    {id:1, name:"Isaac", username:"abc"},
    {id:2, name:"Billy", username:"def"},
    {id:3, name:"Joe", username:"ghi"}
  ];

  const initialFormState={id:null,name:"",username:""}
  
  // Using the use state to update the user input
  const [users, setUsers] = useState(userData);
  const [currentUser, setCurrentUser]=useState(initialFormState)
  const [editing, setEditing]=useState(false)

  
  const addUser=user=>{
    user.id=users.length+1
    setUsers([...users,user])
  }

  const deleteUser=id=>{
    setEditing(false)
    setUsers(users.filter(user=>user.id !== id))
  }

  const updateUser=(id,updateUser)=>{
    setEditing(false)

    setUsers(users.map(user=>(user.id===id?updateUser:user)))
  }

  const editRow=user=>{
    setEditing(true)
    setCurrentUser({id: user.id, name:user.name, user:user.username})
  }

  return (
    <div className="App">
      <h1>Hello world</h1>
    </div>
  );
}

export default App;
