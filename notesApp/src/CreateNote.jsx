import { useState } from 'react'


function CreateNote() {
  const [title,setTitle]=useState("");
  const [des,setDes]=useState("");
   return(
    <>
      <h1>My Notes App</h1>
      <input  placeholder="Enter Title" onChange={(t) => setTitle(t.target.value)} />  <br></br > <br></br >
      <input placeholder="Enter Description" onChange={(d) => setDes(d.target.value)} /> <br></br > <br></br >
      <button> ADD Note </button> <br></br > <br></br >
      <button> Delete Note </button>  <br></br >
    </>
  )  
}

export default CreateNote
