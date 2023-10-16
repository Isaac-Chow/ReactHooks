// Import the CSS file
// import the react hook useState to update our variables
import "./AddUser.css";
import React, {useState} from "react"

// Use an arrow function to create a component
export const AddUserForm=(props)=>{
    const initialFormState = {id:null, name:"", username: ""}
    const [user, setUser]=useState(initialFormState)
    const handleInputChange=event=>{
        const{name,value}=event.target
        setUser({...user,[name]:value})
    }

    return(
        <form onSubmit={event=>{
            event.preventDefault()
            // If the user did not type a name or username
            // we
            if (!user.name || !user.username) return
            props.addUser(user)
            setUser(initialFormState)
        }}
        >
            <label>Name</label>
            <input type="text" name="name" value={user.name} onChange={handleInputChange}/>

            <label>Username</label>
            <input type="text" name="username" value={user.username} onChange={handleInputChange}/>
            <button>Add new user</button>
        </form>
    )   
}