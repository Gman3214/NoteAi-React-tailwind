import {React, useState, useContext} from 'react'
import AppContext from '../AppContext'
import { LoginUser } from "../Util/UserService";
import { GetUserNotes } from '../Util/NoteService'


function Login() {
    const {userData, setUserData} = useContext(AppContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("")
    const [message, setMessage] = useState("")

    const HandleFormSubmit = async (event) => {
        event.preventDefault();
        const loginResult = await LoginUser(username, password);
        
        if(loginResult && loginResult.status === "success"){
            const userNoteResult = await GetUserNotes(loginResult.recevied.token);
            
            localStorage.setItem("token", loginResult.recevied.token)
            localStorage.setItem("username", username)
            
            setUserData((prevValue) => {
                setMessage("Logged in!");
                setError("");
                return( {...prevValue, username: username, ...loginResult.recevied, notes: userNoteResult.recevied?.notes})
            })

        }else{
            setError("incorrect Username or password")
        }
        
    }
    
    return (
        <div>
        <label>{error}</label>
        <label>{message}</label>
        <form className='px-3 pt-2' onSubmit={HandleFormSubmit}>
            <div>
                <label className='block text-center text-sm font-medium leading-6 text-white' >Username</label>
                <input 
                className="block w-full rounded-md border-0 py-1 pl-4 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                type='text'
                id="username"
                value={username}
                onChange={(e) => {setUsername(e.target.value)}}
                 />
            </div>
            <div>
                <label className='block text-center text-sm font-medium leading-6 text-white' >Password</label>
                <input 
                className="block w-full rounded-md border-0 py-1 pl-4 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                type='password'
                id="password"
                value={password}
                onChange={(e) => {setPassword(e.target.value)}} />
            </div>
            <button 
                className="text-white bg-neutral-500 mt-2 px-2 py-1 rounded-lg"  
                type='submit'>Login</button>

        </form>
    </div>
  )
}

export default Login