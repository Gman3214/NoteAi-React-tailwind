import React , {useState, useContext} from 'react'
import ProfilePicture from './ProfilePicture'
import TextInput from './TextInput'
import Button from './Button'
import AppContext from '../AppContext'
import { PatchUser } from '../Util/UserService'

    function Profile() {
    const {userData, setUserData} = React.useContext(AppContext);
    const [apiInput, setApiInput] = useState(userData.apikey);


    const HandleLogout = () => {

        localStorage.removeItem("token");
        localStorage.removeItem("username");
        setUserData({
            username: "",
            profilePicture: "",
            token: "",
            apiKey: "",
            promps: "",
            notes: []
          });
    } 


    const HandleApiKeyChange = async (apikey) => {
        const result = await PatchUser(userData.token, {apikey: apiInput});
        console.log(result)
        setUserData(prevValue => ({...prevValue, apiKey: apiInput }));
    } 

    return (
        <div className=" flex flex-col justify-center items-center gap-1 p-3">
            <ProfilePicture width="w-10" height="w-10" />
            <h1 className="text-white text-2xl">{userData.username}</h1>
            <TextInput setValue={setApiInput} value={apiInput} />
            <Button text="Save" onClick={HandleApiKeyChange} />                  
            <Button text="Logout" onClick={HandleLogout} />                  
            
        </div> 
    );
}

export default Profile