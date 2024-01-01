import {React, useState, useContext} from 'react'
import AppContext from '../AppContext'
import { RegisterUser } from "../Util/UserService";


function Register() {
    const {userData, setUserData} = useContext(AppContext);
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("")
    const [message, setMessage] = useState("")

    const HandleFormSubmit = async (event) => {
        event.preventDefault();
        const registerResult = await RegisterUser(email, username, password);
        
        if(registerResult && registerResult.status === "success"){
            
            setUserData((prevValue) => {
                setMessage("Logged in!");
                setError("");
                return( {...prevValue, username: username, ...registerResult.recevied})
            })

        }else{
            setError("invalid input or user already exists")
        }
        
    }
    
    
    return (
        <div>
        <label>{error}</label>
        <label>{message}</label>
        <form className='px-3 pt-2' onSubmit={HandleFormSubmit}>
            <div>
                <label className='block text-center text-sm font-medium leading-6 text-white' >Email</label>
                <input 
                className="block w-full rounded-md border-0 py-1 pl-4 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                type='text'
                id="email"
                value={email}
                onChange={(e) => {setEmail(e.target.value)}}
                 />
            </div>
            <div>
                <label className='block text-center text-sm font-medium leading-6 text-white' >Username</label>
                <input 
                type='text'
                className="block w-full rounded-md border-0 py-1 pl-4 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
            type='submit'>Register</button>

        </form>
    </div>
  )
}

export default Register