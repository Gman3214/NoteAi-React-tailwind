// Dependencies
import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import NoteContainer from "./Components/NoteContainer";
import AppContext from "./AppContext";
// Styles
import "./tailwind.output.css"
import "./tailwind.css";
import Operations from "./Components/Operations";
import { CreateNote, GetUserNotes } from "./Util/NoteService";
import { LoginUser, LoginUserWithToken } from "./Util/UserService";


const defaultNotes = [
  {
    _id: "0",
    title: "This is an example note",
    text: "If you want to test the functionallity you are more then welcomed! but make sure you login to save your notes :D",
    color: "transparent"
  },

]


const App = () => {

  const [userData, setUserData] = useState({
    username: "",
    profilePicture: "",
    token: "",
    apikey: "",
    promps: "",
    notes: defaultNotes
  });
  const [operations, setOperations] = useState([]);

  useEffect( () => {
    
    async function fetchLoggedinUser(){

      if (localStorage.getItem("token") === undefined) return;
      if (localStorage.getItem("username") === undefined) return;
      
      console.log("just ran")


      const result = await LoginUserWithToken(localStorage.getItem("token"))
      
      if (result.status !== "success") return;

      localStorage.setItem("token", result.recevied.token)
      
      const localStorageToken = localStorage.getItem("token");
      const localStorageUsername = localStorage.getItem("username")
      
      const userNoteResult = await GetUserNotes(localStorageToken);


      setUserData((prevValue) => {
          return( {...prevValue, username: localStorageUsername, ...result.recevied, notes: userNoteResult.recevied?.notes})
      })

    }

    fetchLoggedinUser();
      
  }, [])

  const CreateNewNote = () => {
    setUserData((prevValue) => {
      const usedKeys = {}
      let tempKey = null
      for (const note of prevValue.notes) {
        usedKeys[note._id] = true;
      }
      for (let i = 0; i < Object.keys(usedKeys).length + 1; i++) {
        if (usedKeys[i] === false || !usedKeys[i]) {
          tempKey = i + ""
        }
      }

      const NoteOperation = async (tempKey) => {

        const result = await CreateNote(userData.token, {
          title: "New Note",
          text: "",
          color: "transparent"
        });
        setUserData((prevValue) => {
          const newValue = { ...prevValue };
          for (const note of newValue.notes) {
            if (note._id === tempKey){
              note._id = result.recevied._id;
            }
          }
          return {...newValue}
        })
      }


      setOperations((prevValue) => {
        return [...prevValue, { name: `Create new note ${tempKey}`, function: () => NoteOperation(tempKey), async: true }];
      })
      return ({
        ...prevValue, notes: [...prevValue.notes, {
          _id: tempKey,
          tempid: true,
          title: "New Note",
          text: "",
          color: "transparent"
        }]
      });

    })
  }

  return (
    <AppContext.Provider value={{ userData, setUserData, operations, setOperations }}>
      <Operations />
      <div className="flex flex-col min-h-screen">
        <Header></Header>
        <main className="flex-grow pb-32 bg-neutral-900 ">
          <NoteContainer usernotes={userData.notes} />
          <div className="fixed bottom-0 right-0 w-15 h-15 pr-4 pb-16  ">
            <button onClick={() => CreateNewNote()} className="w-12 h-12 text-lg font-bold bg-blue-500 hover:bg-blue-600 text-white rounded-full flex items-center justify-center shadow-md">+
            </button>
          </div>
        </main>

        <Footer></Footer>
      </div>
    </AppContext.Provider>
  );

  
};

export default App;
