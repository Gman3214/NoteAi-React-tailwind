// Dependencies
import React, {useState} from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import NoteContainer from "./Components/NoteContainer";
import AppContext from "./AppContext";
// Styles
import "./tailwind.output.css"
import "./tailwind.css";


const defaultNotes = [
  {
    id: "0",
    title: "title1",
    text: "text1 ftw",
    color: "transparent"
  },
  {
    id: "1",
    title: "title2",
    text: "text2 ftw",
    color: "transparent"
  },
  
  
]

const App = () => {

  const [userData, setUserData] = useState({
    username: "ram",
    profilePicture: "",
    gptApiKey: "test",
    gptVersion: "test",
    notes: defaultNotes
  });

  const CreateNewNote = () => {
    setUserData((prevValue) => {
      const usedKeys = {}
      let newKey = null
      for (const note of prevValue.notes){
        usedKeys[note.id] = true;
      }
      for(let i = 0; i < Object.keys(usedKeys).length + 1; i++){
        if (usedKeys[i] === false || !usedKeys[i]){
          newKey = i + ""
        }
      }

      return({...prevValue, notes: [...prevValue.notes, {
        id: newKey,
        title: "New Note",
        text: "",
        color: "transparent"
    }]
  });

  })}

  return (
    <AppContext.Provider value={{userData, setUserData}}>
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
